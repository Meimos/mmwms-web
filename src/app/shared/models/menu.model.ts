import { SFSchema, SFSelectWidgetSchema, SFStringWidgetSchema } from '@delon/form';

export interface IMenu {
  menuId?: any;
  menuName?: string;
  menuType?: string;
  children?: IMenu[];
  path?: string;
  pid?: number;
  visible?: boolean;
  icon?: string;
  sortNo?: string;
  langKey?: string;
  perms?: string;
}

export class Menu implements IMenu {
  constructor(public menuId?: any, public menuType?: string, public pid?: number, public visible?: boolean) {}
}

export const menuSearchSchema: SFSchema = {
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
