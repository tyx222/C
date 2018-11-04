import { UserService } from "./../../app/shared/service/user.service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the DaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-daylist",
  templateUrl: "daylist.html"
})
export class DaylistPage {
  daypklist = [];
  constructor(
    public http: UserService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad DaylistPage");
  }
  ionViewWillEnter() {
    this.querypetpetcardfeedingrankinglist();
  }
  async querypetpetcardfeedingrankinglist() {
    let res = await this.http.querypetpetcardfeedingrankinglist();
    console.log(res);
    
    for (let item of res.arrayList) {
      console.log(item.headimgpath);
      if (item.headimgpath.indexOf("https") == -1) {
        item.headimgpath = res.imageUrl + item.headimgpath;
      }
      this.daypklist = res.arrayList;
    }
  }
}
