
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the AllordersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allorders',
  templateUrl: 'allorders.html',
})
export class AllordersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goevaluate(){
    this.navCtrl.push("EvaluatePage")
  }
  shopoder(){
    this.navCtrl.push("ShippingoderPage")
  }
  order(){
    this.navCtrl.push("OrderPage")
  }
  gouout(){
this.navCtrl.push("RefundPage")
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AllordersPage');
  }

}
