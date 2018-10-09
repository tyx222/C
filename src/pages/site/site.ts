import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { ReviceServeProvider } from "./../../providers/revice-serve/revice-serve";
/**
 * Generated class for the SitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-site",
  templateUrl: "site.html",
  providers: [ReviceServeProvider]
})
export class SitePage {
  mydata = {
    myname: "",
    ipone: "",
    myipam: "",
    ipam: ""
  };
  myorder = [];

  listData = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public reviceServe: ReviceServeProvider,
    public toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SitePage");
    console.log("地址" + localStorage.getItem("myipam1"));

    if (localStorage.getItem("myipam1") !== null) {
      this.myorder = JSON.parse(localStorage.getItem("myipam1"));
      // for(let i=0;i<=JSON.parse(localStorage.getItem('myipam1')).length;i++){
      //   this.myorder.push(JSON.parse(localStorage.getItem('myipam1'))[i])
      // }
    }
    console.log(this.myorder);
    this.getRequestContact();
  }
  getRequestContact() {
    this.reviceServe.getRequestContact().subscribe(
      res => {
        this.listData = res.json();
      },
      error => {
        console.log(error);
      }
    );
  }
  save(myipam: HTMLEmbedElement) {
    console.log(myipam["_text"]);
    this.mydata.myipam = myipam["_text"];

    console.log(this.mydata);
    if (
      this.mydata.myipam == "" &&
      this.mydata.myname == "" &&
      this.mydata.myipam == "" &&
      this.mydata.ipam == ""
    ) {
      const toast = this.toastCtrl.create({
        message: "请不要留空",
        duration: 3000
      });
      toast.present();
    } else {
      const toast = this.toastCtrl.create({
        message: "保存成功",
        duration: 3000
      });
      toast.present();
      if (localStorage.getItem("myipamindex") == null) {
        localStorage.setItem("myipamindex", "0");
      }

      this.myorder.push(this.mydata);
      const myimapdatas = JSON.stringify(this.myorder);
      localStorage.setItem("myipam1", myimapdatas);
      setTimeout(() => {
        this.navCtrl.pop();
      }, 1500);
    }
  }
}
