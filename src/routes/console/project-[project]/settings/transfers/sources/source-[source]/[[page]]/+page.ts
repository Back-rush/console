import { Query } from '@aw-labs/appwrite-console';
import { sdkForProject } from '$lib/stores/sdk';
import { pageToOffset } from '$lib/helpers/load';
import { Dependencies, PAGE_LIMIT } from '$lib/constants';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent, depends }) => {
    depends(Dependencies.DESTINATIONS);
    await parent();
    const page = Number(params.page);
    const offset = pageToOffset(page, PAGE_LIMIT);

    return {
        offset,
        transfers: await sdkForProject.transfers.list([
            Query.limit(PAGE_LIMIT),
            Query.offset(offset),
            Query.orderDesc('$createdAt')
        ])
    };
};
