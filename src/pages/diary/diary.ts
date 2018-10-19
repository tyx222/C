import { UserService } from './../../app/shared/service/user.service';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";


/**
 * Generated class for the DiaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-diary",
  templateUrl: "diary.html"
})
export class DiaryPage {
  letfbor=-1
  petdata
  data = [
    { imgurl: "assets/imgs/images/home1_15.png", title: "标题", date: "1" },
    { imgurl: "assets/imgs/images/home1_15.png", title: "标题", date: "2" },
    { imgurl: "assets/imgs/images/home1_15.png", title: "标题", date: "3" },
    { imgurl: "assets/imgs/images/home1_15.png", title: "标题", date: "4" },
     { imgurl: "assets/imgs/images/home1_15.png", title: "标题", date: "5" },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:UserService) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad DiaryPage");
    console.log(this.navParams)
    this.petdata=this.navParams.get('datas')
    this.queryhistoryTypetypelist()
  }
  gopushdiary(){
    this.navCtrl.push("PushdiaryPage",{
      datas:this.petdata,
      type:2
    })
  }

  async queryhistoryTypetypelist(){
    let Params = {
      type: 2,
      petcardid: this.petdata.id
    };
    let res = await this.http.queryhistoryTypetypelist(Params);
    console.log(res)
  }

  remlist(i){
    alert("我要删除"+i)
    
   this.data.splice(this.letfbor,1)
   this.letfbor=-1
   console.log(this.data)
    
  }
  swipeEvent(e,i) {
    // console.log(e.offsetDirection);
    if (e.offsetDirection == 2) {
    this.letfbor=i
    }
    if (e.offsetDirection == 4) {
      this.letfbor=-1
    }
  }
}
