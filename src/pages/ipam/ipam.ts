import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UserService } from "../../app/shared/service/user.service";

/**
 * Generated class for the IpamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-ipam",
  templateUrl: "ipam.html"
})
export class IpamPage {
  letfbor = -1;
  mpindex = 0;
  ipml = 0;
  myipam = [];
  parmas = {
    pageNum: 1,
    rowsPrePage: 10,
    mytoken: 'JSON.parse(localStorage.getItem("mytoken"))'
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: UserService
  ) {}
  ionViewWillEnter() {
    // this.letfbor = -1;
    // this.myipam = JSON.parse(localStorage.getItem("myipam1"));
    // console.log(localStorage.getItem("myipamindex"));
    // this.mpindex = JSON.parse(localStorage.getItem("myipamindex"));

    // if (JSON.parse(localStorage.getItem("myipam1")) !== null) {
    //   this.ipml = JSON.parse(localStorage.getItem("myipam1")).length;
    // }
    // console.log(this.myipam);
    this.queryPetReceiverlist();
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad IpamPage');
  //   console.log(localStorage.getItem('myipam1'))
  //   this.myipam.push(JSON.parse(localStorage.getItem('myipam1')))
  //   console.log(this.myipam)
  // }
  goder() {
    this.navCtrl.push("SitePage");
  }
  async queryPetReceiverlist() {
    this.parmas.mytoken = localStorage.getItem("mytoken");
    let res = await this.http.queryPetReceiverlist(this.parmas);
    this.myipam = res.arrayList;
    console.log(res);
  }
  setindex(i) {
    console.log(i);
    this.mpindex = i;
    localStorage.setItem("myipamindex", i);
  }
  async petreceiverid(i) {
    console.log(i);
    let parmas = {
      id: this.myipam[i].id,
      mytoekn: localStorage.getItem('mytoken'),
      receiver_name: this.myipam[i].receiver_name,
      phonenumber: this.myipam[i].phone_number,
      //receiver_address: this.myipam[i].receiver_address,
      address_lable: this.myipam[i].address_lable,
      default_address: 1,
      province: this.myipam[i].province,
      city: this.myipam[i].city,
      county: this.myipam[i].county,
      detaile_address: this.myipam[i].detaile_address
    };
    let res = await this.http.updatePetReceiver(parmas);
    console.log(res);

    this.http.http.showToast(res.message); 
       this.queryPetReceiverlist()
  }
/**
 * 
 * @param i 编辑地址下标
 */
  saver(i){
    let datas=this.myipam[i]
this.navCtrl.push("SitePage",{
  datas
})
  }


  /**
   * 删除地址
   * @param i
   */
  async rmoder(i) {
    let parmas = {
      petreceiverid: this.myipam[i].id
    };
    let res = await this.http.deletePetReceiver(parmas);
    console.log(res);
    this.http.http.showToast(res.message);
    this.myipam.splice(i, 1);
  }
  swipeEvent(e, i) {
    // console.log(e.offsetDirection);
    if (e.offsetDirection == 2) {
      this.letfbor = i;
    }
    if (e.offsetDirection == 4) {
      this.letfbor = -1;
    }
  }
}
