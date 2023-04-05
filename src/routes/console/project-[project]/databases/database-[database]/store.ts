import { page } from '$app/stores';
import type { Column } from '$lib/components/viewSelector.svelte';
import type { Models } from '@appwrite.io/console';
import { derived, writable } from 'svelte/store';

export const database = derived(page, ($page) => $page.data.database as Models.Database);
export const showCreate = writable(false);

export const columns = writable<Column[]>([
    { id: '$id', title: 'Collection ID', show: true, width: 150 },
    { id: 'name', title: 'Name', show: true, width: 120 },
    { id: '$createdAt', title: 'Created', show: true, width: 120 },
    { id: '$updatedAt', title: 'Updated', show: true, width: 120 }
]);
