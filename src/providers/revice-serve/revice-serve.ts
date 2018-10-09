// revice-serve.ts
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";


@Injectable()
export class ReviceServeProvider {

    constructor(public http: Http) {}

    // 网络请求接口
    getHomeInfo(): Observable<Response> {
        return this.http.request('');
    }

    // 本地JSON文件请求
    getRequestContact() {
        return this.http.get("assets/json/city.json");
    }

}
