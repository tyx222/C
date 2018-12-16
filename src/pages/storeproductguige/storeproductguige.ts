import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DefaultAppConfig } from "./../../app/app.config";

/**
 * Generated class for the StoreproductguigePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storeproductguige',
  templateUrl: 'storeproductguige.html',
})
export class StoreproductguigePage {
	goodsinfo:any = {};
	specifications:any = [];
	imageUrl:string="";
	goods_price
	cover
	checkitem=""
	buynum=1;
  constructor(public appConfig: DefaultAppConfig, public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  	this.goodsinfo = this.navParams.get('goods');
	this.goods_price = this.goodsinfo.goods_price
	this.cover = this.goodsinfo.cover
	this.specifications = this.navParams.get('specifications');
	this.imageUrl = this.appConfig.ip + 'imgs/';
  }

  ionViewDidLoad() {
    console.log(this.navParams);
	    console.log(this.goodsinfo);
    console.log(this.specifications);

  }

  dismiss(){
	this.viewCtrl.dismiss();
  }
  changeQuantity(type){
  	if(type==1){
		this.buynum++
	}
	if(type<1){
		this.buynum--
	}
	if(this.buynum<=1){
		this.buynum = 1;
	}
  }
	modelChange(ev){
	  this.buynum = ev;
	}
	checks(item){
		this.checkitem = item.specifications_id;
		this.cover = item.cover;
		this.goods_price = item.specifications_price;
		this.goodsinfo['specification'] = item
		this.goodsinfo['specifications_id'] = item.specifications_id;
		this.goodsinfo['specifications_name'] = item.specifications_name;
		this.goodsinfo['specifications_size'] = item.specifications_size;
		this.goodsinfo['specifications_price'] = item.specifications_price;
		this.goodsinfo['specifications_postage'] = item.postage;


	}
	pushcall(){
	
	}

	goshop(){
		let params = []
		this.goodsinfo['quantity'] = this.buynum
		params.push(this.goodsinfo)
		console.log(params)
		this.navCtrl.push("StoreproductorderPage", {
		  pordack: params,
		  imgUrl:this.imageUrl
		});
	}
}
