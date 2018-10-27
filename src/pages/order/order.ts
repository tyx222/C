import { UserService } from './../../app/shared/service/user.service';
import { IpamPage } from "./../ipam/ipam";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-order",
  templateUrl: "order.html"
})
export class OrderPage {
  myipam;
  mpindex;
  ipamord={
    myname:'',
    ipone:'',
    order:''
  };
  imgpath = '';
  type;
  imgUrl = "";
  pordacknum=1
  maxprice;
  title;
  pordackpage;
  cmment;
  tabs = 0;
  show = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:UserService) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad OrderPage");
  }
  ionViewWillEnter() {
    this.address()
   console.log(this.navParams)
  }

  pordackinit(){
    this.type = this.navParams.get("type");
    this.imgpath=this.navParams.get("pordack").product_img1[0];
    this.pordackpage = this.navParams.get("pordack").product_img1[1];
    console.log(this.imgpath);
    this.imgUrl = this.navParams.get("imgUrl");
    this.maxprice = this.navParams.get("pordack").product_price;
    this.title = this.navParams.get("pordack").product_name;
    this.cmment = this.navParams.get("pordack").product_introduce;
  }
  pushipam() {
    this.navCtrl.push("IpamPage");
  }
 async address(){
    let parmas={
      mytoken:localStorage.getItem("mytoken")
    }
   let res=await this.http.address(parmas)
   console.log(res)
   this.ipamord.myname=res.arrayList[0].receiver_name
   this.ipamord.ipone=res.arrayList[0].phone_number,
   this.ipamord.order=res.arrayList[0].province+" "+res.arrayList[0].city+" "+res.arrayList[0].county+" "+res.arrayList[0].detaile_address
  }
}
