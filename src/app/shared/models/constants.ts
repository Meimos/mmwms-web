import { STColumnBadge } from '@delon/abc/st/table';

export const Constants = {
  serverErrorCode: {
    general: 2,
    authentication: 10,
    jwtTokenExpired: 11,
    tenantTrialExpired: 12,
    credentialsExpired: 15,
    permissionDenied: 20,
    invalidArguments: 30,
    badRequestParams: 31,
    itemNotFound: 32,
    tooManyRequests: 33,
    tooManyUpdates: 34,
  },
  entryPoints: {
    login: '/api/auth/login',
    tokenRefresh: '/api/auth/token',
    nonTokenBased: '/api/noauth',
  },
};

const helpBaseUrl = 'https://meimos.com';

export const HelpLinks = {
  linksMap: {
    outgoingMailSettings: helpBaseUrl + '/docs/user-guide/ui/mail-settings',
    securitySettings: helpBaseUrl + '/docs/user-guide/ui/security-settings',
    ruleEngine: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/overview/',
    ruleNodeCheckRelation: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/filter-nodes/#check-relation-filter-node',
    ruleNodeCheckExistenceFields: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/filter-nodes/#check-existence-fields-node',
    ruleNodeJsFilter: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/filter-nodes/#script-filter-node',
    ruleNodeJsSwitch: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/filter-nodes/#switch-node',
    ruleNodeMessageTypeFilter: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/filter-nodes/#message-type-filter-node',
    ruleNodeMessageTypeSwitch: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/filter-nodes/#message-type-switch-node',
    ruleNodeOriginatorTypeFilter: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/filter-nodes/#originator-type-filter-node',
    ruleNodeOriginatorTypeSwitch: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/filter-nodes/#originator-type-switch-node',
    ruleNodeOriginatorAttributes: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/enrichment-nodes/#originator-attributes',
    ruleNodeOriginatorFields: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/enrichment-nodes/#originator-fields',
    ruleNodeCustomerAttributes: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/enrichment-nodes/#customer-attributes',
    ruleNodeDeviceAttributes: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/enrichment-nodes/#device-attributes',
    ruleNodeRelatedAttributes: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/enrichment-nodes/#related-attributes',
    ruleNodeTenantAttributes: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/enrichment-nodes/#tenant-attributes',
    ruleNodeChangeOriginator: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/transformation-nodes/#change-originator',
    ruleNodeTransformMsg: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/transformation-nodes/#script-transformation-node',
    ruleNodeMsgToEmail: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/transformation-nodes/#to-email-node',
    ruleNodeClearAlarm: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/action-nodes/#clear-alarm-node',
    ruleNodeCreateAlarm: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/action-nodes/#create-alarm-node',
    ruleNodeMsgDelay: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/action-nodes/#delay-node',
    ruleNodeMsgGenerator: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/action-nodes/#generator-node',
    ruleNodeLog: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/action-nodes/#log-node',
    ruleNodeRpcCallReply: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/action-nodes/#rpc-call-reply-node',
    ruleNodeRpcCallRequest: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/action-nodes/#rpc-call-request-node',
    ruleNodeSaveAttributes: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/action-nodes/#save-attributes-node',
    ruleNodeSaveTimeseries: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/action-nodes/#save-timeseries-node',
    ruleNodeRuleChain: helpBaseUrl + '/docs/user-guide/ui/rule-chains/',
    ruleNodeAwsSns: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/external-nodes/#aws-sns-node',
    ruleNodeAwsSqs: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/external-nodes/#aws-sqs-node',
    ruleNodeKafka: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/external-nodes/#kafka-node',
    ruleNodeMqtt: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/external-nodes/#mqtt-node',
    ruleNodeRabbitMq: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/external-nodes/#rabbitmq-node',
    ruleNodeRestApiCall: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/external-nodes/#rest-api-call-node',
    ruleNodeSendEmail: helpBaseUrl + '/docs/user-guide/rule-engine-2-0/external-nodes/#send-email-node',
    tenants: helpBaseUrl + '/docs/user-guide/ui/tenants',
    customers: helpBaseUrl + '/docs/user-guide/customers',
    users: helpBaseUrl + '/docs/user-guide/ui/users',
    devices: helpBaseUrl + '/docs/user-guide/ui/devices',
    assets: helpBaseUrl + '/docs/user-guide/ui/assets',
    entityViews: helpBaseUrl + '/docs/user-guide/ui/entity-views',
    entitiesImport: helpBaseUrl + '/docs/user-guide/bulk-provisioning',
    rulechains: helpBaseUrl + '/docs/user-guide/ui/rule-chains',
    dashboards: helpBaseUrl + '/docs/user-guide/ui/dashboards',
    widgetsBundles: helpBaseUrl + '/docs/user-guide/ui/widget-library#bundles',
    widgetsConfig: helpBaseUrl + '/docs/user-guide/ui/dashboards#widget-configuration',
    widgetsConfigTimeseries: helpBaseUrl + '/docs/user-guide/ui/dashboards#timeseries',
    widgetsConfigLatest: helpBaseUrl + '/docs/user-guide/ui/dashboards#latest',
    widgetsConfigRpc: helpBaseUrl + '/docs/user-guide/ui/dashboards#rpc',
    widgetsConfigAlarm: helpBaseUrl + '/docs/user-guide/ui/dashboards#alarm',
    widgetsConfigStatic: helpBaseUrl + '/docs/user-guide/ui/dashboards#static',
  },
};

/**
 * Badge enums
 */
export enum BadgeType {
  USER_BADGE = 'USER_BADGE',
}

export const badgeMap = new Map<BadgeType, STColumnBadge>([
  [
    BadgeType.USER_BADGE,
    {
      1: { text: '失效', color: 'error' },
      0: { text: '生效', color: 'processing' },
    },
  ],
]);

/**
 * Dict enums
 */
export interface DictTypeData {
  label: string;
  value: string;
}

export enum DictType {
  SEX = 'SEX',
  USER_STATUS = 'USER_STATUS',
}

export const dictMap = new Map<DictType, DictTypeData[]>([
  [
    DictType.SEX,
    [
      {
        label: '男',
        value: '0',
      },
      {
        label: '女',
        value: '1',
      },
      {
        label: '未知',
        value: '2',
      },
    ],
  ],
  [
    DictType.USER_STATUS,
    [
      {
        label: '生效',
        value: '0',
      },
      {
        label: '失效',
        value: '1',
      },
    ],
  ],
]);

export const customTranslationsPrefix = 'custom.';
