import { Injectable } from '@angular/core';
import { HttpService } from '@core/net/http.service';
import { HttpParams } from '@angular/common/http';
import { Config } from '@core/utils/config';
import { Observable } from 'rxjs';
import { RestResponse } from '@core/models/rest-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpService: HttpService, private config: Config) { }

  /**
   * 通过用户名、密码的方式登录
   * @param user 用户名
   * @param pwd 密码
   * @param captcha 验证码？
   */
  loginByUser(user: string, pwd: string, captcha?: string): Observable<RestResponse> {
    let url = "auth/loginByUser";
    let json: any = JSON.stringify({
      "user": user,
      "pwd": pwd,
    });
    if (!!captcha) {
      json.captcha = captcha;
    }
    let params: HttpParams = new HttpParams().set("json", json);
    let headers = { headers: this.config.getInitHeaders() }
    return this.httpService.get(url, { headers: headers, params });
  }

  /**
   * 通过手机号登录
   * @param phone 
   * @param captcha 
   */
  loginByPhone(phone: string, captcha?: string) {
    let url = "";
    this.httpService.get(url)
  }

  /**
   * 通过微信登录
   * @param user 
   * @param pwd 
   * @param captcha 
   */
  loginByWeChat(user: string, pwd: string, captcha?: string) {
    let url = "";
    this.httpService.get(url)
  }

}
