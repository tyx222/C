//import { GuidanceComponent } from './../../components/guidance/guidance';
import { Component, Output, EventEmitter, ViewChild } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { UserService } from "../../app/shared/service/user.service";

declare let Swiper: any;

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  //@ViewChild(GuidanceComponent)
  usermgs: boolean = true;
  goguidance: boolean = false;
  index = "0";
  callname = [];
  data = {
    pageNum: 1,
    rowsPrePage: 20,
    mytoken: ""
  };
  loding = false;
  maxleng;
  totle: any;
  ctn = 1;
  queryAll = {
    pageNum: this.ctn,
    rowsPrePage: 10,
    mytoken: ""
  };
  imgUrl;
  petlist = [];
  constructor(public navCtrl: NavController, public http: UserService) {}
  ionViewDidEnter() {
    console.log("第一次进入");
    this.petlist = [];
    this.SWIPER();
    this.data.mytoken = localStorage.getItem("mytoken");
    this.queryAll.mytoken = localStorage.getItem("mytoken");
    if (localStorage.getItem("mytoken") == null) {
      this.usermgs = false;
      this.goguidance = false;
      return false;
    }

    this.querypetcardlist();
    this.chongwuqueryhistorytypeAlllist();
  }

  doRefresh(refresher) {
    this.ctn = 1;
    this.petlist = [];
    this.loding = false;
    this.maxleng;
    this.chongwuqueryhistorytypeAlllist();
    setTimeout(() => {
      refresher.complete(); //停止下拉刷新
    }, 2000);
  }
  doInfinite(infiniteScroll) {
    this.ctn++;
    this.chongwuqueryhistorytypeAlllist();
    setTimeout(() => {
      console.log("加载完成后，关闭刷新");
      infiniteScroll.complete();
      //toast提示
      if (this.ctn >= this.maxleng) {
        //如果都加载完成的情况，就直接 disable ，移除下拉加载
        this.loding = true;
        infiniteScroll.enable(false);
      }
    }, 2000);
  }

  async querypetcardlist() {
    let res = await this.http.querypetcardlist(this.data);
    console.log(res.arrayList.length);
    if (res.arrayList.length == 0) {
      console.log(res.arrayList.length);
      this.goguidance = true;
      this.usermgs = false;
    } else {
      this.goguidance = false;
      this.usermgs = true;
      this.callname = res.arrayList;
      console.log(this.callname);
    }
  }
  godaylist() {
    this.navCtrl.push("DaylistPage");
  }
  gonewlay() {
    this.navCtrl.push("NewlayPage");
  }
  gologin() {
    this.navCtrl.push("LoginPage");
  }
  gohomes(mgs) {
    console.log(mgs);
    this.goguidance = mgs;
  }
  godetails() {
    this.navCtrl.push("DetailsPage", {
      datas: {
        index: this.index
      }
    });
  }
  ionViewCanEnter() {
    console.log(localStorage.getItem("index"));
    this.index = localStorage.getItem("index");
  }
  async chongwuqueryhistorytypeAlllist() {
    let res = await this.http.chongwuqueryhistorytypeAlllist(this.queryAll);
    for (let item in res.arrayList) {
      this.petlist.push(res.arrayList[item]);
    }
    this.imgUrl = res.imageUrl;
    this.maxleng = res.page.maxPage;
    console.log(this.petlist);
  }
  SWIPER() {
    var mySwiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      // loop:true,
      //autoplay:1000,
      //grabCursor:true,
      initialSlide: this.index,
      centeredSlides: true,
      slidesPerView: "auto",
      effect: "coverflow",
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      coverflow: {
        rotate: 0, //滑动时旋转角度
        stretch: 100, //聚合宽度
        depth: 100, //景深
        modifier: 1, //覆盖叠加层数
        slideShadows: false //是否阴影
      },
      on: {
        slideChangeTransitionStart: function() {
          // alert(this.activeIndex);
          localStorage.setItem("index", this.activeIndex);
        }
      }
    });
  }

  Pushdiary() {
    this.navCtrl.push("MirrorPage");
  }
  checkIn() {
    this.navCtrl.push("CheckInPage");
  }
}
