
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from "./../../app/shared/service/user.service";

/**
 * Generated class for the CouponPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon.html',
})
export class CouponPage {
	pageNum=1
	coupon = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CouponPage');
  }

  ionViewWillEnter(){
    	this.lists()
  }


	pushoupon(){
	  this.navCtrl.push("PushcouponPage")
	}

	async lists(){
	  	let storeinfo = JSON.parse(localStorage.getItem("storeinfo"));
		let params = {
			pageNum:this.pageNum,
			rowsPrePage:10,
			shopid:storeinfo.shop_id
		}
		let res = await this.http.querycouponlist(params)
		if(res.info=="ok"){
			this.coupon = res.arrayList
		}else{
			this.coupon = []
		}
	}
	// 派发优惠券
	async updatecouponstatus(coupon_id,status){
		let params = {
			status:status+"",
			coupon_id:coupon_id
		}
		let res = await this.http.updatecouponstatus(params)
		if(res.info=="ok"){
			this.lists()
		}else{
			this.http.presentToast("操作失败")
		}
	}
}
