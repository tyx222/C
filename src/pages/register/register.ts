import { UserService } from "./../../app/shared/service/user.service";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  gotopage: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }
  async register(username: HTMLTextAreaElement, password: HTMLTextAreaElement) {
    console.log(username.value, password.value);
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(username.value)) {
      let message = "请输入正确手机号";
      this.showToast(message);
      return false;
    }
    if (password.value.length < 6) {
      let message = "密码长度要大于6位";
      this.showToast(message);
      return false;
    }

    let data = {
      client_username: username.value,
      client_password: password.value
    };
    let res = await this.http.registerclient(data);
    console.log(res.info);
    if (res.info == "ok") {
      this.gotopage=true
    }
  }
  gologin(){
    this.navCtrl.push("LoginPage")
  }
  goenter(){
    this.navCtrl.push("EnterPage")
  }
  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: "middle"
    });
    toast.present(toast);
  }
}
