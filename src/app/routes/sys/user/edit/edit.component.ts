import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SFComponent, SFRadioWidgetSchema, SFSchema, SFStringWidgetSchema, SFTreeSelectWidgetSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { dictMap, DictType, IUser, Role, User } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-sys-user-edit',
  templateUrl: './edit.component.html',
})
export class SysUserEditComponent implements OnInit {
  @Input()
  record: IUser;

  formData: any;

  @ViewChild('sf', { static: false }) private sf: SFComponent;
  schema: SFSchema = {
    properties: {
      userName: { type: 'string', title: '用户名', minLength: 5 },
      nickName: { type: 'string', title: '用户昵称', minLength: 6 },
      email: { type: 'string', title: '邮箱', format: 'email', maxLength: 20 },
      password: {
        type: 'string',
        title: '密码',
        ui: {
          type: 'password',
          placeholder: '请输入密码',
        } as SFStringWidgetSchema,
      },
      phone: { type: 'string', title: '手机号码' },
      status: {
        type: 'string',
        title: '用户状态',
        enum: dictMap.get(DictType.USER_STATUS),
        ui: {
          widget: 'radio',
        } as SFRadioWidgetSchema,
        default: dictMap.get(DictType.USER_STATUS)[0].value,
      },
      sex: {
        type: 'string',
        title: '性别',
        enum: dictMap.get(DictType.SEX),
        ui: {
          widget: 'radio',
        } as SFRadioWidgetSchema,
        default: dictMap.get(DictType.SEX)[0].value,
      },
      roleIds: {
        type: 'integer',
        title: '角色',
        ui: {
          widget: 'tree-select',
          multiple: true,
          showExpand: false,
          checkable: true,
          asyncData: () => this.http.get('system/role/optionselect'),
        } as SFTreeSelectWidgetSchema,
      },
    },
    required: ['username', 'nickName', 'email', 'password'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $no: {
      widget: 'text',
    },
    $gendser: {
      widget: 'textarea',
      grid: { span: 24 },
    },
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient) {}

  ngOnInit(): void {
    if (this.record.userId > 0) {
      this.http.get('system/user/' + this.record.userId).subscribe((res) => {
        this.formData = res.data;
        this.formData.roleIds = res.roleIds;
      });
    } else {
      this.formData = new User(null);
    }
  }

  saveOrUpdate(user: IUser) {
    if (user.userId > 0) {
      this.http.put('system/user', user).subscribe((res) => {
        if (res.code === 200) {
          this.modal.close(true);
        }
      });
    } else {
      this.http.post('system/user', user).subscribe((res) => {
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
