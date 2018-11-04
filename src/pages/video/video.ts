import { ImgServiceProvider } from './../../providers/img-service/img-service';
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController,
  AlertController
} from "ionic-angular";
//import { VideoPlayer } from "@ionic-native/video-player";
import { ImagePicker, ImagePickerOptions } from "@ionic-native/image-picker";
import { Camera, CameraOptions } from "@ionic-native/camera";
import {
  MediaCapture,
  MediaFile,
  CaptureError,
  CaptureImageOptions,MediaFileData,
  ConfigurationData
} from "@ionic-native/media-capture";
/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-video",
  templateUrl: "video.html"
})
export class VideoPage {
  avatar = "assets/imgs/images/shangchuan@2x.png";
  title
  remark
  type
  imgpath:""
  videpath=""
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private mediaCapture: MediaCapture,
    private devolup: ImgServiceProvider
    
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PushdiaryPage");
    console.log(this.navParams.get("datas"))
    this.imgpath=this.navParams.get("datas").headimgpath

  }
  /**
   *  拍视频
   * @param taskId
   * @returns {Promise<TResult>} 文件地址 以及文件名
   */
  devoup() {
    this.devolup.choosePhoto(async res => {
      console.log(res);
      let mgs =await this.devolup.uploadByTransfer(res);
      console.log(mgs);
      this.videpath=mgs.object.map.filename
    });
  }
  remimages (){
    this.videpath=""
  }
  submit(){
    let parmas = {
      title: this.title, //标题
      type: this.type, //1:写真  2：传记  3:健康  4:活动
     // chose_time: new Date().getTime(),
      remark: this.remark, //备注
      pet_id: this.navParams.get("datas").id,
      activityid: "", //不参与活动给空
      cover: "", //封面url
      historycontentlist: [
        {
          //内容
          type: 1, // 1: 视频  2:照片  3:段落 4 ：动图
          path: "http://116.62.219.45/imgs/"+this.videpath, //地址
          text: "" //传记段落
        },
      
      ]  
  }
}
}
