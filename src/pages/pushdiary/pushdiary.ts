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
import { ImgServiceProvider } from "../../providers/img-service/img-service";

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
  type;
  PageTitle
  petimg
  datas={

  }
  arr=['添加写真','添加传记' ,'添加健康','添加活动' ]
  petdata;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: UserService,
    private upimgserve: ImgServiceProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PushdiaryPage");
    console.log(this.navParams);
    this.type=this.navParams.get("type")
    this.petimg=this.navParams.get("datas").headimgpath
    this.PageTitle=this.arr[this.type-1]
  }

  userimg(i) {
    this.initImgSer(i);
    this.upimgserve.showPicActionSheet();
  }
  initImgSer(i) {
    console.log(i);
    this.upimgserve.upload.success = data => {
      console.log(data);
    };
  }
  // presentActionSheet(i) {
  //   let actionSheet = this.actionSheetCtrl.create({
  //     buttons: [
  //       {
  //         text: "拍照",
  //         role: "takePhoto",
  //         handler: () => {
  //           this.takePhoto(i);
  //         }
  //       },
  //       {
  //         text: "从相册选择",
  //         role: "chooseFromAlbum",
  //         handler: () => {
  //           this.chooseFromAlbum(i);
  //         }
  //       },
  //       {
  //         text: "取消",
  //         role: "cancel",
  //         handler: () => {
  //           console.log("cancel");
  //         }
  //       }
  //     ]
  //   });

  //   actionSheet.present().then(value => {
  //     return value;
  //   });
  //   console.log(i);
  //   // console.log(this.avatar[i])
  //   // this.avatar[i]='assets/imgs/images/goudai.png'
  // }
  // takePhoto(i) {
  //   const options: CameraOptions = {
  //     quality: 90,
  //     allowEdit: true,
  //     targetWidth: 1280,
  //     targetHeight: 720,
  //     saveToPhotoAlbum: true
  //   };
  //   this.camera.getPicture(options).then(
  //     image => {
  //       console.log("Image URI: " + image);
  //       // this.avatar = image.slice(7);
  //       console.log(this.avatar[i]);
  //       alert(image);
  //       this.avatar[i] = image;
  //       if (this.avatar.length < 6) {
  //         if (this.avatar.indexOf("assets/imgs/images/pushimg.png") == -1) {
  //           this.avatar.push("assets/imgs/images/pushimg.png");
  //         }
  //       }
  //     },
  //     error => {
  //       console.log("Error: " + error);
  //       // this.avatar[i] = "assets/imgs/images/goudai.png";

  //       console.log(this.avatar);
  //     }
  //   );
  // }
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
  async addserve() {
    let parmas = {
      title: "xiaowangba", //标题
      type: this.type, //1:写真  2：传记  3:健康  4:活动
      chose_time: "2018-07-27 14:08:27",
      remark: "fgt", //备注
      pet_id: "061c5db5-8bdd-4562-8b5d-37af0576d68b",
      activityid: "", //不参与活动给空
      cover: "", //封面url
      historycontentlist: [
        {
          //内容
          type: 2, // 1: 视频  2:照片  3:段落 4 ：动图
          path: "jik", //地址
          text: "dfg" //传记段落
        },
        {
          type: 0,
          path: "jik",
          text: "dfg"
        }
      ]
    };
    let res = await this.http.addhistoryType(parmas);
    console.log(res);
  }
  // chooseFromAlbum(i) {
  //   const options: ImagePickerOptions = {
  //     maximumImagesCount: 1,
  //     width: 1280,
  //     height: 720,
  //     quality: 90
  //   };
  //   this.imagePicker.getPictures(options).then(
  //     images => {
  //       if (images.length === 1) {
  //         console.log("Image URI: " + images[0]);
  //         // this.avatar = images[0].slice(7);
  //         alert(images);
  //         this.avatar[i] = images;
  //         if (this.avatar.length < 6) {
  //           if (this.avatar.indexOf("assets/imgs/images/pushimg.png") == -1) {
  //             this.avatar.push("assets/imgs/images/pushimg.png");
  //           }
  //         }
  //       }
  //     },
  //     error => {
  //       console.log("Error: " + error);
  //       console.log(this.avatar[i]);
  //     }
  //   );
  // }
}
