import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UserService } from "../../app/shared/service/user.service";

/**
 * Generated class for the CkeckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-ckeck",
  templateUrl: "ckeck.html"
})
export class CkeckPage {
  ctn = 1;
  pitarr = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CkeckPage");
    this.ctn = 1;
    this.queryPetConcernlist();
  }
  async queryPetConcernlist() {
    let parmas = {
      pageNum: "1",
      rowsPrePage: "10",
      mytoken: localStorage.getItem("mytoken")
    };
    let res = await this.http.queryPetMessagelist(parmas);
    console.log(res);
  }
}
