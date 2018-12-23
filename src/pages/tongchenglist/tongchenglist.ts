import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../app/shared/service/user.service';


/**
 * Generated class for the TongchenglistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-tongchenglist',
  templateUrl: 'tongchenglist.html',
})
export class TongchenglistPage {
list=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TongchenglistPage');
    this.initlist()
  }
 async initlist(){
  // let gps=await this.htpp.getGPS()
  // console.log(gps)
  let parmas={
    gps_longitude:'114.325531',//gps['longitude'],
    gps_latitude:'30.481681'//gps['latitude']
  }
  let res=await this.http.querypetcardmatinglist(parmas)
  res.arrayList.forEach(element => {
    this.list.push(element)
  });
  console.log(this.list)
  }
  godet(i){
console.log(this.list[i].client_id)
this.navCtrl.push("DetailsPage",{id:this.list[i],type:9})
  }

}
