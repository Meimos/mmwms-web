import { Component, OnInit, ViewChild } from '@angular/core';
import { STChange, STColumn, STComponent, STData } from '@delon/abc/st';
import { ModalHelper, _HttpClient } from '@delon/theme';
import {badgeMap, BadgeType, configSearchSchema, DictType} from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SysConfigEditComponent } from './edit/edit.component';
import { SysConfigViewComponent } from './view/view.component';



@Component({
  selector: 'app-sys-config',
  templateUrl: './config.component.html',
})
export class SysConfigComponent implements OnInit {
  url = `system/config/list`;

  selectedRows: STData[] = [];


  timestamp = new Date();
  searchSchema = configSearchSchema;

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
    { title: '参数主键', type: 'checkbox', index: 'configId' },
    { title: '参数名称', index: 'configName' },
    { title: '参数键名',  index: 'configKey' },
    { title: '参数键值', index: 'configValue' },
    { title: '系统内置', index: 'configType' },
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
          icon: 'eye',
          type: 'modal',
          modal: {
            component: SysConfigViewComponent,
          },
          click: (_record, modal) => this.reload(),
        },
        {
          icon: 'edit',
          type: 'modal',
          modal: {
            component: SysConfigEditComponent,
          },
          click: (_record, modal) => this.reload(),
        },
      ],
    },
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() { }

  add() {

    this.modal.static(SysConfigEditComponent, { record: { configId: 0 } }).subscribe(() => {
      this.st.load();
      // this.msgSrv.info('正在加载列表');
    });
  }
  delete() {
    // console.log(this.selectedRows.filter());
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
