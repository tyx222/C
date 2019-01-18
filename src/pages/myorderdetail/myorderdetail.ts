import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: UserService) {
  }

  ionViewDidLoad() {
    this.orderid = this.navParams.get("order_id")
    console.log()
    this.http.queryappdtailOrderlist({ orderid: this.orderid })
      .then(x => {
        this.arrayList = x.arrayList[0]
      })
  }

}
