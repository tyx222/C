import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlaycodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playcode',
  templateUrl: 'playcode.html',
})
export class PlaycodePage {

  titles=["修改手机号","修改密码","修改支付密码"]
  type=0
title=''
disabled=false
num=60
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    if(this.navParams.get("type")){
        this.type=this.navParams.get("type") 
    }
this.title=this.titles[this.type]

    console.log('ionViewDidLoad PlaycodePage');
  }
  yanzm(){
    this.disabled=true;
    if(this.num>0){
  setInterval(()=>{
this.num--
  },1000)
    }
  
  }
}
