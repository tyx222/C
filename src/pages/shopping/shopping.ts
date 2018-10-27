import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";

declare let Swiper: any;
/**
 * Generated class for the ShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-shopping",
  templateUrl: "shopping.html"
})
export class ShoppingPage {
  imgpath = [];
  type;
  imgUrl = "";
  maxprice;
  title;
  pordackpage;
  cmment;
  tabs = 0;
  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}
  pushcall() {
    const toast = this.toastCtrl.create({
      message: "成功加入购物车",
      duration: 1000,
      position: "middle",
      cssClass: "borbox"
    });
    toast.present();
  }
  goshop() {
    this.navCtrl.push("OrderPage", {
      type: this.navParams.get("type"),
      pordack: this.navParams.get("pordack"),
      imgUrl:this.imgUrl
    });
  }
  ionViewWillEnter() {
    this.swipers();
    console.log(this.navParams.get("type"));
    console.log(this.navParams.get("pordack"));
    this.shopinit();
  }
  ionViewDidLoad() {}
  shopinit() {
    this.type = this.navParams.get("type");
    this.imgpath.push(this.navParams.get("pordack").product_img1[0]);
    this.pordackpage = this.navParams.get("pordack").product_img1[1];
    console.log(this.imgpath);
    this.imgUrl = this.navParams.get("imgUrl");
    this.maxprice = this.navParams.get("pordack").product_price;
    this.title = this.navParams.get("pordack").product_name;
    this.cmment = this.navParams.get("pordack").product_introduce;
  }

  swipers() {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      loop: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
}
