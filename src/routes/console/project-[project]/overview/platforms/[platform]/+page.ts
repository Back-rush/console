import Header from './header.svelte';
import Breadcrumbs from './breadcrumbs.svelte';
import { sdkForConsole } from '$lib/stores/sdk';
import { Dependencies } from '$lib/constants';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, depends }) => {
    depends(Dependencies.PROJECT);

    return {
        header: Header,
        breadcrumbs: Breadcrumbs,
        platform: await sdkForConsole.projects.getPlatform(params.project, params.platform)
    };
};
