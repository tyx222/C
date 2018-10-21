import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UserService } from "../../app/shared/service/user.service";

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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CallshopPage");
  }
  ionViewWillEnter() {
    this.mypordack();
  }
  async mypordack() {
    let res = await this.http.querypetproductlist(this.pordack);
    console.log(res);
  }
}
