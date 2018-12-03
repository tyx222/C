import { UserService } from "./../../app/shared/service/user.service";
import { IpamPage } from "./../ipam/ipam";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import {WechatChenyu} from "wechat-chenyu";
/**
 * Generated class for the StoreproductorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-storeproductorder",
  templateUrl: "storeproductorder.html"
})
export class StoreproductorderPage {

 goods:any =[];
 goodsnum:any = [];
 goodsids = [];
 shopName = "";
 total = 0;
  ipamord = {
    myname: "",
    ipone: "",
    order: ""
  };
  imgpath = "";
  imgUrl = "";
  tabs = 0;
  show = false;
  platformprice:number = 0;
  cityid
  deposit = 0
  remark
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: UserService,
    private actionSheetCtrl:ActionSheetController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad OrderPage");
  }
  ionViewWillEnter() {
    this.address();
    this.pordackinit();
  }

  openPayActionSheet(data) {
    this.actionSheetCtrl.create({
      buttons: [
        {
          text: "支付宝支付",
          handler: () => {
           // this.aliPay(data);
          }
        },
        {
          text: "微信支付",
          handler: () => {
            this.weiXinPay(data);
          }
        },
        {
          text:"取消",
          role: 'cancel',
		  handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    }).present();

  }


  pordackinit() {
  	this.goods = this.navParams.get("pordack")
	if(this.goods.length<1){
		this.http.presentToast('请选择至少一个商品提交')
		return this.navCtrl.pop();
	}
	this.goods.forEach((val,idx)=>{
		this.goodsids.push(val.goods_id)
		this.goodsnum[idx] = val.quantity;
		this.total += val.goods_price * val.quantity 
		if(val.deposit>0){
			this.deposit += val.deposit
		}
		if(val.shop_name){
			this.shopName = val.shop_name
		}
	})
    this.imgUrl = this.navParams.get("imgUrl");
	console.log(this.goods)
  }

  upup(index) {
    this.goodsnum[index]++;
	this.nums(index)
  }
  outout(index) {
    if (this.goodsnum[index] > 1) {
		this.goodsnum[index]--
		this.nums(index)
    }
  }

  nums(index) {
  	this.total = 0
    this.goods.forEach((val,idx)=>{
		this.total += val.goods_price * this.goodsnum[idx]
	})
  }


  async addappOrder() {
	let goodsOrder = []
	this.goods.forEach((val,idx)=>{
		goodsOrder.push({good_id:val.goods_id,good_num:this.goodsnum[idx],unit_price:val.goods_price})
	})
	let goodsnum = 0;
	this.goods.forEach((val,idx)=>{
		goodsnum += this.goodsnum[idx]
	})

    let parmas = {
      order_number:goodsnum, //商品数量
      order_sum: this.total, //订单金额
      receiver_id: this.cityid,
	  remarks:this.remark, //备注
      cash_sum: this.total, //实际支付金额
      shopid: this.goods[0].shopid, //商铺id
	  deposit:this.deposit,
	  couponid:'',
	  coupon_amount:'0',
      petdtailorder: goodsOrder
    };

	console.log(parmas)
	
    let res = await this.http.addappstoreOrder({jsonPramter:JSON.stringify(parmas)});
    if(res.info=="ok"){
		this.updatecarts()
		this.openPayActionSheet(res.object)
    }else{
		this.http.presentToast('订单获取错误')
	}
    console.log(res)
  }
  
  pushipam() {
    this.navCtrl.push("IpamPage");
  }

  updatecarts(){
	let carts = JSON.parse(localStorage.getItem('carts'))
	let newCarts = [];
	carts.forEach((val,idx)=>{
		if(this.goodsids.indexOf(val.goods_id)<0){
			newCarts.push(val)
		}
	})
	localStorage.setItem("carts",JSON.stringify(newCarts))
  }
  

  async address() {
    let parmas = {
      mytoken: localStorage.getItem("mytoken")
    };
    let res = await this.http.address(parmas);
	if(res.arrayList.length<1){
		return
	}else{
		this.ipamord.myname = res.arrayList[0].receiver_name;
		this.ipamord.ipone = res.arrayList[0].phone_number,
		this.ipamord.order =
        res.arrayList[0].province +
        " " +
        res.arrayList[0].city +
        " " +
        res.arrayList[0].county +
        " " +
        res.arrayList[0].detaile_address;
        this.cityid=res.arrayList[0].id
	}
    console.log(res);
    
  }

  /**
   * 立即付款
   */
  clickEventHandler() {
    this.addappOrder()
  }

async weiXinPay(data){
console.log(data.order_id)
let res=await this.http.weixinor({orderid:data.order_id})
console.log(res)
// this.http.http.http.post("wxpay/createPay",data).toPromise().then(res=>{
//   console.log(res)
// })
};


  
}
