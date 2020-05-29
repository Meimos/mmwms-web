import { Component, OnInit, ViewChild } from '@angular/core';
import { STChange, STColumn, STComponent, STData } from '@delon/abc/st';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { badgeMap, BadgeType, roleSearchSchema } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SysRoleEditComponent } from './edit/edit.component';
import { SysRoleViewComponent } from './view/view.component';
@Component({
  selector: 'app-sys-role',
  templateUrl: './role.component.html',
})
export class SysRoleComponent implements OnInit {
  url = 'system/role/list';

  selectedRows: STData[] = [];

  timestamp = new Date();
  searchSchema = roleSearchSchema;

  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '', index: 'key', type: 'checkbox' },
    { title: '编号', index: 'roleId' },
    { title: '角色名称', index: 'roleName' },
    { title: '角色权限', index: 'roleKey' },
    { title: '状态', index: 'status', type: 'badge', badge: badgeMap.get(BadgeType.USER_BADGE) },
    { title: '备注', index: 'remark' },
    { title: '创建时间', type: 'date', index: 'createTime' },
    {
      title: '',
      buttons: [
        {
          icon: 'eye',
          type: 'modal',
          modal: {
            component: SysRoleViewComponent,
          },
          click: (_record, modal) => this.reload(),
        },
        {
          icon: 'edit',
          type: 'modal',
          modal: {
            component: SysRoleEditComponent,
          },
          click: (_record, modal) => this.reload(),
        },
      ],
    },
  ];

  constructor(private http: _HttpClient, public msgSrv: NzMessageService, private modal: ModalHelper) {}

  ngOnInit() {}

  add() {
    this.modal.static(SysRoleEditComponent, { record: { roleId: 0 } }).subscribe(() => {
      this.st.load();
      // this.msgSrv.info('正在加载列表');
    });
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
