import { Component } from "@angular/core";
import { UserService } from "./../../app/shared/service/user.service";
import { DefaultAppConfig } from "./../../app/app.config";

import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController,
  ModalController
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
  specifications:any = [];
  comments;
  collectTxt = "";
  hasvideo = false;
  tabs = 0;
  postage=0
  get imgUrl(): string {
		return this.appConfig.ip + 'imgs/';
	  }
  constructor(
  	public modalCtrl: ModalController,
    public toastCtrl: ToastController,
	public appConfig: DefaultAppConfig,
    public navCtrl: NavController,
	public loadingCtrl: LoadingController,
	public http: UserService,
    public navParams: NavParams
  ) {}
  async pushcall() {
	let mytoken = localStorage.getItem('mytoken');
	let params = {
		goodname:this.goodsinfo.goods_name,
		goodprice:this.goodsinfo.goods_price,
		goodnumber:"1",
		goodimagepath:this.goodsinfo.cover,
		goodid:this.goodsinfo.goods_id,
		mytoken:mytoken
	}
	let res = await this.http.addshopcar(params)
	if(res.info=="ok"){
		const toast = this.toastCtrl.create({
		  message: "成功加入购物车",
		  duration: 1000,
		  position: "middle",
		  cssClass: "borbox"
		});
		toast.present();
	}else{
		const toast = this.toastCtrl.create({
		  message: "加入购物车失败",
		  duration: 1000,
		  position: "middle",
		  cssClass: "borbox"
		});
		toast.present();
	}
  }

  store(){
	this.navCtrl.push("StorecenterPage",{shopid:this.goodsinfo.shopid})
  }

  goshop() {
  	if(this.specifications.length>1){
		this.viewGuige();
	}


	if(this.specifications.length==1){
		this.goodsinfo['specifications_id'] = this.specifications[0].specifications_id
		this.goodsinfo['specifications_price'] = this.specifications[0].specifications_price
		this.goodsinfo['specifications_postage'] = this.specifications[0].postage
		this.goodsinfo['specifications_name'] = this.specifications[0].specifications_name

		let params = []
			params.push(this.goodsinfo)
		this.navCtrl.push("StoreproductorderPage", {
		  pordack: params,
		  imgUrl:this.imgUrl
		});
	}

	/*
	if(this.specifications.length<1){
		let params = []
			params.push(this.goodsinfo)
		this.navCtrl.push("StoreproductorderPage", {
		  pordack: params,
		  imgUrl:this.imgUrl
		});
	}
	*/
  }

  
  viewGuige(){
  		const loader = this.loadingCtrl.create({
		  content: "",
		});
		loader.present();

		let profileModal = this.modalCtrl.create('StoreproductguigePage', { goods: this.goodsinfo,specifications:this.specifications },{cssClass:'mymodal'});
	   profileModal.onDidDismiss(data => {
		 console.log(data);
		 loader.dismiss();
	   });
	   profileModal.present();
  
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
		if(res.object!="undefined"){
			this.goodsinfo["shop_name"] = res.object.shop_name||"";
		}else{
			this.goodsinfo["shop_name"] = "";
		}
		this.goodsinfo["quantity"] = 1

	}
  }

  async queryevaluatelist(){
	let res = await this.http.queryevaluatelist({goodid:this.goodsinfo.goods_id})
	if(res.info=="ok"){
		this.comments = res.arrayList
		res.arrayList.forEach((val,index)=>{
			val.evaluateContentList.forEach((v,i)=>{
				this.comments[index]["evaluateContentList"][i]["path"] = v.path.split(',')
			})
			
		})
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
		this.goodsinfo = res.object;
		this.specifications = res.arrayList;
		this.goodsinfo["quantity"] = 1
		this.goodsinfo["shop_name"] = ""
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
		var postage = 0;
		res.arrayList.forEach((val,idx)=>{
			if(val.postage>postage){
				postage = val.postage
			}
		})
		if(postage>0){
			this.postage = postage;
		}
		this.queryevaluatelist()

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
