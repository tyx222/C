import { UserService } from "./../../app/shared/service/user.service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the MirrorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-mirror",
  templateUrl: "mirror.html"
})
export class MirrorPage {
  petdata;
  petimg = "";
  petname = "";
  day = "";
  citys=true
  date = new Date();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MirrorPage");
    console.log(this.navParams.get("datas"));
    this.petdata = this.navParams.get("datas");
    console.log(this.navParams.get('cityid'))
    if(this.navParams.get('cityid')){
      this.citys=false
    }
    this.petimg = this.navParams.get("datas").headimgpath;
    this.petname = this.navParams.get("datas").pet_name;
    let l = ["日", "一", "二", "三", "四", "五", "六"];
    let d = new Date().getDay();
    this.day = "星期" + l[d];
  }

  gopushdiary() {
    this.navCtrl.push("PushdiaryPage", {
      datas : this.petdata,
      type:1,
      cityid:this.navParams.get('cityid')
     });
   
  }
  goDiary() {
    let datas = this.petdata;

    this.navCtrl.push("DiaryPage", {
      datas,
      cityid:this.navParams.get('cityid')
    });
  }
  video() {
    this.navCtrl.push("VideoPage",{
     datas : this.petdata,
     type:3,
     cityi:this.navParams.get('cityid')
    });
  }
}
