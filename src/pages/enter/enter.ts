import { ReviceServeProvider } from "./../../providers/revice-serve/revice-serve";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ImgServiceProvider } from "../../providers/img-service/img-service";
import { UserService } from "../../app/shared/service/user.service";
declare var LocationPlugin;

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
	shop_type:"0",
	business_license:"",
	shop_key:"",
	head_path:"",
	phonenumber:"",
	business_hours:"",
	idcard:"",
	idcardimg1:"",
	idcardimg2:"",
	latitude:"",
	longitude:"",
	remark:"",
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
	this.getCurrentPosition();
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


/**
	  * 获取当前地理位置
	  */
	getCurrentPosition() {
		var isHave = localStorage.getItem('geolocation')
		if(isHave=='undefined'){
			try{
				LocationPlugin.getLocation(data => {
					localStorage.setItem("geolocation",JSON.stringify(data))
					this.shopData.latitude = data.latitude+""
					this.shopData.longitude = data.longitude+""
					//this.http.http.showToast("定位城市：" + data.city + data.district);
				}, msg => {
					this.http.http.showToast("定位失败");
					console.log('geolocation is fail')
				})
			}catch(error){
				console.log('geolocation is fail')
				this.http.http.showToast("定位失败");
			}
		}

		
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
	this.shopData.idcardimg1 = data.object.map.filename
     console.log(data) ;
    };
    }

	async headpathup(){
		this.upimgserve.showPicActionSheet();
		this.upimgserve.upload.success = data => {
			this.shopData.head_path = data.object.map.filename
		};
	}
 
  /**
   * 身份证反面
   */
 async mydatasout() {
    this.upimgserve.showPicActionSheet();
    this.upimgserve.upload.success = data => {
		this.shopData.idcardimg2 = data.object.map.filename
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
