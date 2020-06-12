import { SFSchema, SFSelectWidgetSchema, SFStringWidgetSchema } from '@delon/form';
// import { IRole } from './role.model';

export interface IConfig {
  configId?: number;
  configName?: string;
  configKey?: string;
  configValue?: string;
  configType?: string;
  remark?: string;
}

// export interface UserAccount {
//   code?: number;
//   user?: IUser;
//   menu?: any[];
// }

export class Config implements IConfig {
  constructor(
    public configId?: number,
    public configName?: string,
    public configKey?: string,
    public configValue?: string,
    public configType?: string,
    public remark?: string,
  ) {}
}

export const configSearchSchema: SFSchema = {
  properties: {
   /* configId: {
      type: 'number',
      title: '参数主键',
    },*/
    configName: {
      type: 'string',
      title: '参数名称',
    },
    configKey: {
      type: 'string',
      title: '参数键名',
    },
    configValue: {
      type: 'string',
      title: '参数键值',
    },
   /* configType: {
      type: 'string',
      title: '系统内置',
    },*/
    configType: {
      type: 'string',
      title: '系统内置',
      enum: [
        { label: '是', value: 'Y' },
        { label: '否', value: 'N' },
      ],
      // default: '0',
      ui: {
        widget: 'select',
      } as SFSelectWidgetSchema,
    },


  },
};
