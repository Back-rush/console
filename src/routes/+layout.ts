import '@appwrite.io/pink';
import '@appwrite.io/pink-icons';
import 'tippy.js/dist/tippy.css';
import { sdk } from '$lib/stores/sdk';
import { redirect } from '@sveltejs/kit';
import { Dependencies } from '$lib/constants';
import type { LayoutLoad } from './$types';
import { redirectTo } from './store';

export const ssr = false;

export const load: LayoutLoad = async ({ depends, url }) => {
    depends(Dependencies.ACCOUNT);

    if (url.searchParams.has('forceRedirect')) {
        redirectTo.set(url.searchParams.get('forceRedirect') || null);
        url.searchParams.delete('forceRedirect');
    }

    try {
        const account = await sdk.forConsole.account.get<{ organization?: string }>();

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
            '/hackathon'
        ];

        if (!acceptedRoutes.some((n) => url.pathname.startsWith(n))) {
            const redirectUrl =
                url.pathname && url.pathname !== '/' ? `redirect=${url.pathname}` : '';
            const path = url.search ? `${url.search}&${redirectUrl}` : `?${redirectUrl}`;
            redirect(303, `/login${path}`);
        }
    }
};
