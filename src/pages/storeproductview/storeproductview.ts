import { Component } from "@angular/core";
import { UserService } from "./../../app/shared/service/user.service";
import { DefaultAppConfig } from "./../../app/app.config";

import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";

declare let Swiper: any;
/**
 * Generated class for the StoreproductviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-storeproductview",
  templateUrl: "storeproductview.html"
})
export class StoreproductviewPage {
  imgpath = [];
  type=1;
  maxprice;
  title;
  pordackpage;
  goodsinfo:any={};
  cmment;
  collectTxt = "";
  hasvideo = false;
  tabs = 0;
  get imgUrl(): string {
		return this.appConfig.ip + 'imgs/';
	  }
  constructor(
    public toastCtrl: ToastController,
	public appConfig: DefaultAppConfig,
    public navCtrl: NavController,
	public http: UserService,
    public navParams: NavParams
  ) {}
  pushcall() {
  	let carts:any = localStorage.getItem('carts');
	if(carts){
		carts = JSON.parse(carts)
		this.goodsinfo["quantity"] = 1;
		carts.push(this.goodsinfo);
	}else{
		carts = [];
		this.goodsinfo["quantity"] = 1;
		carts.push(this.goodsinfo);
	}
	localStorage.setItem("carts",JSON.stringify(carts))

    const toast = this.toastCtrl.create({
      message: "成功加入购物车",
      duration: 1000,
      position: "middle",
      cssClass: "borbox"
    });
    toast.present();
  }

  store(){
	this.navCtrl.push("StorecenterPage",{shopid:this.goodsinfo.shopid})
  }
  goshop() {
  	let params = []
		params.push(this.goodsinfo)
    this.navCtrl.push("StoreproductorderPage", {
      pordack: params,
      imgUrl:this.imgUrl
    });
  }
  ionViewWillEnter() {
	this.shopinit();
	this.swipers();

  }
  ionViewDidLoad() {
	
  }

  async getstoreinfo(shopid){
  	let res = await this.http.queryshopbyshopid({shopid:shopid})
	if(res.info=="ok"){
		this.goodsinfo["shop_name"] = res.object.shop_name;
		this.goodsinfo["quantity"] = 1

	}
  }

  async addcollect(){
	let res = await this.http.addcollectoin({goodsid:this.goodsinfo.goods_id})
	if(res.info=="ok"){
		this.collectTxt = "已"
		this.http.presentToast('加入收藏成功')
	}else{
		this.http.presentToast('加入收藏失败')
	}
  }
  async shopinit() {
  	let goodsid = this.navParams.get("goodsid")
	
	let res = await this.http.querygoods({goodsid:goodsid})
	if(res.info=="ok"){
		console.log(res.object)
		this.goodsinfo["quantity"] = 1
		this.goodsinfo["shop_name"] = ""
		this.goodsinfo = res.object
		this.goodsinfo.turns_picture = this.goodsinfo.turns_picture.split(',')
  		this.goodsinfo.goods_introduce = this.goodsinfo.goods_introduce.split(',')

		if(this.goodsinfo.video_path!=""){
			this.hasvideo = true;
			this.goodsinfo.turns_picture.push(this.goodsinfo.cover)
			this.goodsinfo.turns_picture.reverse()
		}

		this.imgpath = this.goodsinfo.turns_picture;
		this.pordackpage = this.goodsinfo.goods_introduce;
		this.getstoreinfo(this.goodsinfo.shopid)

	}else{
		this.http.presentToast('商品信息不存在')
		this.navCtrl.pop()
	}

	console.log(this.goodsinfo)

  }

  videoopen(index){
	if(this.hasvideo && index < 1){
		console.log("视频播放",this.imgUrl + this.goodsinfo.video_path)
	}
  }

  swipers() {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal",
	  observer:true,
	  observeParents:true,
      loop: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
}
