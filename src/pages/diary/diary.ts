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
  gay=false
  data = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:UserService) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad DiaryPage");
    console.log(this.navParams)
    if(this.navParams.get("gay")){
      this.gay=this.navParams.get("gay")
    }
    this.petdata=this.navParams.get('datas')
  //  this.queryhistoryTypetypelist()
  }

  ionViewWillEnter(){
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
    // for (const iterator of res.arrayList) {
    //   iterator['path']=iterator.historycontentlist[0].path
    //   iterator['date']=iterator.updatetime.split(" ")[0]
    //   iterator['day']=iterator.updatetime.split(" ")[1]
    // }
    console.log(res)
    this.data=res.arrayList
    console.log(this.data)
    console.log(res)
  }

async  remlist(i){
   // alert("我要删除"+i)
    console.log(this.data[i])
    let parmas={
      historyTypeid:this.data[i].id
    }
    let res=await this.http.deletehistoryType(parmas)
    console.log(res)
    if(res.info=="ok"){
        this.data.splice(this.letfbor,1)
   this.letfbor=-1
    }
   console.log(this.data)
  }
  gomess(i){
    this.letfbor=-1
    this.navCtrl.push("MessagelistPage",{
      datas:this.data[i]
    })
  }
  swipeEvent(e,i) {
    // console.log(e.offsetDirection);
    if(!this.gay){
      return false
    }
    if (e.offsetDirection == 2) {
    this.letfbor=i
    }
    if (e.offsetDirection == 4) {
      this.letfbor=-1
    }
  }
}
