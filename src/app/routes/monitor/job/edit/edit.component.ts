import { Component, OnInit, ViewChild } from '@angular/core';
import {SFComponent, SFRadioWidgetSchema, SFSchema, SFSelectWidgetSchema, SFTagWidgetSchema, SFTextareaWidgetSchema, SFUISchema} from '@delon/form';
import { _HttpClient } from '@delon/theme';
import {dictMap, DictType, IJob, Job } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-monitor-job-edit',
  templateUrl: './edit.component.html',
})
export class MonitorJobEditComponent implements OnInit {
  record: any = {};
  i: any;
  @ViewChild('sf', { static: false }) private sf: SFComponent;
  schema: SFSchema = {
    properties: {
      // jobId: { type: 'number', title: '任务序号', },
      jobName: { type: 'string', title: '任务名称', },
      jobGroup: {
        type: 'string',
        title: '任务组名',
        enum: dictMap.get(DictType.JOB_GROUP),
        ui: {
          widget: 'select',
        } as SFSelectWidgetSchema,
        default: dictMap.get(DictType.JOB_GROUP)[0].value,
      },
      invokeTarget: { type: 'string', title: '调用目标字符串', },
      cronExpression: { type: 'string', title: '执行表达式', },
      /*0=允许,1=禁止*/
      concurrent: {
        type: 'string',
        title: '并发执行',
        enum: dictMap.get(DictType.JOB_IS_CONCURRENT_EXE),
        ui: {
          widget: 'tag',
        } as SFTagWidgetSchema,
        default: dictMap.get(DictType.JOB_IS_CONCURRENT_EXE)[0].value,
      },
      /*0=默认,1=立即触发执行,2=触发一次执行,3=不触发立即执行*/
      misfirePolicy: {
        type: 'string',
        title: 'cron计划策略',
        enum: dictMap.get(DictType.JOB_MISFIRE_IGNORE_MISFIRES),
        ui: {
          widget: 'radio',
        } as SFRadioWidgetSchema,
        default: dictMap.get(DictType.JOB_MISFIRE_IGNORE_MISFIRES)[0].value,
      },
      status: {
        type: 'string',
        title: '任务状态',
        enum: dictMap.get(DictType.JOB_STATUS),
        ui: {
          widget: 'radio',
        } as SFRadioWidgetSchema,
        default: dictMap.get(DictType.JOB_STATUS)[0].value,
      },

      // noticeContent: { type: 'string', title: '内容' },

    },
    required: ['jobId', 'jobName', 'jobGroup', 'invokeTarget', 'cronExpression', 'concurrent', 'misfirePolicy', 'status'],

  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 120,

      grid: { span: 12 },
    },
    $jobId: {
      widget: 'number',
    },
    $jobName: {
      widget: 'string',
    },
    $cronExpression: {
      widget: 'string',
      grid: { span: 18 },
    },
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient) {}

  ngOnInit(): void {
    console.log(this.record);
    if (this.record.jobId > 0) {
      this.http.get('monitor/job/' + this.record.jobId).subscribe((res) => {
        this.i = res.data;
        // this.i.roleIds = res.roleIds;
        this.msgSrv.success('初始化成功');
      });
    } else {
      // this.msgSrv.success('初始化失败');
      this.i = new Job(null);
    }
  }

  saveOrUpdate(value: any) {
    if (this.record.jobId > 0) {
      this.http.put('monitor/job', value).subscribe((res) => {
        if (res.code === 200) {
          this.modal.close(true);
        }
      });
    } else {
      this.http.post('monitor/job', value).subscribe((res) => {
        if (res.code === 200) {
          this.modal.close(true);
        }
      });
    }
  }

  close() {
    this.modal.destroy();
  }
}
