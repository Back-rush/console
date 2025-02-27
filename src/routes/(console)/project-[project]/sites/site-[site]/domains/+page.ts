import { Query } from '@appwrite.io/console';
import { sdk } from '$lib/stores/sdk';
import { getLimit, getPage, getQuery, getSearch, pageToOffset } from '$lib/helpers/load';
import { Dependencies, PAGE_LIMIT } from '$lib/constants';
import { queries, queryParamToMap } from '$lib/components/filters';
import { RuleType } from '$lib/stores/sdk';

export const load = async ({ params, depends, url, route }) => {
    depends(Dependencies.SITES_DOMAINS);
    const page = getPage(url);
    const limit = getLimit(url, route, PAGE_LIMIT);
    const offset = pageToOffset(page, limit);
    const query = getQuery(url);
    const search = getSearch(url);

    const parsedQueries = queryParamToMap(query || '[]');
    queries.set(parsedQueries);

    return {
        offset,
        limit,
        query,
        search,
        domains: await sdk.forProject.proxy.listRules(
            [
                Query.equal('type', RuleType.DEPLOYMENT),
                Query.equal('automation', `site=${params.site}`),
                Query.limit(limit),
                Query.offset(offset),
                Query.orderDesc(''),
                ...parsedQueries.values()
            ],
            search || undefined
        )
    };
};
