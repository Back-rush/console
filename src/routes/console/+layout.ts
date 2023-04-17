import { sdk } from '$lib/stores/sdk';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
    const response = await fetch(`${sdk.forConsole.client.config.endpoint}/health/version`);
    const data = await response.json();

    return {
        version: data?.version ?? null
    };
};
