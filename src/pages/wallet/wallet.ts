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
declare let cordova;
/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-wallet",
  templateUrl: "wallet.html"
})
export class WalletPage {
  faceValue={
    walletbalance:"",
    pay_password:''
  };
  constructor(
    public actionSheetCtrl: ActionSheetController,
    private http: UserService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public wechatChenyu: WechatChenyu
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad WalletPage");
    this.getwalletbalance();
  }
  /**
   * 钱包查询
   */
  async getwalletbalance() {
    let res = await this.http.getwalletbalance({});
    if (res.info == "ok") {
      this.faceValue = res.object;
      if( res.object.pay_password=="no"){
        this.http.presentToast("未设置支付密码")
      }
    }
    console.log(res);
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: "支付方式",
      buttons: [
        {
          text: "支付宝",
          role: "destructive",
          handler: () => {
            this.showPrompt(1);
            // this.addwallet(parmas);
          }
        },
        {
          text: "微信",
          handler: () => {
            this.showPrompt(2);
          }
        },
        {
          text: "取消",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    actionSheet.present();
  }

  /**
   * 充值
   */
  async addwallet(data) {
    let res = await this.http.addwallet(data);
    console.log(res);
  }

  /**
   * 充值金额弹框
   */
  showPrompt(i) {
    const prompt = this.alertCtrl.create({
      title: "充值",
      message: "请输入充值金额",
      inputs: [
        {
          type: "number",
          name: "face_value",
          placeholder: "金额必须大于1元"
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
            console.log(data);
            if (data.face_value - 0 <= 0) {
              this.http.presentToast("请输入大于1的金额");
              return false;
            }
            if (i == 1) {
              this.http.presentToast("支付宝支付");
              this.alipaysendaccount(data.face_value);
            }
            if (i == 2) {
              this.http.presentToast("微信支付");
              this.weixinBeforSendaccount(data.face_value);
            }

            console.log(i);
            //  this.presentActionSheet(data);
          }
        }
      ]
    });
    prompt.present();
  }

  /**
   * 微信支付唤起调用后台签名
   * @param money
   */
  async weixinBeforSendaccount(money) {
    let parmas = {
      face_value: money
    };
    let res = await this.http.weixinBeforSendaccount(parmas);
    if (res.info == "ok") {
      this.weiXinPay(res.object);
    } else {
      this.http.presentToast("充值失败");
    }
  }

  /**
   *调用微信支付
   */

  async weiXinPay(item) {
    this.http.presentToast(JSON.stringify(item));
    this.wechatChenyu.sendPaymentRequest(item).then(
      result => {
        //支付成功
        this.http.presentToast("充值成功");
        this.getwalletbalance();
      },
      error => {
        //支付失败
        this.http.presentToast(JSON.stringify(error));
      }
    );
  }

  /**
   *
   * @param 支付宝充值预处理
   */

  async alipaysendaccount(money) {
    let parmas = {
      face_value: money
    };
    let res = await this.http.alipaysendaccount(parmas);
    if (res.info == "ok") {
      this.aliPay(res.object);
    } else {
      this.http.presentToast("充值失败");
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
   * @param item 支付宝支付
   */
  async aliPay(item) {
    try {
      let payInfo = this.unescapeHTML(item);
      this.http.presentToast(payInfo);
      cordova.plugins.alipay.payment(
        payInfo,
        success => {
          if (success.resultStatus === "9000") {
            this.http.presentToast("充值成功");
            this.getwalletbalance();
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

  deposit() {
    this.navCtrl.push("DepositPage");
  }
  Record() {
    this.navCtrl.push("RecordPage");
  }
  playcode() {
    this.navCtrl.push("PlaypasswordPage", { type: this.faceValue.pay_password });
  }
}
