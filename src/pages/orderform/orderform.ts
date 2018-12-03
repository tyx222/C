import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { UserService } from "./../../app/shared/service/user.service";

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
	order_status = false
	living = false
	order_list=[]
  constructor(public navCtrl: NavController, private actionSheetCtrl:ActionSheetController,public http: UserService, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderformPage');
	this.queryapporderlist()
  }
	lookevaluate(){
      this.navCtrl.push("LookevaluatePage",{type:1})
  }

	
	shopoder(){
		this.navCtrl.push("ShippingoderPage")
	  }

  checks(t){
	this.living = t
  }
	// 订单列表
  async queryapporderlist(){
	let params
  	if(this.order_status!=false){
		let params = {
			order_status:this.order_status
		}
	}
	let res = await this.http.queryapporderlist(params)
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
  
}
