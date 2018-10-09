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
  avatar = ["assets/imgs/images/pushimg.png"];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private mediaCapture: MediaCapture
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PushdiaryPage");
  }
  /**
   *  拍视频
   * @param taskId
   * @returns {Promise<TResult>} 文件地址 以及文件名
   */
  public takeVideo() {
    // let options: CaptureVideoOptions = { limit: 3, duration: 15 };
    // this.mediaCapture.captureVideo(options).then(
    //   (data: MediaFile[]) => {
    //     //拍摄成功后返回的实体 数组
    //     console.log(data);
    //     // Promise.reject('success to save the db')
    //     let path: string = data[0].fullPath.toString(); // MediaFile.fullPath 表示视频的绝对路径
    //     return Promise.resolve(path);
    //   },
    //   (err: CaptureError) => {
    //     console.error(err);
    //     return Promise.reject(err);
    //   }
    // );
 // let options: ConfigurationData = { type:"mp4",height:640,width:540 };
    let options: MediaFileData = {
      codecs: "mp4",
      bitrate: 1500,
      height: 540,
      width: 960,
      duration: 15
    };
    this.mediaCapture
      .captureVideo(options)
      .then(
        (data: MediaFile[]) => console.log(data),
        (err: CaptureError) => console.error(err)
      );
  }
}
