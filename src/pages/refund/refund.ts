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
import { UserService } from "../../app/shared/service/user.service";
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
  type = "";
  parmas = {
    orderid: "", //[string]	是	申诉订单id
    appeal_title: "", //	[string]		申诉标题
    appeal_content: "", //	[string]		申诉理由
    phonenumber: "", //[string]	是	联系方式
    appeal_picture_path: "" //
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public imagePicker: ImagePicker,
    public camera: Camera,
    public http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RefundPage");
    if (this.navParams.get("type")) {
      this.type = this.navParams.get("type");
    }
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
