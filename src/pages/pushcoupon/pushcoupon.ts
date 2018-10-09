import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PushcouponPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pushcoupon',
  templateUrl: 'pushcoupon.html',
})
export class PushcouponPage {
  
  timeStarts:string='2018-12-12'
  timeStarts2:string='2018-12-12'
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PushcouponPage');
  }

}
