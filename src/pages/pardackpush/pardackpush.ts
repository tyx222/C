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
import {
  MediaCapture,
  MediaFile,
  CaptureError,
  CaptureImageOptions,
  MediaFileData,
  ConfigurationData
} from "@ionic-native/media-capture";
import { VideoEditor } from "@ionic-native/video-editor";
import { File } from "@ionic-native/file";
import { ImgServiceProvider } from "../../providers/img-service/img-service";
/**
 * Generated class for the PardackpushPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-pardackpush",
  templateUrl: "pardackpush.html"
})
export class PardackpushPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private mediaCapture: MediaCapture,
    private videoEditor: VideoEditor,
    private file: File,
    private devolup: ImgServiceProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PardackpushPage");
  }

 devoup() {
    this.devolup.choosePhoto(async res => {
      console.log(res);
      let mgs =await this.devolup.uploadByTransfer(res);
      console.log(mgs);
    });
  }
  // presentActionSheet() {
  //   const actionSheet = this.actionSheetCtrl.create({
  //     title: "Modify your album",
  //     buttons: [
  //       {
  //         text: "拍摄视频",
  //         handler: () => {
  //           this.takeVideo();
  //           console.log("Destructive clicked");
  //         }
  //       },
  //       {
  //         text: "选择视频",
  //         handler: () => {
  //           console.log("Archive clicked");
  //         }
  //       },
  //       {
  //         text: "取消",
  //         role: "cancel",
  //         handler: () => {
  //           console.log("Cancel clicked");
  //         }
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }

  // public takeVideo() {
  //   let options: MediaFileData = {
  //     codecs: "mp4",
  //     bitrate: 1500,
  //     height: 540,
  //     width: 960,
  //     duration: 15
  //   };
  //   this.mediaCapture.captureVideo(options).then(
  //     (data: MediaFile[]) => {
  //       this.ditor(data);
  //       console.log(data[0]["fullPath"]);
  //     },
  //     (err: CaptureError) => console.error(err)
  //   );
  // }

  // ditor(data) {
  //   console.log(data[0]["fullPath"]);

  //   let options = {
  //     fileUri: data[0]["fullPath"], // the path to the video on the device
  //     outputFileName: data[0]["name"], // the file name for the transcoded video
  //     saveToLibrary: true, // optional, defaults to true
  //     deleteInputFile: false, // optional (android only), defaults to false
  //     maintainAspectRatio: true, // optional (ios only), defaults to true
  //     width: 640, // optional, see note below on width and height
  //     height: 640, // optional, see notes below on width and height
  //     videoBitrate: 1000000, // optional, bitrate in bits, defaults to 1 megabit (1000000)
  //     fps: 24, // optional (android only), defaults to 24
  //     audioChannels: 2, // optional (ios only), number of audio channels, defaults to 2
  //     audioSampleRate: 44100, // optional (ios only), sample rate for the audio, defaults to 44100
  //     audioBitrate: 128000, // optional (ios only), audio bitrate for the video in bits, defaults to 128 kilobits (128000)
  //     progress: function(info) {
  //       console.log(info);
  //     } // info will be a number from 0 to 100
  //   };
  //   this.videoEditor
  //     .transcodeVideo(options)
  //     .then((fileUri: string) => {
  //       console.log(fileUri);
  //       this.create(data);
  //       this.filevideoget(fileUri, data);
  //     })
  //     .catch((error: any) => console.log("video transcode error", error));
  // }

  // create(data) {
  //   let options = {
  //     fileUri: data[0]["fullPath"],
  //     outputFileName: data[0]["name"],
  //     atTime: 1,
  //     width: 640,
  //     height: 640,
  //     quality: 80
  //   };
  //   this.videoEditor.createThumbnail(options).then((fileUri: string) => {
  //     this.fileimgget(fileUri, data);
  //   });
  // }

  // /**
  //  * 压缩后的视频
  //  * @param fileUri 压缩前的视频路径
  //  * @param data
  //  */
  // filevideoget(fileUri, data) {
  //   let evets = fileUri.split(data[0].name);
  //   let fileName = data[0].name + ".mp4";
  //   let Options = {};
  //   this.file
  //     .resolveDirectoryUrl("file://" + evets[0])
  //     .then(res => {
  //       this.file.getFile(res, fileName, Options).then(filedata => {
  //         console.log(filedata);
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  // /**
  //  * 压缩后的图片
  //  * @param fileUri
  //  * @param data
  //  */
  // fileimgget(fileUri, data) {
  //   let evets = fileUri.split(data[0].name);
  //   let fileName = data[0].name + ".jpg";
  //   let Options = {};
  //   this.file
  //     .resolveDirectoryUrl("file://" + evets[0])
  //     .then(res => {
  //       this.file.getFile(res, fileName, Options).then(filedata => {
  //         console.log(filedata);
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }
}
