import type { LayoutLoad } from './$types';
import Breadcrumbs from './breadcrumbs.svelte';
import Header from './header.svelte';
import { sdk } from '$lib/stores/sdk';
import { Dependencies } from '$lib/constants';
import { error } from '@sveltejs/kit';

export const load: LayoutLoad = async ({ params, depends }) => {
    depends(Dependencies.USER);

    try {
        return {
            header: Header,
            breadcrumbs: Breadcrumbs,
            user: await sdk.forProject.users.get(params.user),
            userFactors: await sdk.forProject.users.listMfaFactors(params.user)
        };
    } catch (e) {
        error(e.code, e.message);
    }
};
