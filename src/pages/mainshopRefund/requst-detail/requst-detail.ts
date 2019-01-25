import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../../app/shared/service/user.service';

/**
 * Generated class for the RequstDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'RequstDetailPage'
})
@Component({
  selector: 'page-requst-detail',
  templateUrl: 'requst-detail.html',
})
export class RequstDetailPage {
  datas;
  goods
  arrayList
  object
  message
  imgList
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: UserService,
  ) {
  }

  ionViewDidLoad() {
    let goods = this.navParams.get('goods')
    console.log(goods);

    let refundable_id = this.navParams.get('refundable_id')
    let order_id = this.navParams.get('order_id')
    this.queryRefundablebyorderid(refundable_id)
    this.queryappdtailOrderlist(order_id)
  }


  //退款详情
  async queryRefundablebyorderid(refundable_id) {
    let res = await this.http.queryRefundable({ refundable_id });
    if (res.info == "ok") {
      this.datas = res.object
    } else {
      this.http.presentToast('退款数据不存在')
    }
  }

  queryappdtailOrderlist(orderid) {
    this.http.queryappdtailOrderlist({ orderid })
      .then(x => {
        this.arrayList = x.arrayList[0]
        this.object = x.object
      })
  }


  noRequst(refundable_id) {
    if (!this.message && this.message.length == 0) {
      this.http.presentToast("请填写拒绝退款原因")
      return
    }
    const p = {
      refundable_id, status: '2', shop_reason: this.message, shop_picture: this.imgList,
    }
    this.refuserefundable(p)
  }

  okRequst(refundable_id) {
    const p = {
      refundable_id, status: '1'
    }

    this.refuserefundable(p)
  }

  async refuserefundable(data) {
    let res = await this.http.refuserefundable(data);
    if (res.info == "ok") {
      this.http.presentToast("操作成功")
    } else {
      this.http.presentToast("操作失败")
    }
  }
}
