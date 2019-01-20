import { AlertController } from 'ionic-angular';
import { UserService } from './../../app/shared/service/user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MailMallProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MailMallProvider {

  constructor(public http: UserService, public alertCtrl:AlertController) {
    console.log('Hello MailMallProvider Provider');
  }

  // 取消订单
  async cancelOrder(item):Promise<any> {
    const confirm = this.alertCtrl.create({
      title: "确定要取消订单吗？",
      buttons: [
        {
          text: "取消",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "确定",
          handler: async data => {
            console.log(item.order_id);
            let parmas = {
              orderid: item.order_id
            };
            let res = await this.http.deleteOrder(parmas);
            this.http.http.showToast(res.message);
            if (res.info == "ok") {
              return res.info
            }
          }
        }
      ]
    });
    confirm.present();
  }

  /**
 * 积分商城确认收货
 * @param item 
 * @param citem 
 */
  async surereceiveorder(data): Promise<any> {
    let parmas = {
      orderid: data
    }
    let res = await this.http.surereceiveorder(parmas)
    if (res.info == "ok") {
      this.http.presentToast("收货成功");
      // this.queryPetOrderlist();
      return true
    } else {
      this.http.presentToast("收货失败");
      return false
    }
  }

  /**
  * 主商城确认收货
  * @param order_id 
  */
  async shouhuo(order_id): Promise<any> {
    let res = await this.http.updateorderstatus({
      orderid: order_id,
      status: "3"
    });
    if (res.info == "ok") {
      this.http.presentToast("收货成功");
      // this.queryapporderlist();
      return true
    } else {
      this.http.presentToast("收货失败");
      return false
    }
  }
}
