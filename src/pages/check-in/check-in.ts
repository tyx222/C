import { StorageProvider } from "./../../providers/storage/storage";
import { UserService } from "./../../app/shared/service/user.service";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Tabs,
  ModalController
} from "ionic-angular";

/**
 * Generated class for the CheckInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-check-in",
  templateUrl: "check-in.html"
})
export class CheckInPage {
  checkInok = false;
  kind = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: UserService,
    private tabs: Tabs,
    private modalCtrl: ModalController,
    private storage: StorageProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CheckInPage");
  }
  ckeckin() {
    if (this.kind != "") {
      console.log(this.kind);
      this.checkInok = true;
    } else {
      let mgs = "请选择签到任务";
      this.http.http.showToast(mgs);
    }
  }

  golink() {
    this.navCtrl.popToRoot();
    this.storage.write("chenkin", this.kind);
    this.tabs.select(1);

  }
}
