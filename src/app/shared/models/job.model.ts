import { SFSchema, SFSelectWidgetSchema, SFStringWidgetSchema } from '@delon/form';
// import { IRole } from './role.model';

export interface IJob {
  jobId?: number;
  jobName?: string;
  jobGroup?: string;
  status?: string;
}

// export interface UserAccount {
//   code?: number;
//   user?: IUser;
//   menu?: any[];
// }

export class Job implements IJob {
  constructor(
    public jobId?: number,
    public jobName?: string,
    public jobGroup?: string,
    public status?: string,
  ) {}
}

export const jobSearchSchema: SFSchema = {
  properties: {
   /* configId: {
      type: 'number',
      title: '参数主键',
    },*/
    jobName: {
      type: 'string',
      title: '任务名称',
    },
    jobGroup: {
      type: 'string',
      title: '任务组名',
      enum: [
        { label: '默认', value: '0' },
        { label: '系统', value: '1' },
      ],
      // default: '0',
      ui: {
        widget: 'select',
      } as SFSelectWidgetSchema,
    },
    status: {
      type: 'string',
      title: '任务状态',
      enum: [
        { label: '正常', value: '0' },
        { label: '暂停', value: '1' },
      ],
      // default: '0',
      ui: {
        widget: 'select',
      } as SFSelectWidgetSchema,
    },

  },
};
