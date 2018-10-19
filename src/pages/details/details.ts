import { UserService } from "./../../app/shared/service/user.service";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  Tabs
} from "ionic-angular";
declare let Swiper: any;
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-details",
  templateUrl: "details.html"
})
export class DetailsPage {
  index = "1";

  userpage = {
    iphome: "",
    weixL: "",
    text: ""
  };
  callname = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public tabs: Tabs,
    private http: UserService
  ) {}

  gohome() {
    this.tabs.select(0);
    this.navCtrl.popToRoot();
    console.log(this.tabs);
  }
  goguanai() {
    this.tabs.select(1);
    this.navCtrl.popToRoot();
    console.log(this.tabs);
  }
  Personalcenter() {
    this.tabs.select(4);
    this.navCtrl.popToRoot();
  }
  godate(i) {
   this.navCtrl.push("CalendarPage",
     this.callname[i-1]
  );
  }
  postlo() {
    console.log(localStorage.getItem("index"));
    const prompt = this.alertCtrl.create({
      title: "请求配种",
      inputs: [
        {
          type: "number",
          name: "联系方式",
          placeholder: "联系方式"
        },
        {
          name: "text",
          placeholder: "推荐微信"
        },
        {
          name: "配种理由",
          placeholder: "配种理由"
        }
      ],
      buttons: [
        {
          text: "取消",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "确认",
          handler: data => {
            console.log(prompt.data.inputs);
            this.userpage.iphome = prompt.data.inputs[0].value;
            this.userpage.weixL = prompt.data.inputs[1].value;
            this.userpage.text = prompt.data.inputs[2].value;
            alert(this.userpage);
          }
        }
      ]
    });
    prompt.present();
  }
  Pushdiary() {
    this.navCtrl.push("DiaryPage");
  }
  ionViewDidLoad() {
    this.index = localStorage.getItem("index");
    this.swipers();
    this.querypetcardlist();
  }
  async querypetcardlist() {
    let data = {
      pageNum: 1,
      rowsPrePage: 10,
      mytoken: ""
    };
    data.mytoken = localStorage.getItem("mytoken");
    let res = await this.http.querypetcardlist(data);
    this.callname = res.arrayList;
    console.log(this.callname);
  }

  swipers() {
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
          this.index = this.activeIndex;
          console.log(localStorage);
          localStorage.setItem("index", this.activeIndex);
        }
      }
    });
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DetailsPage');
  // }
}
