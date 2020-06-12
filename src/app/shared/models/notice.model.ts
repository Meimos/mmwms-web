import { SFSchema, SFSelectWidgetSchema, SFStringWidgetSchema } from '@delon/form';
// import { IRole } from './role.model';

export interface INotice {
  noticeId?: number;
  noticeTitle?: string;
  noticeType?: string;
  noticeContent?: string;
  status?: string;
  updateBy?: string;
}

// export interface UserAccount {
//   code?: number;
//   user?: IUser;
//   menu?: any[];
// }

export class Notice implements INotice {
  constructor(
    public noticeId?: number,
    public noticeTitle?: string,
    public noticeType?: string,
    public noticeContent?: string,
    public status?: string,
    public updateBy?: string,
  ) {}
}

export const noticeSearchSchema: SFSchema = {
  properties: {
   /* configId: {
      type: 'number',
      title: '参数主键',
    },*/
    noticeTitle: {
      type: 'string',
      title: '公告标题',
    },
    noticeType: {
      type: 'string',
      title: '公告类型',
      enum: [
        { label: '通告', value: '1' },
        { label: '公告', value: '2' },
      ],
      // default: '0',
      ui: {
        widget: 'select',
      } as SFSelectWidgetSchema,
    },
    updateBy: {
      type: 'string',
      title: '操作人员',
    },
  },
};
