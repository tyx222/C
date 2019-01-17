import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import {observable} from "rxjs/symbol/observable";
/*
  Generated class for the SharedWebSocketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedWebSocketProvider {
  ws:WebSocket
  constructor(public http: HttpClient) {
    console.log('Hello SharedWebSocketProvider Provider');
  }
  createObservableSocket(url:string ):Observable<any>{
    this.ws = new WebSocket(url);
    return new Observable<any>(
      observable =>{
        this.ws.onmessage = (event)=> observable.next(event.data);
        this.ws.onerror = (event)=>observable.error(event);
        this.ws.onclose = (event)=>observable.complete();
      }
    )
  }
  sendMessage(message:string){
    this.ws.send(message);
  }

}
