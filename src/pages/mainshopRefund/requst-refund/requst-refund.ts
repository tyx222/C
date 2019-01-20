import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RequstRefundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'RequstRefundPage'
})
@Component({
  selector: 'page-requst-refund',
  templateUrl: 'requst-refund.html',
})
export class RequstRefundPage {
  arrayList
  object
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let x  = this.navParams.get("data")
    console.log(x);
    
    this.arrayList = x.arrayList[0]
    this.object = x.object
  }

}
