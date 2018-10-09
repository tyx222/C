import { Camera, CameraOptions } from "@ionic-native/camera";
import { Component } from "@angular/core";
import { ActionSheetController } from "ionic-angular";
import { UserService } from "../../app/shared/service/user.service";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";

/**
 * Generated class for the NewlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-newlay",
  templateUrl: "newlay.html"
})
export class NewlayPage {
  petimage = "assets/imgs/images/xinzengmaoka.png";
  fromdata = {
    pet_name: "",
    pet_birthday: "1",
    is_sterilisation: "",
    pet_weight: 0,
    comment: "",
    sex: "",
    kind: "",
    headimgpath:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538236414396&di=33c9cde6279a3527442718015b4d8497&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fcefc1e178a82b90169e520ae798da9773812efe7.jpg",
    mytoken: ""
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad NewlayPage");
  }
  ionViewWillEnter() {
    console.log(this.navParams.get("data"));
    if (this.navParams.get("data") != undefined) {
      this.fromdata.pet_name = this.navParams.get("data").pet_name;
      this.fromdata.comment = this.navParams.get("data").comment;
      this.fromdata.pet_weight = this.navParams.get("data").pet_wheight;
      this.fromdata.pet_birthday = this.navParams
        .get("data")
        .pet_birthday.substr(0, 10);
      if (this.navParams.get("data").concernStatus) {
        this.fromdata.is_sterilisation = "1";
      } else {
        this.fromdata.is_sterilisation = "2";
      }
      this.fromdata["petcardid"] = this.navParams.get("data").id;
      this.fromdata.kind = this.navParams.get("data").kind;
      this.fromdata.sex = this.navParams.get("data").is_sterilisation;
      this.fromdata.headimgpath = this.navParams.get("data").headimgpath;
      this.petimage = this.navParams.get("data").headimgpath;
    }
  }
  pushimg() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(imageData => {
      let base64Image = "data:image/jpeg;base64" + imageData;
    }),
      err => {
        console.log(err);
      };
  }

  userimg() {
    const actionSheet = this.actionSheetCtrl.create({
      // title: 'Modify your album',
      buttons: [
        {
          text: "相册选择",
          handler: () => {
            console.log("Destructive clicked");
          }
        },
        {
          text: "拍照上传",
          handler: () => {
            console.log("Archive clicked");
          }
        },
        {
          text: "取消",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    actionSheet.present();
  }

  async subfrom() {
    this.fromdata.mytoken = localStorage.getItem("mytoken");
    for (let mgs in this.fromdata) {
      console.log(this.fromdata[mgs]);
      if (this.fromdata[mgs] == "" || this.fromdata[mgs] == null) {
        let message = "请认真填写资料";
        this.showToast(message);
        return false;
      }
    }
    let res = await this.http.addpetcard(this.fromdata);
    this.http.http.showToast(res.message);
    if(this.navParams.get('data')!==undefined){
      this.navCtrl.pop()
    }
    this.fromdata = {
      pet_name: "",
      pet_birthday: "1",
      is_sterilisation: "",
      pet_weight: null,
      comment: "",
      sex: "",
      kind: "",
      headimgpath:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538236414396&di=33c9cde6279a3527442718015b4d8497&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fcefc1e178a82b90169e520ae798da9773812efe7.jpg",
      mytoken: ""
    };
    //  alert(this.fromdata.username+this.fromdata.text)
  }

  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: "middle"
    });
    toast.present(toast);
  }
}
