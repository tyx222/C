import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Config } from "ionic-angular";
import { UserService } from "../../app/shared/service/user.service";
import { Buffer } from 'buffer';

/**
 * Generated class for the CallshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-callshop",
  templateUrl: "callshop.html"
})
export class CallshopPage {
  pordack = {
    pageNum: 1,
    rowsPrePage: 10
  };
  petname;
  petimg
  integral_num
  petdata
  coneprnt
  pordacklist=[]
  imageUrl
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CallshopPage");
    console.log(localStorage.getItem('petdata'))
    this.petdata=JSON.parse(localStorage.getItem('petdata'))
    console.log(this.petdata)
    this.petimg=this.petdata.headimgpath
    this.petname=this.petdata.pet_name
    this.integral_num=this.petdata.integral_num
    this.coneprnt=this.petdata.comment
  }
  ionViewWillEnter() {
    
    this.mypordack();
  }
  async mypordack() {
    let res = await this.http.querypetproductlist(this.pordack);
    for (let index = 0; index < res.arrayList.length; index++) {
      res.arrayList[index].product_img1=res.arrayList[index].product_img1.split(",,")
      res.arrayList[index].product_introduce=new Buffer(res.arrayList[index].product_introduce,'base64').toString()
      this.pordacklist.push(res.arrayList[index]);
      
      
    }
    this.imageUrl=res.imageUrl
    console.log(res);
  }

  goshopping(i){
    console.log(this.pordacklist[i])
    this.navCtrl.push("ShoppingPage",{pordack:this.pordacklist[i],type:2,imgUrl:this.imageUrl})
  }
}
