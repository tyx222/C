import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from "./../../app/shared/service/user.service";

/**
 * Generated class for the PushcouponPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pushcoupon',
  templateUrl: 'pushcoupon.html',
})
export class PushcouponPage {
  
  title=""
  price
  full
  remark
  packege_number
  type
  term
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PushcouponPage');
  }

  async save(){
  	let storeinfo = JSON.parse(localStorage.getItem("storeinfo"));
		
  	let params = {
			title:this.title,
			price:this.price,
			full:this.full,
			remark:this.remark,
			packege_number:this.packege_number,
			type:this.type,
			term:this.term,
			shop_id:storeinfo.shop_id
		}
	let res = await this.http.addcoupon(params)
	if(res.info=="ok"){
		this.http.presentToast("发布成功")
		this.navCtrl.pop()
	}else{
		this.http.presentToast("发布失败")
	}
  }

  setPrice(price){
	if(price==1){
		this.full = 0
	}else{
	
	}
  }

  setType(type){
	this.type = type
	if(type==2){
		this.full = 0
	}
  }

}
