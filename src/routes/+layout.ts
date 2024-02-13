import '@appwrite.io/pink';
import '@appwrite.io/pink-icons';
import 'tippy.js/dist/tippy.css';
import LogRocket from 'logrocket';
import { sdk } from '$lib/stores/sdk';
import { redirect } from '@sveltejs/kit';
import { Dependencies } from '$lib/constants';
import type { LayoutLoad } from './$types';
import { redirectTo } from './store';

export const ssr = false;

export const load: LayoutLoad = async ({ depends, url }) => {
    depends(Dependencies.ACCOUNT);

    redirectTo.set(url.searchParams.get('forceRedirect') || null);

    url.searchParams.delete('forceRedirect');

    try {
        const account = await sdk.forConsole.account.get<{ organization?: string }>();

        LogRocket.identify(account.$id, {
            name: account.name,
            email: account.email
        });

        return {
            account,
            organizations: await sdk.forConsole.teams.list()
        };
    } catch (error) {
        const acceptedRoutes = [
            '/login',
            '/register',
            '/recover',
            '/invite',
            '/auth/magic-url',
            '/auth/oauth2/success',
            '/auth/oauth2/failure',
            '/card',
            '/hackathon',
            '/mfa'
        ];

        const redirectUrl = url.pathname && url.pathname !== '/' ? `redirect=${url.pathname}` : '';
        const path = url.search ? `${url.search}&${redirectUrl}` : `?${redirectUrl}`;

        if (error.type === 'user_more_factors_required') {
            if (url.pathname === '/mfa') return;
            redirect(303, `/mfa${path}`);
        }

        if (!acceptedRoutes.some((n) => url.pathname.startsWith(n))) {
            redirect(303, `/login${path}`);
        }
    }
};
