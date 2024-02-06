export const PAGE_LIMIT = 12; // default page limit
export const CARD_LIMIT = 6; // default card limit
export const INTERVAL = 5 * 60000; // default interval to check for feedback

export enum Dependencies {
    CREDIT = 'dependency:credit',
    INVOICES = 'dependency:invoices',
    ADDRESS = 'dependency:address',
    PAYMENT_METHODS = 'dependency:paymentMethods',
    ORGANIZATION = 'dependency:organization',
    MEMBERS = 'dependency:members',
    PROJECT = 'dependency:project',
    PROJECT_VARIABLES = 'dependency:project_variables',
    PROJECT_INSTALLATIONS = 'dependency:project_installations',
    PROJECTS = 'dependency:projects',
    ACCOUNT = 'dependency:account',
    ACCOUNT_SESSIONS = 'dependency:account_sessions',
    USER = 'dependency:user',
    USERS = 'dependency:users',
    USER_TARGETS = 'dependency:user_targets',
    SESSIONS = 'dependency:sessions',
    TEAM = 'dependency:team',
    TEAMS = 'dependency:teams',
    MEMBERSHIPS = 'dependency:memberships',
    DATABASE = 'dependency:database',
    DATABASES = 'dependency:databases',
    COLLECTION = 'dependency:collection',
    DOCUMENT = 'dependency:document',
    DOCUMENTS = 'dependency:documents',
    BUCKET = 'dependency:bucket',
    FILE = 'dependency:file',
    FILES = 'dependency:files',
    FUNCTION = 'dependency:function',
    FUNCTION_DOMAINS = 'dependency:function_domains',
    FUNCTION_INSTALLATIONS = 'dependency:function_installations',
    FUNCTIONS = 'dependency:functions',
    VARIABLES = 'dependency:variables',
    DEPLOYMENT = 'dependency:deployment',
    DEPLOYMENTS = 'dependency:deployments',
    EXECUTIONS = 'dependency:executions',
    PLATFORM = 'dependency:platform',
    PLATFORMS = 'dependency:platforms',
    KEY = 'dependency:key',
    KEYS = 'dependency:keys',
    DOMAINS = 'dependency:domains',
    WEBHOOK = 'dependency:webhook',
    WEBHOOKS = 'dependency:webhooks',
    MIGRATIONS = 'dependency:migrations',
    COLLECTIONS = 'dependency:collections',
    RUNTIMES = 'dependency:runtimes',
    CONSOLE_VARIABLES = 'dependency:console_variables',
    MESSAGING_PROVIDERS = 'dependency:messaging_providers',
    MESSAGING_PROVIDER = 'dependency:messaging_provider',
    MESSAGING_MESSAGE = 'dependency:messaging_message',
    MESSAGING_TOPICS = 'dependency:messaging_topics',
    MESSAGING_TOPIC = 'dependency:messaging_topic',
    MESSAGING_TOPIC_SUBSCRIBERS = 'dependency:messaging_topic_subscribers'
}

export const scopes: {
    scope: string;
    description: string;
    category: string;
}[] = [
    {
        scope: 'users.read',
        description: "Access to read your project's users",
        category: 'Auth'
    },
    {
        scope: 'users.write',
        description: "Access to create, update, and delete your project's users",
        category: 'Auth'
    },
    {
        scope: 'sessions.write',
        description: "Access to create, update and delete your project's sessions",
        category: 'Auth'
    },
    {
        scope: 'accounts.read',
        description: 'Access to read your active account',
        category: 'Auth'
    },
    {
        scope: 'accounts.write',
        description: 'Access to create, update and delete your active account',
        category: 'Auth'
    },
    {
        scope: 'teams.read',
        description: "Access to read your project's teams",
        category: 'Auth'
    },
    {
        scope: 'teams.write',
        description: "Access to create, update, and delete your project's teams",
        category: 'Auth'
    },
    {
        scope: 'databases.read',
        description: "Access to read your project's databases",
        category: 'Database'
    },
    {
        scope: 'databases.write',
        description: "Access to create, update, and delete your project's databases",
        category: 'Database'
    },
    {
        scope: 'collections.read',
        description: "Access to read your project's database collections",
        category: 'Database'
    },
    {
        scope: 'collections.write',
        description: "Access to create, update, and delete your project's database collections",
        category: 'Database'
    },
    {
        scope: 'attributes.read',
        description: "Access to read your project's database collection's attributes",
        category: 'Database'
    },
    {
        scope: 'attributes.write',
        description:
            "Access to create, update, and delete your project's database collection's attributes",
        category: 'Database'
    },
    {
        scope: 'indexes.read',
        description: "Access to read your project's database collection's indexes",
        category: 'Database'
    },
    {
        scope: 'indexes.write',
        description:
            "Access to create, update, and delete your project's database collection's indexes",
        category: 'Database'
    },
    {
        scope: 'documents.read',
        description: "Access to read your project's database documents",
        category: 'Database'
    },
    {
        scope: 'documents.write',
        description: "Access to create, update, and delete your project's database documents",
        category: 'Database'
    },
    {
        scope: 'files.read',
        description: "Access to read your project's storage files and preview images",
        category: 'Storage'
    },
    {
        scope: 'files.write',
        description: "Access to create, update, and delete your project's storage files",
        category: 'Storage'
    },
    {
        scope: 'buckets.read',
        description: "Access to read your project's storage buckets",
        category: 'Storage'
    },
    {
        scope: 'buckets.write',
        description: "Access to create, update, and delete your project's storage buckets",
        category: 'Storage'
    },
    {
        scope: 'functions.read',
        description: "Access to read your project's functions and code deployments",
        category: 'Functions'
    },
    {
        scope: 'functions.write',
        description:
            "Access to create, update, and delete your project's functions and code deployments",
        category: 'Functions'
    },
    {
        scope: 'execution.read',
        description: "Access to read your project's execution logs",
        category: 'Functions'
    },
    {
        scope: 'execution.write',
        description: "Access to execute your project's functions",
        category: 'Functions'
    },
    {
        scope: 'targets.read',
        description: "Access to read your project's messaging targets",
        category: 'Messaging'
    },
    {
        scope: 'targets.write',
        description: "Access to create, update, and delete your project's messaging targets",
        category: 'Messaging'
    },
    {
        scope: 'providers.read',
        description: "Access to read your project's messaging providers",
        category: 'Messaging'
    },
    {
        scope: 'providers.write',
        description: "Access to create, update, and delete your project's messaging providers",
        category: 'Messaging'
    },
    {
        scope: 'messages.read',
        description: "Access to read your project's messages",
        category: 'Messaging'
    },
    {
        scope: 'messages.write',
        description: "Access to create, update, and delete your project's messages",
        category: 'Messaging'
    },
    {
        scope: 'topics.read',
        description: "Access to read your project's messaging topics",
        category: 'Messaging'
    },
    {
        scope: 'topics.write',
        description: "Access to create, update, and delete your project's messaging topics",
        category: 'Messaging'
    },
    {
        scope: 'subscribers.read',
        description: "Access to read your project's messaging topic subscribers",
        category: 'Messaging'
    },
    {
        scope: 'subscribers.write',
        description:
            "Access to create, update, and delete your project's messaging topic subscribers",
        category: 'Messaging'
    },
    {
        scope: 'locale.read',
        description: "Access to access your project's Locale service",
        category: 'Other'
    },
    {
        scope: 'avatars.read',
        description: "Access to access your project's Avatars service",
        category: 'Other'
    },
    {
        scope: 'health.read',
        description: "Access to read your project's health status",
        category: 'Other'
    },
    {
        scope: 'migrations.read',
        description: "Access to read your project's migration status",
        category: 'Other'
    },
    {
        scope: 'migrations.write',
        description: 'Access to create migrations',
        category: 'Other'
    }
];

export type EventService = {
    name: string;
    resources: EventResource[];
    actions?: EventAction[];
};

export type EventResource = {
    name: string;
    actions?: EventAction[];
};

export type EventAction = {
    name: string;
    attributes?: string[];
};

export const eventServices: Array<EventService> = [
    {
        name: 'buckets',
        resources: [
            {
                name: 'files',
                actions: [{ name: 'create' }, { name: 'update' }, { name: 'delete' }]
            }
        ],
        actions: [{ name: 'create' }, { name: 'update' }, { name: 'delete' }]
    },
    {
        name: 'databases',
        resources: [
            {
                name: 'collections',
                actions: [{ name: 'create' }, { name: 'update' }, { name: 'delete' }]
            },
            {
                name: 'documents',
                actions: [{ name: 'create' }, { name: 'update' }, { name: 'delete' }]
            }
        ],
        actions: [{ name: 'create' }, { name: 'update' }, { name: 'delete' }]
    },
    {
        name: 'functions',
        resources: [
            {
                name: 'deployments',
                actions: [{ name: 'create' }, { name: 'update' }, { name: 'delete' }]
            },
            {
                name: 'executions',
                actions: [{ name: 'create' }, { name: 'update' }, { name: 'delete' }]
            }
        ],
        actions: [{ name: 'create' }, { name: 'update' }, { name: 'delete' }]
    },
    {
        name: 'teams',
        resources: [
            {
                name: 'memberships',
                actions: [
                    { name: 'create' },
                    { name: 'update', attributes: ['status'] },
                    { name: 'delete' }
                ]
            }
        ],
        actions: [{ name: 'create' }, { name: 'update' }, { name: 'delete' }]
    },
    {
        name: 'users',
        resources: [
            { name: 'recovery', actions: [{ name: 'create' }, { name: 'delete' }] },
            { name: 'sessions', actions: [{ name: 'create' }, { name: 'delete' }] },
            { name: 'verification', actions: [{ name: 'create' }, { name: 'delete' }] }
        ],
        actions: [
            { name: 'create' },
            { name: 'update', attributes: ['email', 'name', 'password', 'status', 'prefs'] },
            { name: 'delete' }
        ]
    }
];

export const usageRates = {
    'tier-0': [
        {
            id: 'members',
            resource: 'Organization members',
            amount: 1,
            unit: '',
            rate: '$20/member'
        },
        { id: 'bandwith', resource: 'Bandwidth', amount: 10, unit: 'GB', rate: '$0.04/GB' },
        { id: 'storage', resource: 'Storage', amount: 2, unit: 'GB', rate: '$0.025/GB' },
        {
            id: 'executions',
            resource: 'Function executions',
            amount: 750000,
            unit: 'executions',
            rate: '$2/1M executions'
        },
        {
            id: 'users',
            resource: 'Active users',
            amount: 200000,
            unit: 'AU',
            rate: '$0.0012/user'
        },
        {
            id: 'connections',
            resource: 'Concurrent connections',
            amount: 750,
            unit: 'connections',
            rate: '$5/1K connections'
        }
    ],
    'tier-1': [
        {
            id: 'members',
            resource: 'Organization members',
            amount: 'Unlimited',
            unit: '',
            rate: '$20/member'
        },
        { id: 'bandwith', resource: 'Bandwidth', amount: 1, unit: 'TB', rate: '$0.04/GB' },
        { id: 'storage', resource: 'Storage', amount: 150, unit: 'GB', rate: '$0.025/GB' },
        {
            id: 'executions',
            resource: 'Function executions',
            amount: 3500000,
            unit: 'executions',
            rate: '$2/1M executions'
        },
        {
            id: 'users',
            resource: 'Active users',
            amount: 200000,
            unit: 'AU',
            rate: '$0.0012/user'
        },
        {
            id: 'connections',
            resource: 'Concurrent connections',
            amount: 750,
            unit: 'connections',
            rate: '$5/1K connections'
        }
    ],
    'tier-2': [
        {
            id: 'members',
            resource: 'Organization members',
            amount: 'Unlimited',
            unit: '',
            rate: '$20/member'
        },
        { id: 'bandwith', resource: 'Bandwidth', amount: 1, unit: 'TB', rate: '$0.04/GB' },
        { id: 'storage', resource: 'Storage', amount: 150, unit: 'GB', rate: '$0.025/GB' },
        {
            id: 'executions',
            resource: 'Function executions',
            amount: 3500000,
            unit: 'executions',
            rate: '$2/1M executions'
        },
        {
            id: 'users',
            resource: 'Active users',
            amount: 200000,
            unit: 'AU',
            rate: '$0.0012/user'
        },
        {
            id: 'connections',
            resource: 'Concurrent connections',
            amount: 750,
            unit: 'connections',
            rate: '$5/1K connections'
        }
    ]
};

//resources: bandwidth, buckets, file size limit, functions, executions, users,teams,logs, members, platforms, webhooks, databases, connections, messages
export const limitRates = {
    'tier-0': [
        {
            id: 'bandwith',
            amount: 10,
            unit: 'GB'
        },
        {
            id: 'buckets',
            amount: 3,
            unit: ''
        },
        {
            id: 'file-size-limit',
            amount: 1,
            unit: 'MB'
        },
        {
            id: 'storage',
            amount: 5,
            unit: 'GB'
        },
        {
            id: 'functions',
            amount: 1,
            unit: ''
        },
        {
            id: 'executions',
            amount: 750000,
            unit: 'executions'
        },
        {
            id: 'users',
            amount: 200000,
            unit: 'AU'
        },

        {
            id: 'teams',
            amount: 1,
            unit: ''
        },

        {
            id: 'logs',
            amount: 1,
            unit: ''
        },

        {
            id: 'members',
            amount: 1,
            unit: ''
        },
        {
            id: 'platforms',
            amount: 1,
            unit: ''
        },
        {
            id: 'webhooks',
            amount: 1,
            unit: ''
        },
        {
            id: 'databases',
            amount: 1,
            unit: ''
        },
        {
            id: 'connections',
            amount: 1,
            unit: ''
        },
        {
            id: 'messages',
            amount: 1,
            unit: ''
        }
    ],
    'tier-1': [
        {
            id: 'bandwith',
            amount: 10,
            unit: 'GB'
        },
        {
            id: 'buckets',
            amount: 1,
            unit: ''
        },
        {
            id: 'file-size-limit',
            amount: 5,
            unit: 'MB'
        },
        {
            id: 'storage',
            amount: 5,
            unit: 'GB'
        },
        {
            id: 'functions',
            amount: 1,
            unit: ''
        },
        {
            id: 'executions',
            amount: 750000,
            unit: 'executions'
        },
        {
            id: 'users',
            amount: 200000,
            unit: 'AU'
        },

        {
            id: 'teams',
            amount: 1,
            unit: ''
        },
        {
            id: 'logs',
            amount: 1,
            unit: ''
        },
        {
            id: 'members',
            amount: 1,
            unit: ''
        },
        {
            id: 'platforms',
            amount: 1,
            unit: ''
        },
        {
            id: 'webhooks',
            amount: 1,
            unit: ''
        },
        {
            id: 'databases',
            amount: 1,
            unit: ''
        },
        {
            id: 'connections',
            amount: 1,
            unit: ''
        },
        {
            id: 'messages',
            amount: 1,
            unit: ''
        }
    ],
    'tier-2': [
        {
            id: 'bandwith',
            amount: 10,
            unit: 'GB'
        },
        {
            id: 'buckets',
            amount: 1,
            unit: ''
        },
        {
            id: 'file-size-limit',
            amount: 5,
            unit: 'MB'
        },
        {
            id: 'storage',
            amount: 5,
            unit: 'GB'
        },
        {
            id: 'functions',
            amount: 1,
            unit: ''
        },
        {
            id: 'executions',
            amount: 750000,
            unit: 'executions'
        },
        {
            id: 'users',
            amount: 200000,
            unit: 'AU'
        },

        {
            id: 'teams',
            amount: 1,
            unit: ''
        },
        {
            id: 'logs',
            amount: 1,
            unit: ''
        },
        {
            id: 'members',
            amount: 1,
            unit: ''
        },
        {
            id: 'platforms',
            amount: 1,
            unit: ''
        },
        {
            id: 'webhooks',
            amount: 1,
            unit: ''
        },
        {
            id: 'databases',
            amount: 1,
            unit: ''
        },
        {
            id: 'connections',
            amount: 1,
            unit: ''
        },
        {
            id: 'messages',
            amount: 1,
            unit: ''
        }
    ]
};

export enum BillingPlan {
    STARTER = 'tier-0',
    PRO = 'tier-1',
    SCALE = 'tier-2'
}
