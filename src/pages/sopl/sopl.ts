
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SoplPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sopl',
  templateUrl: 'sopl.html',
})
export class SoplPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoplPage');
  }
  Coupon(){
    this.navCtrl.push("CouponPage")
  }
  Orderform(){
    this.navCtrl.push("OrderformPage")
  }
  productadmin(){
    this.navCtrl.push("ProductadminPage")
  }
  storeproductcate(){
    this.navCtrl.push("StoreproductcatePage")
  }
  storecenter(){
    this.navCtrl.push("StorecenterPage")
  }
  storecarts(){
      this.navCtrl.push("StorecartsPage")
  }
  mycollect(){
        this.navCtrl.push("StorecollectPage")
  }
  staff(){
	this.navCtrl.push("StorestaffPage")
  }
}
