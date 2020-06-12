import { Component, OnInit, ViewChild } from '@angular/core';
import { STChange, STColumn, STComponent, STData } from '@delon/abc/st';
import { ModalHelper, _HttpClient } from '@delon/theme';
import {badgeMap, BadgeType, jobSearchSchema, DictType, dictMap} from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MonitorJobEditComponent } from './edit/edit.component';
import { MonitorJobViewComponent } from './view/view.component';
@Component({
  selector: 'app-monitor-job',
  templateUrl: './job.component.html',
})
export class MonitorJobComponent implements OnInit {
  url = `monitor/job/list`;
  selectedRows: STData[] = [];


  timestamp = new Date();
  searchSchema = jobSearchSchema;

  /*searchSchema: SFSchema = {
    properties: {
      configId: {
        type: 'number',
        title: '参数主键'
      }
    }
  };*/
  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    // { title: '', index: 'key', type: 'checkbox' },
    { title: '任务序号', type: 'checkbox', index: 'jobId' },
    { title: '任务名称', index: 'jobName' },
    { title: '任务组名',  index: 'jobGroup' },
    { title: '调用目标字符串', index: 'invokeTarget' },
    { title: '执行表达式', index: 'cronExpression' },
    { title: 'cron计划策略', index: 'misfirePolicy' },
    { title: '并发执行', index: 'concurrent'},
    { title: '任务状态', index: 'status', },
    { title: '备注', index: 'remark' },
    { title: '创建时间', type: 'date', index: 'createTime' },
    { title: '创建人', index: 'createBy' },
    { title: '修改时间', type: 'date', index: 'updateTime' },
    { title: '修改人', index: 'updateBy' },
    /* {
       title: '',
       buttons: [
         { text: '查看', click: (item: any) => `/form/${item.configId}` },
         { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
       ]
     }*/
    {
      title: '',
      buttons: [
        {
          icon: 'delete',
          type: 'modal',
          /* modal: {
             component: SysNoticeViewComponent,
           },*/
          click: (_record, modal) => this.delete(_record),
        },
        {
          icon: 'edit',
          type: 'modal',
          modal: {
            component: MonitorJobEditComponent,
          },
          click: (_record, modal) => this.reload(),
        },
      ],
    },
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() { }

  add() {

    this.modal.static(MonitorJobEditComponent, { record: { jobId: 0 } }).subscribe(() => {
      this.st.load();
      // this.msgSrv.info('正在加载列表');
    });
  }
  delete(_record) {
    if (_record.jobId > 0 ) {
      console.log(_record.jobId);
      this.http.delete('monitor/job/' + _record.jobId ).subscribe((res) => {
        if (res.code === 200) {
          this.reload();
        }
      });
    }
  }

  /**
   * change回调
   * @param ret pi、ps、checkbox、radio、sort、filter、click、dblClick 变动
   */
  change(ret: STChange) {
    switch (ret.type) {
      case 'checkbox':
        this.selectedRows = ret.checkbox;
        console.log(ret.checkbox);
        break;
    }
  }
  reload() {
    this.st.reload();
  }

}
