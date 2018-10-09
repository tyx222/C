import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserService } from "../../app/shared/service/user.service";

/**
 * Generated class for the KnowledgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-knowledg",
  templateUrl: "knowledg.html"
})
export class KnowledgPage {
  ids: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: UserService,
    public toasCtrl:ToastController
  ) {
    this.ids = navParams.data;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad KnowledgPage");
    console.log(this.ids.science_id);
    this.Knows();
  }
  async Knows() {
    let parmas = {
      scienceid: this.ids.science_id
    };
    let res = await this.http.querypetdtailpolular(parmas);
    console.log(res.message)
    this.http.http.showToast(res.message)
    console.log(res);
  }
}
