import { UserService } from './../../../app/shared/service/user.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RefundservivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'RefundservivePage'
})
@Component({
  selector: 'page-refundservive',
  templateUrl: 'refundservive.html',
})
export class RefundservivePage {
  orderid
  arrayList
  object
  data
  constructor(public http: UserService, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.orderid = this.navParams.get("orderid")
    this.http.queryappdtailOrderlist({ orderid: this.orderid })
      .then(x => {
        this.arrayList = x.arrayList[0]
        this.object = x.object
        this.data = x
      })
  }

  toRequstRefundPage(status) {
    this.navCtrl.push("RequstRefundPage", { data: this.data, status })
  }
}
