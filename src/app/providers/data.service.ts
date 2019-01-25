import { Injectable } from '@angular/core';
import { HttpService } from '@core/net/http.service';
import { Observable } from 'rxjs';
import { RestResponse } from '@core/models/rest-response';
import { HttpParams } from '@angular/common/http';
import { Config } from '@core/utils/config';

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
}
