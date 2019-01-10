import { UserService } from './../../app/shared/service/user.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GivenoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-givenotice',
  templateUrl: 'givenotice.html',
})
export class GivenoticePage {
listdata
type
imgsrc
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GivenoticePage');
  }
  ionViewWillEnter(){
   console.log(this.navParams.get("listdata"))
   this.listdata=this.navParams.get("listdata")
   this.type=this.navParams.get("type")
  }
  clickEventHandler(i){

  }
 async guanzhu(i){
  
    let parmas = {
      reciveclientid: this.listdata[i].sendConcernClient.client_id,
      concerntype: 1,
      mytoken: localStorage.getItem("mytoken"),
      recivepetcardid: this.listdata[i].petcard.id
    };
    if(!this.listdata[i].petcard.concernStatus){
     parmas.concerntype=0
    }else{
      parmas.concerntype=1
    }
    console.log(this.listdata[i]);
    let res = await this.http.addpetConcern(parmas);
    this.http.http.showToast(res.message);
    if (res.info == "ok") {
      this.listdata[i].petcard.concernStatus = !this.listdata[i].petcard.concernStatus;
    }
    console.log(res);
  }
  gomess(i){
    console.log(this.listdata[i])
    this.navCtrl.push("MessagelistPage",{
      datas:this.listdata[i].historyType
    })
  }

}
