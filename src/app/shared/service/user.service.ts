import { Injectable } from "@angular/core";
import { MyHttpService } from "./my-http.service";
import { ToastController } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";
@Injectable()
export class UserService {
  private api = {
    userLogin: "chongwu/app/Applogin",
    querypetpolularlist: "chongwu/chongwu/querypetpolularlist",
    querypetdtailpolular: "chongwu/chongwu/querypetdtailpolular",
    registerclient: "chongwu/app/registerclient",
    addcalenderevent: "chongwu/app/addcalenderevent",
    queryCalendar: "chongwu/app/queryCalendar",
    queryhistorytypeAlllist: "chongwu/chongwu/queryhistorytypeAlllist",
    queryPetConcernhistorytypelist:
      "chongwu/chongwu/queryPetConcernhistorytypelist",
    queryPetConcernlist: "chongwu/chongwu/queryPetConcernlist",
    querypetcardnum: "chongwu/chongwu/querypetcardnum",
    querypetcardlist: "chongwu/chongwu/querypetcardlist",
    addpetcard: "chongwu/chongwu/addpetcard",
    deletePetcard: "chongwu/chongwu/deletePetcard",
    updatepetcard: "chongwu/chongwu/updatepetcard",
    uploadFile: "chongwu/chongwu/uploadFile",
    querypetpetcardfeedingrankinglist:
      "chongwu/chongwu/querypetpetcardfeedingrankinglist",
    addPetReceiver: "chongwu/chongwu/addPetReceiver",
    chongwuqueryhistorytypeAlllist: "chongwu/chongwu/queryhistorytypeAlllist",
    queryclevertricklist: "chongwu/app/queryclevertricklist",
    queryclevertrick: "chongwu/app/queryclevertrick",
    address: "/chongwu/chongwu/queryPetReceiverdetaile_address",
    queryPetReceiverlist: "chongwu/chongwu/queryPetReceiverlist",
    deletePetReceiver: "chongwu/chongwu/deletePetReceiver",
    updatePetReceiver: "chongwu/chongwu/updatePetReceiver",
    queryhistoryTypetypelist: "chongwu/chongwu/queryhistoryTypetypelist",
    addhistoryType: "chongwu/chongwu/addhistoryType",
    querypetproductlist: "chongwu/chongwu/querypetproductlist",
    addpetFeedingsign: "chongwu/chongwu/addpetFeedingsign",
    querypetactivitylist: "chongwu/chongwu/querypetactivitylist",
    queryPetactivity: "chongwu/chongwu/queryPetactivity",
    addpetConcern: "chongwu/chongwu/addconcern",
    bangdingclient: "chongwu/chongwu/bangdingclient",
    addpetLikes: "chongwu/chongwu/addpetLikes",
    queryPetMessagelist: "chongwu/chongwu/queryPetMessagelist",
    addpetMessage: "chongwu/chongwu/addpetMessage",
    querypetcard: "chongwu/chongwu/querypetcard",
    addappOrder: "chongwu/chongwu/addPetOrder",
    statuslist: "chongwu/chongwu/queryPetOrderorder_statuslist",
    weixinor: "chongwu/app/weixinorderBeforSendapp",
    addpetFeeding: "chongwu/chongwu/addpetFeeding",
    querypetcardotherclientlist: "chongwu/chongwu/querypetcardotherclientlist",
    querypetfeedingtop: "chongwu/chongwu/querypetfeedingtop",
    queryPetConcernclientlist: "chongwu/chongwu/queryPetConcernclientlist",
    querymessageNew: "chongwu/chongwu/querymessageNew",
    deletehistoryType: "chongwu/chongwu/deletehistoryType",
    querypethistorytypecontent: "chongwu/chongwu/querypethistorytypecontent",
    addreport: "chongwu/chongwu/addreport",
    addblack: "chongwu/app/addblack",
    querypetfeedinglist: "chongwu/chongwu/querypetfeedinglist",
    querypetfeedingclientlist: "chongwu/chongwu/querypetfeedingclientlist",
    updatemating: "chongwu/chongwu/updatemating",
    addmating: "chongwu/app/addmating",
    querypetcardmatinglist: "chongwu/app/querypetcardmatinglist",
    addshop:"chongwu/app/addshop"
  };
  constructor(
    public http: MyHttpService,
    public toastCtrl: ToastController,
    public geolocation: Geolocation
  ) {}

  /**
   * gps定位
   */
  public getGPS() {
    return this.geolocation
      .getCurrentPosition()
      .then(position => {
        // var x = position.coords.latitude;
        // var y = position.coords.longitude;
        var city = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        // var pi = (3.14159265358979324 * 3000.0) / 180.0,
        //   z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * pi),
        //   theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * pi),
        //   lon = z * Math.cos(theta) + 0.0065,
        //   lan = z * Math.sin(theta) + 0.006;

        if (!city.latitude || !city.longitude) {
          alert("地址获取失败，请刷新页面重新获取！");
          return false;
        }
        // var city = {
        //   x: lan,//latitude
        //   y: lon//longitude
        // };
        return city;
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }

  /**
   * 活动详情
   */
  queryPetactivity(data) {
    return this.http.Post(this.api.queryPetactivity, data);
  }

  /**
   * 提示框
   * @param data 提示文字
   */
  presentToast(data) {
    const toast = this.toastCtrl.create({
      message: data,
      duration: 3000,
      position: "middle"
    });
    toast.present();
  }

  /**
   *  登录
   * @param username 用户名
   * @param password 密码
   * @param code 验证码
   * @param divcie_key 手机设备关键字
   * @param divcie_type 设备类型
   */
  login(data) {
    return this.http.Postlogin(this.api.userLogin, data);
  }

  /**
   * 查询我的猫卡
   * @param pageNum 页数
   * @param rowsPrePage 每次加载的条数
   * @param mytoken 用户tokoen
   */
  querypetcardlist(data) {
    return this.http.Post(this.api.querypetcardlist, data);
  }
  /**
   * 科普列表
   * @param pageNum 页数
   * @param rowsPrePage 每次加载的条数
   */
  querypetpolularlist(data) {
    return this.http.Post(this.api.querypetpolularlist, data);
  }
  /**
   * 科普详情
   * @param scienceid  科普id
   */
  querypetdtailpolular(data) {
    return this.http.Post(this.api.querypetdtailpolular, data);
  }

  /**
   * 注册
   * @param client_username 用户名
   * @param client_password 密码
   */
  registerclient(data) {
    return this.http.Post(this.api.registerclient, data);
  }

  /**
   * 添加日历事件
   * @param event 事件
   * @param calendar_time 时间
   * @param petcardid 猫卡ID
   * @param event_title 事件标题
   */
  addcalenderevent(data) {
    return this.http.Post(this.api.addcalenderevent, data);
  }

  /**
   * 查询日历事件
   * @param mytoken 用户token
   * @param calendartime 时间
   * @param petcardid 猫卡ID
   */
  queryCalendar(data) {
    return this.http.Post(this.api.queryCalendar, data);
  }
  /**
   *发现(所有猫卡的动态)
   * @param pageNum 当前页数
   * @param rowsPrePage 每次加载多少条
   */
  queryhistorytypeAlllist(data) {
    return this.http.Post(this.api.queryhistorytypeAlllist, data);
  }
  /**
   * 关注（我关注的猫卡的动态）
   * @param mytoken 用户token
   */
  queryPetConcernhistorytypelist(data) {
    return this.http.Post(this.api.queryPetConcernhistorytypelist, data);
  }
  /**
   * 关注（我关注的猫卡的动态）
   * @param pageNum 当前页数
   * @param rowsPrePage 每次加载多少条
   * @param mytoken 用户token
   */
  queryPetConcernlist(data) {
    return this.http.Post(this.api.queryPetConcernlist, data);
  }
  /**
   * 根据猫卡号搜索猫卡
   * @param petnum 宠物卡编号
   */
  querypetcardnum(data) {
    return this.http.Post(this.api.querypetcardnum, data);
  }
  /**
   * 添加猫卡
   * @param
   */
  addpetcard(data) {
    return this.http.Post(this.api.addpetcard, data);
  }

  /**
   * deletePetcard 删除宠物卡
   */
  deletePetcard(data) {
    return this.http.Post(this.api.deletePetcard, data);
  }
  /**
   *
   * @param data 修改宠卡
   */
  updatepetcard(data) {
    return this.http.Post(this.api.updatepetcard, data);
  }

  /**
   * 今日宠榜
   */
  querypetpetcardfeedingrankinglist() {
    return this.http.Post(this.api.querypetpetcardfeedingrankinglist, {});
  }
  /**
   * 添加收货地址
   */
  addPetReceiver(data) {
    return this.http.Post(this.api.addPetReceiver, data);
  }

  /**
   * 首页动态查询
   */
  chongwuqueryhistorytypeAlllist(data) {
    return this.http.Post(this.api.chongwuqueryhistorytypeAlllist, data);
  }

  /**
   * queryclevertricklist 小妙招
   */
  queryclevertricklist(data) {
    return this.http.Post(this.api.queryclevertricklist, data);
  }

  /**
   *
   * @param data 小妙招详情
   */
  queryclevertrick(data) {
    return this.http.Post(this.api.queryclevertrick, data);
  }

  /**
   *查询默认收货地址
   */
  address(data) {
    return this.http.Post(this.api.address, data);
  }
  /**
   * 查询所有收货地址
   */
  queryPetReceiverlist(data) {
    return this.http.Post(this.api.queryPetReceiverlist, data);
  }
  /**
   * 删除收货地址
   */
  deletePetReceiver(data) {
    return this.http.Post(this.api.deletePetReceiver, data);
  }

  /**
   * 编辑收货地址
   */
  updatePetReceiver(data) {
    return this.http.Post(this.api.updatePetReceiver, data);
  }
  /**
   * 按类型查询动态
   * @param type 1:写真  2：传记  3:健康  4:活动
   * @param petcardid 宠卡ID
   */
  queryhistoryTypetypelist(data) {
    return this.http.Post(this.api.queryhistoryTypetypelist, data);
  }

  /**
   * addhistoryType
   * @param type 1:写真  2：传记  3:健康  4:活动
   */
  addhistoryType(data) {
    return this.http.Post(this.api.addhistoryType, data);
  }
  /**
   *   商品查询
   */

  querypetproductlist(data) {
    return this.http.Post(this.api.querypetproductlist, data);
  }

  /**
   * 签到
   */

  addpetFeedingsign(data) {
    return this.http.Post(this.api.addpetFeedingsign, data);
  }
  /**
   * 查询活动列表
   * @param data
   */
  querypetactivitylist(data) {
    return this.http.Post(this.api.querypetactivitylist, data);
  }

  /**
   * 关注宠卡
   */
  addpetConcern(data) {
    return this.http.Post(this.api.addpetConcern, data);
  }

  /**
   * 绑定用户信息
   * @param data
   */
  bangdingclient(data) {
    return this.http.Post(this.api.bangdingclient, data);
  }
  /**
   * 点赞动态
   */
  addpetLikes(data) {
    return this.http.Post(this.api.addpetLikes, data);
  }
  /**
   * 查询评论
   * @param data
   */
  queryPetMessagelist(data) {
    return this.http.Post(this.api.queryPetMessagelist, data);
  }
  /**
   * 发表评论
   */
  addpetMessage(data) {
    return this.http.Post(this.api.addpetMessage, data);
  }

  /**
   * 查询单个宠卡
   */
  querypetcard(data) {
    return this.http.Post(this.api.querypetcard, data);
  }

  /**
   * 添加订单
   */
  addappOrder(data) {
    return this.http.Post(this.api.addappOrder, data);
  }

  /**
   * 查询订单
   */
  statuslist(data) {
    return this.http.Post(this.api.statuslist, data);
  }

  /**
   * 微信支付预处理
   */
  weixinor(data) {
    return this.http.Post(this.api.weixinor, data);
  }

  /**
   * 查询某用户的所有猫卡
   * @param data
   */
  querypetcardotherclientlist(data) {
    return this.http.Post(this.api.querypetcardotherclientlist, data);
  }

  /**
   * 投食
   */
  addpetFeeding(data) {
    return this.http.Post(this.api.addpetFeeding, data);
  }

  /**
   * 单张宠卡的投食榜
   */
  querypetfeedingtop(data) {
    return this.http.Post(this.api.querypetfeedingtop, data);
  }

  /**
   * 粉丝列表
   * @param data
   */
  queryPetConcernclientlist(data) {
    return this.http.Post(this.api.queryPetConcernclientlist, data);
  }

  /**
   * 查询通知消息
   */
  querymessageNew(data) {
    return this.http.Post(this.api.querymessageNew, data);
  }
  /**
   * 删除动态
   */
  deletehistoryType(data) {
    return this.http.Post(this.api.deletehistoryType, data);
  }

  /**
   * 查询单条动态
   */
  querypethistorytypecontent(data) {
    return this.http.Post(this.api.querypethistorytypecontent, data);
  }
  /**
   *
   * @param data 举报
   */
  addreport(data) {
    return this.http.Post(this.api.addreport, data);
  }

  /**
   * 加入黑名单
   */
  addblack(data) {
    return this.http.Post(this.api.addblack, data);
  }

  /**
   * 查询我投食
   */
  querypetfeedinglist(data) {
    return this.http.Post(this.api.querypetfeedinglist, data);
  }
  /**
   * 查询别人给我的投食记录
   */
  querypetfeedingclientlist(data) {
    return this.http.Post(this.api.querypetfeedingclientlist, data);
  }

  /**
   * 配种状态设置
   */
  updatemating(data) {
    return this.http.Post(this.api.updatemating, data);
  }

  /**
   * 发送配种消息
   */
  addmating(data) {
    return this.http.Post(this.api.addmating, data);
  }
  /**
   * 同城配种猫卡
   */
  querypetcardmatinglist(data) {
    return this.http.Post(this.api.querypetcardmatinglist, data);
  }
  addshop(data){
    return this.http.Post(this.api.addshop,data)
  }
}
