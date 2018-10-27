import { UserService } from "./../../app/shared/service/user.service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Buffer } from "buffer";
/**
 * Generated class for the QueryPetactivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-query-petactivity",
  templateUrl: "query-petactivity.html"
})
export class QueryPetactivityPage {
  title;
  activity_prize;
  content;
  cityid;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad QueryPetactivityPage");
    this.mgs();
    console.log(this.navParams.get("petdata"));
  }

  async mgs() {
    let petmas = { activityid: this.navParams.get("datas").activityid };
    let res = await this.http.queryPetactivity(petmas);
    res.object.content = new Buffer(res.object.content, "base64").toString();
    this.title = res.object.activity_title;
    this.content = res.object.content;
    this.activity_prize = res.object.activity_prize;
    this.cityid = res.object.activityid;
    console.log(res);
  }
  gohuodong() {
    let datas = this.navParams.get("petdata");
    let cityid = this.cityid;
    this.navCtrl.push("MirrorPage", {
      datas,
      cityid
    });
  }
}
