import { Component, OnInit, Input } from '@angular/core';
import { UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'my-file',
  templateUrl: './file.component.html',
  styles: []
})
export class FileComponent implements OnInit {

  @Input("isMultiple") isMultiple: boolean;//是否一次性选中多个文件
  @Input("acceptStr") acceptStr: string;//支持选中的文件格式
  @Input("disabled") disabled: boolean;//disabled
  @Input() fileList: UploadFile[] = [];//展示的文件列表

  constructor() { }

  ngOnInit() {
  }


  /**
   * 暂存要上传的文件
   */
  beforeUpload = (file: UploadFile): boolean => {
    this.fileList.push(file);
    return false;
  }


  /**
   * 删除文件
   */
  remove = (file: UploadFile): boolean => {
    alert("remove!");
    return false;
  }

  /**
   * 下载文件
   */
  download() {
    alert("download");
  }

}
