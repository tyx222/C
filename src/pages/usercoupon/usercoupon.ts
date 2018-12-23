import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from "../../app/shared/service/user.service";

/**
 * Generated class for the UsercouponPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usercoupon',
  templateUrl: 'usercoupon.html',
})
export class UsercouponPage {
	coupon = [];
	pageNum=1
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: UserService) {
  }

  ionViewDidLoad() {
  	this.lists()
    console.log('ionViewDidLoad UsercouponPage');
  }
	async lists(){
		let params = {
			pageNum:this.pageNum,
			rowsPrePage:10
		}
		let res = await this.http.couponclientlist(params)
		if(res.info=="ok"){
			this.coupon = res.arrayList
		}else{
			this.coupon = []
		}
	}
}
