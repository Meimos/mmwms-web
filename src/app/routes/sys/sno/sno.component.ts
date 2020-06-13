import { Component, OnInit, ViewChild } from '@angular/core';
import { STChange, STColumn, STComponent, STData } from '@delon/abc/st';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { badgeMap, BadgeType, snoSearchSchema } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SysSnoEditComponent } from './edit/edit.component';
import { SysSnoViewComponent } from './view/view.component';

@Component({
  selector: 'app-sys-sno',
  templateUrl: './sno.component.html',
})
export class SysSnoComponent implements OnInit {
  url = 'system/sno/list';

  selectedRows: STData[] = [];

  timestamp = new Date();
  searchSchema = snoSearchSchema;

  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '', index: 'key', type: 'checkbox' },
    { title: '编号', index: 'id' },
    { title: '名称', index: 'name' },
    { title: '别名', index: 'alias' },
    { title: '规则', index: 'regulation' },
    { title: '生成类型', index: 'genType', type: 'badge', badge: badgeMap.get(BadgeType.SNO_GENTYPE) },
    { title: '流水号长度', index: 'noLength' },
    { title: '当前日期', index: 'curDate' },
    { title: '初始值', index: 'initValue' },
    { title: '当前值', index: 'curValue' },
    { title: '步长', index: 'step' },
    {
      title: '',
      buttons: [
        {
          icon: 'eye',
          type: 'modal',
          modal: {
            component: SysSnoViewComponent,
          },
          click: (_record, modal) => this.reload(),
        },
        {
          icon: 'edit',
          type: 'modal',
          modal: {
            component: SysSnoEditComponent,
          },
          click: (_record, modal) => this.reload(),
        },
      ],
    },
  ];

  constructor(private http: _HttpClient, public msgSrv: NzMessageService, private modal: ModalHelper) {}

  ngOnInit() {}

  add() {
    this.modal.static(SysSnoEditComponent, { record: { id: 0 } }).subscribe(() => {
      this.st.load();
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

  /**
   * 删除
   */
  del() {
    if (this.selectedRows.length > 0) {
      let ids = '';
      this.selectedRows.map(item => {
        ids += (item.id + ',');
      });

      ids = ids.substring(0, ids.length - 1);
      console.log(ids);
      this.http.delete(`system/sno/${ids}`).subscribe((res) => {
        console.log(res);
      });
    }
  }

  reload() {
    this.st.reload();
  }
}
