
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController  } from 'ionic-angular';



/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {

  constructor(public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
  }
  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: '支付方式',
      buttons: [
        {
          text: '支付宝',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '微信',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  deposit(){
    this.navCtrl.push("DepositPage")
  }
  Record(){
    this.navCtrl.push("RecordPage")
  }
  playcode(){
    this.navCtrl.push("PlaycodePage")
  }
}
