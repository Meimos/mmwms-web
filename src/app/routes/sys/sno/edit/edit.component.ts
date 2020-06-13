import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SFComponent, SFSchema, SFSelectWidgetSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { dictMap, DictType, ISysSno, SysSno } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-sys-sno-edit',
  templateUrl: './edit.component.html',
})
export class SysSnoEditComponent implements OnInit {
  @Input()
  record: ISysSno;

  formData: any;

  @ViewChild('sf', { static: false }) private sf: SFComponent;
  schema: SFSchema = {
    properties: {
      name: { type: 'string', title: '流水号名称', minLength: 5 },
      alias: { type: 'string', title: '别名', minLength: 6 },
      regulation: { type: 'string', title: '规则', maxLength: 30 },
      noLength: { type: 'number', title: '流水号长度', maxLength: 20 },
      initValue: { type: 'number', title: '初始值', maxLength: 20, default: 0 },
      step: { type: 'number', title: '步长', maxLength: 20, default: 0 },
      genType: {
        type: 'number',
        title: '生成类型',
        enum: [
          { label: dictMap.get(DictType.SNO_GENTYPE)[0].label, value: Number(dictMap.get(DictType.SNO_GENTYPE)[0].value) },
          { label: dictMap.get(DictType.SNO_GENTYPE)[1].label, value: Number(dictMap.get(DictType.SNO_GENTYPE)[1].value) },
          { label: dictMap.get(DictType.SNO_GENTYPE)[2].label, value: Number(dictMap.get(DictType.SNO_GENTYPE)[2].value) },
          { label: dictMap.get(DictType.SNO_GENTYPE)[3].label, value: Number(dictMap.get(DictType.SNO_GENTYPE)[3].value) }
        ],
        ui: {
          widget: 'select',
        } as SFSelectWidgetSchema,
        default: Number(dictMap.get(DictType.SNO_GENTYPE)[0].value),
      }
    },
    required: ['name', 'alias', 'regulation', 'noLength', 'genType'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $no: {
      widget: 'text',
    },
    $genType: {
      grid: { span: 12 },
    },
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient) {}

  ngOnInit(): void {
    if (this.record.id > 0) {
      this.http.get('system/sno/' + this.record.id).subscribe((res) => {
        this.formData = res.sn;
        console.log(res);
        
      });
    } else {
      this.formData = new SysSno(null);
    }
  }

  saveOrUpdate(sysSno: SysSno) {
    if (sysSno.id > 0) {
      this.http.put('system/sno', sysSno).subscribe((res) => {
        if (res.code === 200) {
          this.modal.close(true);
        }
      });
    } else {
      this.http.post('system/sno', sysSno).subscribe((res) => {
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
