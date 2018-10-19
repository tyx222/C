import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StorageProvider } from "../../providers/storage/storage";

/**
 * Generated class for the CarePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-care",
  templateUrl: "care.html"
})
export class CarePage {
  list = ["综合", "销量", "距离"];
  shownumber: number;
  tabslist = ["综合", "信用", "价格降序", "价格升序"];
  tabslist1 = ["综合1", "信用1", "价格降序1", "价格升序1"];
  tabslist2 = ["综合12", "信用12", "价格降序12", "价格升序12"];
  toggle = true;
  myInput: "";
  listget: number;
  listget1: number;
  listget2: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: StorageProvider
  ) {}
  listshow(i) {
    if (this.shownumber != i) {
      this.shownumber = i;
    } else {
      this.shownumber = -1;
    }
  }

  onCancel(e) {
    console.log(e);
    console.log(this.myInput);
  }
  shouldShowCancel() {
    console.log(this.myInput);
  }
  onlist(i) {
    this.listget = i;
    this.listget2 = -1;
    this.listget1 = -1;
    setTimeout(() => {
      this.shownumber = undefined;
    }, 500);
  }
  onlist1(i) {
    this.listget1 = i;
    this.listget2 = -1;
    this.listget = -1;
    setTimeout(() => {
      this.shownumber = undefined;
    }, 500);
  }
  onlist2(i) {
    this.listget2 = i;
    this.listget = -1;
    this.listget1 = -1;
    setTimeout(() => {
      this.shownumber = undefined;
    }, 500);
  }
  // ionViewDidLoad() {
  //   console.log("ionViewDidLoad CarePage");

  // }
  ionViewWillEnter() {
    if(this.storage.read("chenkin")==null){
      console.log("我是从别的页面来的")
    }else{
      console.log("我是签到来的")
    }
  }
  ionViewWillLeave(){
    localStorage.removeItem("chenkin")
  }
}
