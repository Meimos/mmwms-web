import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SysConfigComponent } from './config/config.component';
import { SysDictComponent } from './dict/dict.component';
import { SysMenuComponent } from './menu/menu.component';
import { SysNoticeComponent } from './notice/notice.component';
import { SysRoleComponent } from './role/role.component';
import { SysSnoComponent } from './sno/sno.component';
import { SysUserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'user', component: SysUserComponent },
  { path: 'menu', component: SysMenuComponent },
  { path: 'role', component: SysRoleComponent },
  { path: 'dict', component: SysDictComponent },
  { path: 'config', component: SysConfigComponent },
  { path: 'sno', component: SysSnoComponent },
  { path: 'notice', component: SysNoticeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SysRoutingModule {}
