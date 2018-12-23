import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { UserService } from "../../app/shared/service/user.service";

/**
 * Generated class for the XiezhenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-xiezhen",
  templateUrl: "xiezhen.html"
})
export class XiezhenPage {
  imageUrl = "";
  xiezhenlistdata = [];
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad XiezhenPage");
    console.log(this.navParams);
    this.xiezhenlist();
  }
  showConfirm(i) {
    let datas=i
    console.log(datas)
    const confirm = this.alertCtrl.create({
      title: "删除动态",
      message: "是否删除此条动态?",
      buttons: [
        {
          text: "确定",
          handler: async () => {  
            console.log(this.xiezhenlistdata[datas])
            let historyTypeid
            if(this.xiezhenlistdata[datas].mp4){
              historyTypeid=this.xiezhenlistdata[datas].historycontentlist[0].historytypeid
            }else{
              historyTypeid=this.xiezhenlistdata[datas].historytypeid
            }
            console.log(historyTypeid)
            let parmas = {
              historyTypeid: historyTypeid
            };
            let res = await this.http.deletehistoryType(parmas);
            this.http.http.showToast(res.message);
            if (res.info == "ok") {
              this.xiezhenlistdata.splice(datas, 1);
            }

            console.log(res);
          }
        },
        {
          text: "取消",
          handler: () => {
            console.log("Agree clicked");
          }
        }
      ]
    });
    confirm.present();
  }
  pressEvent(i) {
    if (this.navParams.get("gay")) {
     // this.xiezhenlistdata[i].historytypeid
      this.showConfirm(i);
    }
  }
  async xiezhenlist() {
    let parmas = {
      pageNum: 1,
      rowsPrePage: 50,
      petcardid: this.navParams.get("datas").id,
      type: 1
    };
    let res = await this.http.queryhistoryTypetypelist(parmas);
    console.log(res);
    this.imageUrl = res.imageUrl;
    for (let i = 0; i < res.arrayList.length; i++) {
      if (res.arrayList[i].historycontentlist[0].type == 2) {
        res.arrayList[i]["cover"] = res.arrayList[i].historycontentlist[0].path;
      } else {
        res.arrayList[i].cover = res.imageUrl + res.arrayList[i].cover;
        res.arrayList[i]["mp4"] = "mp4";
      }
      this.xiezhenlistdata.push(res.arrayList[i]);
    }
  }

  clickEventHandler(i) {
    this.navCtrl.push("MessagelistPage", {
      datas: this.xiezhenlistdata[i]
    });
  }
}
