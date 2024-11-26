import { AppwriteException, Client, type Payload } from '@appwrite.io/console';

export type BackupPolicyList = {
    total: number;
    policies: BackupPolicy[];
};

export type BackupArchiveList = {
    total: number;
    archives: BackupArchive[];
};

export type BackupRestorationList = {
    total: number;
    restorations: BackupRestoration[];
};

export type BackupPolicy = {
    $id: string;
    name: string;
    $createdAt: string;
    $updatedAt: string;
    services: string[];
    resources: string[];
    resourceId?: string;
    resourceType?: string;
    retention: number;
    schedule: string;
    enabled: boolean;
};

export type BackupArchive = {
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    policyId: string;
    size: number;
    status: string;
    startedAt: string;
    migrationId: string;
    services: string[];
    resources: string[];
    resourceId?: string;
    resourceType?: string;
};

export type BackupRestoration = {
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    archiveId: string;
    policyId: string;
    status: string;
    startedAt: string;
    migrationId: string;
    services: string[];
    resources: string[];
    options: string;
};

export class Backups {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async createArchive(services: string[], resourceId?: string): Promise<BackupArchive> {
        if (typeof services === 'undefined') {
            throw new AppwriteException('Missing required parameter: "services"');
        }
        const apiPath = '/backups/archives';
        const payload: Payload = {};
        if (typeof services !== 'undefined') {
            payload['services'] = services;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json'
        };

        return await this.client.call('post', uri, apiHeaders, payload);
    }

    async deleteArchive(archiveId: string): Promise<object> {
        if (typeof archiveId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "archiveId"');
        }
        const apiPath = '/backups/archives/{archiveId}'.replace('{archiveId}', archiveId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json'
        };

        return await this.client.call('delete', uri, apiHeaders, payload);
    }

    async listArchives(queries?: string[]): Promise<BackupArchiveList> {
        const apiPath = '/backups/archives';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json'
        };

        return await this.client.call('get', uri, apiHeaders, payload);
    }

    async getArchive(archiveId: string): Promise<BackupArchive> {
        if (typeof archiveId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "archiveId"');
        }
        const apiPath = '/backups/archives/{archiveId}'.replace('{archiveId}', archiveId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json'
        };

        return await this.client.call('get', uri, apiHeaders, payload);
    }

    async listPolicies(queries?: string[]): Promise<BackupPolicyList> {
        const apiPath = '/backups/policies';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json'
        };

        return await this.client.call('get', uri, apiHeaders, payload);
    }

    async createPolicy(
        policyId: string,
        services: string[],
        retention: number,
        schedule: string,
        name?: string,
        resourceId?: string,
        enabled?: boolean
    ): Promise<BackupPolicy> {
        if (typeof policyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "policyId"');
        }
        if (typeof services === 'undefined') {
            throw new AppwriteException('Missing required parameter: "services"');
        }
        if (typeof retention === 'undefined') {
            throw new AppwriteException('Missing required parameter: "retention"');
        }
        if (typeof schedule === 'undefined') {
            throw new AppwriteException('Missing required parameter: "schedule"');
        }
        const apiPath = '/backups/policies';
        const payload: Payload = {};
        if (typeof policyId !== 'undefined') {
            payload['policyId'] = policyId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof services !== 'undefined') {
            payload['services'] = services;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof retention !== 'undefined') {
            payload['retention'] = retention;
        }
        if (typeof schedule !== 'undefined') {
            payload['schedule'] = schedule;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json'
        };

        return await this.client.call('post', uri, apiHeaders, payload);
    }

    async getPolicy(policyId: string): Promise<BackupPolicy> {
        if (typeof policyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "policyId"');
        }
        const apiPath = '/backups/policies/{policyId}'.replace('{policyId}', policyId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json'
        };

        return await this.client.call('get', uri, apiHeaders, payload);
    }

    async updatePolicy(
        policyId: string,
        name?: string,
        retention?: number,
        schedule?: string,
        enabled?: boolean
    ): Promise<BackupPolicy> {
        if (typeof policyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "policyId"');
        }
        const apiPath = '/backups/policies/{policyId}'.replace('{policyId}', policyId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof retention !== 'undefined') {
            payload['retention'] = retention;
        }
        if (typeof schedule !== 'undefined') {
            payload['schedule'] = schedule;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json'
        };

        return await this.client.call('patch', uri, apiHeaders, payload);
    }

    async deletePolicy(policyId: string): Promise<object> {
        if (typeof policyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "policyId"');
        }
        const apiPath = '/backups/policies/{policyId}'.replace('{policyId}', policyId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json'
        };

        return await this.client.call('delete', uri, apiHeaders, payload);
    }

    async createRestoration(
        archiveId: string,
        services: string[],
        newResourceId?: string,
        newResourceName?: string
    ): Promise<BackupRestoration> {
        if (typeof archiveId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "archiveId"');
        }
        if (typeof services === 'undefined') {
            throw new AppwriteException('Missing required parameter: "services"');
        }
        const apiPath = '/backups/restoration';
        const payload: Payload = {};
        if (typeof archiveId !== 'undefined') {
            payload['archiveId'] = archiveId;
        }
        if (typeof services !== 'undefined') {
            payload['services'] = services;
        }
        if (typeof newResourceId !== 'undefined') {
            payload['newResourceId'] = newResourceId;
        }
        if (typeof newResourceName !== 'undefined') {
            payload['newResourceName'] = newResourceName;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json'
        };

        return await this.client.call('post', uri, apiHeaders, payload);
    }

    async listRestorations(queries?: string[]): Promise<BackupRestorationList> {
        const apiPath = '/backups/restorations';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json'
        };

        return await this.client.call('get', uri, apiHeaders, payload);
    }

    async getRestoration(restorationId: string): Promise<BackupArchive> {
        if (typeof restorationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "restorationId"');
        }
        const apiPath = '/backups/restorations/{restorationId}'.replace(
            '{restorationId}',
            restorationId
        );
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json'
        };

        return await this.client.call('get', uri, apiHeaders, payload);
    }
}
