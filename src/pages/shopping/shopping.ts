import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

declare let Swiper: any;
/**
 * Generated class for the ShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping',
  templateUrl: 'shopping.html',
})
export class ShoppingPage {
  imgUrl= [
    "/assets/imgs/images/callbg.png",
  "/assets/imgs/images/callbg.png" 
  ];
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }
pushcall(){
  const toast = this.toastCtrl.create({
    message: '成功加入购物车',
    duration: 1000,
    position: 'middle',
    cssClass:"borbox"
  });
  toast.present();
}
goshop(){
  this.navCtrl.push("OrderPage")
}
  ionViewDidLoad() {
 
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

}
