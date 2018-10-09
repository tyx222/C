

import { Component, ViewChild, Output, EventEmitter } from "@angular/core";
import {
  IonicPage,
  NavController,
  ModalController,
  NavParams
} from "ionic-angular";


/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-store",
  templateUrl: "store.html"
})
export class StorePage {
  titles = [
    { title: "推荐1", imgurl: "assets/imgs/images/s1.png" },
    { title: "推荐2", imgurl: "assets/imgs/images/s2.png" },
    { title: "推荐3", imgurl: "assets/imgs/images/s3.png" },
    { title: "推荐4", imgurl: "assets/imgs/images/s4.png" },
    { title: "推荐5", imgurl: "assets/imgs/images/s5.png" },
    { title: "推荐6", imgurl: "assets/imgs/images/s7.png" },
    { title: "推荐7", imgurl: "assets/imgs/images/s8.png" },
    { title: "推荐8", imgurl: "assets/imgs/images/s9.png" },
    { title: "推荐9", imgurl: "assets/imgs/images/s10.png" },
    { title: "推荐10", imgurl: "assets/imgs/images/s11.png" }
  ];
  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}
  @Output()
  private childOuter = new EventEmitter();
  @ViewChild("header")
  header;

  ionViewDidLoad() {
    console.log("ionViewDidLoad StorePage");
  }
  goshop(i) {
    console.log(i)
    this.navCtrl.push("ShoppingPage")
  }
  scan() {
    this.navCtrl.push("DetemgsPage");
  }
  goadvices() {
    this.navCtrl.push("AdvicesPage");
  }
  gonews() {
    this.navCtrl.push("NewswordPage");
  }
  scrollEvent(e) {
    let opacity = (300 - e.scrollTop) / 300; //设置滚动距离300的时候导航栏消失
    this.header._elementRef.nativeElement.style.opacity = opacity;
  }
  ionViewWillLeave() {
    // let elements = document.querySelectorAll(".tabbar");
    // if (elements != null) {
    //   Object.keys(elements).map(key => {
    //     elements[key].style.display = "flex";
    //   });
    // }
  }
}
