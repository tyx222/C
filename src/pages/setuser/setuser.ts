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
    myipam: "",
    ipam: "",
    sex:"",
    ipone:"",
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
    this.initdata()
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
 * 初始化用户信息
 */
initdata(){
  console.log(localStorage.getItem("mydata"))
  let data=JSON.parse(localStorage.getItem("mydata"))
  this.mydata.headimgpath=data.headimgpath
  this.mydata.client_nikename= data.client_nikename
  this.mydata.sex=data.sex
}

/**
 * 图片上传调用方法 userimg()   在initImgSer()中得到返回值
 */
  userimg() {
    this.initImgSer();
    this.upimgserve.showPicActionSheet();
    }

    /**
     *重新拉取用户信息 
     */
    async queryclient(){
      let res=await this.http.queryclient({})
      console.log(res)
      localStorage.setItem("mydata",JSON.stringify(res.object))
      }


 initImgSer() {
    this.upimgserve.upload.success = data => {
      console.log(data);
    //  this.fromdata.headimgpath=data.imageUrl+data.object.map.filename
     // this.petimage=data.imageUrl+data.object.map.filename
        this.mydata.headimgpath=data.imageUrl+data.object.map.filename
     //this.petimage="http://116.62.219.45/imgs/"+data.object.map.filename
    };
  }


  async save(myipam: HTMLEmbedElement) {
    let parmas = {
      client_nikename: this.mydata.client_nikename,
      headimgpath:this.mydata.headimgpath,//this.mydata.headimgpath,//"https://www.petbashi.com/imgs/219e02ce1c1c9350fdecaa54d038d40c.jpg",
      sex: this.mydata.sex,
    };
    let res = await this.http.bangdingclient(parmas);
    console.log(res);
    const toast = this.toastCtrl.create({
      message: res.message,
      duration: 3000,
      position: "middle"
    });
    toast.present();
    if(res.info=="ok"){
      this.queryclient()
      setTimeout(() => {
         this.navCtrl.pop() 
      }, 1000);
    
    }
  }
}
