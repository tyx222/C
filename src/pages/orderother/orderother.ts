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
	client;
	shops;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: UserService) {
  	this.client = this.navParams.get('client')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderotherPage');
	this.queryshopbyclientid()
  }
  async queryshopbyclientid(){
    /*
	if(this.client.client_id!=""){
		let res = await this.http.queryshopbyclientid()
		if(res.info=="ok"){
			this.shops = res.object
		}
	}
	*/
  }
  shop(){}
  sale(){}
  buyer(){}
  order(){}
}
