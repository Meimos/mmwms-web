import { SFSchema, SFSelectWidgetSchema, SFStringWidgetSchema } from '@delon/form';
import { IRole } from './role.model';

export interface ISysSno {
  id?: number;
  name?: string;
  alias?: string;
  regulation?: string;
  genType?: number;
  noLength?: number;
  curDate?: string;
  initValue?: number;
  curValue?: number;
  step?: number;
}

export class SysSno implements ISysSno {
  constructor(
    public id?: number,
    public name?: string,
    public alias?: string,
    public regulation?: string,
    public genType?: number,
    public noLength?: number,
    public curDate?: string,
    public initValue?: number,
    public curValue?: number,
    public step?: number,
  ) {}
}

export const snoSearchSchema: SFSchema = {
  properties: {
    email: {
      type: 'string',
      title: '邮箱',
      format: 'email',
    },
    userName: {
      type: 'string',
      title: '用户名',
    },
    status: {
      type: 'string',
      title: '状态',
      enum: [
        { label: '正常', value: '0' },
        { label: '停用', value: '1' },
      ],
      default: '0',
      ui: {
        widget: 'select',
      } as SFSelectWidgetSchema,
    },
  },
};
