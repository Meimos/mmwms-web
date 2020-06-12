import { Component, OnInit, ViewChild } from '@angular/core';
import { STChange, STColumn, STComponent, STData } from '@delon/abc/st';
import { ModalHelper, _HttpClient } from '@delon/theme';
import {badgeMap, BadgeType, noticeSearchSchema, DictType, User} from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SysNoticeEditComponent } from './edit/edit.component';
import { SysNoticeViewComponent } from './view/view.component';


@Component({
  selector: 'app-sys-notice',
  templateUrl: './notice.component.html',
})
export class SysNoticeComponent implements OnInit {
  url = `system/notice/list`;
  selectedRows: STData[] = [];


  timestamp = new Date();
  searchSchema = noticeSearchSchema;

  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    // { title: '', index: 'key', type: 'checkbox' },
    { title: '公告ID', type: 'checkbox', index: 'noticeId' },
    { title: '公告标题', index: 'noticeTitle' },
    { title: '公告类型',  index: 'noticeType' },
    { title: '公告内容', index: 'noticeContent' },
    { title: '公告状态', index: 'status' },
    { title: '创建人', index: 'createBy' },
    { title: '创建时间', type: 'date', index: 'createTime' },
    { title: '修改人', index: 'updateBy' },
    { title: '修改时间', type: 'date', index: 'updateTime' },
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
            component: SysNoticeEditComponent,
          },
          click: (_record, modal) => this.reload(),
        },
      ],
    },
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() { }

  add() {

    this.modal.static(SysNoticeEditComponent, { record: { configId: 0 } }).subscribe(() => {
      this.st.load();
      // this.msgSrv.info('正在加载列表');
    });
  }
  delete(_record) {
    if (_record.noticeId > 0 ) {
      console.log(_record.noticeId);
      this.http.delete('system/notice/' + _record.noticeId ).subscribe((res) => {
        if (res.code === 200) {
         this.reload();
        }
      });
    } else {
      console.log('妹纸');
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
