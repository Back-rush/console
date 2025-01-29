import type { Column } from '$lib/helpers/types';
import { Framework, type Models } from '@appwrite.io/console';

import { writable } from 'svelte/store';

export function getEnumFromModel(model: Models.Framework): Framework {
    return Framework[model.name];
}

export const columns = writable<Column[]>([
    { id: 'name', title: 'Name', type: 'string', show: true, width: 100 },
    // { id: 'domains', title: 'Domains', type: 'string', show: true, width: 120 },
    { id: '$updatedAt', title: 'Updated', type: 'datetime', show: true, width: 120 },
    { id: '$createdAt', title: 'Created', type: 'datetime', show: true, width: 120 }
]);

export function getFrameworkIcon(framework: string) {
    switch (true) {
        case framework.toLocaleLowerCase().includes('sveltekit'):
            return 'svelte';
        case framework.toLocaleLowerCase().includes('nuxt'):
            return 'nuxt';
        case framework.toLocaleLowerCase().includes('vue'):
            return 'vue';
        case framework.toLocaleLowerCase().includes('react'):
            return 'react';
        case framework.toLocaleLowerCase().includes('angular'):
            return 'angular';
        case framework.toLocaleLowerCase().includes('svelte'):
            return 'svelte';
        case framework.toLocaleLowerCase().includes('next'):
            return 'nextjs';
        case framework.toLocaleLowerCase().includes('astro'):
            return 'astro';
        case framework.toLocaleLowerCase().includes('remix'):
            return 'remix';

        default:
            return framework.toLocaleLowerCase();
    }
}
