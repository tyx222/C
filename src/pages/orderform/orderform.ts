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
	storeinfo: any = {}
	order_list = []

	get imgUrl(): string {
		return this.appConfig.ip + 'imgs/';
	}
	constructor(public appConfig: DefaultAppConfig, public navCtrl: NavController, private actionSheetCtrl: ActionSheetController, public http: UserService, public navParams: NavParams) {
	}

	ionViewWillEnter() {
		this.queryshopapporderlist()
	}

	ionViewDidLoad() {
		this.storeinfo = JSON.parse(localStorage.getItem("storeinfo"))
	}
	lookevaluate(item) {
		this.navCtrl.push("LookevaluatePage", { type: 1, orderid: item.order_id, goodsid: item.dtailOrderList[0].goods.goods_id })
	}
	goodsdetail(item) {
		this.navCtrl.push("StoreproductviewPage", { goodsid: item.goods.goods_id })
	}

	status(id) {
		this.order_status = id;
		if (id == -1) {
			id = ''
		}
		this.queryshopapporderlist(id);
	}

	refund(item) {
		this.navCtrl.push("ShoprefundPage", { info: item })
	}

	//发货
	async send(order_id) {

		this.navCtrl.push("SendgoodsPage", { orderid: order_id })

	}
	shopoder() {
		this.navCtrl.push("ShippingoderPage")
	}

	checks(t) {
		this.living = t
	}
	// 订单列表
	async queryshopapporderlist(order_status?) {
		let params = {
			shopid: this.storeinfo.shop_id, order_status
		}

		let res = await this.http.queryshopapporderlist(params)
		if (res.info == "ok") {
			this.order_list = res.arrayList
		} else {
			this.order_list = [];
		}
	}

	// 活体筛选
	async queryapporderlistbylive() {
		let params
		if (this.living != false) {
			let params = {
				living: this.living
			}
		} else {
			let params = { t: 1 }
		}
		let res = await this.http.queryapporderlist(params)
		if (res.info == "ok") {
			this.order_list = res.arrayList
		} else {
			this.order_list = [];
		}
	}

	userinfo(item) {

		this.navCtrl.push("OrderotherPage", { client: item.client })
	}
}
