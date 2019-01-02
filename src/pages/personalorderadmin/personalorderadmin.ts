import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersonalorderadminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personalorderadmin',
  templateUrl: 'personalorderadmin.html',
})
export class PersonalorderadminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalorderadminPage');
  }


  orderadmin(val){
	this.navCtrl.push('AllordersPage',{type:val})
  }

}
