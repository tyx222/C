import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UserService } from "../../app/shared/service/user.service";

/**
 * Generated class for the PlaycodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-playcode",
  templateUrl: "playcode.html"
})
export class PlaycodePage {
  titles = ["修改手机号", "修改密码", "修改支付密码"];
  type = 0;
  title = "";
  disabled = false;
  num = 60;
  client_phone: "";
  parmas = {
    client_password: "",
    client_phone: "",
    code: ""
  };
  parmas2 = {
    phonenumber: "",
    newPhone: "",
    code: ""
  };
  code;
  client_password;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: UserService
  ) {}

  ionViewDidLoad() {
    if (this.navParams.get("type")) {
      this.type = this.navParams.get("type");
    }
    this.title = this.titles[this.type];
console.log(this.navParams)
    console.log("ionViewDidLoad PlaycodePage");
  }
  /**
   * 调用短信验证
   */
  async sendCode() {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(this.client_phone)) {
      let message = "请输入正确手机号";
      this.http.http.showToast(message);
      return false;
    }
    let parmas = {
      client_phone: this.client_phone
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

  async isok() {
    if (this.type != 0) {
      if (this.parmas.client_password != this.client_password) {
        this.http.http.showToast("两次密码输入不一致");
        return false;
      }
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(this.client_phone)) {
        let message = "请输入正确手机号";
        this.http.http.showToast(message);
        return false;
      }
      if (this.code.length != 6) {
        this.http.http.showToast("请输入验证码");
        return false;
      }
      this.parmas.client_phone = this.client_phone;
      this.parmas.code = this.code;
      let res = await this.http.updapassword(this.parmas);
      this.http.http.showToast(res.message);
      console.log(res);
    } else {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(this.client_phone)||!myreg.test(this.parmas2.newPhone)) {
        let message = "请输入正确手机号";
        this.http.http.showToast(message);
        return false;
      }
      if (this.code.length != 6) {
        this.http.http.showToast("请输入验证码");
        return false;
      }
      this.parmas2.phonenumber = this.client_phone;
      this.parmas2.code = this.code;
      let res = await this.http.updaphonenumber(this.parmas2);
      this.http.http.showToast(res.message);
      console.log(res);
    }
  }
}
