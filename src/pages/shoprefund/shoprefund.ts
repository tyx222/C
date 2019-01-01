import { Component } from '@angular/core';
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
  selector: 'page-shoprefund',
  templateUrl: 'shoprefund.html',
})
export class ShoprefundPage {
  avatar = ["assets/imgs/images/pushimg.png"];
  imgUrl=""
  info:any ={}
  refundinfo:any = {};
  refundContent = ""
  status = 1
  refundable_id
  refundImgs = ['assets/imgs/images/pushimg.png','68094a1351e0323ce804ddb403b85f86.jpg']
  refundPrice = 0
  constructor(    public navCtrl: NavController,
    public navParams: NavParams,
	public http: UserService,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public appConfig: DefaultAppConfig,
	private devolup: ImgServiceProvider,
    public imagePicker: ImagePicker,
    public camera: Camera) {
	this.imgUrl = this.appConfig.ip + 'imgs/';
	this.info = this.navParams.get('info')
  }

  ionViewDidLoad() {
  	this.queryRefundable(this.refundable_id)
  	console.log(this.info)
    console.log('ionViewDidLoad RefundPage');
  }

setstatus(){
	console.log(this.status);
}
save(){
	this.refuserefundable();
}
  
	async refuserefundable(){
		let params = {
			refundable_id:this.refundable_id, 
			status:this.status, //1.商家同意退款 2商家拒绝退款
			shop_reason:this.refundContent,
			shop_picture:this.refundImgs
		}
		let res = await this.http.refuserefundable(params);
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
    console.log(this.refundImgs);
  }
	
	//退款详情
  async queryRefundable(refundable_id){
	let res = await this.http.queryRefundable({refundable_id:refundable_id});
		if(res.info=="ok"){
			this.refundinfo = res.object
		}else{
			this.http.presentToast('退款数据不存在')
		}
  }
 
}
