import { Query } from '@appwrite.io/console';
import { sdk } from '$lib/stores/sdk';
import { getLimit, getPage, pageToOffset } from '$lib/helpers/load';
import { Dependencies, PAGE_LIMIT } from '$lib/constants';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, depends, url, route, parent }) => {
    const data = await parent();
    depends(Dependencies.DEPLOYMENTS);
    const page = getPage(url);
    const limit = getLimit(url, route, PAGE_LIMIT);
    const offset = pageToOffset(page, limit);

    return {
        offset,
        limit,
        activeDeployment: data.function.deployment
            ? await sdk.forProject.functions.getDeployment(
                  params.function,
                  data.function.deployment
              )
            : null,
        deploymentList: await sdk.forProject.functions.listDeployments(params.function, [
            Query.limit(limit),
            Query.offset(offset),
            Query.orderDesc('')
        ])
    };
};
