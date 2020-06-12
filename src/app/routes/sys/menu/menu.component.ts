import { Component, OnInit } from '@angular/core';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { DictType, IMenu, Menu } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-sys-menu',
  templateUrl: './menu.component.html',
})
export class SysMenuComponent implements OnInit {
  constructor(private http: _HttpClient, public msgSrv: NzMessageService, private modal: ModalHelper) {}
  searchValue = '';

  treeNodes = [];
  treeSelectNodes = [];
  menu: IMenu = {};
  pidDisabled = false;
  selectedNode?: number;

  ngOnInit() {
    this.initTreeNodes();
  }

  /**
   * 初始化tree&treeselect
   */
  initTreeNodes() {
    this.http.get('system/menu/treeselect').subscribe((res) => {
      console.log(res);

      this.treeSelectNodes = res.data;
      this.treeNodes = res.data;
    });
  }

  /**
   * 添加菜单
   */
  add() {
    const menu = this.menu;
    if (menu.menuType === 'F') {
      this.msgSrv.error('按钮下面不能添加菜单，请重新选择！');
      return;
    }

    this.menu = new Menu(null, DictType.MENU_TYPE_MENU, menu.menuId, true);
    this.pidDisabled = true;
  }

  /**
   * 删除
   */
  confirm(): void {
    this.http.delete('system/menu/' + this.selectedNode).subscribe((res) => {
      this.msgSrv.success('此操作将会删除信息，确定要操作吗？');
      this.initTreeNodes();
    });
  }
  /**
   * Tree监听
   */
  nzEvent(event: NzFormatEmitEvent): void {
    switch (event.eventName) {
      case 'click':
        this.pidDisabled = false;
        const snode = event.keys[0];
        this.selectedNode = Number(snode);
        if (snode != null && snode !== undefined) {
          this.http.get('system/menu/' + snode).subscribe((res) => {
            this.menu = res.data;
          });
        }
        break;
    }
  }

  /**
   * 更新菜单
   */
  update() {
    const mnu = this.menu;
    if (mnu.menuId > 0) {
      // 修改
      if (mnu.menuId === mnu.pid) {
        this.msgSrv.error('父节点不能选择自己，请重新选择！');
        return;
      }
      this.http.put('system/menu', this.menu).subscribe((res) => {
        this.msgSrv.success(res.msg);
      });
    } else {
      // 新增
      console.log(mnu);
      this.http.post('system/menu', this.menu).subscribe((res) => {
        this.msgSrv.success(res.msg);
      });
    }

    this.initTreeNodes();
  }
}
