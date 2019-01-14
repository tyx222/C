import { UserService } from "./../../app/shared/service/user.service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the DaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-daylist",
  templateUrl: "daylist.html"
})
export class DaylistPage {
  daypklist = [];
myboject
type
  constructor(
    public http: UserService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad DaylistPage");
  }
  ionViewWillEnter() {
    this.type=this.navParams.get("type")
    if(this.navParams.get("type")==1){
       this.querypetpetcardfeedingrankinglist();
    }
   if(this.navParams.get("type")==2){
     this.daypklist=this.navParams.get("daylist")
     this.myboject=this.navParams.get("object")
    //  for (let i = 0; i <  this.daypklist.length; i++) {
    //   this.daypklist[i].petfeeding.feednum =  this.daypklist[i].feedingNum;
    //  }
     console.log(this.myboject)
     console.log(this.daypklist)
   }
   if(this.navParams.get("type")==3){
   this.daypklist=this.navParams.get("object")
   //this.myboject=this.navParams.get("object")
   //  for (let i = 0; i <  this.daypklist.length; i++) {
   //   this.daypklist[i].petfeeding.feednum =  this.daypklist[i].feedingNum;
   //  }
    console.log(this.myboject)
    console.log(this.daypklist)
  }
  }
  async querypetpetcardfeedingrankinglist() {
    let res = await this.http.querypetpetcardfeedingrankinglist();
    console.log(res);
    
    for (let item of res.arrayList) {
      console.log(item.headimgpath);
      if (item.headimgpath.indexOf("https") == -1) {
        item.headimgpath = res.imageUrl + item.headimgpath;
      }
      this.daypklist = res.arrayList;
    }
  }
  gomydata(i){
    if (
      this.daypklist[i].client_id ==
      JSON.parse(localStorage.getItem("mydata")).client_id
    ) {
      this.navCtrl.push("DetailsPage", {
        datas: {
          index:localStorage.getItem("index")
        }
      });
      return false;
    }
    this.navCtrl.push("DetailsPage", {
      id: this.daypklist[i],
      type:0
    });
  }
}
