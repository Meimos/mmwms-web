import { Component, OnInit, ViewChild } from '@angular/core';
import {SFComponent, SFRadioWidgetSchema, SFSchema, SFUISchema} from '@delon/form';
import { _HttpClient } from '@delon/theme';
import {Config, dictMap, DictType, IConfig} from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-sys-config-edit',
  templateUrl: './edit.component.html',
})
export class SysConfigEditComponent implements OnInit {
  record: any = {};
  i: any;

  @ViewChild('sf', { static: false }) private sf: SFComponent;
  schema: SFSchema = {
    properties: {
      configId: { type: 'number', title: '参数主键' },
      configName: { type: 'string', title: '参数名称', maxLength: 15 },
      configKey: { type: 'string', title: '参数键名' },
      configValue: { type: 'string', title: '参数键值' },
     /* configType: { type: 'string', title: '系统内置', maxLength: 140 },*/
      configType: {
        type: 'string',
        title: '系统内置',
        enum: dictMap.get(DictType.ISYES),
        ui: {
          widget: 'radio',
        } as SFRadioWidgetSchema,
        default: dictMap.get(DictType.ISYES)[0].value,
      },
      remark: { type: 'string', title: '备注' },
  /*    createTime: { type: 'da', title: '创建时间' },
      createBy: { type: 'string', title: '创建人' },
      updateTime: { type: 'date', title: '修改时间' },
      updateBy: { type: 'string', title: '修改人' },*/
    },
    // required: ['configName', 'configKey', 'configValue', 'configType', 'remark', 'createTime', 'createBy', 'updateTime', 'updateBy'],
    required: ['configName', 'configKey', 'configValue', 'configType', 'remark'],

  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $configId: {
      widget: 'number',
    },
    $configName: {
      widget: 'string',
    },
    $configKey: {
      widget: 'textarea',
      grid: { span: 24 },
    },
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient) {}

  ngOnInit(): void {
    console.log(this.record);
   /* if (this.record.configId > 0) {
      this.http.get(`system/config/${this.record.configId}`).subscribe((res) => (this.i = res));
    }*/
    if (this.record.configId > 0) {
      this.http.get('system/config/' + this.record.configId).subscribe((res) => {
        this.i = res.data;
        // this.i.roleIds = res.roleIds;
        this.msgSrv.success('初始化成功');
      });
    } else {
      // this.msgSrv.success('初始化失败');
      this.i = new Config(null);
    }
  }

/*  save(value: any) {
    this.http.post(`system//config/${this.record.configId}`, value).subscribe((res) => {
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }*/
  saveOrUpdate(value: any) {
    if (this.record.configId > 0) {
      this.http.put('system/config', value).subscribe((res) => {
        if (res.code === 200) {
          this.modal.close(true);
        }
      });
    } else {
      this.http.post('system/config', value).subscribe((res) => {
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
