import { Injectable } from "@angular/core";
import { Http, RequestOptionsArgs, Headers } from "@angular/http";
import { DefaultAppConfig } from "../../app.config";
// import { HttpErrorResponse } from "@angular/common/http";
// import { throwError } from "rxjs";
import { LoadingController, ToastController } from 'ionic-angular';

@Injectable()
export class MyHttpService {
  httpTimeout: number = 3000;
  isMock: boolean = false;
  isDev: boolean = true;
  lodingtype:boolean=true;
  loadingIsOpen:any;
　　loading:any;
  get ip(): string {
    return this.appConfig.ip;
  }

 
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    setTimeout(() => {
        loading.dismiss();
    }, 1000);
  }
   showLoading(content: any = ''): void {
    　　if(typeof content != 'string'){
      　　content = '';
    　　}
    　　if (!this.loadingIsOpen) {
      　　this.loadingIsOpen = true;
      　　this.loading = this.loadingCtrl.create({
        　　content: content
      　　});
      　　this.loading.present();
      　　setTimeout(() => { //最长显示10秒
        　　this.loadingIsOpen && this.loading.dismiss();
        　　this.loadingIsOpen = false;
      　　}, 10000);
    　　}else{
      　　this.loading.setContent(content);
    　　}
  　　};
  　　 hideLoading(): void {
    　　this.loadingIsOpen && this.loading.dismiss();
    　　this.loadingIsOpen = false;
  　　};

  Get(url: string, options?: RequestOptionsArgs) {
    if (this.isMock) {
      return this.mockGet(url);
    }

    return this.http
      .get(`${this.ip}${url}`, options)
      .toPromise()
      .then(rtn => {
        let result = rtn.json() as any;
        if (rtn.status > 400 && rtn.status < 500) {
          return (result = {
            ok: false,
            msg: "资源访问错误:" + rtn.json().message,
            status: rtn.status
          });
        } else if (rtn.status >= 500) {
          return (result = {
            ok: false,
            msg: this.appConfig.debug ? rtn.json().msg : "服务器内部错误:",
            status: rtn.status
          });
        }
        if (!result.ok) {
          return this.createMessage("error", result.data) && false;
        }
        return result.data;
      })
      .catch(e => {
        this.handleError(e);
      });
  }
  Postlogin(url: string, body: any, options?: RequestOptionsArgs): Promise<any> {
    console.log(localStorage)
     if (this.isMock) {
       return this.mockGet(url);
     }
     if (!options) options = { headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'}) };
     return this.http
       .post(`${this.ip}${url}`,this.toQueryString(body) , options)
       .toPromise()
       .then(rtn => {
         let result = rtn.json() as any;
         console.log(rtn);
         if (rtn.status > 400 && rtn.status < 500) {
           result = {
             ok: false,
             data: "资源访问错误:" + rtn.json().message,
             status: rtn.status
           };
         } else if (rtn.status >= 500) {
           result = {
             ok: false,
             data: this.appConfig.debug ? rtn.json().msg : "服务器内部错误:",
             status: rtn.status
           };
         }
         if (!rtn.ok) {
           this.createMessage("error", result.msg);
           return false;
         } else {
           //  this.hideLoading()
           return result;
         }
       })
       .catch(e => this.handleError(e));
     /**超过timeout 时间就会执行以下代码,返回错误信息 */
   }
  Post(url: string, body: any, options?: RequestOptionsArgs): Promise<any> {
   console.log(localStorage)
    if (this.isMock) {
      return this.mockGet(url);
    }
    if (!options) options = { headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded',"mytoken":localStorage.getItem("mytoken")}) };
    return this.http
      .post(`${this.ip}${url}`,this.toQueryString(body) , options)
      .toPromise()
      .then(rtn => {
        console.log(rtn);
        let result = rtn.json() as any;
        console.log(result)
       
        if (rtn.status > 400 && rtn.status < 500) {
          result = {
            ok: false,
            data: "资源访问错误:" + rtn.json().message,
            status: rtn.status
          };
        } else if (rtn.status >= 500) {
          result = {
            ok: false,
            data: this.appConfig.debug ? rtn.json().msg : "服务器内部错误:",
            status: rtn.status
          };
        }
        if (!rtn.ok) {
          this.createMessage("error", result.msg);
          return false;
        } else {
          //  this.hideLoading()
          return result;
        }
      })
      .catch(e => this.handleError(e));
    /**超过timeout 时间就会执行以下代码,返回错误信息 */
  }

  Delete(url: string, options?: RequestOptionsArgs) {
    url = url.startsWith("http") ? url : `${this.ip}${url}`;
    options = options ? options : {};
    return this.http
      .delete(`${this.ip}${url}`)
      .toPromise()
      .then(rtn => {
        let result = rtn as any;
        return result.ok
          ? result.data
          : this.createMessage("error", result.data);
      });
  }

  Put(url: string, body, options?: RequestOptionsArgs) {
    url = url.startsWith("http") ? url : `${this.ip}${url}`;
    options = options ? options : {};
    // options.withCredentials = true;
    return this.http
      .put(`${this.ip}${url}`, body)
      .toPromise()
      .then(rtn => {
        let result = rtn as any;
        return result.ok
          ? result.data
          : this.createMessage("error", result.data);
      });
  }
  async handleError(res: Response) {
    switch (res.status) {
      case 404:
        this.createMessage("error", "404请求的资源不存在");
        break;
      case 500:
        let body = await res.json();
        this.createMessage(
          "error",
          this.appConfig.debug ? body.msg : "服务器内部错误"
        );
        break;
      default:
        this.createMessage("error", res.status + "尚未捕获的请求异常");

        break;
    }
    return false;
  }
  localGet(url: string) {
    return this.http.get(url).toPromise();
  }
  localGetJSON(url: string) {
    return this.http
      .get(url)
      .toPromise()
      .then(rtn => rtn.json());
  }
  mockGet(url: string) {
    return this.http
      .get("/assets/mock" + url + ".json")
      .toPromise()
      .then(rtn => rtn.json())
      .then(rtn => rtn.data);
  }
  private toQueryString(obj) {
    let result = [];
    for (let key in obj) {
      key = encodeURIComponent(key);
      let values = obj[key];
      if (values && values.constructor == Array) {
        let queryValues = [];
        for (let i = 0, len = values.length, value; i < len; i++) {
          value = values[i];
          queryValues.push(this.toQueryPair(key, value));
        }
        result = result.concat(queryValues);
      } else {
        result.push(this.toQueryPair(key, values));
      }
    }
    return result.join('&');
  }
  //参数序列化
  private toQueryPair(key, value) {
    if (typeof value == 'undefined') {
      return key;
    }
    return key + '=' + encodeURIComponent(value === null ? '' : String(value));
  }
 public showToast(mgs) {
    let toast = this.toastCtrl.create({
      message: mgs,
      duration: 2000,
      position: "middle"
    });
    toast.present(toast);
  }
  createMessage(type: "error" | "success" | "warning", text) {
    // return this._message.create(type, `${text}`);
  }
  constructor(public http: Http, public appConfig: DefaultAppConfig,public loadingCtrl:LoadingController,public toastCtrl:ToastController) {}
}
