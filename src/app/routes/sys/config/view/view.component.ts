import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-sys-config-view',
  templateUrl: './view.component.html',
})
export class SysConfigViewComponent implements OnInit {
  // record: IConfig = {};
  record: any = {};
  i: any;

  constructor(private modal: NzModalRef, public msgSrv: NzMessageService, public http: _HttpClient) {}

  ngOnInit(): void {
    // this.http.get(`system/config/${this.record.configId}`).subscribe((res) => (this.i = res));
    this.i = this.record;
  }

  close() {
    this.modal.destroy();
  }
}
