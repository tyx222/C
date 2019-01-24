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
}
