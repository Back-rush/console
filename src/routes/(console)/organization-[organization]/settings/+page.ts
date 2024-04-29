import type { PageLoad } from './$types';
import { Dependencies } from '$lib/constants';
import { sdk } from '$lib/stores/sdk';
import { Query } from '@appwrite.io/console';
import { isCloud } from '$lib/system';

export const load: PageLoad = async ({ depends, parent }) => {
    const { organization } = await parent();
    depends(Dependencies.ORGANIZATION);

    return {
        projects: await sdk.forConsole.projects.list([Query.equal('teamId', organization.$id)]),
        invoices: isCloud ? await sdk.forConsole.billing.listInvoices(organization.$id) : undefined
    };
};
