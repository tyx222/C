import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import { MyHttpService } from '../../app/shared/service/my-http.service';
import { UserService } from '../../app/shared/service/user.service';


/**
 * Generated class for the PersonalcenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personalcenter',
  templateUrl: 'personalcenter.html',
})
export class PersonalcenterPage {
userimg
usernum
username
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:UserService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalcenterPage');
  }
  ionViewWillEnter(){
    this.queryclient()
    
    if(localStorage.getItem('mydata')){
     this.userimg=JSON.parse(localStorage.getItem('mydata')).headimgpath 
     if(JSON.parse(localStorage.getItem('mydata')).clientnum ){
       this.usernum=JSON.parse(localStorage.getItem('mydata')).clientnum  
     }
    
     this.username=JSON.parse(localStorage.getItem('mydata')).client_nikename 
    }
   
  }
	

  wallet() {
    if(!localStorage.getItem("mytoken")){
      this.http.presentToast("请先登录")
      return false
    }
    this.navCtrl.push("WalletPage");
  }
  gotoushilist(i){
    console.log(i)
    if(!localStorage.getItem("mytoken")){
      this.http.presentToast("请先登录")
      return false
    }
    this.navCtrl.push("ToushilistPage",{type:i})
  }
  enter(){
    if(!localStorage.getItem("mytoken")){
      this.http.presentToast("请先登录")
      return false
    }
    this.navCtrl.push("EnterPage")
  }
  goshol(){
    if(!localStorage.getItem("mytoken")){
      this.http.presentToast("请先登录")
      return false
    }
  	let store = localStorage.getItem("storeinfo")
	console.log(store)
	if(store != "undefined"){
		this.navCtrl.push("SoplPage")
	}else{
		this.navCtrl.push("EnterPage")
	}
  }

/**
 * 初始化用户信息
 */
async queryclient(){
let res=await this.http.queryclient({})
console.log(res)
localStorage.setItem("mydata",JSON.stringify(res.object))
}


  Detemgs(){
    this.navCtrl.push("CalendarPage")
  }
  Allorders(){
    if(!localStorage.getItem("mytoken")){
      this.http.presentToast("请先登录")
      return false
    }
      this.navCtrl.push("PersonalorderadminPage")
    //this.navCtrl.push("AllordersPage")
  }
 callshop(){
  if(!localStorage.getItem("mytoken")){
    this.http.presentToast("请先登录")
    return false
  }
  if(!localStorage.getItem("petdata")){
    this.http.presentToast("您还没有添加宠卡呢")
    return false
  }
   this.navCtrl.push("CallshopPage")
 }
 petAdmin() {
   
  this.navCtrl.push("PetAdminPage");
}
setpage(){
  this.navCtrl.push("SetPage")
}
Newsword(){
  this.navCtrl.push("NewswordPage")
}
advices(){
  if(!localStorage.getItem("mytoken")){
    this.http.presentToast("请先登录")
    return false
  }
  this.navCtrl.push("AdvicesPage")
}
Coupon(){
  this.navCtrl.push("UsercouponPage")
}
Ckeck() {
  this.navCtrl.push("CkeckPage");
}
collect(){
  if(!localStorage.getItem("mytoken")){
    this.http.presentToast("请先登录")
    return false
  }
  this.navCtrl.push("StorecollectPage");
}




}
