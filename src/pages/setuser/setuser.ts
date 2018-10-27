import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { ReviceServeProvider } from "../../providers/revice-serve/revice-serve";
import { UserService } from "../../app/shared/service/user.service";

/**
 * Generated class for the SetuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-setuser",
  templateUrl: "setuser.html",
  providers: [ReviceServeProvider]
})
export class SetuserPage {
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
    //  public reviceServe: ReviceServeProvider,
    private reviceServe: ReviceServeProvider,
    public toastCtrl: ToastController,
    private http: UserService
  ) {}

  ionViewDidLoad() {
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

  async save(myipam: HTMLEmbedElement) {
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
    let parmas = {
      client_password: "",
      client_nikename: "",
      client_username: this.mydata.myname,
      phonenumber: this.mydata.ipone,
      headimgpath: "",
      sex: 1,
      address: ""
    };
    let res = await this.http.addPetReceiver(parmas);
    console.log(res);
    const toast = this.toastCtrl.create({
      message: res.message,
      duration: 3000,
      position: "middle"
    });
    toast.present();
  }
}
