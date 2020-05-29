import { SFSchema, SFSelectWidgetSchema, SFStringWidgetSchema } from '@delon/form';
import { IMenu } from './menu.model';

export interface IRole {
  roleId?: any;
  roleName?: string;
  roleKey?: string;
  sortNo?: string;
  menuIds?: number[];
  status?: string;
  remark?: string;
}

export class Role implements IRole {
  constructor(
    public roleId?: any,
    public roleName?: string,
    public roleKey?: string,
    public sortNo?: string,
    public menuIds?: number[],
    public status?: string,
    public remark?: string,
  ) {}
}

export const roleSearchSchema: SFSchema = {
  properties: {
    name: {
      type: 'string',
      title: '角色名称',
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
