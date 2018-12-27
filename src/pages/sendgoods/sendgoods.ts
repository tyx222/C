import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from "./../../app/shared/service/user.service";

/**
 * Generated class for the SendgoodsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sendgoods',
  templateUrl: 'sendgoods.html',
})
export class SendgoodsPage {
	express_company=""
	express_code=""
	express_number=""
	orderid=""
  constructor(public navCtrl: NavController, public http: UserService, public navParams: NavParams) {
  	this.orderid = this.navParams.get("orderid")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendgoodsPage');
  }

  async confirmsend(){
  	console.log(this.orderid)
	console.log(this.express_company)
  	console.log(this.express_code)
  	console.log(this.express_number)

	if(this.express_company=='' || this.express_code=='' || this.express_number=='' ){
		return this.http.presentToast("请填全发货信息")
	}
	let res = await this.http.updateorderstatus({status:"2",orderid:this.orderid,express_company:this.express_company,express_code:this.express_code,express_number:this.express_number})
		if(res.info=="ok"){
			this.http.presentToast("发货成功")
			this.navCtrl.pop()
		}else{
			this.http.presentToast("发货失败")
		}
  }
	
	//免物流发货
  async nowuliusend(){
	let res = await this.http.updateorderstatus({status:"2",orderid:this.orderid,express_company:"none",express_code:"none",express_number:"none"})
		if(res.info=="ok"){
			this.http.presentToast("发货成功")
			this.navCtrl.pop()
		}else{
			this.http.presentToast("发货失败")
		}
  }

  cancel(){
	this.navCtrl.pop()
  }

}
