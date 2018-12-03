import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from "./../../app/shared/service/user.service";
import { DefaultAppConfig } from "./../../app/app.config";

/**
 * Generated class for the StorecenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storecenter',
  templateUrl: 'storecenter.html',
})
export class StorecenterPage {
	ctn:number = 1;
	cateId:number = 0;
	title:string = '我的店铺';
	headimgpath="";
	imageUrl:string = '';
	// 店铺分类列表
	cateList:any = [];
	storeinfo:any; 	
	shopName = "";
	mydata:any; 
	type='1'
	ctype=false
	// 店铺商品列表
	productList:any = [];

  	constructor(
	public navCtrl: NavController, 
	public http: UserService, 
	public appConfig :DefaultAppConfig,
	public navParams: NavParams) { 
		this.imageUrl = this.appConfig.ip + 'imgs/';
		
		console.log(this.navParams.get("shopid"))
		if(this.navParams.get("shopid")!="" && this.navParams.get("shopid")!= undefined ){
			this.getstoreinfo(this.navParams.get("shopid"))
		}else{
			this.storeinfo = JSON.parse(localStorage.getItem('storeinfo'));
			this.mydata = JSON.parse(localStorage.getItem('mydata'));
			this.headimgpath = this.mydata.headimgpath;
			this.shopName = this.storeinfo.shop_name
		}
	}

	async getstoreinfo(shopid){
		let res = await this.http.queryshopbyshopid(shopid);
		if(res.info=="ok"){
			this.storeinfo = res.object
			this.shopName = this.storeinfo.shop_name
		}
	}
	ionViewWillEnter(){
		
		
	}
	
	// type 1综合 2销量 3价格 ctype=true倒叙 ctype=false价格顺序
	checks(type){
		this.type = type
		if(type==3){
			this.ctype = !this.ctype
		}
		console.log('type 1综合 2销量 3价格 ctype=true倒叙 ctype=false价格顺序')
		console.log(this.type,this.ctype)
		this.queryshopgoods()
	}

  	ionViewDidLoad() {
	    this.shopCateList()
	    this.queryshopgoods()
  	}

	async shopCateList(){
		let res =  await this.http.queryshopclassify({_time:1})
		if(res.info == 'ok'){
			this.cateList = res.arrayList;
		}
	}

	async shopProductList(){
		let params = {
			pageNum:this.ctn,
			rowsPrePage:10,
			shop_classify_id:this.cateId
		}
		let res =  await this.http.queryshopclassifygoodlist(params)
		if(res.info == 'ok'){
			this.productList = res.arrayList;
		}
	}

  	// 搜索框事件
  	getItems(ev: any){
  		const val = ev.target.value;
		if(val==''){
			this.queryshopgoods()
		}else{
			this.querygoodsbyseach(val);
		}
	    
  	}
	
	// 商品列表
	async queryshopgoods(){
		let storeinfo = JSON.parse(localStorage.getItem('storeinfo'))

		let res = await this.http.queryshopgoods({shopid:storeinfo.shop_id})
		if(res.info=="ok"){
			//this.imageUrl = res.imageUrl
			this.productList = res.arrayList;
		}
	  }

	async querygoodsbyseach(keywords){
		
		let params = {
			
			goods_name:keywords
		}

		let res = await this.http.querygoodsbyseach({jsonPramter:JSON.stringify(params)});
		if(res.info == 'ok'){
			this.productList = res.arrayList;
		}else{
			this.productList = []
		}
	}

  	// 分类列表点击事件
  	cateinfo(item){
		if(item){
			this.cateId = item.classify_id
			this.shopProductList()
		}else{
			this.cateId = 0;
			this.queryshopgoods()
		}

  	}

  	//商品点击事件
  	productinfo(item){
		this.navCtrl.push("StoreproductviewPage",{goodsid:item.goods_id})
  	}
}
