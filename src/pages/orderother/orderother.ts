import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from "./../../app/shared/service/user.service";

/**
 * Generated class for the OrderotherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderother',
  templateUrl: 'orderother.html',
})
export class OrderotherPage {
	client_id = "";
	shops
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: UserService) {
  	this.client_id = this.navParams.get('client_id')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderotherPage');
	console.log(this.client_id)
	this.queryshopbyclientid()
  }
  async queryshopbyclientid(){
	if(this.client_id!=""){
		let res = await this.http.queryshopbyclientid()
		if(res.info=="ok"){
			this.shops = res.object
		}
	}
  }
  shop(){}
  sale(){}
  buyer(){}
  order(){}
}
