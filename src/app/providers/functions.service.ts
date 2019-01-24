import { Injectable } from '@angular/core';
import { HttpService } from '@core/net/http.service';
import { Config } from '@core/utils/config';

declare var javaPath;
declare var jsPath;
@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor(private httpService: HttpService, private config: Config) { }

  /**
   * 
   * @param json 查询条件
   */
  exportExcelV2007(json: string) {
    let url = javaPath + "excel/exportExcelV2007?json=" + encodeURIComponent(json);
    window.location.href = url;
  }

  /**
   * 文件下载
   * @param fileId 文件在文件服务器的名称
   * @param fileName 文件下载名称
   */
  downloadFile(fileId: string, fileName: string) {
    let url = javaPath + `file/downloadFile?fileId=${fileId}&fileName=${fileName}`;
    window.location.href = url;
  }

  /**
   * pdf文件在线预览
   * @param fileName 
   */
  previewPdf(fileName?: string) {
    let url = jsPath + "assets/pdf/web/viewer.html";
    if (!!fileName) {
      url += "";
    }
    window.open(url);
  }

}
