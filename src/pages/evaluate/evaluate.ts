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
import { UserService } from '../../app/shared/service/user.service';

/**
 * Generated class for the EvaluatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluate',
  templateUrl: 'evaluate.html',
})
export class EvaluatePage {
  ok=0
  ok2=0
  ok3=0
  text='暂无评分'
  type=0
  order_id=""
  content=""
  goods_id=""
  cover=""
good2=["assets/imgs/images/dingdan.png","assets/imgs/images/dingdan.png","assets/imgs/images/dingdan.png","assets/imgs/images/dingdan.png","assets/imgs/images/dingdan.png"]  
avatar = ["/assets/imgs/images/pushimg.png"];
constructor(    public navCtrl: NavController,
  public navParams: NavParams,
  public actionSheetCtrl: ActionSheetController,
  public alertCtrl: AlertController,
  public imagePicker: ImagePicker,
  public http: UserService,
  public camera: Camera) {
  	if(this.navParams.get('type')!=undefined){
		// type 0买家评论  1 卖家评论
		this.type = this.navParams.get('type');
		this.order_id = this.navParams.get('orderid');
		this.goods_id = this.navParams.get('goodsid');
		this.cover = this.navParams.get('cover');
		console.log(this.type,this.order_id,this.goods_id)
		console.log(this.cover)
	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvaluatePage');

  }
  presentActionSheet(i) {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: "拍照",
          role: "takePhoto",
          handler: () => {
            this.takePhoto(i);
          }
        },
        {
          text: "从相册选择",
          role: "chooseFromAlbum",
          handler: () => {
            this.chooseFromAlbum(i);
          }
        },
        {
          text: "取消",
          role: "cancel",
          handler: () => {
            console.log("cancel");
          }
        }
      ]
    });

    actionSheet.present().then(value => {
      return value;
    });
    console.log(i);
    // console.log(this.avatar[i])
    // this.avatar[i]='assets/imgs/images/goudai.png'
  }
  takePhoto(i) {
    const options: CameraOptions = {
      quality: 90,
      allowEdit: true,
      targetWidth: 1280,
      targetHeight: 720,
      saveToPhotoAlbum: true
    };
    this.camera.getPicture(options).then(
      image => {
        console.log("Image URI: " + image);
        // this.avatar = image.slice(7);
        console.log(this.avatar[i]);
        alert(image);
        this.avatar[i] = image;
        if (this.avatar.length < 6) {
          if (this.avatar.indexOf("assets/imgs/images/pushimg.png") == -1) {
            this.avatar.push("assets/imgs/images/pushimg.png");
          }
        }
      },
      error => {
        console.log("Error: " + error);
        // this.avatar[i] = "assets/imgs/images/goudai.png";

        console.log(this.avatar);
      }
    );
  }
  remimages(i) {
    // this.avatar[i]="assets/imgs/images/pushimg.png"
    this.avatar.splice(i, 1);
    console.log(this.avatar.indexOf("assets/imgs/images/pushimg.png"));
    // this.avatar.slice(i,1)
    if (this.avatar.indexOf("assets/imgs/images/pushimg.png") == -1) {
      this.avatar.push("assets/imgs/images/pushimg.png");
    }
    console.log(i);
    console.log(this.avatar);
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

  goods3(i){
    this.ok3=i+1
  }
goods2(i){
this.ok2=i+1
  }
  goods(i){
    this.ok=i+1
    if(this.ok<2){
      this.text='差'
    }
    if(this.ok>=2&&this.ok<4){
      this.text='一般'
    }
    if(this.ok>=4){
      this.text='非常好'
    }
  }
	
	// 保存评价信息
  async save(){
	let params = {
		goodid:this.goods_id,
		orderid:this.order_id,
		level:this.ok,
		type:0,
		father_id:"0",
		evaluatecontentlist:[{path:this.avatar.join(","),text:this.content}]
	}
	console.log(params)
	console.log(this.ok,this.ok2,this.ok3)
	let res = await this.http.addevaluate({jsonPramter:JSON.stringify(params)})
	if(res.info=="ok"){
		this.http.presentToast("评价成功")
		this.navCtrl.pop()
	}else{
		this.http.presentToast("评价失败")
	}
  }
}
