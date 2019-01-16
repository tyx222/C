import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UserService } from "../../app/shared/service/user.service";

/**
 * Generated class for the RecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-record",
  templateUrl: "record.html"
})
export class RecordPage {
  datalist=[]
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RecordPage");
    this.querywalletorderlist()
  }
  /**
   * 充值记录查询
   */
  async querywalletorderlist() {
    let res = await this.http.querywalletorderlist({});
    if(res.info=="ok"){
      this.datalist=res.arrayList
    }else{
      this.http.presentToast("拉取失败")
    }
    console.log(res)
  }
}
