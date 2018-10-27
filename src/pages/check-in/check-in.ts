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
  parmars=[]
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
    console.log(this.navParams.get("datas"))
  let datas=this.navParams.get("datas")
  
  for (let index = 0; index < datas.length; index++) {
    let element ={
      petcardid:datas[index].id,
      recive_clientid:datas[index].client_id,
      type:'2'
    } ;
    this.parmars.push(element)
  }
  console.log(this.parmars)
  }
 async ckeckin() {
    
    if (this.kind != "") {
      console.log(this.kind);
      let petfeedingsign={petfeedingsign:this.parmars}
      let parmasdata={
        jsonPramter:JSON.stringify(petfeedingsign),
        mytoken:localStorage.getItem("mytoken")
      }
      console.log(parmasdata)
    let res=await  this.http.addpetFeedingsign(parmasdata)
    console.log(res)
    if(res.info=='ok'){
      this.checkInok = true;
    }else{
      this.http.http.showToast(res.message)
    }
    //  
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
