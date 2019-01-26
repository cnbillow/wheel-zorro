import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UploadFile, NzModalRef } from 'ng-zorro-antd';
import { DataService } from 'app/providers/data.service';
import { FileComponent } from '@shared/file/file.component';
import * as myGlobals from '../../../shared/constant';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styles: [`
  [nz-form] {
    max-width: 600px;
  }
  nz-date-picker ::ng-deep .ant-calendar-picker{
    width: 100%;
  }
`]
})
export class DataEditComponent implements OnInit {

  @Input("id") id: string;//单据ID
  @ViewChild("fileComp") fileComp: FileComponent;
  isMultiple = true;
  acceptStr = myGlobals.acceptImage;

  constructor(private dataService: DataService, private modal: NzModalRef) { }

  ngOnInit() {
  }

  /**
   * 表单提交
   */
  submit() {
    this.dataService.create(this.fileComp.fileList).subscribe(
      res => {
        alert("提交成功！");
      }
    );
  }

  /**
   * 取消
   */
  cancel() {
    // 关闭窗口
    this.modal.destroy();
  }

}
