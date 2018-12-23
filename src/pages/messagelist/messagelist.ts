import { UserService } from "./../../app/shared/service/user.service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";

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
  mp4;
  type;
  pathlist = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: UserService,
    public alertCtrl:AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MessagelistPage");
    console.log(this.navParams);
    // this.initdata();
    this.querypethistorytypecontent();
    this.queryPetMessagelist();
  }

  async querypethistorytypecontent() {
    let parmas = {
      historytypeid: this.navParams.get("datas").id
    };
    let res = await this.http.querypethistorytypecontent(parmas);
    if (res.info == "ok") {
      if ((res.object.type == 1 && res.object.historycontentlist[0].type == 1)||(res.object.type == 4 && res.object.historycontentlist[0].type == 1)) {
        res.object.mp4 = "mp4";
      }
      this.initdata(res.object);
    }

    console.log(res);
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
  initdata(data) {
    this.imgpath = data.petcard.headimgpath;
    this.petname = data.petcard.pet_name;
    this.cover = data.cover;
    this.comment = data.petcard.comment;
    this.title = data.title;
    this.concernStatus = data.concernStatus;
    this.isLiked = data.isLiked;
    this.mp4 = data.mp4;
    this.pathlist = data.historycontentlist;
    this.type = data.type;
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
    this.messglist = [];
    let res = await this.http.queryPetMessagelist(parmas);
    this.http.http.showToast(res.message);
    if (res.arrayList == 0) {
      this.messg = true;
      return false;
    }
    this.messg = false;
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
    if (this.messgtext.length == 0) {
      return false;
    }
    let res = await this.http.addpetMessage(parmas);

    this.http.http.showToast(res.message);
    this.messgtext = "";
    this.queryPetMessagelist();
    console.log(res);
  }

/**
   * 回复留言
   * @param i 
   */
 async huifu(i){
   if(this.messglist[i].sendPetClient.client_id==JSON.parse(localStorage.getItem("mydata")).client_id){
return false
   }
  
console.log(this.messglist[i])
  const prompt = this.alertCtrl.create({
    title: '回复留言',
    message: `输入你要回复 ${this.messglist[i].sendPetClient.client_nikename} 的消息`,
    inputs: [
      {
        name: 'title',
        placeholder: '回复'
      },
    ],
    buttons: [
      {
        text: '确定',
        handler:async data => {
          console.log(data)
          let parmas = {
            mytoken: localStorage.getItem("mytoken"),
            messageContent: data.title,
            reciveClient: this.messglist[i].recivePetClient.client_id,
            historytypeid: this.messglist[i].historytypeid,
            parents_message_id:this.messglist[i].messageId,
            type: 1
          };
          if (data.title.length > 100) {
            this.http.http.showToast("不能超过100个字");
            return false;
          }
          if (data.title.length == 0) {
            return false;
          }
          let res = await this.http.addpetMessage(parmas);
      
          this.http.http.showToast(res.message);
         
          if(res.info=="ok"){
              this.queryPetMessagelist();
          }
        
          console.log(res);
        }
      },
      {
        text: '取消',
        handler: data => {
          console.log('Saved clicked');
        }
      }
    ]
  });
  prompt.present();
}
  
huifu2(i,j){
  console.log(this.messglist[i])
  if(this.messglist[i].petMessages[j].sendPetClient.client_id==JSON.parse(localStorage.getItem("mydata")).client_id){
    return false
       }
  const prompt = this.alertCtrl.create({
    title: '回复留言',
    message: `输入你要回复 ${this.messglist[i].petMessages[j].sendPetClient.client_nikename} 的消息`,
    inputs: [
      {
        name: 'title',
        placeholder: '回复'
      },
    ],
    buttons: [
      {
        text: '确定',
        handler:async data => {
          console.log(data)
          let parmas = {
            mytoken: localStorage.getItem("mytoken"),
            messageContent: data.title,
            reciveClient: this.messglist[i].petMessages[j].recivePetClient.client_id,
            historytypeid: this.messglist[i].petMessages[j].historytypeid,
            parents_message_id:this.messglist[i].petMessages[j].messageId,
            type: 1
          };
          if (data.title.length > 100) {
            this.http.http.showToast("不能超过100个字");
            return false;
          }
          if (data.title.length == 0) {
            return false;
          }
          let res = await this.http.addpetMessage(parmas);
      
          this.http.http.showToast(res.message);
         
          if(res.info=="ok"){
              this.queryPetMessagelist();
          }
        
          console.log(res);
        }
      },
      {
        text: '取消',
        handler: data => {
          console.log('Saved clicked');
        }
      }
    ]
  });
  prompt.present();
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
    if (res.info == "ok") {
      this.isLiked = !this.isLiked;
      this.http.http.showToast(res.message);
    } else {
      this.http.http.showToast(res.message);
    }

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
    if (res.info == "ok") {
      this.isLiked = !this.isLiked;
      this.http.http.showToast(res.message);
    } else {
      this.http.http.showToast(res.message);
    }
    console.log(res);
  }
}
