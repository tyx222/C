import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UserService } from "../../app/shared/service/user.service";

/**
 * Generated class for the PlaypasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-playpassword",
  templateUrl: "playpassword.html"
})
export class PlaypasswordPage {
  disabled;
  phonenumber:string;
  payment_password:string;
  num = 60;
  type = 1;
  code
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PlaypasswordPage");
    if (this.navParams.get("type")) {
      this.type = this.navParams.get("type");
    }
  }
  /**
   * 调用短信验证
   */
  async sendCode() {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(this.phonenumber)) {
      let message = "请输入正确手机号";
      this.http.http.showToast(message);
      return false;
    }
    let parmas = {
      client_phone: this.phonenumber,
    };
    let res = await this.http.sendCode(parmas);
    this.http.http.showToast(res.message);
    if (res.info == "ok") {
      this.disabled = true;
      if (this.num > 0) {
        setInterval(() => {
          this.num--;
          if (this.num == 0) {
            this.disabled = false;
            return false;
          }
        }, 1000);
      }
    }
    console.log(res);
  }
 async updatepayment(){
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(this.phonenumber)) {
      let message = "请输入正确手机号";
      this.http.http.showToast(message);
      return false;
    }
    if(this.payment_password.length<6){
      this.http.presentToast("密码长度不能小于6个字符")
    }
    let parmas = {
      phonenumber: this.phonenumber,
      payment_password:this.payment_password,
      code:this.code
    };
    let res =await this.http.updatepayment(parmas)
    this.http.presentToast(res.message);
    if (res.info == "ok") {
      this.payment_password = "";
      
      this.navCtrl.pop();
    }
  }
  /**
   * 设置支付密码
   */
  async SetPayment() {
    if (this.payment_password.length < 6) {
      this.http.presentToast("长度不能小于6");
      return false;
    }
    let parmas = {
      payment_password: this.payment_password
    };
    let res = await this.http.SetPayment(parmas);
    this.http.presentToast(res.message);
    if (res.info == "ok") {
      this.payment_password = "";
      this.navCtrl.pop();
    }
  }
}
