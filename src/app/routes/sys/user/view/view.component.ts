import { Component, Input, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { IUser } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-sys-user-view',
  templateUrl: './view.component.html',
})
export class SysUserViewComponent implements OnInit {
  record: IUser = {};
  i: any;

  constructor(private modal: NzModalRef, public msgSrv: NzMessageService, public http: _HttpClient) {}

  ngOnInit(): void {
    this.i = this.record;
  }

  close() {
    this.modal.destroy();
  }
}
