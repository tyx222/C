import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShippingoderPage');
    console.log(this.navParams)
    this.type=this.navParams.get("type")
    this.express_number=this.navParams.get("data").express_number
    this.express_company=this.navParams.get("data").express_company
  }

}
