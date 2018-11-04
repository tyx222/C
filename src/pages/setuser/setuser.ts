import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { ReviceServeProvider } from "../../providers/revice-serve/revice-serve";
import { UserService } from "../../app/shared/service/user.service";
import { ImgServiceProvider } from "../../providers/img-service/img-service";

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
    ipam: "",
    client_password:"",
    sex:"",
    client_nikename:"",
    headimgpath:"assets/imgs/images/shangchuan@2x.png"
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
    private http: UserService,
    private upimgserve:ImgServiceProvider
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

/**
 * 图片上传调用方法 userimg()   在initImgSer()中得到返回值
 */
  userimg() {
    this.initImgSer();
    this.upimgserve.showPicActionSheet();
    }
 initImgSer() {
    this.upimgserve.upload.success = data => {
      console.log(data);
    //  this.fromdata.headimgpath=data.imageUrl+data.object.map.filename
     // this.petimage=data.imageUrl+data.object.map.filename
        this.mydata.headimgpath="http://116.62.219.45/imgs/"+data.object.map.filename
     //this.petimage="http://116.62.219.45/imgs/"+data.object.map.filename
    };
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
    console.log(this.mydata.myipam)
    console.log(myipam)
    let parmas = {
      client_password: this.mydata.client_password,
      client_nikename: this.mydata.client_nikename,
      client_username: this.mydata.myname,
      phonenumber: this.mydata.ipone,
      headimgpath:this.mydata.headimgpath,
      sex: this.mydata.sex,
      address:myipam['_text']+this.mydata.ipam
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
