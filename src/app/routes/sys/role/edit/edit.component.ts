import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SFComponent, SFRadioWidgetSchema, SFSchema, SFSchemaEnumType, SFTreeSelectWidgetSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { dictMap, DictType, IRole, Role } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-sys-role-edit',
  templateUrl: './edit.component.html',
})
export class SysRoleEditComponent implements OnInit {
  @Input()
  record: IRole;

  treeData?: any = [];

  formData: any;

  @ViewChild('sf', { static: false }) private sf: SFComponent;
  schema: SFSchema = {
    properties: {
      roleName: { type: 'string', title: '角色名称' },
      roleKey: { type: 'string', title: '角色权限' },
      status: {
        type: 'string',
        title: '用户状态',
        enum: dictMap.get(DictType.USER_STATUS),
        ui: {
          widget: 'radio',
        } as SFRadioWidgetSchema,
        default: dictMap.get(DictType.USER_STATUS)[0].value,
      },
      sortNo: { type: 'string', title: '排序' },
      menuIds: {
        type: 'integer',
        title: '菜单权限',
        default: [],
        ui: {
          widget: 'tree-select',
          checkable: true,
          checkStrictly: false,
          asyncData: () => this.http.get('system/menu/tree'),
        } as SFTreeSelectWidgetSchema,
      },
      remark: { type: 'string', title: '备注' },
    },
    required: ['roleName', 'roleKey', 'status', 'sortNo'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $remark: {
      widget: 'textarea',
      grid: { span: 12 },
    },
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient) {}

  ngOnInit(): void {
    this.formData = this.record;

    if (this.record.roleId > 0) {
      this.http.get('system/role/' + this.record.roleId).subscribe((res) => {
        this.formData = res.data;
      });
    } else {
      this.formData = new Role(null);
    }
  }

  saveOrUpdate(role: IRole) {
    console.log('选中的结果为:' + role.menuIds);
    return;

    if (role.roleId > 0) {
      this.http.put('system/role', role).subscribe((res) => {
        this.modal.close(true);
      });
    } else {
      console.log('add......');

      this.http.post('system/role', role).subscribe((res) => {
        this.modal.close(true);
      });
    }
  }

  close() {
    this.modal.destroy();
  }
}
