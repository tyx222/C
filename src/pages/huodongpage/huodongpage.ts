import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the HuodongpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-huodongpage",
  templateUrl: "huodongpage.html"
})
export class HuodongpagePage {
  text = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad HuodongpagePage");
    console.log(this.navParams.get("text"));
    this.text = this.navParams.get("text");
  }
}
