import { SFSchema, SFSelectWidgetSchema, SFStringWidgetSchema } from '@delon/form';

export interface IMenu {
  id?: any;
  title?: string;
  type?: number;
  children?: IMenu[];
  path?: string;
  pid?: number;
  hidden?: boolean;
  icon?: string;
  menuSort?: number;
}

export class Menu implements IMenu {
  constructor(
    public id?: any,
    public title?: string,
    public type?: number,
    public children?: IMenu[],
    public path?: string,
    public pid?: number,
    public hidden?: boolean,
    public icon?: string,
    public menuSort?: number,
  ) {}
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
