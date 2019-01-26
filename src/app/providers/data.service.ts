import { Injectable } from '@angular/core';
import { HttpService } from '@core/net/http.service';
import { Observable } from 'rxjs';
import { RestResponse } from '@core/models/rest-response';
import { HttpParams } from '@angular/common/http';
import { Config } from '@core/utils/config';
import { UploadFile } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpService: HttpService, private config: Config) { }

  getDataById(id: string): Observable<RestResponse> {
    let url = "wheel/getDataById";
    let params: HttpParams = new HttpParams().set("id", id);
    let headers = { headers: this.config.getInitHeaders() }
    return this.httpService.get(url, { headers: headers, params });
  }

  /**
   * 新建表单
   * @param files 
   */
  create(files?: any[]) {
    let url = "file/uploadFile";
    let formData = new FormData();
    if (!!files) {
      for (let i = 0; i < files.length; i++) {
        formData.append(`file${i}`, files[i]);
      }
    }
    return this.httpService.post(url, formData, { responseType: 'text' });
  }

}
