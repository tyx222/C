import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { UserService } from '../../app/shared/service/user.service';

/**
 * Generated class for the MyorderdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'MyorderdetailPage'
})
@Component({
  selector: 'page-myorderdetail',
  templateUrl: 'myorderdetail.html',
})
export class MyorderdetailPage {
  orderid
  arrayList
  object
  stuta
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: UserService,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
  ) {
  }

  ionViewDidLoad() {
    this.orderid = this.navParams.get("order_id")
    this.stuta = this.navParams.get("stuta")
    console.log()
    this.http.queryappdtailOrderlist({ orderid: this.orderid })
      .then(x => {
        this.arrayList = x.arrayList[0]
        this.object = x.object
      })

    this.queryRefundablebyorderid(this.orderid)
  }


  //退款详情
  async queryRefundable(orderid) {
    let res = await this.http.queryRefundable({ oederid: orderid });
    if (res.info == "ok") {
      // this.refundinfo = res.object
    } else {
      this.http.presentToast('退款数据不存在')
    }
  }

  shopoder(item) {
    this.navCtrl.push("ShippingoderPage", { data: item, type: "jf" });
  }

  complain(orderid) {
    this.navCtrl.push("RefundservivePage", { type: "zc", orderid: orderid });
  }

  evidence() {
    // this.navCtrl.push('EvidencePage')
    let profileModal = this.modalCtrl.create('EvidencePage', { userId: 8675309 });
    profileModal.present();
  }


  //退款详情
  async queryRefundablebyorderid(orderid) {
    let res = await this.http.queryRefundablebyorderid({ orderid, mytoken: localStorage.getItem("mytoken")});
    if (res.info == "ok") {
      // this.refundinfo = res.object
    } else {
      this.http.presentToast('退款数据不存在')
    }
  }
}
