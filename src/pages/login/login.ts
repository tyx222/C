import { UserService } from "./../../app/shared/service/user.service";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  App
} from "ionic-angular";
import { Device } from "@ionic-native/device";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: UserService,
    public device: Device,
    public toastCtrl: ToastController,
    private app:App
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
    console.log(this.device);
    // let result = await this.http.localGetJSON('/assets/test.json');
    // console.log(result);
  }

  registerPage() {
    this.navCtrl.push("RegisterPage");
  }
  async Gohome(username: HTMLTextAreaElement, password: HTMLTextAreaElement) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(username.value)) {
      let message = "请输入正确手机号";
      this.showToast(message);
      return false;
    }
    let parmas = {
      username: username.value,
      password: password.value
      // code:'',
      // divcie_key:'',
      // divcie_type:''
    };
	     console.log(JSON.stringify(parmas));

    let res = await this.http.login(parmas);
     console.log(JSON.stringify(res));
    if (res.info == "ok") {
   
      localStorage.setItem("mytoken", res.object.mytoken);
      localStorage.setItem("mydata",JSON.stringify(res.object))
      this.app.getRootNav().push('TabsPage')
    } else {
      let message = res.message;
      this.showToast(message);
    }
  }

  // forgetPassword() {
  //   this.navCtrl.push(ForgetPasswordPage);
  // }
  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: "middle"
    });
    toast.present(toast);
  }
}
