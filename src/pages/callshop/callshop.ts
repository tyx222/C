import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Config } from "ionic-angular";
import { UserService } from "../../app/shared/service/user.service";
import { Buffer } from "buffer";

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
  petimg;
  integral_num;
  petdata;
  coneprnt;
  pordacklist = [];
  imageUrl;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: UserService
  ) {}
  ionViewWillEnter() {
    this.pordacklist = [];
    this.mypordack();
  }
  ionViewDidLoad() {
    this.petdata = JSON.parse(localStorage.getItem("petdata"));
    this.petimg = this.petdata.headimgpath;
    this.petname = this.petdata.pet_name;
    this.integral_num = this.petdata.integral_num;
    this.coneprnt = this.petdata.comment;
  }

  async mypordack() {
    let res = await this.http.querypetproductlist(this.pordack);

    for (let i = 0; i < res.arrayList.length; i++) {
      res.arrayList[i].product_img2 = res.arrayList[i].product_img1.split(",")[0];
      res.arrayList[i].product_introduce = new Buffer(
        res.arrayList[i].product_introduce,"base64").toString();
      this.pordacklist.push(res.arrayList[i]);
    }
    this.imageUrl = res.imageUrl;
    console.log(res);
  }
  goorder(i) {
    this.navCtrl.push("OrderPage", {
      pordack: this.pordacklist[i],
      type: 2,
      imgUrl: this.imageUrl
    });
  }
  goshopping(i) {
    console.log(this.pordacklist[i]);
    this.navCtrl.push("ShoppingPage", {
      pordack: this.pordacklist[i],
      type: 2,
      imgUrl: this.imageUrl,
      id: this.pordacklist[i].product_id
    });
  }
}
