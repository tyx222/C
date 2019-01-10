//import { NewlayPage } from './../newlay/newlay';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../app/shared/service/user.service';

/**
 * Generated class for the PetAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pet-admin',
  templateUrl: 'pet-admin.html',
})
export class PetAdminPage {
  callname = [];
  data = {
    pageNum: 1,
    rowsPrePage: 10,
    mytoken: ""
  };
  imgsrc
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:UserService) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad PetAdminPage');
    this.querypetcardlist()
  }
  gotongcheng(){
    if(!localStorage.getItem("mytoken")){
      this.http.http.showToast("请先登录")
      return false
    }
    this.navCtrl.push('TongchenglistPage')
  }
  async querypetcardlist() {
    let res = await this.http.querypetcardlist(this.data);
    console.log(res.arrayList.length);
    if (res.arrayList.length == 0) {
      console.log(res.arrayList.length);
    }else{
      this.callname=res.arrayList;
      this.imgsrc=res.imageUrl
      console.log(this.callname);
    }
  }
 async rempet(i){
    console.log(this.callname[i].id)
    let parmas={
      petcardid:this.callname[i].id
    }
  let res=await this.http.deletePetcard(parmas)
  if(res.errorcode=='200')
  this.http.presentToast(res.message)
  this.callname.splice(i,1)
  console.log(res)
  }
  newlay() {
    if(!localStorage.getItem("mytoken")){
      this.http.http.showToast("请先登录")
      return false
    }
    this.navCtrl.push("NewlayPage");
  }
  savepet(i){
    if(!localStorage.getItem("mytoken")){
      this.http.http.showToast("请先登录")
      return false
    }
    this.callname[i].headimgpath="https://www.petbashi.com/imgs/"+this.callname[i].headimgpath
    this.navCtrl.push("NewlayPage",{
      data:this.callname[i]
    })
  }

}
