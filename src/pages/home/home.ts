//import { GuidanceComponent } from './../../components/guidance/guidance';
import { Component, Output, EventEmitter, ViewChild } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { UserService } from "../../app/shared/service/user.service";
import { Buffer } from "buffer";
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
  index: any = 0;
  contnet = "";
  callname = [];
  tkisid;
  imgurl = "";
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
    pageNum: 1,
    rowsPrePage: 10,
    mytoken: ""
  };
  lulartype: number = 1;
  imgUrl;
  petlist = [];
  guanzhulist = [];
  huodonglist = [];
  constructor(public navCtrl: NavController, public http: UserService) {}
  ionViewDidEnter() {
    console.log("第一次进入");
    if (localStorage.getItem("index") == null) {
      localStorage.setItem("index", "0");
    } else {
      this.index = parseInt(localStorage.getItem("index"));   
    }
    this.ctn = 1;
    this.petlist = [];
    this.SWIPER();
    this.data.mytoken = localStorage.getItem("mytoken");
    this.queryAll.mytoken = localStorage.getItem("mytoken");
    if (localStorage.getItem("mytoken") == null) {
      this.usermgs = false;
      this.goguidance = false;
      return false;
    }
this.localogin()
    this.querypetcardlist();
    this.chongwuqueryhistorytypeAlllist();
    this.queryclevertricklist();
  }


  /**
   * 登录验证
   */

  async localogin(){
    let parmas={
      username:JSON.parse(localStorage.getItem("mydata")).client_username ,
      password:JSON.parse(localStorage.getItem("mydata")).client_password
    } 
let res=await this.http.login(parmas)
console.log(res)
   }
  /**
   * 小妙招查询
   */
  async queryclevertricklist() {
    let parmas = {
      pageNum: 1,
      rowsPrePage: 10
    };
    let res = await this.http.queryclevertricklist(parmas);
    this.contnet = res.arrayList[0].content;
    this.tkisid = res.arrayList[0].id;
  }

  /**
   * tab切换
   */
  expression() {
    this.ctn = 1;
    this.maxleng;
    this.loding = false;
    this.petlist = [];
    this.guanzhulist = [];
    this.huodonglist = [];
    console.log(this.lulartype);
    if (this.lulartype == 1) {
      this.chongwuqueryhistorytypeAlllist();
    }
    if (this.lulartype == 2) {
      this.guanzhu();
    }
    if (this.lulartype == 3) {
      this.querypetactivitylist();
    }

    //   this.querypetpolularlist();
  }
  /**
   * 关注列表
   */
  async guanzhu() {
    let parmas = {
      mytoken: localStorage.getItem("mytoken"),
      pageNum: this.ctn,
      rowsPrePage: 10
    };
    let res = await this.http.queryPetConcernhistorytypelist(parmas);
    console.log(res);
    for (let item in res.arrayList) {
      this.guanzhulist.push(res.arrayList[item]);
    }
    this.imgUrl = res.imageUrl;
  }

  /**
   * 评论
   */
  gomessagelist(i) {
    if(this.lulartype==1){
      this.navCtrl.push("MessagelistPage", { datas: this.petlist[i] });
    }
    if(this.lulartype==2){
      this.navCtrl.push("MessagelistPage", { datas: this.guanzhulist[i] });
    }
    
  }
  /**
   * 活动列表查询
   */
  async querypetactivitylist() {
    let parmas = {
      pageNum: this.ctn,
      rowsPrePage: 10
    };
    let res = await this.http.querypetactivitylist(parmas);
    this.maxleng = res.page.maxPage;
    console.log(res);
    console.log(res);
    for (let item in res.arrayList) {
      res.arrayList[item].content = new Buffer(
        res.arrayList[item].content,
        "base64"
      ).toString();
      this.huodonglist.push(res.arrayList[item]);
    }
    console.log(this.huodonglist);
    this.imgUrl = res.imageUrl;
  }

  /**
   *
   */
  async gotrick() {
    console.log(this.tkisid);
    let parmas = {
      cleverid: this.tkisid
    };
    let res = await this.http.queryclevertrick(parmas);
    let datas = res.object;
    this.navCtrl.push("TrickPage", {
      datas
    });
    console.log(res);
  }

  /**
   * 下拉刷新页面
   * @param refresher
   */
  doRefresh(refresher) {
    this.ctn = 1;
    this.petlist = [];
    this.guanzhulist = [];
    this.huodonglist = [];
    this.loding = false;
    this.maxleng;
    if (this.lulartype == 1) {
      this.chongwuqueryhistorytypeAlllist();
    }
    if (this.lulartype == 2) {
      this.querypetactivitylist();
    }
    if (this.lulartype == 3) {
      this.querypetactivitylist();
    }

    setTimeout(() => {
      refresher.complete(); //停止下拉刷新
    }, 2000);
  }

  goctivity(i) {
    console.log(this.huodonglist[i]);
    let datas = this.huodonglist[i];
    let petdata = this.callname[this.index];
    this.navCtrl.push("QueryPetactivityPage", {
      datas,
      petdata
    });
  }
  /**
   *
   * @param infiniteScroll 加载更多
   */
  doInfinite(infiniteScroll) {
    this.ctn++;
    if (this.lulartype == 1) {
      this.chongwuqueryhistorytypeAlllist();
    }
    if (this.lulartype == 2) {
      this.guanzhu();
    }
    if (this.lulartype == 3) {
      this.querypetactivitylist();
    }
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

  /**
   * 关注宠卡
   */
  async addpetConcern(i) {
  
    // let parmas = {
    //   reciveclientid: this.petlist[i].petcard.client_id,
    //   concerntype: 1,
    //   mytoken: localStorage.getItem("mytoken"),
    //   recivepetcardid: this.petlist[i].pet_id
    // };
    console.log(i)
    if (this.lulartype == 1) {
      let parmas = {
        reciveclientid: this.petlist[i].petcard.client_id,
        concerntype: 1,
        mytoken: localStorage.getItem("mytoken"),
        recivepetcardid: this.petlist[i].pet_id
      };
      console.log(this.petlist[i]);
      let res = await this.http.addpetConcern(parmas);
      this.http.http.showToast(res.message);
      if(res.info=="ok"){
        this.petlist[i].concernStatus=!this.petlist[i].concernStatus
      }
      console.log(res);
    }
    if (this.lulartype == 2) {
      console.log(this.guanzhulist[i])
      let parmas = {
        reciveclientid: this.guanzhulist[i].petcard.client_id,
        concerntype: 1,
        mytoken: localStorage.getItem("mytoken"),
        recivepetcardid: this.guanzhulist[i].pet_id
      };
      let res = await this.http.addpetConcern(parmas);
      this.http.http.showToast(res.message);
      if(res.info=="ok"){
        this.guanzhulist[i].concernStatus=!this.guanzhulist[i].concernStatus
      }
    }
   
  }
/**
 * 取消关注
 * @param i 
 */
 async addConcern(i){
//console.log(this.petlist[i]);
    if (this.lulartype == 1) {
      let parmas = {
        reciveclientid: this.petlist[i].petcard.client_id,
        concerntype: 0,
        mytoken: localStorage.getItem("mytoken"),
        recivepetcardid: this.petlist[i].pet_id
      };
  
      let res = await this.http.addpetConcern(parmas);
      this.http.http.showToast(res.message);
      if(res.info=="ok"){
        this.petlist[i].concernStatus=!this.petlist[i].concernStatus
      }
    }

    if (this.lulartype == 2) {
      let parmas = {
        reciveclientid: this.guanzhulist[i].petcard.client_id,
        concerntype: 0,
        mytoken: localStorage.getItem("mytoken"),
        recivepetcardid: this.guanzhulist[i].pet_id
      };
  
      let res = await this.http.addpetConcern(parmas);
      this.http.http.showToast(res.message);
      if(res.info=="ok"){
        this.guanzhulist[i].concernStatus=!this.guanzhulist[i].concernStatus
      }
    }

  }

  /**
   * 点赞动态
   */
  async addpetLikes(i) {
    if (this.lulartype == 1) {
      console.log(this.petlist[i]);
      let parmas = {
        receivehistorytypeid: this.petlist[i].id,
        likestype: 1,
        mytoken: localStorage.getItem("mytoken"),
        receivepetcardid: this.petlist[i].pet_id
      };
      let res = await this.http.addpetLikes(parmas);
      this.http.http.showToast(res.message);
      if(res.info=="ok"){
        this.petlist[i].isLiked=!this.petlist[i].isLiked
      }
      console.log(res);
    }
    if (this.lulartype == 2) {
      console.log(this.guanzhulist[i]);
      let parmas = {
        receivehistorytypeid: this.guanzhulist[i].id,
        likestype: 1,
        mytoken: localStorage.getItem("mytoken"),
        receivepetcardid: this.guanzhulist[i].pet_id
      };
      let res = await this.http.addpetLikes(parmas);
      this.http.http.showToast(res.message);
      if(res.info=="ok"){
        this.guanzhulist[i].isLiked=!this.guanzhulist[i].isLiked
      }
      console.log(res);
    }
    }

/**
 * 取消点赞
 */
async qxaddpetLikes(i){
   if (this.lulartype == 1) {
      console.log(this.petlist[i]);
      let parmas = {
        receivehistorytypeid: this.petlist[i].id,
        likestype: 0,
        mytoken: localStorage.getItem("mytoken"),
        receivepetcardid: this.petlist[i].pet_id
      };
      let res = await this.http.addpetLikes(parmas);
      this.http.http.showToast(res.message);
      if(res.info=="ok"){
        this.petlist[i].isLiked=!this.petlist[i].isLiked
      }
      console.log(res);
    }
    if (this.lulartype == 2) {
      console.log(this.guanzhulist[i]);
      let parmas = {
        receivehistorytypeid: this.guanzhulist[i].id,
        likestype: 0,
        mytoken: localStorage.getItem("mytoken"),
        receivepetcardid: this.guanzhulist[i].pet_id
      };
      let res = await this.http.addpetLikes(parmas);
      this.http.http.showToast(res.message);
      if(res.info=="ok"){
        this.guanzhulist[i].isLiked=!this.guanzhulist[i].isLiked
      }
      console.log(res);
    }
}

  /**
   * 宠卡查询
   */
  async querypetcardlist() {
    let res = await this.http.querypetcardlist(this.data);
    if (res.arrayList.length == 0) {
      this.goguidance = true;
      this.usermgs = false;
    } else {
      this.goguidance = false;
      this.usermgs = true;
      this.callname = res.arrayList;
      localStorage.setItem("petdata",JSON.stringify(this.callname[this.index-0]))
      setTimeout(() => {
        this.queryCalendar();
      }, 300);
    }
  }

  /**
   * 日历事件查询
   */
  async queryCalendar() {
    console.log();
    let index: number = JSON.parse(localStorage.getItem("index"));
    console.log(localStorage.getItem("index"));
    let date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    let dates = `${y}-${m}-${d}`;
    console.log(this.callname);
    let parmas = {
      calendartime: dates,
      mytoken: localStorage.getItem("mytoken"),
      petcardid: this.callname[parseInt(this.index)].client_id
    };
    let res = await this.http.queryCalendar(parmas);
    console.log(res);
  }

  godaylist() {
    this.navCtrl.push("DaylistPage");
  }

  /**
   * 添加宠卡
   */
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
  godetailsto(i) {
    
    console.log(this.petlist[i])
    if(this.petlist[i].petcard.client_id==JSON.parse(localStorage.getItem("mydata")).client_id){
      this.navCtrl.push("DetailsPage", {
        datas: {
          index: this.index
        }
      });
      return false 
    }
        this.navCtrl.push("DetailsPage", {
        id: this.petlist[i]
   });
  }

  godetailstogz(i){
    console.log(this.guanzhulist[i])
    if(this.guanzhulist[i].petcard.client_id==JSON.parse(localStorage.getItem("mydata")).client_id){
      this.navCtrl.push("DetailsPage", {
        datas: {
          index: this.index
        }
      });
      return false 
    }
        this.navCtrl.push("DetailsPage", {
        id: this.guanzhulist[i]
   });
  }

  ionViewCanEnter() {
    //  console.log(localStorage.getItem("index"));
  }
  /**
   * 首页动态查询
   */
  async chongwuqueryhistorytypeAlllist() {
    this.queryAll.pageNum = this.ctn;
    let res = await this.http.chongwuqueryhistorytypeAlllist(this.queryAll);
    console.log(res);
    this.imgurl = res.imageUrl;
    for (let item in res.arrayList) {
      this.petlist.push(res.arrayList[item]);
    }
    this.imgUrl = res.imageUrl;
    this.maxleng = res.page.maxPage;
    // console.log(this.petlist);
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
if(this.callname){
  console.log(this.activeIndex);
  localStorage.setItem("petdata",JSON.stringify(this.callname[this.activeIndex-0]))
}
//
        }
      }
    });
  }

  /**
   * 跳转到添加动态
   */
  Pushdiary() {
    if (!localStorage.getItem("mytoken")) {
      this.http.http.showToast("请先登录");
      return false;
    }
    console.log(parseInt(this.index));
    let datas = this.callname[parseInt(this.index)];
    this.navCtrl.push("MirrorPage", {
      datas
    });
  }
  checkIn() {
    let datas = this.callname;
    this.navCtrl.push("CheckInPage", {
      datas
    });
  }
  ionViewWillLeave(){
    console.log(`准备离开页面了${localStorage.getItem('index')}`)
    localStorage.setItem("petdata",JSON.stringify(this.callname[this.index-0]))
  }
}
