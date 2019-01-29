import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../app/shared/service/user.service';
import { DefaultAppConfig } from "./../../app/app.config";

/**
 * Generated class for the StorerefundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-storerefund',
	templateUrl: 'storerefund.html',
})
export class StorerefundPage {
	order_status: any = 0
	order_list = []
	get imgUrl(): string {
		return this.appConfig.ip + 'imgs/';
	}
	constructor(public navCtrl: NavController,
		public appConfig: DefaultAppConfig,
		public http: UserService,
		public navParams: NavParams) {
	}

	ionViewDidLoad() {
		this.queryRefundablelist()
		console.log('ionViewDidLoad StorerefundPage');
	}

	refund(item) {
		this.navCtrl.push("ShoprefundPage", { info: item })
	}

	lookevaluate(item) {
		this.navCtrl.push("LookevaluatePage", { type: 1, orderid: item.order_id, goodsid: item.dtailOrderList[0].goods.goods_id })
	}
	status(index) {
		this.order_status = index
		this.queryRefundablelist()
	}

	async queryRefundablelist() {
		let params = {
			shopid: JSON.parse(localStorage.getItem('storeinfo')).shop_id
		}
		if (this.order_status === '') {

		} else {
			params['status'] = this.order_status
		}

		let res = await this.http.queryRefundablelist(params)
		if (res.info == "ok") {
			this.order_list = res.arrayList
		} else {
			this.order_list = [];
		}
	}


	goodsdetail(refundable_id, order_id,goods) {
		this.navCtrl.push('RequstDetailPage', { refundable_id, order_id, goods })
		// this.navCtrl.push('ShoprefundPage')
	}
}
