import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UserService } from "../../app/shared/service/user.service";

/**
 * Generated class for the AdvicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-advices",
  templateUrl: "advices.html"
})
export class AdvicesPage {
  concernlist = 0;
  messagelist = 0;
  index;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AdvicesPage");
  }
  ionViewWillEnter() {
    this.querymessageNew();
  }
  godetails() {
    this.navCtrl.push("DetailsPage");
  }
  async querymessageNew() {
    let parmas = {};
    let res = await this.http.querymessageNew(parmas);
    this.concernlist = res.object.concernlist;
    this.messagelist = res.object.messagelist;
    console.log(res);
  }
  gofivebotice() {
    console.log(this.index);
    let listdata;

    if (this.index == 1) {
      listdata = this.concernlist;
    }
    if (this.index == 0) {
      listdata = this.messagelist;
    }
    this.navCtrl.push("GivenoticePage", {
      listdata:listdata,
      type:this.index
    });
  }
}
