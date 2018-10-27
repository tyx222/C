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
  PageTitle;
  petimg;
  // datas={

  // }
  posthttp=true
  remark: "";
  title: "";
  arr = ["添加写真", "添加传记", "添加健康", "添加活动"];
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
    this.type = this.navParams.get("type");
    this.petimg = this.navParams.get("datas").headimgpath;
    console.log(this.navParams.get("cityid"));
    this.PageTitle = this.arr[this.type - 1];
  }

  userimg(i) {
    this.initImgSer(i);
    this.upimgserve.showPicActionSheet();
  }
  initImgSer(i) {
    console.log(i);
    this.upimgserve.upload.success = data => {
      console.log(data);
      if(data.info=="ok"){
         this.avatar[i]=data.imageUrl+data.object.map.filename;
      if(this.avatar.length<5&&this.avatar.indexOf("assets/imgs/images/pushimg.png")==-1){
        this.avatar.push("assets/imgs/images/pushimg.png")
      } 
      }
    
    };
  }

  remimages(i) {
    this.avatar[i] = "assets/imgs/images/pushimg.png";
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
          title: this.title, //标题
          type: this.type, //1:写真  2：传记  3:健康  4:活动
         // chose_time: new Date().getTime(),
          remark: this.remark, //备注
          pet_id: this.navParams.get("datas").id,
          activityid: "", //不参与活动给空
          cover: "", //封面url
          historycontentlist: [
            // {
            //   //内容
            //   type: 2, // 1: 视频  2:照片  3:段落 4 ：动图
            //   path: "", //地址
            //   text: "" //传记段落
            // },
            // {
            //   type: 2,
            //   path: "jik",
            //   text: ""
            // }
          ]  
    };
   if(this.avatar.length>1){
     let lent
     if(this.avatar.indexOf("assets/imgs/images/pushimg.png")==-1){
       lent=this.avatar.length
     }else{
      lent=this.avatar.length-1
     }
     for (let index = 0; index < lent; index++) {
         parmas.historycontentlist.push({
          type:2,
          path:this.avatar[index],
          text:''
         })
     }
   
   }
    if (this.navParams.get("cituid")) {
      parmas.activityid=this.navParams.get("cituid")
    }
    if(this.title==""){
      this.http.http.showToast("您是不是忘了写标题")
      return false
    }
    if(this.remark==""){
      this.http.http.showToast("您是不是忘了写内容")
      return false
    }
    console.log(parmas);
    if(!this.posthttp){
      return false
    }
    let res = await this.http.addhistoryType({jsonPramter:JSON.stringify(parmas)} );
    this.http.http.showToast(res.message)
    if(res.info=="ok"){
      setTimeout(()=>{
        this.posthttp=true
        this.navCtrl.pop()
      },2000)
    }
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
