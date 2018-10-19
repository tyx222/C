import { UserService } from "./../../app/shared/service/user.service";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { ReviceServeProvider } from "./../../providers/revice-serve/revice-serve";
declare var BMap;
declare var BMAP_ANIMATION_BOUNCE;
/**
 * Generated class for the SitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-site",
  templateUrl: "site.html",
  providers: [ReviceServeProvider]
})
export class SitePage {
  mydata = {
    myname: "",
    ipone: "",
    myipam: "",
    ipam: ""
  };
  address_lable;
  default_address = true;
  myorder = [];

  listData = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public reviceServe: ReviceServeProvider,
    public toastCtrl: ToastController,
    private http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SitePage");
   console.log(this.navParams.get("datas"))

    if (this.navParams.get("datas") !== undefined) {
      let mgs=this.navParams.get("datas")
      this.mydata.myname = mgs.receiver_name;
      this.mydata.ipone = mgs.phone_number;
      this.mydata.myipam =`${mgs.province} ${mgs.city} ${mgs.county}`;
     this.mydata.ipam=mgs.detaile_address,
     this.address_lable=mgs.address_lable
    }
    console.log(this.myorder);

    this.getRequestContact();
  }
  getRequestContact() {
    this.reviceServe.getRequestContact().subscribe(
      res => {
        this.listData = res.json();
      },
      error => {
        console.log(error);
      }
    );
  }
  toggleFun() {
    console.log();
    console.log(this.default_address);
  }
  async save(myipam: HTMLEmbedElement) {
    for (let item in this.mydata) {
      if (this.mydata[item] == "") {
        const toast = this.toastCtrl.create({
          message: "请不要留空",
          duration: 3000,
          position: "middle"
        });
        toast.present();
        return false;
      }
    }
    let city = this.mydata.myipam.split(" ");
    console.log(city);
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(this.mydata.ipone)) {
      let message = "请输入正确手机号";
      const toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: "middle"
      });
      toast.present();
      return false;
    }

    
    if(this.navParams.get("datas")==undefined){
    let parmas = {
      address_lable: this.address_lable,
      receiver_name: this.mydata.myname,
      default_address: 1,
      phonenumber: this.mydata.ipone,
      province: city[0],
      city: city[1],
      county: city[2],
      detaile_address: this.mydata.ipam,
      mytoken: localStorage.getItem("mytoken")
    };

    if (this.default_address) {
      parmas.default_address = 1;
    } else {
      parmas.default_address = 2;
    }

    let res = await this.http.addPetReceiver(parmas);
    console.log(res);
    const toast = this.toastCtrl.create({
      message: res.message,
      duration: 3000,
      position: "middle"
    });
    toast.present();
  }else if(this.navParams.get("datas")!=undefined){
    let parmas = {
      id: this.navParams.get("datas").id,
      mytoekn: localStorage.getItem('mytoken'),
      receiver_name: this.mydata.myname,
      phonenumber: this.mydata.ipone,
      //receiver_address: this.myipam[i].receiver_address,
      address_lable: this.address_lable,
      default_address: 1,
      province: city[0],
      city: city[1],
      county: city[2],
      detaile_address: this.mydata.ipam
    };
    if (this.default_address) {
      parmas.default_address = 1;
    } else {
      parmas.default_address = 2;
    }
    let res = await this.http.updatePetReceiver(parmas);
    console.log(res);
    this.http.http.showToast(res.message); 

  }
    //   if (localStorage.getItem("myipamindex") == null) {
    //     localStorage.setItem("myipamindex", "0");
    //   }

    //   this.myorder.push(this.mydata);
    //   const myimapdatas = JSON.stringify(this.myorder);
    //   localStorage.setItem("myipam1", myimapdatas);
    //   setTimeout(() => {
    //     this.navCtrl.pop();
    //   }, 1500);
  }
}
