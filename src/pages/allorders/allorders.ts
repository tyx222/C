import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController,
  AlertController
} from "ionic-angular";
import { UserService } from "../../app/shared/service/user.service";
import { WechatChenyu } from "wechat-chenyu";
import { DefaultAppConfig } from "./../../app/app.config";

declare let cordova;

/**
 * Generated class for the AllordersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-allorders",
  templateUrl: "allorders.html"
})
export class AllordersPage {
  order_status: any;
  order_list = [];
  httpResponseData: any;
  ordertype = 1;
  get imgUrl(): string {
    return this.appConfig.ip + "imgs/";
  }
  constructor(
    private http: UserService,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public wechatChenyu: WechatChenyu,
    public appConfig: DefaultAppConfig,
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.order_status = -1;
  }
  goevaluate(item, citem) {
    this.navCtrl.push("EvaluatePage", {
      type: 0,
      orderid: item.order_id,
      goodsid: citem.goods.goods_id,
      cover: this.imgUrl + citem.goods.cover
    });
  }
  lookevaluate(item, citem) {
    if (this.ordertype == 2) {
      this.navCtrl.push("LookevaluatePage", {
        type: 0,
        orderid: item.order_id,
        goodsid: citem.goods.goods_id
      });
    } else {
      this.navCtrl.push("LookevaluatePage", {
        types: "jf",
        orderid: item.order_id,
      })

    }
  }
  shopoder(item) {
    this.navCtrl.push("ShippingoderPage", { data: item, type: "jf" });
  }


  /**
   * 主商城确认收货
   * @param order_id 
   */
  async shouhuo(order_id) {
    let res = await this.http.updateorderstatus({
      orderid: order_id,
      status: "3"
    });
    if (res.info == "ok") {
      this.http.presentToast("收货成功");
      this.queryapporderlist();
    } else {
      this.http.presentToast("收货失败");
    }
  }

  /**
   * 积分商城确认收货
   * @param item 
   * @param citem 
   */
  async surereceiveorder(data) {
    let parmas = {
      orderid: data
    }
    let res = await this.http.surereceiveorder(parmas)
    if (res.info == "ok") {
      this.http.presentToast("收货成功");
      this.queryPetOrderlist();
    } else {
      this.http.presentToast("收货失败");
    }
  }
  /**
   * 积分商城申述
   */
  complain(orderid) {
    this.navCtrl.push("RefundPage", { type: "jf", orderid: orderid });
  }

  //尾款支付
  orderPaywk(item, citem) {
    this.order(item, citem)
  }

  // 立即付款
  order(item, citem) {
    //this.navCtrl.push("OrderPage")
    this.actionSheetCtrl
      .create({
        buttons: [
          {
            text: "支付宝支付",
            handler: () => {

              if (this.ordertype == 2) {
                this.aliPay(item); //调用主商城
              }
              if (this.ordertype == 1) {
                this.aliPay2(item); //调用积分商城
              }
            }
          },
          {
            text: "微信支付",
            handler: () => {
              this.weiXinPay(item);
            }
          }, {
            text: "钱包支付",
            handler: () => {
              this.showPrompt(item.order_id)
            }
          },
          {
            text: "取消",
            role: "cancel"
          }
        ]
      })
      .present();

    console.log(item);
  }


  /**
   * 钱包支付
   */
  async payAppWallet(orderid, password) {
    console.log(orderid)
    let parmas = {
      orderid: orderid,
      num: "1",
      payment_Password: password
    }
    let res = await this.http.payAppWallet(parmas)
    this.http.presentToast(res.message)
    if (res.info == "ok") {
      this.navCtrl.push("OrderPage", { type: 1 })
    }
  }
  /**
   * 支付密码
   */
  showPrompt(orderid) {

    const prompt = this.alertCtrl.create({
      title: "支付",
      message: "请输入支付密码",
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
          handler: data => { }
        },
        {
          text: "确定",
          handler: data => {
            if (data.password.length < 6) {
              //this.http.presentToast("请输入大于1的金额");
              return false;
            }
            this.payAppWallet(orderid, data.password)
          }
        }
      ]
    });
    prompt.present();
  }
  /**
   * 积分商城支付宝调用
   * @param item 
   */
  async aliPay2(item) {
    let data = await this.http.alipayorderBeforSendPet({ orderid: item.order_id });
    try {
      let payInfo = this.unescapeHTML(data.object);
      //this.http.presentToast(data.object.replace(/alipay_sdk=alipay-sdk-java-3.3.49.ALL&/,''));
      cordova.plugins.alipay.payment(
        payInfo,
        success => {
          if (success.resultStatus === "9000") {
            this.http.presentToast("支付成功");
            if (this.ordertype == 2) {
              this.queryapporderlist(); //调用主商城
            }
            if (this.ordertype == 1) {
              this.queryPetOrderlist(); //调用积分商城
            }
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

  /**
   * 
   * @param item 微信支付
   */
  async weiXinPay(item) {
    let payResult = await this.http.weixinor({ orderid: item.order_id });
    console.log(payResult);
    var prepay = payResult.object.package.split("=");
    var params = {
      partnerid: "1510171201", //payResult.object.partnerid, // merchant id 商户号
      prepayid: prepay[1], // prepay id
      noncestr: payResult.object.nonceStr, // nonce
      timestamp: payResult.object.timeStamp, // timestamp
      sign: payResult.object.sign // signed string
    };

    this.http.presentToast(JSON.stringify(payResult.object));

    this.wechatChenyu.sendPaymentRequest(payResult.object).then(
      result => {
        //支付成功
        this.http.presentToast(JSON.stringify(result));
        if (this.ordertype == 2) {
          this.queryapporderlist(); //调用主商城
        }
        if (this.ordertype == 1) {
          this.queryPetOrderlist(); //调用积分商城
        }
      },
      error => {
        //支付失败
        this.http.presentToast(JSON.stringify(error));
      }
    );
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
   * @param item 支付宝支付
   */
  async aliPay(item) {
    let data;
    if (this.ordertype == 1) {
      data = await this.http.alipayorderBeforSendPet({
        orderid: item.order_id
      });
    }
    if (this.ordertype == 2) {
      data = await this.http.alipay({ orderid: item.order_id });
    }

    console.log(data);
    try {
      let payInfo = this.unescapeHTML(data);
      this.http.presentToast(payInfo);
      cordova.plugins.alipay.payment(
        payInfo,
        success => {
          if (success.resultStatus === "9000") {
            this.http.presentToast("支付成功");
            if (this.ordertype == 2) {
              this.queryapporderlist(); //调用主商城
            }
            if (this.ordertype == 1) {
              this.queryPetOrderlist(); //调用积分商城
            }
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

  gouout(orderid) {
    this.navCtrl.push("RefundservivePage", { type: "zc", orderid: orderid });
  }
  // ionViewDidLoad() {
  //   console.log("ionViewDidLoad AllordersPage");
  // }

  /**
   * @param ordertype 订单类型   2 主商城  1积分商城
   */
  ionViewDidLoad() {
    console.log(this.navParams.get("type"));
    if (this.navParams.get("type")) {
      this.ordertype = this.navParams.get("type");
    }

    if (this.ordertype == 2) {
      this.queryapporderlist(); //调用主商城
    }
    if (this.ordertype == 1) {
      this.queryPetOrderlist(); //调用积分商城
    }
    console.log(this.ordertype);
    //this.statuslist()
  }

  /**
   * 积分商城所有订单
   */
  async queryPetOrderlist() {
    let parmas
    if (this.order_status != -1) {
      parmas = {
        pageNum: 1,
        rowsPrePage: 50,
        order_status: this.order_status
      };
    } else {
      parmas = {
        pageNum: 1,
        rowsPrePage: 50,
      };
    }
    let res = await this.http.statuslist(parmas);
    if (res.info == "ok") {
      for (let i = 0; i < res.arrayList.length; i++) {
        res.arrayList[i].petdtailorder.petproduct.product_img2 = res.arrayList[
          i
        ].petdtailorder.petproduct.product_img1.split(",")[0];
      }
      this.order_list = res.arrayList;
    } else {
      this.order_list = [];
    }
    console.log(res);
  }

  async queryapporderlist() {
    if (this.order_status == -1) {
      this.order_status = '';
    }
    let params = {
      order_status: this.order_status
    };

    let res = await this.http.queryapporderlist(params);
    if (res.info == "ok") {
      this.order_list = res.arrayList;
    } else {
      this.order_list = [];
    }
  }
  // async statuslist() {
  //   let parmas = {
  //     pageNum: 1,
  //     rowsPrePage: 50,
  //     order_status: this.order_status
  //   };
  //   let res = await this.http.statuslist(parmas);
  //   this.order_list = res.arrayList;
  //   for (let i = 0; i < res.arrayList.length; i++) {
  //     res.arrayList[i].petdtailorder.petproduct.product_img2 = res.arrayList[
  //       i
  //     ].petdtailorder.petproduct.product_img1.split(",")[0];
  //   }
  //   this.order_list = res.arrayList;
  //   console.log(res);
  // }
  status(index) {
    this.order_status = index;
    if (this.ordertype == 2) {
      this.queryapporderlist(); //调用主商城
    }
    if (this.ordertype == 1) {
      //调用积分商城
      this.queryPetOrderlist();
    }

    console.log(index);
  }

  // 取消订单
  cancelOrder(item) {
    const confirm = this.alertCtrl.create({
      title: "确定要取消订单吗？",
      buttons: [
        {
          text: "取消",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "确定",
          handler: async data => {
            console.log(item.order_id);
            if (this.ordertype == 1) {
              let parmas = {
                orderid: item.order_id
              };
              let res = await this.http.deletePetOrder(parmas);
              this.http.http.showToast(res.message);
              if (res.info == "ok") {
                this.queryPetOrderlist();
              }
            }
          }
        }
      ]
    });
    confirm.present();
  }

  goodsdetail(order_id) {
    console.log(order_id)
    this.navCtrl.push("MyorderdetailPage", { order_id, stuta: this.order_status });
  }
  goodsjf(item) {
    console.log(item)
    this.navCtrl.push("ShoppingPage", { id: item.petdtailorder.product_id, type: 2 });
  }
  goShop(shopid) {
    this.navCtrl.push("StorecenterPage", { shopid });
  }
}
