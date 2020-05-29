import { Component, OnInit, ViewChild } from '@angular/core';
import { STChange, STColumn, STComponent, STData } from '@delon/abc/st';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { badgeMap, BadgeType, userSearchSchema } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SysUserEditComponent } from './edit/edit.component';
import { SysUserViewComponent } from './view/view.component';

@Component({
  selector: 'app-sys-user',
  templateUrl: './user.component.html',
})
export class SysUserComponent implements OnInit {
  url = 'system/user/list';

  selectedRows: STData[] = [];

  timestamp = new Date();
  searchSchema = userSearchSchema;

  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '', index: 'key', type: 'checkbox' },
    { title: '编号', index: 'userId' },
    { title: '用户名称', index: 'userName' },
    { title: '邮箱', index: 'email' },
    { title: '用户昵称', index: 'nickName' },
    { title: '性别', index: 'sex' },
    { title: '手机号码', index: 'phonenumber' },
    { title: '状态', index: 'status', type: 'badge', badge: badgeMap.get(BadgeType.USER_BADGE) },
    { title: '创建时间', type: 'date', index: 'createTime' },
    {
      title: '',
      buttons: [
        {
          icon: 'eye',
          type: 'modal',
          modal: {
            component: SysUserViewComponent,
          },
          click: (_record, modal) => this.reload(),
        },
        {
          icon: 'edit',
          type: 'modal',
          modal: {
            component: SysUserEditComponent,
          },
          click: (_record, modal) => this.reload(),
        },
      ],
    },
  ];

  constructor(private http: _HttpClient, public msgSrv: NzMessageService, private modal: ModalHelper) {}

  ngOnInit() {}

  add() {
    this.modal.static(SysUserEditComponent, { record: { userId: 0 } }).subscribe(() => {
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
