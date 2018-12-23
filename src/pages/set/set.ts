import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,App  } from 'ionic-angular';

/**
 * Generated class for the SetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,private app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPage');
  }
  goder(){
    this.navCtrl.push("IpamPage")
  }
  gosetuser(){
    this.navCtrl.push("SetuserPage")
  }
  playcode(i){
console.log(i)
this.navCtrl.push("PlaycodePage",{
  type:i
})
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      //title: 'Use this lightsaber?',
      message: '是否退出当前账号',
      buttons: [
        {
          text: '确定',
          handler: () => {
            localStorage.clear()
            this.app.getRootNav().push("LoginPage")
            setTimeout(() => {
              this.navCtrl.popToRoot();   
          },1000);
          }
        },
        {
          text: '取消',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  logout(){
	localStorage.clear()  
	this.navCtrl.pop()
  }
}
