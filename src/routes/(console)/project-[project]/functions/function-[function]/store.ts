import { page } from '$app/stores';
import { derived, writable, type Writable } from 'svelte/store';
import type { Models } from '@appwrite.io/console';
import type { Column } from '$lib/helpers/types';

export const func = derived(page, ($page) => $page.data.function as Models.Function);
export const deploymentList = derived(
    page,
    ($page) => $page.data.deploymentList as Models.DeploymentList
);
export const proxyRuleList = derived(
    page,
    ($page) => $page.data.proxyRuleList as Models.ProxyRuleList
);

export const repositories: Writable<{
    search: string;
    installationId: string;
    repositories: Models.ProviderRepository[];
}> = writable({
    search: '',
    installationId: '',
    repositories: []
});

export const showCreateDeployment: Writable<boolean> = writable(false);

export const columns = writable<Column[]>([
    { id: '$id', title: 'Deployment ID', type: 'string', show: true, width: 150 },
    {
        id: 'status',
        title: 'Status',
        type: 'enum',
        show: true,
        width: 110,
        array: true,
        format: 'enum',
        elements: ['ready', 'processing', 'building', 'waiting', 'cancelled', 'failed'],
        filter: false
    },
    {
        id: 'type',
        title: 'Source',
        type: 'string',
        show: true,
        width: 90,
        array: true,
        format: 'enum',
        elements: [
            { value: 'manual', label: 'Manual' },
            { value: 'cli', label: 'CLI' },
            { value: 'vcs', label: 'Git' }
        ]
    },
    {
        id: '$updatedAt',
        title: 'Updated',
        type: 'datetime',
        show: true,
        width: 150,
        format: 'datetime'
    },
    {
        id: 'buildTime',
        title: 'Build time',
        type: 'integer',
        show: true,
        width: 90,
        elements: [
            {
                value: 15,
                label: 'more than 15 seconds'
            },
            {
                value: 60,
                label: 'more than 1 minute'
            },
            {
                value: 5 * 60,
                label: 'more than 5 minutes'
            }
        ],
        filter: false
    },
    {
        id: 'size',
        title: 'Source size',
        type: 'integer',
        show: true,
        width: 140,
        elements: [
            {
                value: 2 * 1000 * 1000,
                label: 'more than 2MB'
            },
            {
                value: 10 * 1000 * 1000,
                label: 'more than 10MB'
            },
            {
                value: 50 * 1000 * 1000,
                label: 'more than 50MB'
            }
        ]
    },
    {
        id: 'buildSize',
        title: 'Build size',
        type: 'integer',
        show: false,
        filter: false,
        width: 80
    }
]);
