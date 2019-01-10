import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController,
  AlertController
} from "ionic-angular";

import { ImagePicker, ImagePickerOptions } from "@ionic-native/image-picker";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { DefaultAppConfig } from "./../../app/app.config";
import { UserService } from "./../../app/shared/service/user.service";
import { ImgServiceProvider } from "../../providers/img-service/img-service";

/**
 * Generated class for the RefundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-refund",
  templateUrl: "refund.html"
})
export class RefundPage {
  avatar = ["assets/imgs/images/pushimg.png"];
  type;
  parmas = {
    orderid: "", //[string]	是	申诉订单id
    appeal_title: "", //	[string]		申诉标题
    appeal_content: "", //	[string]		申诉理由
    phonenumber: "", //[string]	是	联系方式
    appeal_picture_path: "" //
  };

  imgUrl=""
  info:any ={}
  refundContent = ""
  refundImgs = ['assets/imgs/images/pushimg.png','68094a1351e0323ce804ddb403b85f86.jpg']
  refundPrice = 0
  refundable_adress
  express_company
  express_number
  ipamord = {
    myname: "",
    ipone: "",
    order: ""
  };
  show = false
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
	public http: UserService,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public appConfig: DefaultAppConfig,
	private devolup: ImgServiceProvider,
    public imagePicker: ImagePicker,
    public camera: Camera) {
	this.imgUrl = this.appConfig.ip + 'imgs/';
	this.info = this.navParams.get('info');
  }

  ionViewDidLoad() {
  	this.refundinfo()
  	
  	console.log(this.info)
    console.log('ionViewDidLoad RefundPage');
  }

  refundinfo(){
	let info = this.navParams.get('info')
	this.address();
  }

settype(){
if(this.type==2){
	
}
	console.log(this.type);
}
save(){
	this.addrefundable();
}
  
  pushipam() {
    this.navCtrl.push("IpamPage");
  }

    async address() {
    let parmas = {
      mytoken: localStorage.getItem("mytoken")
    };
    let res = await this.http.address(parmas);
	if(res.arrayList.length<1){
		return
	}else{
		this.ipamord.myname = res.arrayList[0].receiver_name;
		this.ipamord.ipone = res.arrayList[0].phone_number,
		this.ipamord.order =
        res.arrayList[0].province +
        " " +
        res.arrayList[0].city +
        " " +
        res.arrayList[0].county +
        " " +
        res.arrayList[0].detaile_address;
	}
    console.log(res);
    
  }

	async addrefundable(){
		let refundImgs = []
		this.refundImgs.forEach((val)=>{
			if(val!='assets/imgs/images/pushimg.png'){
				refundImgs.push(val)
			}
		})
		let params = {
			type:this.type, //1.仅退款，未到货 2.退货退款
			order_id:this.info.order_id,
			goodid:this.info.dtailOrderList[0].goods.goods_id,
			order_detail_id:this.info.order_id,
			reason:this.refundContent,
			goodnum:this.info.dtailOrderList[0].good_num,
			price:this.info.cash_sum,
			order_code:this.info.order_id,
			picture:refundImgs,
			refundable_adress:this.refundable_adress,
			express_company:this.express_company,
			express_number:this.express_number
		}
		let res = await this.http.addrefundable(params);
		if(res.info=="ok"){
			this.http.presentToast("操作成功")
		}else{
			this.http.presentToast("操作失败")
		}
	}

	  async imgup(i){
		let selfs = this
		this.devolup.showPicActionSheet();
		this.devolup.upload.success = data => {
			if(data.info=="ok"){
				selfs.refundImgs.push(data.object.map.filename);
			}else{
				selfs.http.presentToast('上传失败')
			}
		 };
	  }

  
  remimages(i) {
    this.refundImgs.splice(i, 1);
    console.log(this.refundImgs.indexOf("assets/imgs/images/pushimg.png"));
    if (this.refundImgs.indexOf("assets/imgs/images/pushimg.png") == -1) {
      this.refundImgs.push("assets/imgs/images/pushimg.png");
    }
    console.log(i);
    console.log(this.avatar);
  }
  /**
   * 积分商城提交按钮
   */
  async oudjf() {
    this.parmas.orderid = this.navParams.get("orderid");
    if (this.avatar[0] != "assets/imgs/images/pushimg.png") {
      if (this.avatar.indexOf("assets/imgs/images/pushimg.png") != -1) {
        this.avatar.splice(
          this.avatar.indexOf("assets/imgs/images/pushimg.png"),
          1
        );
      }
      this.parmas.appeal_picture_path = JSON.stringify(this.avatar);
    }
    this.http.presentToast(JSON.stringify(this.parmas));
    let res = await this.http.addappeal(this.parmas);
    console.log(res);
    this.http.presentToast(JSON.stringify(this.avatar));
    this.http.presentToast(JSON.stringify(res.message));
    if (res.info == "ok") {
      this.navCtrl.pop();
    }
  }

  chooseFromAlbum(i) {
    const options: ImagePickerOptions = {
      maximumImagesCount: 1,
      width: 1280,
      height: 720,
      quality: 90
    };
    this.imagePicker.getPictures(options).then(
      images => {
        if (images.length === 1) {
          console.log("Image URI: " + images[0]);
          // this.avatar = images[0].slice(7);
          alert(images);
          this.avatar[i] = images;
          if (this.avatar.length < 6) {
            if (this.avatar.indexOf("assets/imgs/images/pushimg.png") == -1) {
              this.avatar.push("assets/imgs/images/pushimg.png");
            }
          }
        }
      },
      error => {
        console.log("Error: " + error);
        console.log(this.avatar[i]);
      }
    );
  }
 
}
