import { Query } from '@aw-labs/appwrite-console';
import { sdkForConsole } from '$lib/stores/sdk';
import { pageToOffset } from '$lib/helpers/load';
import { CARD_LIMIT, PAGE_LIMIT } from '$lib/constants';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const page = Number(params.page);
    const offset = pageToOffset(page, PAGE_LIMIT);

    return {
        offset,
        projects: await sdkForConsole.projects.list([
            Query.offset(offset),
            Query.limit(CARD_LIMIT),
            Query.equal('teamId', params.organization),
            Query.orderDesc('$createdAt')
        ])
    };
};
