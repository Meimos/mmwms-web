import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SysConfigComponent } from './config/config.component';
import { SysConfigEditComponent } from './config/edit/edit.component';
import { SysConfigViewComponent } from './config/view/view.component';
import { SysDictComponent } from './dict/dict.component';
import { SysDictEditComponent } from './dict/edit/edit.component';
import { SysDictViewComponent } from './dict/view/view.component';
import { SysMenuEditComponent } from './menu/edit/edit.component';
import { SysMenuComponent } from './menu/menu.component';
import { SysMenuViewComponent } from './menu/view/view.component';
import { SysNoticeEditComponent } from './notice/edit/edit.component';
import { SysNoticeComponent } from './notice/notice.component';
import { SysNoticeViewComponent } from './notice/view/view.component';
import { SysRoleEditComponent } from './role/edit/edit.component';
import { SysRoleComponent } from './role/role.component';
import { SysRoleViewComponent } from './role/view/view.component';
import { SysSnoEditComponent } from './sno/edit/edit.component';
import { SysSnoComponent } from './sno/sno.component';
import { SysSnoViewComponent } from './sno/view/view.component';
import { SysRoutingModule } from './sys-routing.module';
import { SysUserEditComponent } from './user/edit/edit.component';
import { SysUserComponent } from './user/user.component';
import { SysUserViewComponent } from './user/view/view.component';

const COMPONENTS = [
  SysUserComponent,
  SysMenuComponent,
  SysRoleComponent,
  SysDictComponent,
  SysConfigComponent,
  SysSnoComponent,
  SysNoticeComponent,
];
const COMPONENTS_NOROUNT = [
  SysUserEditComponent,
  SysUserViewComponent,
  SysMenuEditComponent,
  SysMenuViewComponent,
  SysRoleEditComponent,
  SysRoleViewComponent,
  SysDictEditComponent,
  SysDictViewComponent,
  SysConfigEditComponent,
  SysConfigViewComponent,
  SysSnoEditComponent,
  SysSnoViewComponent,
  SysNoticeEditComponent,
  SysNoticeViewComponent,
];

@NgModule({
  imports: [SharedModule, SysRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class SysModule {}
