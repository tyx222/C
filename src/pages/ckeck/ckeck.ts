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
      pageNum: 1,
      rowsPrePage: 50,
    };
    let res = await this.http.queryPetConcernlist(parmas);
    for (let i = 0; i < res.arrayList.length; i++) {
      if(res.arrayList[i].petcard.headimgpath.indexOf("http")==-1){
        res.arrayList[i].petcard.headimgpath=res.imageUrl+res.arrayList[i].petcard.headimgpath
      }
      
    }
    this.pitarr=res.arrayList
    console.log(res);
  }
  async quxiao(i){
    
      let parmas = {
        reciveclientid: this.pitarr[i].petcard.client_id,
        concerntype: 0,
        //mytoken: localStorage.getItem("mytoken"),
        recivepetcardid: this.pitarr[i].petcard.id
      };

      let res = await this.http.addpetConcern(parmas);
      this.http.http.showToast(res.message);
      if (res.info == "ok") {
        this.pitarr.splice(i,1)
      //  this.petlist[i].concernStatus = !this.petlist[i].concernStatus;
      }
   
  }
}
