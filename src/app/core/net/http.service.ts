import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RestResponse } from '@core/models/rest-response';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

declare var javaPath;
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }

  /**
   * GET请求
   * @param url 模块访问url
   * @param data 
   * @param errorFn 
   */
  get(url: string, data: any = {}, errorFn?: Function): Observable<RestResponse> {
    return this.http.get<RestResponse>(javaPath + url, data).pipe(
      map(restResponse => {
        return this.callback(restResponse, errorFn);
      })
    )
  }

  /**
   * POST
   * @param url 
   * @param data 
   * @param httpOptions 
   * @param errorFn 
   */
  post(url: string, data: any = {}, httpOptions: any = {}, errorFn?: Function): Observable<RestResponse> {
    return this.http.post<RestResponse>(javaPath + url, data, httpOptions).pipe(
      map(restResponse => {
        return this.callback(restResponse, errorFn);
      })
    )
  }

  /**
   * PUT
   * @param url 
   * @param data 
   * @param httpOptions 
   * @param errorFn 
   */
  put(url: string, data: any = {}, httpOptions: any = {}, errorFn?: Function): Observable<RestResponse> {
    return this.http.put<RestResponse>(javaPath + url, data).pipe(
      map(restResponse => {
        return this.callback(restResponse, errorFn);
      }),
      catchError(this.handleError(url, []))
    )
  }

  /**
   * DELETE
   * @param url 
   * @param data 
   * @param errorFn 
   */
  delete(url: string, data: any = {}, errorFn?: Function): Observable<RestResponse> {
    return this.http.delete<RestResponse>(javaPath + url, data).pipe(
      map(restResponse => {
        return this.callback(restResponse, errorFn);
      })
    )
  }

  /**
   * 
   * @param restResponse 
   * @param errorFn 
   */
  callback(restResponse, errorFn?: Function) {
    if (!restResponse) {

    }
    return restResponse;
  }

  /**
   * 
   * @param operation 
   * @param result 
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed:${error.message}`);
      return of(result as T);
    }
  }
}
