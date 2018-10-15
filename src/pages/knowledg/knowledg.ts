import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserService } from "../../app/shared/service/user.service";
import { Buffer } from 'buffer';
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
  html;
  type;
  science_title;
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

    console.log(this.ids);
    console.log(this.ids.type-0)
    this.type=this.ids.type-0
    this.science_title=this.ids.science_title
    this.Knows();
  }
  async Knows() {
    let parmas = {
      scienceid: this.ids.science_id
    };
    let res = await this.http.querypetdtailpolular(parmas);
    console.log(res.message)
    let html=document.getElementById("sethtml")
    this.http.http.showToast(res.message)
    this.html=new Buffer(res.object.text,'base64').toString()
    console.log(this.html)
  }

  
}
