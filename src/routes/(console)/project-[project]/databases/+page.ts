import { CARD_LIMIT, Dependencies } from '$lib/constants';
import { getLimit, getPage, getView, pageToOffset, View } from '$lib/helpers/load';
import { sdk } from '$lib/stores/sdk';
import { type Models, Query } from '@appwrite.io/console';
import { timeFromNow } from '$lib/helpers/date';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url, route, depends }) => {
    depends(Dependencies.DATABASES);

    const page = getPage(url);
    const limit = getLimit(url, route, CARD_LIMIT);
    const view = getView(url, route, View.Grid);
    const offset = pageToOffset(page, limit);

    const { databases, policies, lastBackups } = await fetchDatabasesAndBackups(limit, offset);

    return {
        offset,
        limit,
        view,
        policies,
        databases,
        lastBackups
    };
};

// TODO: @itznotabug we should improve this!
async function fetchDatabasesAndBackups(limit: number, offset: number) {
    const databases = await sdk.forProject.databases.list([
        Query.limit(limit),
        Query.offset(offset),
        Query.orderDesc('')
    ]);

    const policies = await fetchPolicies(databases);
    const lastBackups = await fetchLastBackups(databases);

    return { databases, policies, lastBackups };
}

async function fetchPolicies(databases: Models.DatabaseList) {
    const databasePolicies: Record<string, Models.BackupPolicy[]> = {};

    await Promise.all(
        databases.databases.map(async (database) => {
            try {
                const { policies } = await sdk.forProject.backups.listPolicies([
                    Query.limit(3), // not all fit in the table so 3 should be enough.
                    Query.equal('resourceId', database.$id)
                ]);

                if (policies.length > 0) {
                    databasePolicies[database.$id] = policies;
                }
            } catch (e) {
                // ignore
            }
        })
    );

    return databasePolicies;
}

async function fetchLastBackups(databases: Models.DatabaseList) {
    const lastBackups: Record<string, string> = {};

    await Promise.all(
        databases.databases.map(async (database) => {
            try {
                const { archives } = await sdk.forProject.backups.listArchives([
                    Query.limit(1),
                    Query.orderDesc('$createdAt'),
                    Query.equal('resourceId', database.$id)
                ]);

                if (archives.length > 0) {
                    lastBackups[database.$id] = timeFromNow(archives[0].$createdAt);
                }
            } catch (e) {
                // ignore
            }
        })
    );

    return lastBackups;
}
