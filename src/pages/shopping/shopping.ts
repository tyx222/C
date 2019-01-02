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
  hasvideo = false;
  orderCount = 0;
  deposit = 0;
  pordack;
  storeinfo;
  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.type = this.navParams.get("type");
	this.shopinit();
  }
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
      pordack: this.pordack,
      imgUrl:this.imgUrl
    });
  }
  ionViewWillEnter() {
    
	this.swipers();
  }
  ionViewDidLoad() {}
  shopinit() {
	this.pordack = this.navParams.get("pordack")
	let products = this.navParams.get("pordack")
	if(this.type==1){
		console.log(products)
		this.storeinfo = JSON.parse(localStorage.getItem('storeinfo'));
		this.imgpath = products.product_img1
		products.product_introduce = products.product_introduce
		this.deposit = products.deposit;
		this.pordackpage = products.product_introduce;
		if(products.video_path!=""){
			this.hasvideo = true;
			this.imgpath.push(products.cover)
			this.imgpath.reverse()
		}
	}else{
		this.imgpath=products.product_img1.split(",")
		// this.pordackpage = products.product_img1[1];
	}
	

    console.log(this.imgpath);
    this.imgUrl = this.navParams.get("imgUrl");
    this.maxprice = products.product_price;
    this.title = products.product_name;
    this.cmment = products.product_introduce;

  }

  openVideo(index){

	if(this.hasvideo && index < 1){
		let video_path = this.navParams.get("pordack").video_path
		console.log("视频播放",this.imgUrl + video_path )
	}
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
