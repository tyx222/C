import { UserService } from "./../../app/shared/service/user.service";
import { IpamPage } from "./../ipam/ipam";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController
} from "ionic-angular";
 import { WechatChenyu } from "wechat-chenyu";
import { AlertController } from 'ionic-angular';
 declare let cordova;
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
  cityid;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: UserService,
    private actionSheetCtrl: ActionSheetController,
    public  wechat:WechatChenyu,
    public alertCtrl:AlertController
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
    this.actionSheetCtrl
      .create({
        buttons: [
          {
            text: "支付宝支付",
            handler: () => {
              this.aliPay(data);
            }
          },
          {
            text: "微信支付",
            handler: () => {
              this.weiXinPay(data);
            }
          },
          {
            text: "钱包支付",
            handler: () => {
            this.showPrompt(data.order_id)
            }
          },
          {
            text: "取消",
            role: "cancel"
          }
        ]
      })
      .present();
  }




  /**
   * 商品数据初始化
   */
  pordackinit() {
    this.type = this.navParams.get("type");
    this.imgpath = this.navParams.get("pordack").product_img2;
    this.pordackpage = this.navParams.get("pordack").product_img1[1];
    console.log(this.imgpath);
    this.imgUrl = this.navParams.get("imgUrl");
    console.log(this.imgUrl + this.imgpath);
    this.maxprice = this.navParams.get("pordack").product_price;
    this.title = this.navParams.get("pordack").product_name;
    this.cmment = this.navParams.get("pordack").product_introduce;
    this.leastpay = this.navParams.get("pordack").leastpay || 1;
    this.integral_proportion =
      this.navParams.get("pordack").integral_proportion || 1;
    this.product_guige = this.navParams.get("pordack").product_guige || 1;
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


  /**
   * 提交订单
   */
  async addappOrder() {
    let parmas = {
      order_number: this.pordacknum, //商品数量
      order_sum: this.maxprice * this.pordacknum, //订单金额
      order_code: "00001", //
      integral_num: this.linshinum, //积分总数量
      receiver_id: this.cityid, //收货地址ID
      cash_sum:
        this.maxprice - (this.rmb * this.linshinum) / this.integral_proportion, //现金金额
      order_status: "0", //订单状态 0.未支付 1. 待发货(已支付)2.已发货  3.已完成
      petcard_id: JSON.parse(localStorage.getItem("petdata")).id, //充卡id
      dept_id:this.navParams.data.pordack.dept_id, //商铺id
      petdtailorder: [
        {
          //订单商品详情
          product_id: this.navParams.get("pordack").product_id,
          product_num: this.pordacknum, //商品数量
          integral_num: this.linshinum, //积分数量
          rule: this.integral_proportion, //积分规则
          cash_price:
            this.maxprice * this.pordacknum -
            (this.rmb * this.linshinum) / this.integral_proportion, //现金金额
          unit_price: this.maxprice, //单价
          order_status: "0" //订单状态 0.未支付 1. 待发货(已支付)2.已发货  3.已完成
        }
      ]
    };
    let res = await this.http.addPetOrder({
      jsonPramter: JSON.stringify(parmas)
    });
    this.http.http.showToast(res.message);
    if (res.info == "ok") {
      this.openPayActionSheet(res.object);
    }
    console.log(res);
  }

/**
 * 钱包支付
 */
async payAppWallet(orderid,password){
  console.log(orderid)
  let parmas={
    orderid:orderid,
    num:"1",
    payment_Password:password
  }
 let res=await this.http.payAppWallet(parmas)
 this.http.presentToast(res.message)
 if(res.info=="ok"){
   this.navCtrl.push("OrderPage",{type:1})
 }
}
  /**
   * 支付密码
   */
  showPrompt(orderid) {

    const prompt = this.alertCtrl.create({
      title: "充值",
      message: "请输入充值金额",
      inputs: [
        {
          type: "password",
          name: "password",
          placeholder: "请输入支付密码"
        }
      ],
      buttons: [
        {
          text: "取消",
          handler: data => {}
        },
        {
          text: "确定",
          handler: data => {
            if (data.password.length<6) {
              //this.http.presentToast("请输入大于1的金额");
              return false;
            }
            this.payAppWallet(orderid,data.password)
          }
        }
      ]
    });
    prompt.present();
  }

  /**
   * 数量加减
   */
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
    if (res.arrayList.length < 1) {
      return;
    } else {
      this.ipamord.myname = res.arrayList[0].receiver_name;
      (this.ipamord.ipone = res.arrayList[0].phone_number),
        (this.ipamord.order =
          res.arrayList[0].province +
          " " +
          res.arrayList[0].city +
          " " +
          res.arrayList[0].county +
          " " +
          res.arrayList[0].detaile_address);
      this.cityid = res.arrayList[0].id;
    }
    console.log(res);
  }

  /**
   * 立即付款
   */
  clickEventHandler() {
    this.addappOrder();
  }


  /**
   * 
   * @param data 微信支付
   */
  async weiXinPay(data) {
    console.log(navigator.geolocation);
    let res = await this.http.weixinor({ orderid: data.order_id });
    console.log(res);
    if (res.errorcode == "200") {
      var parmas = {
        appid:res.object.appid,
        partnerid: res.object.partnerid,//payResult.object.partnerid, // merchant id 商户号
        prepayid: res.object.prepayid, // prepay id
        noncestr: res.object.nonceStr, // nonce
        timestamp: res.object.timeStamp, // timestamp
        package: "Sign=WXPay",
        sign: res.object.sign // signed string
      };
  
     this.wechat.sendPaymentRequest(res.object).then(
        result => {
          //支付成功
          this.http.presentToast(JSON.stringify(result))
        },
        error => {
          //支付失败
          this.http.presentToast(JSON.stringify(error));
        }
      );
    }
  }



  unescapeHTML(a) {
    let aNew = "" + a;
    return aNew
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'");
  }
  /**
   * 
   * @param item 支付宝调用
   */
  async aliPay(item) {
    let data = await this.http.alipayorderBeforSendPet({ orderid: item.order_id });
    try {
      let payInfo = this.unescapeHTML(data.object);
      //this.http.presentToast(data.object.replace(/alipay_sdk=alipay-sdk-java-3.3.49.ALL&/,''));
      cordova.plugins.alipay.payment(
        payInfo,
        success => {
          if (success.resultStatus === "9000") {
            this.http.presentToast("支付成功");
          } else {
            this.http.presentToast("支付失败");
          }
        },
        error => {
          //支付失败
          this.http.presentToast("支付失败");
        }
      );
    } catch (err) {
      this.http.presentToast("调用支付失败");
    }
  }
  nums() {
    console.log(this.pordacknum);
    this.pordacknum < 1 ? (this.pordacknum = 1) : "";
  }
}
