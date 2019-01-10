import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController,
  AlertController
} from "ionic-angular";
import { UserService } from "../../app/shared/service/user.service";

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
  faceValue=0
  constructor(
    public actionSheetCtrl: ActionSheetController,
    private http: UserService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad WalletPage");
    this.getwalletbalance()
  }
/**
 * 钱包查询
 */
async  getwalletbalance(){
let res=await this.http.getwalletbalance({})
if(res.info=="ok"){

  this.faceValue=res.object
}
console.log(res)
  }

  presentActionSheet(data) {
    const actionSheet = this.actionSheetCtrl.create({
      title: "支付方式",
      buttons: [
        {
          text: "支付宝",
          role: "destructive",
          handler: () => {
            console.log(data);
           let parmas=data
           parmas.source="1"
           this.addwallet(parmas)
          }
        },
        {
          text: "微信",
          handler: () => {
            console.log(data);
            let parmas=data
            parmas.source="2"
            this.addwallet(parmas)
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
async addwallet(data){
let res=await this.http.addwallet(data)
console.log(res)
}
 
  /**
   * 充值金额弹框
   */
  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: "充值",
      message: "请输入充值金额",
      inputs: [
        {
          type: "text",
          name: "present_account",
          placeholder: "请输入充值账户"
        },
        {
          type: "number",
          name: "phonenumber",
          placeholder: "请输入手机号"
        },
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
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(data.phonenumber)) {
              let message = "请输入正确手机号";
              this.http.http.showToast(message);
              return false;
            }
            if (data.user == "") {
              this.http.presentToast("请输入充值账户");
              return false;
            }

            this.presentActionSheet(data);
          }
        }
      ]
    });
    prompt.present();
  }

  /**
   *
   */

  deposit() {
    this.navCtrl.push("DepositPage");
  }
  Record() {
    this.navCtrl.push("RecordPage");
  }
  playcode() {
    this.navCtrl.push("PlaypasswordPage");
  }
}
