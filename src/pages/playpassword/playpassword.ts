import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../app/shared/service/user.service';

/**
 * Generated class for the PlaypasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playpassword',
  templateUrl: 'playpassword.html',
})
export class PlaypasswordPage {
  disabled
  client_phone
  num=60
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaypasswordPage');
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
}
