import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActionSheetController } from "ionic-angular";

import { ImagePicker } from "@ionic-native/image-picker";
import { Camera, CameraOptions } from "@ionic-native/camera";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file";
import { ToastProvider } from "../toast/toast";
import { VideoEditor } from "@ionic-native/video-editor";
import {
  MediaCapture,
  MediaFile,
  CaptureError,
  CaptureImageOptions,
  MediaFileData,
  ConfigurationData
} from "@ionic-native/media-capture";
import { Observable } from "rxjs/Observable";

/*
  Generated class for the ImgServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImgServiceProvider {
  private cameraOpt = {
    quality: 50,
    destinationType: 1, // Camera.DestinationType.FILE_URI,
    sourceType: 1, // Camera.PictureSourceType.CAMERA,
    encodingType: 0, // Camera.EncodingType.JPEG,
    mediaType: 0, // Camera.MediaType.PICTURE,
    allowEdit: true,
    correctOrientation: true
  };

  // 调用相册时传入的参数
  private imagePickerOpt = {
    maximumImagesCount: 1, //选择一张图片
    width: 800,
    height: 800,
    quality: 80
  };
  // 图片上传的的api
  public uploadApi: string = "http://116.62.219.45/chongwu/chongwu/uploadFile";
  upload: any = {
    fileKey: "file", //接收图片时的key
    fileName: "imageName.jpg",
    headers: {
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8" //不加入 发生错误！！
    },
    params: {}, //需要额外上传的参数
    success: data => {}, //图片上传成功后的回调
    error: err => {}, //图片上传失败后的回调
    listen: () => {} //监听上传过程
  };

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private noticeSer: ToastProvider,
    private camera: Camera,
    private imagePicker: ImagePicker,
    private transfer: FileTransfer,
    private file: File,
    private fileTransfer: FileTransferObject,
    private mediaCapture: MediaCapture,
    private videoEditor: VideoEditor
  ) {
    this.fileTransfer = this.transfer.create();
  }

  /**
   * 图片菜单
   */
  showPicActionSheet() {
    this.useASComponent();
  }

  /**
   * 菜单组件
   */
  private useASComponent() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "请选择",
      buttons: [
        {
          text: "拍照",
          handler: () => {
            this.startCamera();
          }
        },
        {
          text: "从手机相册选择",
          handler: () => {
            this.openImgPicker();
          }
        },
        {
          text: "取消",
          role: "cancel",
          handler: () => {}
        }
      ]
    });
    actionSheet.present();
  }

  /**
   * 启动拍照功能
   */
  private startCamera() {
    this.camera.getPicture(this.cameraOpt).then(
      imageData => {
        this.uploadImg(imageData);
      },
      err => {
        this.noticeSer.showToast("ERROR:" + err); //错误：无法使用拍照功能！
      }
    );
  }
  /**
   * 打开手机相册选择照片
   */
  private openImgPicker() {
    let temp = "";
    this.imagePicker.getPictures(this.imagePickerOpt).then(
      results => {
        for (var i = 0; i < results.length; i++) {
          temp = results[i];
        }
        this.uploadImg(temp);
      },
      err => {
        this.noticeSer.showToast("ERROR:" + err); //错误：无法从手机相册中选择图片！
      }
    );
  }

  /**
   * 上传图片
   * @param path
   */
  private uploadImg(path: string) {
    if (!path) {
      return;
    }

    let options: any;
    options = {
      fileKey: this.upload.fileKey,
      headers: this.upload.headers,
      params: this.upload.params
    };
    this.fileTransfer.upload(path, this.uploadApi, options).then(
      data => {
        if (this.upload.success) {
          this.upload.success(JSON.parse(data.response));
        }
      },
      err => {
        if (this.upload.error) {
          this.upload.error(err);
        } else {
          this.noticeSer.showToast("错误：上传失败！");
        }
      }
    );
  }


  //上传成功
  // bjecterrorcode: "200"
  // imageUrl: "https://www.petbashi.com/imgs/"
  // info: "ok"
  // message: 
  // "操作成功！"
  // object: Object
  // map:Object
  //  cover: "aaf5a8250c1db2662b092007e3922812.jpg"
  //  filename: "4ec178b28fc4b1e722f0c8f690871261.jpg"






  /**
   * 视频上传
   * @param fileUrl
   * @param options
   */
  public uploadByTransfer(fileUrl: string, options?: FileUploadOptions) {
    if (!options) {
      options = {
        fileKey: "file",
        fileName: fileUrl.substr(fileUrl.lastIndexOf("/") + 1)
      };
    }
    return this.fileTransfer.upload(fileUrl, this.uploadApi, options).then(res=>{
      let rtn=JSON.parse(res.response) 
      return rtn
    });
  }

  /**
   * 调用视频拍摄
   */
  choosePhoto(successCallback) {
    let actionSheet = this.actionSheetCtrl.create({
      title: "选择图片来源",
      buttons: [
        {
          text: "本地视频",
          role: "destructive",
          handler: () => {
            this.getLocalImage(successCallback);
          }
        },
        {
          text: "拍摄视频",
          handler: () => {
            this.takeVideo(successCallback);
          }
        },
        {
          text: "取消",
          role: "cancel",
          handler: () => {}
        }
      ]
    });
    actionSheet.present();
  }

  /**
   * 选择本地视频
   */
  getLocalImage(successCallback) {
    let options = {
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true,
      mediaType: 1, //0为图片，1为视频
      targetWidth: 640,
      targetHeight: 360
    };

    this.camera.getPicture(options).then(
      imageData => {
        console.log(imageData)
        successCallback(imageData);
        //  return this.uploadByTransfer(imageData);
      },
      err => {
        // Handle error
        console.log(err);
      }
    );
  }

  /**
   * 拍摄视频 附带视频截图
   */
  private takeVideo(successCallback) {
    let options: MediaFileData = {
      codecs: "mp4",
      bitrate: 1500,
      height: 360,
      width: 640,
      duration: 15
    };
    this.mediaCapture.captureVideo(options).then(
      (data: MediaFile[]) => {
        this.ditor(data, successCallback);
      },
      (err: CaptureError) => console.error(err)
    );
  }

  /**
   * 视频压缩处理
   */
  private ditor(data, successCallback) {
    console.log(data[0]["fullPath"]);
	let that = this
    let options = {
      fileUri: data[0]["fullPath"], // the path to the video on the device
      outputFileName: data[0]["name"], // the file name for the transcoded video
      saveToLibrary: true, // optional, defaults to true
      deleteInputFile: false, // optional (android only), defaults to false
      maintainAspectRatio: true, // optional (ios only), defaults to true
      width: 640, // optional, see note below on width and height
      height: 360, // optional, see notes below on width and height
      videoBitrate: 1000000, // optional, bitrate in bits, defaults to 1 megabit (1000000)
      fps: 24, // optional (android only), defaults to 24
      audioChannels: 2, // optional (ios only), number of audio channels, defaults to 2
      audioSampleRate: 44100, // optional (ios only), sample rate for the audio, defaults to 44100
      audioBitrate: 128000, // optional (ios only), audio bitrate for the video in bits, defaults to 128 kilobits (128000)
      progress: function(info) {
        console.log(info);
      } // info will be a number from 0 to 100
    };
    this.videoEditor
      .transcodeVideo(options)
      .then(async (fileUri: string) => {
        let url = "file://" + fileUri;
        successCallback(url);
        //  let res = this.uploadByTransfer(url);
      })
      .catch((error: any) => console.log("video transcode error", error));
  }

  // /**
  //  *
  //  * @param data 图片压缩后
  //  */
   private create(data) {
     let options = {
       fileUri: data[0]["fullPath"],
       outputFileName: data[0]["name"],
       atTime: 1,
       width: 640,
       height: 640,
       quality: 80
     };
    return this.videoEditor.createThumbnail(options).then((fileUri: string) => {
       //console.log("上传" + fileUri);
	   return fileUri;
	   //this.fileimgget(fileUri, data,successCallback);
	   //this.uploadImg("file://" + fileUri);
     });
   }

  /**
   * 压缩后的视频
   * @param fileUri 压缩前的视频路径
   * @param data
   */
  // private filevideoget(fileUri, data) {
  //   let evets = fileUri.split(data[0].name);
  //   let fileName = data[0].name + ".mp4";
  //   let Options = {};
  //   this.file
  //     .resolveDirectoryUrl("file://" + evets[0])
  //     .then(res => {
  //       this.file.getFile(res, fileName, Options).then(filedata => {
  //         console.log("视频压缩" + filedata.fullPath);
  //         this.uploadVideo("file://" + filedata.fullPath);
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  // /**
  //  * 压缩后的图片
  //  * @param fileUri
  //  * @param data
  //  */
   private fileimgget(fileUri, data, successCallback) {
     let evets = fileUri.split(data[0].name);
	 let that = this
     let fileName = data[0].name + ".jpg";
     let Options = {};
     this.file
       .resolveDirectoryUrl("file://" + evets[0])
       .then(res => {
         this.file.getFile(res, fileName, Options).then(filedata => {
		 successCallback(filedata)
         });
       })
       .catch(err => console.log(err));
   }

  // 停止上传
  public stopUpload() {
    if (this.fileTransfer) {
      this.fileTransfer.abort();
    }
  }
}
