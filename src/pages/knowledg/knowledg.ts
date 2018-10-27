import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserService } from "../../app/shared/service/user.service";
import { Buffer } from 'buffer';
import {DomSanitizer} from '@angular/platform-browser';
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
  videoid
  science_title;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: UserService,
    public toasCtrl:ToastController,
    private sanitizer: DomSanitizer
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
    this.http.http.showToast(res.message)
    if(this.type==1){
      let text=this.ids.imagepath.split("@@")
      console.log(text)
    this.html=text[1]
    this.videoid=this.sanitizer.bypassSecurityTrustResourceUrl('https://v.qq.com/txp/iframe/player.html?vid='+text[0])
  console.log(this.videoid)  
  }
    if(this.type==2){
          this.html=new Buffer(res.object.text,'base64').toString()
    }

    console.log(this.html)
  }

  
}
