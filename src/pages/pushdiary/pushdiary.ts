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

/**
 * Generated class for the PushdiaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-pushdiary",
  templateUrl: "pushdiary.html"
})
export class PushdiaryPage {
  avatar = ["assets/imgs/images/pushimg.png"];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public imagePicker: ImagePicker,
    public camera: Camera
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PushdiaryPage");
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


}
