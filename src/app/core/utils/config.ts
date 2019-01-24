import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

declare var javaPath;

/**
 * 
 */
@Injectable({
    providedIn: 'root'
})
export class Config {


    /**
     * 
     */
    getInitHeaders(): HttpHeaders {
        return new HttpHeaders({
            // 'x-Authentication-WorkManage': this.getUserId()
        });
    }

    /**
     * 
     * @param userId 
     */
    getUserId(): string {
        return sessionStorage.getItem("userId");
    }
}
