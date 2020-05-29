import { SFSchema, SFSelectWidgetSchema, SFStringWidgetSchema } from '@delon/form';
import { IRole } from './role.model';

export interface IUser {
  userId?: number;
  userName?: string;
  nickName?: string;
  phone?: string;
  email?: string;
  status?: string;
  avatar?: string;
  sex?: string;
  roles?: IRole[];
  roleIds?: number[];
  password?: string;
}

export interface UserAccount {
  code?: number;
  user?: IUser;
  menu?: any[];
}

export class User implements IUser {
  constructor(
    public userId?: number,
    public userName?: string,
    public nickName?: string,
    public avatar?: string,
    public phone?: string,
    public email?: string,
    public status?: string,
    public sex?: string,
    public roleIds?: number[],
    public roles?: IRole[],
    public password?: string,
  ) {}
}

export const userSearchSchema: SFSchema = {
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
