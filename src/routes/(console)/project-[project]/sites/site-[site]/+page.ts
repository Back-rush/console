import { sdk } from '$lib/stores/sdk';
import { Dependencies } from '$lib/constants';
import { Query } from '@appwrite.io/console';
import { RuleType } from '$lib/stores/sdk';
import { DeploymentResourceType } from '$lib/stores/sdk';

export const load = async ({ params, depends, parent }) => {
    depends(Dependencies.SITE);
    depends(Dependencies.SITES_DOMAINS);
    const { site } = await parent();

    const [deploymentList, prodReadyDeployments, proxyRuleList] = await Promise.all([
        sdk.forProject.sites.listDeployments(params.site, [Query.limit(4), Query.orderDesc('')]),
        sdk.forProject.sites.listDeployments(params.site, [
            Query.equal('status', 'ready'),
            Query.equal('activate', true)
        ]),
        sdk.forProject.proxy.listRules([
            Query.equal('type', RuleType.DEPLOYMENT),
            Query.equal('deploymentResourceType', DeploymentResourceType.SITE),
            Query.equal('deploymentResourceId', site.$id),
            Query.equal('deploymentId', site.deploymentId)
        ])
    ]);
    return {
        site,
        deploymentList,
        deployment: deploymentList?.total
            ? await sdk.forProject.sites.getDeployment(params.site, site.deploymentId)
            : null,
        proxyRuleList,
        hasProdReadyDeployments: prodReadyDeployments?.deployments?.length > 0
    };
};
