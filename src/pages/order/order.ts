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
  show = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad OrderPage");
  }
  ionViewWillEnter() {
    if ((this.myipam = JSON.parse(localStorage.getItem("myipam1")) == null)) {
      this.show = true;
    } else {
      this.myipam = JSON.parse(localStorage.getItem("myipam1"));
      console.log(localStorage.getItem("myipamindex"));
      this.mpindex = JSON.parse(localStorage.getItem("myipamindex"));
      this.ipamord.myname = this.myipam[this.mpindex].myname;
      this.ipamord.ipone = this.myipam[this.mpindex].ipone;
      this.ipamord.order = this.myipam[this.mpindex].myipam+this.myipam[this.mpindex].ipam;
      console.log(this.myipam[this.mpindex]);
      console.log(this.ipamord);
      this.show=false
    }
  }
  pushipam() {
    this.navCtrl.push(IpamPage);
  }
}
