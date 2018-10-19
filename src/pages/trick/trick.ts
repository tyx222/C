import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trick',
  templateUrl: 'trick.html',
})
export class TrickPage {

  conmment
  title
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrickPage');
    this.conmment=this.navParams.get("datas").title
    this.title=this.navParams.get("datas").content
    console.log(this.conmment)
  }

}
