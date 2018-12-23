import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { DefaultAppConfig } from "./../../app/app.config";

/**
 * Generated class for the ShopcallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopcall',
  templateUrl: 'shopcall.html',
})
export class ShopcallPage {
	carts = [];
	total:number = 0;
	isCheckAll = false
	checkTxt = '全选'
	checks=[];
	get imgUrl(): string {
		return this.appConfig.ip + 'imgs/';
	  }

  
  constructor(public appConfig: DefaultAppConfig,public navCtrl: NavController, public alertCtrl: AlertController,  public navParams: NavParams) {
  }
	goodinfo(goods_id){
	this.navCtrl.push("StoreproductviewPage",{goodsid:goods_id})
  }

  ionViewDidLoad() {
  console.log(this.imgUrl)
    console.log('ionViewDidLoad ShopcallPage');
  }
ionViewWillEnter() {
	this.isCheckAll = false
	this.checkTxt = '全选'
  let carts = localStorage.getItem('carts')
  	if(carts){
		this.carts = JSON.parse(carts)
	}
	this.carts.forEach((val,index)=>{
		this.checks.push({goods_id:val.goods_id,checked:false})
	})
  }



  updatecarts(){
		localStorage.setItem('carts',JSON.stringify(this.carts))
		this.total = 0
		this.carts.forEach((val,index)=>{
			if(this.checks[index].checked){
				this.total += val.goods_price * val.quantity
			}
			
		})

	}
	checkAll(){
		if(this.isCheckAll){
			this.checkTxt = '全选'
			this.carts.forEach((val,index)=>{
				this.checks[index].checked = false
			})
			this.isCheckAll = false

		}else{
			this.checkTxt = '取消全选'
			this.carts.forEach((val,index)=>{
				this.checks[index].checked = true
			})
			this.isCheckAll = true
		}
		this.updatecarts()
		
	}

	modelChange(index,ev:any){
		if(ev<1){
			return 
		}
		this.carts[index].quantity = ev
		this.updatecarts()
	}

   changeQuantity(index, type) {
   	console.log(type)
   		if(type>0){
			this.carts[index].quantity++
		}else{
			if(this.carts[index].quantity>1){
				this.carts[index].quantity--
			}
		}
		this.updatecarts()
		
	  }
	  
	  removeItem(index) {
	  	let self = this
	  	const confirm = this.alertCtrl.create({
		  title: '确定要移出购物车?',
		  buttons: [
			{
			  text: '取消',
			  handler: () => {
				console.log('Disagree clicked');
			  }
			},
			{
			  text: '确定',
			  handler: () => {
				self.carts.splice(index,1)
				localStorage.setItem('carts',JSON.stringify(self.carts))

			  }
			}
		  ]
		});
		confirm.present();
		
	  }

	  check(index) {
		this.checks[index].checked = !this.checks[index].checked;
		this.updatecarts()
	  }
	  gopay(){
		let buygoods = [];
		this.carts.forEach((val,index)=>{
			if(this.checks[index].checked){
				buygoods.push(val)
			}
		})
		this.navCtrl.push("StoreproductorderPage",{pordack:buygoods,imgUrl:this.imgUrl})
		console.log(buygoods)
	  }
}
