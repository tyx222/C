import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../app/shared/service/user.service';

/**
 * Generated class for the ShippingoderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shippingoder',
  templateUrl: 'shippingoder.html',
})
export class ShippingoderPage {
  type
  express_number
  express_company
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShippingoderPage');
    console.log(this.navParams)
    this.type = this.navParams.get("type")
    if (this.type != 'jf') {
      this.express_number = this.navParams.get("data").express_number
      this.express_company = this.navParams.get("data").express_company

    } else {
      let orderid = this.navParams.get("data").order_id
      this.http.queryappdtailOrderlist({ orderid })
        .then(x => {
          this.express_number = x.object.express_number
          this.express_company = x.object.express_company
        })
    }
  }

}
