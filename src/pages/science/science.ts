import { MyHttpService } from "./../../app/shared/service/my-http.service";
import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  Slides,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { UserService } from "../../app/shared/service/user.service";
declare let Swiper: any;
/**
 * Generated class for the SciencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-science",
  templateUrl: "science.html"
})
export class SciencePage {
  @ViewChild(Slides)
  slides: Slides;
  lib=0
  imgUrl = ["/assets/imgs/images/callbg.png", "/assets/imgs/images/callbg.png"];
  finddata = [];
  cookiedata = [];
  ctn: number = 1;
  imgpaths: string;
  number: number = 0;
  loding = false;
  lulartype: number = 1;
  totle: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: UserService,
    public loadingCtrl: LoadingController,
    public lodingserver: MyHttpService
  ) {}

  ionViewDidLoad() {
    console.log("第一次进入");
    this.myswipers();
    this.querypetpolularlist();
  }
  ionViewWillEnter() {}

  goknowledg(i) {
    console.log(i);
    console.log(this.finddata);
    this.navCtrl.push("KnowledgPage", this.finddata[i]);
  }
  ionViewWillUnload() {
    console.log(123);
  }
  doRefresh(refresher) {
    this.ctn = 1;
    this.finddata = [];
    this.loding = false;
    this.querypetpolularlist();
    setTimeout(() => {
      refresher.complete(); //停止下拉刷新
    }, 2000);
  }
  doInfinite(infiniteScroll) {
    this.ctn++;
    this.querypetpolularlist();
    setTimeout(() => {
      console.log("加载完成后，关闭刷新");
      infiniteScroll.complete();
      //toast提示
      if (this.ctn >= this.totle.maxPage) {
        //如果都加载完成的情况，就直接 disable ，移除下拉加载
        this.loding = true;
        infiniteScroll.enable(false);
      }
    }, 2000);
  }
  async querypetpolularlist() {
    let parmas = { pageNum: this.ctn, rowsPrePage: 10, type: this.lulartype };
    let res = await this.http.querypetpolularlist(parmas);
    this.totle = res.page;
    console.log(res);
    for (let i = 0; i < res.arrayList.length; i++) {
      res.arrayList[i].previewimg = res.arrayList[i].previewimg.replace(
        /,/g,
        ""
      );
      if (res.arrayList[i].science_title.indexOf("@@") != -1) {
        let mgs=res.arrayList[i].science_title.split(
          "@@"
        )
        res.arrayList[i].science_title=mgs[0]
        res.arrayList[i]["textmgs"] = mgs[1];
        console.log(res.arrayList[i]["textmgs"][1])
      }
      this.finddata.push(res.arrayList[i]);
    }
    console.log(this.finddata);
    this.imgpaths = res.imageUrl;
  }
  expression(){
    this.finddata=[]
    this.querypetpolularlist();
  }
  myswipers() {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      loop: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
}
