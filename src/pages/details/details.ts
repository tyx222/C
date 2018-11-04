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
  index = 0;
  userpage = {
    iphome: "",
    weixL: "",
    text: ""
  };
  gaylist: Array<any>;
  integral_num;
  gay = true;
  callname = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public tabs: Tabs,
    private http: UserService
  ) {}

  ionViewWillEnter() {
    this.swipers();
    if (!this.navParams.get("id")) {
      this.index = parseInt(localStorage.getItem("index")) - 0;
      this.querypetcardlist();
      this.gay = true;
    } else {
      this.integral_num = this.navParams.get("id").integral_num;
      this.querypetcard();
      this.gay = false;
    }
    console.log(this.gay);
    console.log(this.navParams.get("id"));
  }

  /**
   * 初始化宠卡
   */
  async querypetcard() {
    this.callname = [];
    let parmas = {
      clientId: this.navParams.get("id").petcard.client_id
    };
    let res = await this.http.querypetcardotherclientlist(parmas);
    if (res.info == "ok") {
      for (let index = 0; index < res.arrayList.length; index++) {
        if (res.arrayList[index].headimgpath.indexOf("https") == -1) {
          res.arrayList[index].headimgpath =
            "https://www.petbashi.com/imgs/" + res.arrayList[index].headimgpath;
        }
      }
      this.callname = res.arrayList;
      this.integral_num = this.callname[0].integral_num;
      this.querypetfeedingtop();
    }
    //   console.log(res);
  }

  /**
   * 查询单张宠卡的投食榜
   * @param petdata
   */
  async querypetfeedingtop() {
    console.log(this.callname[this.index]);
    this.gaylist = [];
    let parmas = {
      petcardid: this.callname[this.index].id,
      mytoken: localStorage.getItem("mytoken")
    };
    let res = await this.http.querypetfeedingtop(parmas);
    if (res.info == "ok") {
      if (res.arrayList.length !== 0) {
        if (res.arrayList.length <= 5) {
          this.gaylist = res.arrayList;
        } else if (res.arrayList.length > 5) {
          for (let i = 0; i < 5; i++) {
            this.gaylist.push(res.arrayList[i]);
          }
        }
      }
    }
    console.log(res);
  }

  Godaylist() {
    console.log(1);
  }
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

  /**
   * 投食
   */
  async addpetFeeding() {
    console.log(this.navParams.get("id"));
    console.log(this.callname[this.index]);
    let parmas = {
      mytoken: localStorage.getItem("mytoken"), //	[string]	是	用户mykoken
      petcardid: this.callname[this.index].id, //[string]	是	被投食猫卡Id
      recive_clientid: this.callname[this.index].client_id, //	[string]	是	接收投食用户id
      feednum: this.callname[this.index].pet_num, //	是	投食编号
      type: 1
    };
    let res = await this.http.addpetFeeding(parmas);
    if (res.info == "ok") {
      this.http.http.showToast(`零食 +${res.object}Kg`);
      this.querypetfeedingtop();
    } else {
      this.http.http.showToast(res.message);
    }
    console.log(res);
  }

  /**
   * 查看关注列表
   */
  felelist(){
    this.navCtrl.push("FelselistPage",{
      petcardid:this.callname[this.index]
    })
  }
  godate(i) {
    if (!this.gay) {
      return false;
    }
    this.navCtrl.push("CalendarPage", this.callname[i - 1]);
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
    this.navCtrl.push("DiaryPage", {
      datas: this.callname[this.index],
      gay: true
    });
  }

  async querypetcardlist() {
    let data = {
      pageNum: 1,
      rowsPrePage: 10,
      mytoken: ""
    };
    data.mytoken = localStorage.getItem("mytoken");
    let res = await this.http.querypetcardlist(data);
    if (res.info == "ok") {
      this.callname = res.arrayList;
      console.log(this.callname);
      this.integral_num = res.arrayList[this.index - 0].integral_num;
      this.querypetfeedingtop();
    }

    console.log(this.callname);
  }

  swipers() {
    let _this = this;
    let index = this.index;
    var mySwiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      // loop:true,
      //autoplay:1000,
      //grabCursor:true,
      initialSlide: localStorage.getItem("index"),
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
          _this.index = this.activeIndex - 0;
          // if (!_this.navParams.get("id")) {
          clearTimeout(timeout);
          var timeout = setTimeout(() => {
            if (_this.callname[_this.index].integral_num) {
              console.log(_this.callname[_this.index]);
              _this.integral_num = _this.callname[_this.index - 0].integral_num;
            }
            _this.querypetfeedingtop();
          }, 500);
          //   }

          localStorage.setItem("index", this.activeIndex);
        }
      }
    });
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DetailsPage');
  // }
}
