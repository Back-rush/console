import type { LayoutLoad } from './$types';
import Breadcrumbs from './breadcrumbs.svelte';
import Header from './header.svelte';
import { sdk } from '$lib/stores/sdk';
import { Dependencies } from '$lib/constants';
import { error } from '@sveltejs/kit';

export const load: LayoutLoad = async ({ params, depends }) => {
    depends(Dependencies.MESSAGING_TOPIC);

    const response = await sdk.forProject.client.call(
        'GET',
        new URL(sdk.forProject.client.config.endpoint + '/messaging/topics/' + params.topic),
        {
            'X-Appwrite-Project': sdk.forProject.client.config.project,
            'content-type': 'application/json',
            'X-Appwrite-Mode': 'admin'
        }
    );

    try {
        return {
            header: Header,
            breadcrumbs: Breadcrumbs,
            topic: response
        };
    } catch (e) {
        throw error(e.code, e.message);
    }
};
