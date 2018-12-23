import { UserService } from "./../../app/shared/service/user.service";
import { IpamPage } from "./../ipam/ipam";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import {WechatChenyu} from "wechat-chenyu";
/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-order",
  templateUrl: "order.html"
})
export class OrderPage {
  myipam;
  mpindex;
  ipamord = {
    myname: "",
    ipone: "",
    order: ""
  };
  imgpath = "";
  type;
  imgUrl = "";
  pordacknum = 1;
  maxprice: number;
  title;
  pordackpage;
  integral_proportion: number;
  cmment;
  tabs = 0;
  show = false;
  leastpay;
  product_guige;
  integral_num: number;
  linshinum: number = 1;
  rmb: number = 0.1;
  start: number;
  cityid
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
    console.log(this.navParams);
    this.pordackinit();
    this.querypetcard();
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
          role: 'cancel'
        }
      ]
    }).present();

  }


  pordackinit() {
    this.type = this.navParams.get("type");
    this.imgpath = this.navParams.get("pordack").product_img1[0];
    this.pordackpage = this.navParams.get("pordack").product_img1[1];
    console.log(this.imgpath);
    this.imgUrl = this.navParams.get("imgUrl");
    console.log(this.imgUrl + this.imgpath);
    this.maxprice = this.navParams.get("pordack").product_price;
    this.title = this.navParams.get("pordack").product_name;
    this.cmment = this.navParams.get("pordack").product_introduce;
    this.leastpay = this.navParams.get("pordack").leastpay||1;
    this.integral_proportion = this.navParams.get(
      "pordack"
    ).integral_proportion||1;
    this.product_guige = this.navParams.get("pordack").product_guige||1;
    console.log(this.product_guige);
  }

  upup() {
    if (this.product_guige <= this.pordacknum) {
      return false;
    }
    this.pordacknum++;
    if (
      this.linshinum > this.leastpay * this.pordacknum ||
      this.linshinum > this.integral_num
    ) {
      if (this.integral_num > this.leastpay * this.pordacknum) {
        this.linshinum = this.leastpay;
      } else {
        this.linshinum = this.integral_num;
      }
    }
  }
  outout() {
    this.pordacknum--;
    if (this.pordacknum < 1) {
      return (this.pordacknum = 1);
    }
    if (
      this.linshinum > this.leastpay * this.pordacknum ||
      this.linshinum > this.integral_num
    ) {
      if (this.integral_num > this.leastpay * this.pordacknum) {
        this.linshinum = this.leastpay;
      } else {
        this.linshinum = this.integral_num;
      }
    }
  }

  async addappOrder() {
    let parmas = {
      order_number:this.pordacknum, //商品数量
      order_sum: this.maxprice*this.pordacknum, //订单金额
      order_code: "", //
      integral_num: this.linshinum, //积分总数量
      receiver_id: this.cityid,
      cash_sum:this.maxprice - this.rmb * this.linshinum /this.integral_proportion, //实际支付金额
      order_status: 0, //订单状态 0.未支付 1. 待发货(已支付)2.已发货  3.已完成
      petcard_id: JSON.parse(localStorage.getItem("petdata")).id, //充卡id
      dept_id: this.navParams.get("pordack").dept_id, //商铺id
      petdtailorder: [
        {
          //订单商品详情
          product_id: this.navParams.get("pordack").product_id,
          product_num:  this.pordacknum, //商品数量
          integral_num: this.linshinum, //积分数量
          rule: this.integral_proportion, //积分规则
          cash_price: this.maxprice*this.pordacknum - this.rmb * this.linshinum /this.integral_proportion, //现金金额
          unit_price: this.maxprice, //单价
        }
      ]
    };
	
    let res = await this.http.addappOrder({jsonPramter:JSON.stringify(parmas)});
    this.http.http.showToast(res.message)
    if(res.info=="ok"){
      this.openPayActionSheet(res.object)
    }
    console.log(res)
  }
  lingshiup() {
    this.linshinum++;
    if (
      this.linshinum > this.leastpay * this.pordacknum ||
      this.linshinum > this.integral_num
    ) {
      if (this.integral_num > this.leastpay * this.pordacknum) {
        this.linshinum = this.leastpay;
      } else {
        this.linshinum = this.integral_num;
      }
    }
  }
  lingshiout() {
    this.linshinum--;
    if (this.linshinum < 1) {
      return (this.linshinum = 1);
    }
  }
  lingshig() {
    if (this.linshinum > this.integral_num) {
      this.linshinum = this.integral_num;
    }
    if (this.linshinum < 1) {
      this.linshinum = 1;
    }
    if (
      this.linshinum > this.leastpay * this.pordacknum ||
      this.linshinum > this.integral_num
    ) {
      if (this.integral_num > this.leastpay * this.pordacknum) {
        this.linshinum = this.leastpay;
      } else {
        this.linshinum = this.integral_num;
      }
    }
  }
  pushipam() {
    this.navCtrl.push("IpamPage");
  }
  /**
   * 查询单个宠卡
   */
  async querypetcard() {
    let parmas = {
      petcardid: JSON.parse(localStorage.getItem("petdata")).id
    };
    let res = await this.http.querypetcard(parmas);
    console.log(res);
    this.integral_num = res.object.integral_num;
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


  nums() {
    console.log(this.pordacknum);
    this.pordacknum < 1 ? (this.pordacknum = 1) : "";
  }
}
