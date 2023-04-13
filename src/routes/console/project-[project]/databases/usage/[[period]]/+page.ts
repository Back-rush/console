import type { Models } from '@appwrite.io/console';
import { sdk } from '$lib/stores/sdk';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
    const { period } = params;
    try {
        const response = await sdk.forProject.databases.getUsage(period ?? '30d');
        return {
            count: response.databasesCount as unknown as Models.Metric[],
            created: response.databasesCreate as unknown as Models.Metric[],
            read: response.databasesRead as unknown as Models.Metric[],
            updated: response.databasesUpdate as unknown as Models.Metric[],
            deleted: response.databasesDelete as unknown as Models.Metric[]
        };
    } catch (e) {
        throw error(e.code, e.message);
    }
};
