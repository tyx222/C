import { ReviceServeProvider } from "./../../providers/revice-serve/revice-serve";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ImgServiceProvider } from "../../providers/img-service/img-service";
import { UserService } from "../../app/shared/service/user.service";

/**
 * Generated class for the EnterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-enter",
  templateUrl: "enter.html",
  providers: [ReviceServeProvider]
})
export class EnterPage {
  listData = [];
  myDate = "";
  mydata
  shopData = {
	shop_name:"",
	shop_introduce:"",
	shop_key:"",
	phonenumber:"",
	business_hours:"",
	idcard:"",
	wechat:"",
	qq:"",
	address:"",
	cku:"",
	caac:""
  };
  agree = false;
  items = [
    { title: "item1" },
    { title: "item2" },
    { title: "item3" },
    { title: "item4" },
    { title: "item5" },
    { title: "item6" }
  ];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public reviceServe: ReviceServeProvider,
    private upimgserve: ImgServiceProvider,
    private http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad EnterPage");
    this.getRequestContact();
  }
  getRequestContact() {
    this.reviceServe.getRequestContact().subscribe(
      res => {
        this.listData = res.json();
        console.log(res.json());
      },
      error => {
        console.log(error);
      }
    );
  }



 initImgSer() {
   return
  }
  /**
   * 身份证正面
   */
 async mydatasup()  {
    // let res=await this.initImgSer();
    // console.log(res)
    this.upimgserve.showPicActionSheet();
    this.upimgserve.upload.success = data => {
     console.log(data) ;
    };
    }
 
  /**
   * 身份证反面
   */
 async mydatasout() {
    this.upimgserve.showPicActionSheet();
    this.upimgserve.upload.success = data => {
      console.log(data) ;
     };
    }
  removeItem(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] == item) {
        this.items.splice(i, 1);
      }
    }
  }

	/**
	 * 确认注册
	*/
	async confirmReg(){
		if(this.agree == false){
			console.log('请同意协议')
			return 

		}
		
		let res = await this.http.addshop({jsonPramter:JSON.stringify(this.shopData)})
		if(res.info=='ok'){
			this.navCtrl.pop();
		}

	}
}
