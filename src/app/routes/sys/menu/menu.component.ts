import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STColumnBadge, STColumnTag, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

const BADGE: STColumnBadge = {
  1: { text: '成功', color: 'success' },
  2: { text: '错误', color: 'error' },
  3: { text: '进行中', color: 'processing' },
  4: { text: '默认', color: 'default' },
  5: { text: '警告', color: 'warning' },
};
const TAG: STColumnTag = {
  1: { text: '成功', color: 'green' },
  2: { text: '错误', color: 'red' },
  3: { text: '进行中', color: 'blue' },
  4: { text: '默认', color: '' },
  5: { text: '警告', color: 'orange' },
};
const r = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

@Component({
  selector: 'app-sys-menu',
  templateUrl: './menu.component.html',
})
export class SysMenuComponent implements OnInit {
  constructor(private http: _HttpClient, private modal: ModalHelper) {}
  searchValue = '';

  nodes = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
            { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
            { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
            { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
            { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
          isLeaf: true,
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
        { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
        { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
      isLeaf: true,
    },
  ];
  users: any[] = [];
  columns: STColumn[] = [
    { title: '行号', type: 'no' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age', type: 'number' },
    { title: 'tag', index: 'tag', type: 'tag', tag: TAG },
    { title: 'badge', index: 'badge', type: 'badge', badge: BADGE },
    { title: 'Enum', index: 'enum', type: 'enum', enum: { 1: '壹', 2: '贰', 3: '叁' } },
    { title: 'yn', index: 'yn', type: 'yn' },
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  reload() {
    this.users = Array(10)
      .fill({})
      .map((_item: any, idx: number) => {
        return {
          id: idx + 1,
          name: `name ${idx + 1}`,
          age: r(10, 50),
          tag: r(1, 5),
          badge: r(1, 5),
          enum: r(1, 3),
          yn: [true, false][r(1, 5) % 2],
        };
      });
  }

  ngOnInit() {}

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }
}
