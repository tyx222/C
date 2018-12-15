import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { UserService } from "./../../app/shared/service/user.service";
import { DefaultAppConfig } from "./../../app/app.config";

/**
 * Generated class for the OrderformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderform',
  templateUrl: 'orderform.html',
})
export class OrderformPage {
	order_status;
	living = false;
	storeinfo:any = {}
	order_list=[]
	get imgUrl(): string {
		return this.appConfig.ip + 'imgs/';
	  }
  constructor(public appConfig: DefaultAppConfig,public navCtrl: NavController, private actionSheetCtrl:ActionSheetController,public http: UserService, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  	this.storeinfo = JSON.parse(localStorage.getItem("storeinfo"))
    console.log('ionViewDidLoad OrderformPage');
	this.queryshopapporderlist()
  }
	lookevaluate(){
      this.navCtrl.push("LookevaluatePage",{type:1})
  }
	
	//发货
	async send(order_id){
		let res = await this.http.updateorderstatus({orderid:order_id,status:"2"})
		if(res.info=="ok"){
			this.http.presentToast("发货成功")
			this.queryshopapporderlist()
		}else{
			this.http.presentToast("发货失败")
		}
	}
	shopoder(){
		this.navCtrl.push("ShippingoderPage")
	  }

  checks(t){
	this.living = t
  }
	// 订单列表
  async queryshopapporderlist(){
	let params = {
		shopid:this.storeinfo.shop_id
	}
  	
	let res = await this.http.queryshopapporderlist(params)
	if(res.info=="ok"){
		this.order_list = res.arrayList
	}else{
		this.order_list = [];
	}
  }

// 活体筛选
 async queryapporderlistbylive(){
 	let params
  	if(this.living!=false){
		let params = {
			living:this.living
		}
	}else{
		let params = {t:1}
	}
	let res = await this.http.queryapporderlist(params)
	if(res.info=="ok"){
		this.order_list = res.arrayList
	}else{
		this.order_list = [];
	}
  }
  
  userinfo(item){
  
	this.navCtrl.push("OrderotherPage",{client:item.client})
  }
}
