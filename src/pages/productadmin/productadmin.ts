import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PardackpushPage } from '../pardackpush/pardackpush';

/**
 * Generated class for the ProductadminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productadmin',
  templateUrl: 'productadmin.html',
})
export class ProductadminPage {

  letfbor=-1
  data = [
    { imgurl: "assets/imgs/images/goudai.png", title: "标题", date: "1" },
    { imgurl: "assets/imgs/images/goudai.png", title: "标题", date: "2" },
    { imgurl: "assets/imgs/images/goudai.png", title: "标题", date: "3" },
    { imgurl: "assets/imgs/images/goudai.png", title: "标题", date: "4" },
     { imgurl: "assets/imgs/images/goudai.png", title: "标题", date: "5" },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductadminPage');
  }
  pardackpush(){
    this.navCtrl.push(PardackpushPage)
  }
  remlist(i){
    alert("我要删除"+i)
    
   this.data.splice(this.letfbor,1)
   this.letfbor=-1
   console.log(this.data)
    
  }
  swipeEvent(e,i) {
    // console.log(e.offsetDirection);
    if (e.offsetDirection == 2) {
    this.letfbor=i
    }
    if (e.offsetDirection == 4) {
      this.letfbor=-1
    }
  }

}
