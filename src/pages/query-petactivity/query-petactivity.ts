import { UserService } from "./../../app/shared/service/user.service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Buffer } from "buffer";
declare let Swiper: any;
/**
 * Generated class for the QueryPetactivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-query-petactivity",
  templateUrl: "query-petactivity.html"
})
export class QueryPetactivityPage {
  title;
  activity_prize;
  huojiangtext=''
  indexs=0
  content;
  cityid;
  advertimg=[]
  historytypelist=[]
  historyimg=[]
  activitystart=0
  imgsrc
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad QueryPetactivityPage");
    this.swipers()
    this.mgs();
    console.log(this.navParams.get("petdata"));
   this.mgs();
    this.huojiang()
  }
 async gohuodongpage(){
  
    this.navCtrl.push("HuodongpagePage",{
      text:this.content
    })
  }
  huojiang(){
setInterval(()=>{
  if(this.indexs<this.activity_prize.length-1){
     this.indexs+=1
     this.huojiangtext=this.activity_prize[this.indexs]
  }else{
    this.indexs=0
    this.huojiangtext=this.activity_prize[this.indexs]
  }
 
},2000)
  }

  /**
   * 
   * @param i 关注
   */
  async addpetConcern(i) {
    console.log(i);
      let parmas = {
        reciveclientid: this.historytypelist[i].petcard.client_id,
        concerntype: 1,
        mytoken: localStorage.getItem("mytoken"),
        recivepetcardid: this.historytypelist[i].pet_id
      };
      console.log(this.historytypelist[i]);
      let res = await this.http.addpetConcern(parmas);
      this.http.http.showToast(res.message);
      if (res.info == "ok") {
        this.historytypelist[i].concernStatus = !this.historytypelist[i].concernStatus;
      }
  }

   /**
   * 取消关注
   * @param i
   */
  async addConcern(i) {
    //console.log(this.petlist[i]);
  
      let parmas = {
        reciveclientid: this.historytypelist[i].petcard.client_id,
        concerntype: 0,
        mytoken: localStorage.getItem("mytoken"),
        recivepetcardid: this.historytypelist[i].pet_id
      };

      let res = await this.http.addpetConcern(parmas);
      this.http.http.showToast(res.message);
      if (res.info == "ok") {
        this.historytypelist[i].concernStatus = !this.historytypelist[i].concernStatus;
      }
  }

  /**
   * 
   * @param i 点赞
   */
  async addpetLikes(i) {

      console.log(this.historytypelist[i]);
      let parmas = {
        receivehistorytypeid: this.historytypelist[i].id,
        likestype: 1,
        mytoken: localStorage.getItem("mytoken"),
        receivepetcardid: this.historytypelist[i].pet_id
      };
      let res = await this.http.addpetLikes(parmas);
      this.http.http.showToast(res.message);
      if (res.info == "ok") {
        this.historytypelist[i].isLiked = !this.historytypelist[i].isLiked;
      }
  }

 /**
   * 取消点赞
   */
  async qxaddpetLikes(i) {
      console.log(this.historytypelist[i]);
      let parmas = {
        receivehistorytypeid: this.historytypelist[i].id,
        likestype: 0,
        mytoken: localStorage.getItem("mytoken"),
        receivepetcardid: this.historytypelist[i].pet_id
      };
      let res = await this.http.addpetLikes(parmas);
      this.http.http.showToast(res.message);
      if (res.info == "ok") {
        this.historytypelist[i].isLiked = !this.historytypelist[i].isLiked;
      }
  }


  gomessagelist(i) {
      this.navCtrl.push("MessagelistPage", { datas: this.historytypelist[i] });
  }

  async mgs() {
    let petmas = { activityid: this.navParams.get("datas").activityid };
    let res = await this.http.queryPetactivity(petmas);
    console.log(res)
    res.object.content = new Buffer(res.object.content, "base64").toString();
    this.activitystart=res.object.activitystart
    this.title = res.object.activity_title;
    this.content = res.object.content;
    this.advertimg=res.object.advertimg.split(",")
    console.log(this.advertimg)
    this.activity_prize = res.object.activity_prize.split("@@");
    this.huojiangtext=this.activity_prize[this.indexs]
    this.historytypelist=res.object.historytypelist
    this.imgsrc=res.imageUrl
    for (let item in this.historytypelist) {
      if (this.historytypelist.length != 0) {
        if (this.historytypelist[item].historycontentlist[0].type == 1) {
          this.historytypelist[item]["mp4"] = true;
        }
      }
    }
    console.log(this.historytypelist)
    if(this.historytypelist.length>5){
      for (let i = 0; i <5; i++) {
        this.historyimg.push(this.historytypelist[i]);
      }
    }
    if(this.historytypelist.length<=5){
      this.historyimg=this.historytypelist
    }
    this.cityid = res.object.activityid;
    console.log(this.historytypelist);
  }
  godaylist(){
    this.navCtrl.push("DaylistPage",{

      object:this.historyimg,
      type:3
    })
  }
 async gohuodong() {
    let parmas={
      mytoken:localStorage.getItem("mytoken")
    }
    let res=await this.http.queryPetReceiverlist(parmas)
   if (res.arrayList.length==0) {
     this.http.http.showToast("请先添加收货地址")
     return false
   } 
    let datas = this.navParams.get("petdata");
    let cityid = this.cityid;
    this.navCtrl.push("MirrorPage", {
      datas,
      cityid
    });
 
  }
  swipers() {
    var mySwiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      // loop:true,
      //autoplay:1000,
      //grabCursor:true,
      initialSlide: 0,
      centeredSlides: true,
      slidesPerView: "auto",
      effect: "coverflow",
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
  
    });
  }
}
