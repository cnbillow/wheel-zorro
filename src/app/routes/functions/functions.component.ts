import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { FunctionsService } from 'app/providers/functions.service';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styles: [`
  :host ::ng-deep .demo-loadmore-list {
    min-height: 350px;
  }
  :host ::ng-deep .loadmore {
    text-align: center;
    margin-top: 12px;
    height: 32px;
    line-height: 32px;
  }
  ` ]
})
export class FunctionsComponent implements OnInit {

  constructor(private functionsService: FunctionsService, private msg: NzMessageService) { }

  ngOnInit(): void {
  }

  /**
   * excel导出
   */
  exportExcel(): void {
    let json = JSON.stringify({
      param1: "aa"
    })
    this.functionsService.exportExcelV2007(json);
  }

  /**
   * 文件下载
   */
  downloadFile() {
    let fileId = "test.ini";
    let fileName = "测试.ini";
    this.functionsService.downloadFile(fileId, fileName);
  }

  /**
   * pdf文件在线预览
   */
  previewPdf() {
    this.functionsService.previewPdf();
  }

}
