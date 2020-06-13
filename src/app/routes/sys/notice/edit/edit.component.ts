import { Component, OnInit, ViewChild } from '@angular/core';
import {SFComponent, SFRadioWidgetSchema, SFSchema, SFSelectWidgetSchema, SFTextareaWidgetSchema, SFUISchema} from '@delon/form';
import { _HttpClient } from '@delon/theme';
import {dictMap, DictType, INotice, Notice} from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-sys-notice-edit',
  templateUrl: './edit.component.html',
})
export class SysNoticeEditComponent implements OnInit {
  record: any = {};
  i: any;
  @ViewChild('sf', { static: false }) private sf: SFComponent;
  schema: SFSchema = {
    properties: {
      // noticeId: { type: 'number', title: '公告id', },
      noticeTitle: { type: 'string', title: '公告标题', },
      noticeType: {
        type: 'string',
        title: '公告类型',
        enum: dictMap.get(DictType.NOTICETYPE),
        ui: {
          widget: 'select',
        } as SFSelectWidgetSchema,
        default: dictMap.get(DictType.NOTICETYPE)[0].value,
      },
      status: {
        type: 'string',
        title: '状态',
        enum: dictMap.get(DictType.NOTICESTATUS),
        ui: {
          widget: 'radio',
        } as SFRadioWidgetSchema,
        default: dictMap.get(DictType.NOTICESTATUS)[0].value,
      },
      noticeContent: {
        type: 'string',
        title: '内容',
        ui: {
          widget: 'textarea',
        } as SFTextareaWidgetSchema,
      },
      // noticeContent: { type: 'string', title: '内容' },

    },
    required: ['noticeId', 'noticeTitle', 'noticeType', 'status', 'noticeContent'],

  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $noticeId: {
      widget: 'number',
    },
    $noticeTitle: {
      widget: 'string',
    },
    $noticeContent: {
      widget: 'textarea',
      grid: { span: 24 },
    },
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient) {}

  ngOnInit(): void {
    console.log(this.record);
    if (this.record.noticeId > 0) {
      this.http.get('system/notice/' + this.record.noticeId).subscribe((res) => {
        this.i = res.data;
        // this.i.roleIds = res.roleIds;
        this.msgSrv.success('初始化成功');
      });
    } else {
      // this.msgSrv.success('初始化失败');
      this.i = new Notice(null);
    }
  }

  saveOrUpdate(value: any) {
    if (this.record.noticeId > 0) {
      this.http.put('system/notice', value).subscribe((res) => {
        if (res.code === 200) {
          this.modal.close(true);
        }
      });
    } else {
      this.http.post('system/notice', value).subscribe((res) => {
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
