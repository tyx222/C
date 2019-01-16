import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from "./../../app/shared/service/user.service";
import { DefaultAppConfig } from "./../../app/app.config";

/**
 * Generated class for the StorecenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-storecenter',
	templateUrl: 'storecenter.html',
})
export class StorecenterPage {
	ctn: number = 1;
	cateId = "";
	title: string = '我的店铺';
	headimgpath = "";
	get imageUrl(): string {
		return this.appConfig.ip + 'imgs/';
	}

	// 店铺分类列表
	cateList: any = [];
	storeinfo: any;
	shopName = "";
	type = '1'
	ctype = false
	// 店铺商品列表
	productList: any = [];

	constructor(
		public navCtrl: NavController,
		public http: UserService,
		public appConfig: DefaultAppConfig,
		public navParams: NavParams) {

	}

	async getstoreinfo(shopid) {
		let res = await this.http.queryshopbyshopid({ shopid: shopid });
		if (res.info == "ok") {
			this.storeinfo = res.object
			this.shopName = this.storeinfo.shop_name
			this.headimgpath = res.object.head_path
		}
	}
	ionViewWillEnter() {
		if (this.navParams.get("shopid") != "" && this.navParams.get("shopid") != undefined) {
			this.getstoreinfo(this.navParams.get("shopid"))
		} else {
			this.storeinfo = JSON.parse(localStorage.getItem('storeinfo'));
			this.headimgpath = this.storeinfo.head_path;
			this.shopName = this.storeinfo.shop_name
		}
		setTimeout(() => {
			this.shopCateList()
			this.queryshopgoods()
		}, 500)

	}

	// type 1综合 2销量 3价格 ctype=true倒叙 ctype=false价格顺序
	checks(type) {
		let statu
		this.type = type
		// if (type == 3) {
		// 	this.ctype = !this.ctype
		// }
		switch (type) {
			case '1':
				statu = ""
				break;
			case '2':
				statu = "1"
				break;
			case '3':
				this.ctype = !this.ctype
				if (this.ctype) {
					statu = "2"
				} else {
					statu = "3"
				}
				break;
		}

		console.log('type 1综合 2销量 3价格 ctype=true倒叙 ctype=false价格顺序')
		console.log(this.type, this.ctype)
		this.queryshopgoods(statu)
	}

	ionViewDidLoad() {

	}

	async shopCateList() {
		let res = await this.http.queryshopclassify({ _time: 1 })
		if (res.info == 'ok') {
			this.cateList = res.arrayList;
		}
	}

	async shopProductList() {
		let params = {
			pageNum: this.ctn,
			rowsPrePage: 10,
			shop_classify_id: this.cateId
		}
		let res = await this.http.queryshopclassifygoodlist(params)
		if (res.info == 'ok') {
			this.productList = res.arrayList;
		}
	}

	// 搜索框事件
	getItems(ev: any) {
		const val = ev.target.value;
		if (val == '') {
			this.queryshopgoods()
		} else {
			this.querygoodsbyseach(val);
		}

	}

	// 商品列表
	async queryshopgoods(num?) {
		console.log(this.storeinfo)
		let params = { shopid: this.storeinfo.shop_id }
		if (this.cateId != "") {
			params["shop_classify_id"] = this.cateId;
		}
		let res = await this.http.querygoodsbyseach({ jsonPramter: JSON.stringify(params), num })
		if (res.info == "ok") {
			//this.imageUrl = res.imageUrl
			this.productList = res.arrayList;
		}
	}

	async querygoodsbyseach(keywords) {
		if (keywords == "") {
			return this.queryshopgoods()
		}
		let params = {
			shopid: this.storeinfo.shop_id,
			goods_name: keywords
		}
		if (this.cateId != "") {
			params["shopclassifyid"] = this.cateId;
		}

		let res = await this.http.querygoodsbyseach({ jsonPramter: JSON.stringify(params) });
		if (res.info == 'ok') {
			this.productList = res.arrayList;
		} else {
			this.productList = []
		}
	}

	// 分类列表点击事件
	cateinfo(item) {
		if (item) {
			this.cateId = item.classify_id
		} else {
			this.cateId = "";
		}
		this.queryshopgoods()

	}

	//商品点击事件
	productinfo(item) {
		this.navCtrl.push("StoreproductviewPage", { goodsid: item.goods_id })
	}
}
