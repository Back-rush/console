import { Query } from '@appwrite.io/console';
import { sdk } from '$lib/stores/sdk';
import { getLimit, getPage, getQuery, pageToOffset } from '$lib/helpers/load';
import { Dependencies, PAGE_LIMIT } from '$lib/constants';
import type { PageLoad } from './$types';
import { queries, queryParamToMap } from '$lib/components/filters';

export const load: PageLoad = async ({ params, depends, url, route, parent }) => {
    const data = await parent();
    depends(Dependencies.DEPLOYMENTS);
    const page = getPage(url);
    const limit = getLimit(url, route, PAGE_LIMIT);
    const offset = pageToOffset(page, limit);
    const query = getQuery(url);

    const parsedQueries = queryParamToMap(query || '[]');
    queries.set(parsedQueries);
    return {
        offset,
        limit,
        query,
        activeDeployment: data.site.deploymentId
            ? await sdk.forProject.sites.getDeployment(params.site, data.site.deploymentId)
            : null,
        deploymentList: await sdk.forProject.sites.listDeployments(params.site, [
            Query.limit(limit),
            Query.offset(offset),
            Query.orderDesc(''),
            ...parsedQueries.values()
        ])
    };
};
