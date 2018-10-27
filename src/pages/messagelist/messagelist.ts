import { UserService } from "./../../app/shared/service/user.service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the MessagelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-messagelist",
  templateUrl: "messagelist.html"
})
export class MessagelistPage {
  imgurl = "https://www.petbashi.com/imgs/";
  imgpath;
  petname = "";
  cover;
  comment = "";
  title = "";
  concernStatus: boolean;
  isLiked;
  messg;
  messgtext;
  messglist = [];
  ctn = 1;
  maxleng;
  loding = false;
  imageUrl;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MessagelistPage");
    console.log(this.navParams.get("datas"));
    this.initdata();
    this.queryPetMessagelist();
  }

  doInfinite(infiniteScroll) {
    this.ctn++;
    this.queryPetMessagelist();
    setTimeout(() => {
      console.log("加载完成后，关闭刷新");
      infiniteScroll.complete();
      //toast提示
      if (this.ctn > this.maxleng) {
        //如果都加载完成的情况，就直接 disable ，移除下拉加载
        this.loding = true;
        infiniteScroll.enable(false);
      }
    }, 2000);
  }
  /**
   * 初始化评论详情
   */
  initdata() {
    this.imgpath = this.navParams.get("datas").petcard.headimgpath;
    this.petname = this.navParams.get("datas").petcard.pet_name;
    this.cover = this.navParams.get("datas").cover;
    this.comment = this.navParams.get("datas").petcard.comment;
    this.title = this.navParams.get("datas").title;
    this.concernStatus = this.navParams.get("datas").concernStatus;
    this.isLiked = this.navParams.get("datas").isLiked;
    console.log(this.concernStatus);
  }

  async addpetConcern() {
    let parmas = {
      reciveclientid: this.navParams.get("datas").petcard.client_id,
      concerntype: 0,
      mytoken: localStorage.getItem("mytoken"),
      recivepetcardid: this.navParams.get("datas").pet_id
    };
    if (this.concernStatus) {
      parmas.concerntype = 0;
    } else {
      parmas.concerntype = 1;
    }

    let res = await this.http.addpetConcern(parmas);
    this.http.http.showToast(res.message);
    if (res.info == "ok") {
      this.concernStatus = !this.concernStatus;
    }
  }

  /**
   * 获取评论列表
   */
  async queryPetMessagelist() {
    let parmas = {
      pageNum: this.ctn,
      rowsPrePage: 10,
      historytypeid: this.navParams.get("datas").id
    };
    let res = await this.http.queryPetMessagelist(parmas);
    this.http.http.showToast(res.message);
    if (res.arrayList == 0) {
      this.messg = true;
      return false;
    }
    for (let index = 0; index < res.arrayList.length; index++) {
      this.messglist.push(res.arrayList[index]);
    }
    this.imageUrl = res.imageUrl;
    this.maxleng = res.page.maxPage;

    console.log(res);
  }

  /**
   * 发表评论
   */
  async pushmess() {
    let parmas = {
      mytoken: localStorage.getItem("mytoken"),
      messageContent: this.messgtext,
      reciveClient: this.navParams.get("datas").petcard.client_id,
      historytypeid: this.navParams.get("datas").id,
      type: 1
    };
    if (this.messgtext.length > 100) {
      this.http.http.showToast("不能超过100个字");
      return false;
    }
    if(this.messgtext.length==0){
      return false
    }
    let res = await this.http.addpetMessage(parmas);
    this.http.http.showToast(res.message);
    this.messgtext = "";
    this.queryPetMessagelist();
    console.log(res);
  }

  /**
   * 点赞动态
   */
  async addpetLikes() {
    let parmas = {
      receivehistorytypeid: this.navParams.get("datas").id,
      likestype: 1,
      mytoken: localStorage.getItem("mytoken"),
      receivepetcardid: this.navParams.get("datas").pet_id
    };
    let res = await this.http.addpetLikes(parmas);
    this.http.http.showToast(res.message);
    console.log(res);
  }

  /**
   * 取消点赞
   */
  async qxaddpetLikes() {
    let parmas = {
      receivehistorytypeid: this.navParams.get("datas").id,
      likestype: 0,
      mytoken: localStorage.getItem("mytoken"),
      receivepetcardid: this.navParams.get("datas").pet_id
    };
    let res = await this.http.addpetLikes(parmas);
    this.http.http.showToast(res.message);
    console.log(res);
  }
}
