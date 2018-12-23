


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PersonalcenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personalcenter',
  templateUrl: 'personalcenter.html',
})
export class PersonalcenterPage {
userimg
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalcenterPage');
  }
  ionViewWillEnter(){
    if(localStorage.getItem('mydata')){
     this.userimg=JSON.parse(localStorage.getItem('mydata')).headimgpath 
    }
   
  }
  wallet() {
    this.navCtrl.push("WalletPage");
  }
  gotoushilist(i){
    console.log(i)
    this.navCtrl.push("ToushilistPage",{type:i})
  }
  enter(){
    this.navCtrl.push("EnterPage")
  }
  goshol(){
    this.navCtrl.push("SoplPage")
  }
  Detemgs(){
    this.navCtrl.push("CalendarPage")
  }
  Allorders(){
    this.navCtrl.push("AllordersPage")
  }
 callshop(){
   this.navCtrl.push("CallshopPage")
 }
 petAdmin() {
  this.navCtrl.push("PetAdminPage");
}
setpage(){
  this.navCtrl.push("SetPage")
}
Newsword(){
  this.navCtrl.push("NewswordPage")
}
advices(){
  this.navCtrl.push("AdvicesPage")
}
Coupon(){
  this.navCtrl.push("CouponPage")
}
Ckeck() {
  this.navCtrl.push("CkeckPage");
}
}
