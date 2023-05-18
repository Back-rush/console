import type { Models } from '@appwrite.io/console';
import { sdk } from '$lib/stores/sdk';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const response = await sdk.forProject.databases.getDatabaseUsage(
        params.database,
        params.period ?? '30d'
    );

    return {
        count: response.collectionsCount as unknown as Models.Metric[],
        created: response.collectionsCreate as unknown as Models.Metric[],
        read: response.collectionsRead as unknown as Models.Metric[],
        updated: response.collectionsUpdate as unknown as Models.Metric[],
        deleted: response.collectionsDelete as unknown as Models.Metric[]
    };
};
