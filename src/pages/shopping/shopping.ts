import { Component } from "@angular/core";
import { UserService } from '../../app/shared/service/user.service';
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
  corver=[]
  videopath=''
  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http:UserService
  ) {

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
    
 
    this.shopinit()
  console.log(this.navParams)
  this.type = this.navParams.get("type")
  this.swipers();
  }


  /**
   * 积分商城商品数据初始化
   * @param data 
   */
  async pordackinit(){
    console.log(this.navParams.get("id"))
let parmas={
  PetProductid:this.navParams.get("id")
}
let res=await this.http.querypetproduct(parmas)
let products = res.object
this.pordack=res.object
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
console.log(res)
  }
  ionViewDidLoad() {
  }
  async shopinit() {
    let products
	if(this.type==1){
    this.pordack = this.navParams.get("pordack")
    products = this.navParams.get("pordack")
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
    let parmas={
      PetProductid:this.navParams.get("id")
    }
    let res=await this.http.querypetproduct(parmas)
    this.pordack = res.object
    products =res.object
    this.imgpath=products.product_img1.split(",,")
    for (let i = 2; i < this.imgpath.length; i++) {
      if(this.imgpath[i]!=''){
        this.corver.push(res.imageUrl+this.imgpath[i])
      } 
    }
    if(this.imgpath[this.imgpath.length-1]!=''){
      this.videopath=this.imgpath[this.imgpath.length-1]
    }
    this.imgUrl = res.imageUrl;
    console.log(this.corver)
		// this.pordackpage = products.product_img1[1];
	}
	

    console.log(this.imgpath);
   
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
      observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,//修改swiper的父元素时，自动初始化swiper
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
}
