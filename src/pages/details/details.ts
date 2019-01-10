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
  checked = true;
  callname = [];
  daylist = [];
  myboject;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public tabs: Tabs,
    private http: UserService
  ) {}

  ionViewWillEnter() {
    this.swipers();
    if (!this.navParams.get("type")) {
      if (!this.navParams.get("id")) {
        this.index = parseInt(localStorage.getItem("index")) - 0;
        this.querypetcardlist();
        this.gay = true;
      } else {
        this.integral_num = this.navParams.get("id").integral_num;
        this.querypetcard();
        this.gay = false;
      }
    } else {
      this.querypetcard();
      this.gay = true;
    }

    console.log(this.gay);
    console.log(this.navParams);
  }

/**
 * 获取经纬度
 */
async gps(){
let res=await this.http.getGPS()
console.log()
}

  /**
   * 初始化宠卡
   */
  async querypetcard() {
    this.callname = [];
    let parmas = {
      clientId: ""
    };

    if (this.navParams.get("type") == 0) {
      parmas.clientId = this.navParams.get("id").client_id;
    }else if(this.navParams.get("type") == 9){
      parmas.clientId = this.navParams.get("id").client_id
    } else {
      parmas.clientId = this.navParams.get("id").petcard.client_id;
    }

    let res = await this.http.querypetcardotherclientlist(parmas);
    console.log(res)
    if (res.info == "ok") {
    
      for (let index = 0; index < res.arrayList.length; index++) {
        console.log(res.arrayList[index])
        if (
          res.arrayList[index].headimgpath.indexOf("https") == -1
        ) {
          
          res.arrayList[index].headimgpath =
            "https://www.petbashi.com/imgs/" + res.arrayList[index].headimgpath;
        }
        if (this.navParams.get("type") == 0) {
          if (
            res.arrayList[index].pet_num - 0 ==
            this.navParams.get("id").pet_num - 0
          ) {
            console.log(index);
            this.callname = [];
            this.callname.push(res.arrayList[index]);
            if (
              res.arrayList[index].client_id ==
              JSON.parse(localStorage.getItem("mydata")).client_id
            ) {
              this.gay = true;
            } else {
              this.gay = false;
            }
          }
        }
        if (res.arrayList[index].mating_status == 0) {
          res.arrayList[index]["peizhong"] = false;
        } else {
          res.arrayList[index]["peizhong"] = true;
        }
      }
      if (this.navParams.get("type") != 0) {
        this.callname = res.arrayList;
      }

      this.integral_num = this.callname[0].integral_num;
      console.log(this.callname);
      this.querypetfeedingtop();
    }
  }

  /**
   * 举报
   */
  jubao(i) {
    const prompt = this.alertCtrl.create({
      title: "举报",
      message: "举报的理由",
      inputs: [
        {
          name: "title",
          placeholder: "Title"
        }
      ],
      buttons: [
        {
          text: "确定",
          handler: async data => {
            let parmas = {
              report_petcardid: this.callname[i].id,
              mytoken: localStorage.getItem("mytoken"),
              report_reason: data.title,
              receive_clientid: this.callname[i].client_id
            };
            let res = await this.http.addreport(parmas);
            this.http.http.showToast(res.message);
          }
        },
        {
          text: "取消",
          handler: data => {}
        }
      ]
    });
    prompt.present();
  }
  /**
   * 配种开关
   * @param i
   */
  async updatemating(i, j) {
    console.log(i, j);
    let buff = 1;
    if (!j) {
      buff = 1;
    } else {
      buff = 0;
    }
    let gps=await this.http.getGPS()
    let parmas = {
      petcardid: this.callname[i].id,
      mating_status: buff,
      gps_longitude:gps['longitude'].toString(),
      gps_latitude:gps['latitude'].toString()
    };
    console.log(parmas)
    let res = await this.http.updatemating(parmas);
    this.http.http.showToast(res.message);
    this.querypetcardlist()
    if(res.info=="ok"){
     this.callname[i]["peizhong"] != this.callname[i]["peizhong"];
    }else{
      this.http.http.showToast("定位失败");
     // this.callname[i]["peizhong"] = this.callname[i]["peizhong"]
      // if (this.callname[i].mating_status == 0) {
      //   this.callname[i].peizhong = false;
      // } else {
      //   this.callname[i].peizhong = true;
      // }
      console.log(this.callname[i])
    }
    console.log(res);
  }

  /**
   * 加入黑名单
   */
  lahei(i) {
    const prompt = this.alertCtrl.create({
      title: "拉黑",
      message: "拉黑的理由",
      inputs: [
        {
          name: "title",
          placeholder: "拉黑理由"
        }
      ],
      buttons: [
        {
          text: "确定",
          handler: async data => {
            let parmas = {
              mytoken: localStorage.getItem("mytoken"),
              reason: data.title,
              black_clientid: this.callname[i].client_id
            };

            let res = await this.http.addblack(parmas);
            this.http.http.showToast(res.message);
          }
        },
        {
          text: "取消",
          handler: data => {}
        }
      ]
    });
    prompt.present();
  }

  /**
   * 查询单张宠卡的投食榜
   * @param petdata
   */
  async querypetfeedingtop() {
    this.gaylist = [];
    let parmas = {
      petcardid: this.callname[this.index].id,
      mytoken: localStorage.getItem("mytoken")
    };
    let res = await this.http.querypetfeedingtop(parmas);
    if (res.info == "ok") {
      this.myboject = res.object;
      this.daylist = res.arrayList;
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
  }

  gohome() {
    this.tabs.select(0);
    this.navCtrl.popToRoot();
  }
  goguanai() {
    this.tabs.select(1);
    this.navCtrl.popToRoot();
  }
  Personalcenter() {
    this.tabs.select(4);
    this.navCtrl.popToRoot();
  }

  /**
   * 投食
   */
  async addpetFeeding() {
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
  }

  /**
   *
   */
  godaylist() {
    console.log(this.daylist)
    if(this.daylist.length==0){
      this.http.http.showToast("还没有人给你投食，赶紧去发动态吧")
      return false
    }
    console.log(this.myboject)
    this.navCtrl.push("DaylistPage", {
      daylist: this.daylist,
      object: this.myboject,
      type: 2
    });
  }

  /**
   * 查看关注列表
   */
  felelist() {
    this.navCtrl.push("FelselistPage", {
      petcardid: this.callname[this.index - 0].id
    });
  }
  godate() {
    if (!this.gay) {
      return false;
    }
    this.navCtrl.push("CalendarPage", this.callname[this.index]);
  }
  postlo(i) {
    const prompt = this.alertCtrl.create({
      title: "请求配种",
      inputs: [
        {
          name: "联系方式",
          placeholder: "联系方式"
        },
        // {
        //   name: "text",
        //   placeholder: "地址"
        // },
        {
          name: "配种理由",
          placeholder: "配种理由"
        }
      ],
      buttons: [
        {
          text: "取消",
          handler: data => {}
        },
        {
          text: "确认",
          handler: async data => {
            console.log(prompt.data.inputs);
            // this.userpage.iphome = prompt.data.inputs[0].value;
            // this.userpage.weixL = prompt.data.inputs[1].value;
            // this.userpage.text = prompt.data.inputs[2].value;
            console.log(prompt);
            console.log(this.callname[i].id);
            let parmas = {
              // mytoken:localStorage.getItem("mytoken"),//..	[string]	是
              petcardid: JSON.parse(localStorage.getItem("petdata")).id, //	[string]	是	猫卡id
              mating_status: "", //	[string]	是	配种状态 0.等待配种 1.完成配种
              phonenum: prompt.data.inputs[0].value, //	[string]	是	联系方式
              remark: prompt.data.inputs[1].value, //	[string]	是	备注，要求等
              otherpetcardid: this.callname[i].id, //被请求猫卡ID
              otherclientid: this.callname[i].client_id,
              otherphone: ""
            };
            let res = await this.http.addmating(parmas);
            this.http.http.showToast(res.message)
          }
        }
      ]
    });
    prompt.present();
  }
  Pushdiary() {
    this.navCtrl.push("DiaryPage", {
      datas: this.callname[this.index],
      gay: this.gay
    });
  }
  xiezhen() {
    this.navCtrl.push("XiezhenPage", {
      datas: this.callname[this.index],
      gay: this.gay
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
      for (let index = 0; index < res.arrayList.length; index++) {
        if (
          res.arrayList[index].headimgpath.indexOf("https") == -1
        ) {
          
          res.arrayList[index].headimgpath =
            "https://www.petbashi.com/imgs/" + res.arrayList[index].headimgpath;
        }
        if (this.navParams.get("type") == 0) {
          if (
            res.arrayList[index].pet_num - 0 ==
            this.navParams.get("id").pet_num - 0
          ) {
            console.log(index);
            this.callname = [];
            this.callname.push(res.arrayList[index]);
            if (
              res.arrayList[index].client_id ==
              JSON.parse(localStorage.getItem("mydata")).client_id
            ) {
              this.gay = true;
            } else {
              this.gay = false;
            }
          }
        }
        if (res.arrayList[index].mating_status == 0) {
          res.arrayList[index]["peizhong"] = false;
        } else {
          res.arrayList[index]["peizhong"] = true;
        }
      }
      this.callname = res.arrayList;
      console.log(this.callname);
      this.integral_num = res.arrayList[this.index - 0].integral_num;
      this.querypetfeedingtop();
    }
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
          }, 1000);
          //   }
          if (_this.gay) {
            localStorage.setItem("index", this.activeIndex);
          }
        }
      }
    });
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DetailsPage');
  // }
}
