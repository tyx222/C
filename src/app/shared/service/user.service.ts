import { Injectable } from "@angular/core";
import { MyHttpService } from "./my-http.service";
import { ToastController } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";
import { WechatChenyu } from "wechat-chenyu";
declare var Wechat: any;

export interface WechatPayParam {
  partnerid: string;
  prepayid: string;
  noncestr: string;
  timestamp: string;
  sign: string;
}
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
    addPetOrder: "chongwu/chongwu/addPetOrder",
    statuslist: "chongwu/chongwu/queryPetOrderorder_statuslist",
    weixinor: "chongwu/app/weixinorderBeforSendpet",
    addpetFeeding: "chongwu/chongwu/addpetFeeding",
    querypetcardotherclientlist: "chongwu/chongwu/querypetcardotherclientlist",
    querypetfeedingtop: "chongwu/chongwu/querypetfeedingtop",
    queryPetConcernclientlist: "chongwu/chongwu/queryPetConcernclientlist",
    querymessageNew: "chongwu/chongwu/querymessageNew",
    deletehistoryType: "chongwu/chongwu/deletehistoryType",
    querypethistorytypecontent: "chongwu/chongwu/querypethistorytypecontent",
    addreport: "chongwu/chongwu/addreport",
    addblack: "chongwu/app/addblack",
    querypetfeedinglist: "chongwu/chongwu/querypetfeedinglist", //查询我的投食
    querypetfeedingclientlist: "chongwu/chongwu/querypetfeedingclientlist", //查询我给别人的投食记录
    querypetotherfeedinglist: "chongwu/chongwu/querypetotherfeedinglist", //查询我的全部投食
    updatemating: "chongwu/chongwu/updatemating",
    addmating: "chongwu/app/addmating",
    querypetcardmatinglist: "chongwu/app/querypetcardmatinglist",
    addshop: "chongwu/app/addshop",
    alipay: "chongwu/app/alipayorderBeforSendapp",
    queryshopclassify: "chongwu/app/queryshopclassify",
    deleteshopclassify: "chongwu/app/deleteshopclassify",
    queryshopclassifygoodlist: "chongwu/app/queryshopclassifygoodlist",
    queryshopnullgoodlist: "chongwu/app/queryshopnullgoodlist",
    queryshopbyclientid: "chongwu/app/queryshopbyclientid",
    queryshopbyshopid: "chongwu/app/queryshop",
    addshopclassify: "chongwu/app/addshopclassify",
    updateshopclassify: "chongwu/app/updateshopclassify",
    addgoods: "chongwu/app/addgoods",
    querygoods: "chongwu/app/querygoods",
    addappstoreOrder: "chongwu/app/addappOrder",
    updategoods: "chongwu/app/updategoods",
    queryshopgoods: "chongwu/app/queryshopgoods",
    updateshopstatus: "chongwu/app/updateshopstauts",
    querypropertylist: "chongwu/app/querypropertylist",
    querypropertycommonlist: "chongwu/app/querypropertycommonlist",
    queryclassbrandlist: "chongwu/app/queryclassbrandlist",
    queryclasslist: "chongwu/app/queryclasslist",
    updategoodshopclassify: "chongwu/app/updategoodshopclassify",
    updategoodstatus: "chongwu/app/updategoodstatus",
    querygoodsbyseach: "chongwu/app/querygoodsbyseach",
    queryapporderlist: "chongwu/app/queryapporderlist",
    addcollectoin: "chongwu/app/addcollectoin",
    querycollectionlist: "chongwu/app/querycollectionlist",
    deletecollection: "chongwu/app/deletecollection",
    addevaluate: "chongwu/app/addevaluate",
    queryevaluatelist: "chongwu/app/queryevaluatelist",
    addshopcar: "chongwu/app/addshopcar",
    queryshopcar: "chongwu/app/queryshopcar",
    updateshopcar: "chongwu/app/updateshopcar",
    deleteshopcar: "chongwu/app/deleteshopcar",
    queryshopapporderlist: "chongwu/app/queryshopapporderlist",
    addcoupon: "chongwu/app/addcoupon",
    querycouponlist: "chongwu/app/querycouponlist",
    updatecouponstatus: "chongwu/app/updatecouponstatus",
    updateorderstatus: "chongwu/app/updateorderstatus",
    addshopclient: "chongwu/app/addshopclient",
    couponclientlist: "chongwu/app/couponclientlist",
    deletecoupon: "chongwu/app/deletecoupon",
    queryclientunum: "chongwu/app/queryclientunum",
    choiceclerk: "chongwu/app/choiceclerk",
    queryappdtailOrderlist: "chongwu/app/queryappdtailOrderlist",
    querymyclerklist: "chongwu/app/querymyclerklist",
    queryclerklist: "chongwu/app/queryclerklist",
    wxGoBackOrder: "chongwu/app/wxGoBackOrder",
    logistics: "chongwu/app/logistics",
    queryPetOrderlist: "chongwu/chongwu/queryPetOrderlist",
    deletePetOrder: "chongwu/chongwu/deletePetOrder",
    sendCode: "chongwu/app/sendCode",
    updapassword: "chongwu/app/updapassword",
    updaphonenumber: "chongwu/app/updaphonenumber",
    alipayorderBeforSendPet: "chongwu/app/alipayorderBeforSendPet",
    querypetproduct: "chongwu/chongwu/querypetproduct",
    queryPetdtailOrderlist: "chongwu/chongwu/queryPetdtailOrderlist",
    surereceiveorder: "chongwu/chongwu/surereceiveorder",
    addwallet:"chongwu/app/addwallet",
    getwalletbalance:"chongwu/app/getwalletbalance",
    addappeal:"chongwu/chongwu/addappeal",
    queryclient:"chongwu/app/queryclient",
	queryclasschildlist:"chongwu/app/queryclasschildlist",
	addrefundable:"chongwu/app/addrefundable",
	intervention:"chongwu/app/intervention",
	refuserefundable:"chongwu/app/refuserefundable",
	queryRefundable:"chongwu/app/queryRefundable",
	queryRefundablelist:"chongwu/app/queryRefundablelist",
  addevaluatechild:"chongwu/app/addevaluatechild",
  weixinBeforSendaccount:"chongwu/app/weixinBeforSendaccount",
  alipaysendaccount:"chongwu/app/alipaysendaccount",
  querywalletorderlist: "chongwu/app/querywalletorderlist",
  payAppWallet:"chongwu/app/payAppWallet",
  SetPayment:"chongwu/app/SetPayment",
  updatepayment:"chongwu/app/updatepayment"
  }

  constructor(
    public http: MyHttpService,
    public toastCtrl: ToastController,
    public geolocation: Geolocation,
    public wechat: WechatChenyu
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
   * 退货
   */
  addrefundable(data) {
    return this.http.Post(this.api.addrefundable, data);
  }

  /**
   * 退货客服介入
   */
  intervention(data) {
    return this.http.Post(this.api.intervention, data);
  }

  /**
   * 商家处理退款
   */
  refuserefundable(data) {
    return this.http.Post(this.api.refuserefundable, data);
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
  addPetOrder(data) {
    return this.http.Post(this.api.addPetOrder, data);
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
   * 支付宝支付预处理
   */
  alipay(data) {
    return this.http.Post(this.api.alipay, data);
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
  /* 查询店铺
   * @param data
   */
  queryshopbyclientid() {
    return this.http.Post(this.api.queryshopbyclientid, { _time: 110 });
  }

  /**
   * 查询店铺
   * @param data
   */
  queryshopbyshopid(data) {
    return this.http.Post(this.api.queryshopbyshopid, data);
  }

  /**
   * 积分商城确认收货
   * @param data
   */
  surereceiveorder(data) {
    return this.http.Post(this.api.surereceiveorder, data);
  }
  /**
   *
   * @param data
   */
  querypetotherfeedinglist(data) {
    return this.http.Post(this.api.querypetotherfeedinglist, data);
  }

  /**
   * 查询店铺分类
   * @param data
   */
  queryshopclassify(data) {
    return this.http.Post(this.api.queryshopclassify, data);
  }

  /**
   * 添加店铺分类
   * @param data
   */
  addshopclassify(data) {
    return this.http.Post(this.api.addshopclassify, data);
  }

  /**
   * 编辑店铺分类
   * @param data
   */
  updateshopclassify(data) {
    return this.http.Post(this.api.updateshopclassify, data);
  }

  /**
   * 删除店铺分类
   * @param data
   */
  deleteshopclassify(data) {
    return this.http.Post(this.api.deleteshopclassify, data);
  }

  /**
   * 保存店铺信息
   * @param data
   */
  addshop(data) {
    return this.http.Post(this.api.addshop, data);
  }

  /**
   * 添加店铺商品
   * @param data
   */
  addgood(data) {
    return this.http.Post(this.api.addgoods, data);
  }

  /**
   * 更新店铺商品
   * @param data
   */
  updategoods(data) {
    return this.http.Post(this.api.updategoods, data);
  }

  /**
   * 店铺分类下的商品
   * @param data
   */
  queryshopclassifygoodlist(data) {
    return this.http.Post(this.api.queryshopclassifygoodlist, data);
  }

  /**
   * 店铺内未关联任何店铺分类的商品
   * @param data
   */
  queryshopnullgoodlist(data) {
    return this.http.Post(this.api.queryshopnullgoodlist, data);
  }

  /**
   * 商品关联店铺分类
   * @param data
   */
  updategoodshopclassify(data) {
    return this.http.Post(this.api.updategoodshopclassify, data);
  }

  /**
   * 商品上下架
   * @param data
   */
  updategoodstatus(data) {
    return this.http.Post(this.api.updategoodstatus, data);
  }

  /**
   * 更新店铺状态
   * @param data
   */
  updateshopstatus(data) {
    return this.http.Post(this.api.updateshopstatus, data);
  }

  /**
   * 查询店铺商品
   * @param data
   */
  querygoodsbyseach(data) {
    return this.http.Post(this.api.querygoodsbyseach, data);
  }

  /**
   * 查询店铺商品详情
   * @param data
   */
  querygoods(data) {
    return this.http.Post(this.api.querygoods, data);
  }

  /**
   * 查询属性
   */
  querypropertylist(data) {
    return this.http.Post(this.api.querypropertylist, data);
  }
  /**
   * 查询公共属性
   */
  querypropertycommonlist() {
    return this.http.Post(this.api.querypropertycommonlist, { _time: 111 });
  }

  /**
   * 查询全局分类
   * @param data
   */
  queryclasslist() {
    return this.http.Post(this.api.queryclasslist, { _time: 111 });
  }

  /**
   * 品牌列表
   * @param data
   */
  queryclassbrandlist(data) {
    return this.http.Post(this.api.queryclassbrandlist, data);
  }

  /**
   * 按店铺查询商品列表
   * @param data
   */
  queryshopgoods(data) {
    return this.http.Post(this.api.queryshopgoods, data);
  }

  /**
   * 宠物商城添加订单
   * @param data
   */
  addappstoreOrder(data) {
    return this.http.Post(this.api.addappstoreOrder, data);
  }

  /**
   * 宠物商城查询订单
   * @param data
   */
  queryapporderlist(data) {
    return this.http.Post(this.api.queryapporderlist, data);
  }

  /**
   * 宠物商城添加收藏
   * @param data
   */
  addcollectoin(data) {
    return this.http.Post(this.api.addcollectoin, data);
  }

  /**
   * 宠物商城收藏列表
   * @param data
   */
  querycollectionlist(data) {
    return this.http.Post(this.api.querycollectionlist, data);
  }

  /**
   * 宠物商城移除收藏的商品
   * @param data
   */
  deletecollection(data) {
    return this.http.Post(this.api.deletecollection, data);
  }

  /**
   * 商城商品添加评价
   * @param data
   */
  addevaluate(data) {
    return this.http.Post(this.api.addevaluate, data);
  }

  /**
   * 商城商品评价列表
   * @param data
   */
  queryevaluatelist(data) {
    return this.http.Post(this.api.queryevaluatelist, data);
  }

  /**
   * 商城添加购物车
   * @param data
   */
  addshopcar(data) {
    return this.http.Post(this.api.addshopcar, data);
  }

  /**
   * 商城购物车列表
   * @param data
   */
  queryshopcar(data) {
    return this.http.Post(this.api.queryshopcar, data);
  }

  /**
   * 商城修改购物车
   * @param data
   */
  updateshopcar(data) {
    return this.http.Post(this.api.updateshopcar, data);
  }

  /**
   * 商城删除购物车
   * @param data
   */
  deleteshopcar(data) {
    return this.http.Post(this.api.deleteshopcar, data);
  }

  /**
   * 商城商家订单列表
   * @param data
   */
  queryshopapporderlist(data) {
    return this.http.Post(this.api.queryshopapporderlist, data);
  }

  /**
   * 商城商家发布优惠券
   * @param data
   */
  addcoupon(data) {
    return this.http.Post(this.api.addcoupon, data);
  }

  /**
   * 商城商家优惠券列表
   * @param data
   */
  querycouponlist(data) {
    return this.http.Post(this.api.querycouponlist, data);
  }
  /**
   * 商城商家派发优惠券
   * @param data
   */
  updatecouponstatus(data) {
    return this.http.Post(this.api.updatecouponstatus, data);
  }

  /**
   * 商城商家邀请店员
   * @param data
   */
  addshopclient(data) {
    return this.http.Post(this.api.addshopclient, data);
  }


  /**
   * 用户信息拉取
   * @param data 
   */
 queryclient(data){
   return this.http.Post(this.api.queryclient,data)
 }
 
  /**
   * 用户领取优惠卷列表
   * @param data
   */
  couponclientlist(data) {
    return this.http.Post(this.api.couponclientlist, data);
  }

/**
 * 积分商城申述
 * @param data 
 */
addappeal(data){
  return this.http .Post(this.api.addappeal,data)
}

  /**
   * 商家发货
   * @param data
   */
  updateorderstatus(data) {
    return this.http.Post(this.api.updateorderstatus, data);
  }

/**
 * 充值
 * @param data 
 */
addwallet(data){
  return this.http.Post(this.api.addwallet,data)
}

/**
 * 微信充值
 * @param data 
 */
weixinBeforSendaccount(data){
  return this.http.Post(this.api.weixinBeforSendaccount,data)
}
/**
 * 充值记录
 * @param data 
 */
querywalletorderlist(data){
  return this.http.Post(this.api.querywalletorderlist,data)
}

/**
 *  钱包支付
 * @param data
 */
payAppWallet(data){
  return this.http.Post(this.api.payAppWallet,data)
}

/**
 * 设置钱包支付密码
 * @param data 
 */
SetPayment(data){
  return this.http.Post(this.api.SetPayment,data)
}
/**
 * 修改钱包密码
 */
updatepayment(data){
  return this.http.Post(this.api.updatepayment,data)
}
/**
 * 支付宝充值
 * @param data 
 */
alipaysendaccount(data){
  return this.http.Post(this.api.alipaysendaccount,data)
}

/**
 * 用户钱包
 * @param data 
 */
getwalletbalance(data){
  return this.http.Post(this.api.getwalletbalance,data)
}

  /**
   * 商家删除优惠券
   */
  deletecoupon(data) {
    return this.http.Post(this.api.deletecoupon, data);
  }
  /**
   * 数字id查询用户
   */
  queryclientunum(data) {
    return this.http.Post(this.api.queryclientunum, data);
  }
  /**
   * 店员被邀请拒绝或同意
   */
  choiceclerk(data) {
    return this.http.Post(this.api.choiceclerk, data);
  }
  /**
   * 商城订单详情
   */
  queryappdtailOrderlist(data) {
    return this.http.Post(this.api.queryappdtailOrderlist, data);
  }

  /**
   * 我收到的邀请
   */
  querymyclerklist() {
    return this.http.Post(this.api.querymyclerklist, { _time: 1 });
  }

  /**
   * 店铺邀请的店员列表
   */
  queryclerklist(data) {
    return this.http.Post(this.api.queryclerklist, data);
  }

  wxGoBackOrder(data) {
    return this.http.Post(this.api.wxGoBackOrder, data);
  }

  logistics(data) {
    return this.http.Post(this.api.logistics, data);
  }
	
	/**
   * 子分类
   */

  queryclasschildlist(data) {
    return this.http.Post(this.api.queryclasschildlist, data);
  }
	/**
   * 商家退款列表
   */

  queryRefundablelist(data) {
    return this.http.Post(this.api.queryRefundablelist, data);
  }

	/**
   * 商家退款详情
   */

  queryRefundable(data) {
    return this.http.Post(this.api.queryRefundable, data);
  }


	/**
   * 追平
   */

  addevaluatechild(data) {
    return this.http.Post(this.api.addevaluatechild, data);
  }

  /**
   * 积分商城所有订单
   * @param data
   */
  queryPetOrderlist(data) {
    return this.http.Post(this.api.queryPetOrderlist, data);
  }

  /**
   * 积分商城单个商品查询
   * @param data
   */
  querypetproduct(data) {
    return this.http.Post(this.api.querypetproduct, data);
  }

  /**
   * 积分商城支付宝预订单
   * @param data
   */
  alipayorderBeforSendPet(data) {
    return this.http.Post(this.api.alipayorderBeforSendPet, data);
  }

  /**
   * 积分商城订单详情
   * @param data
   */

  queryPetdtailOrderlist(data) {
    return this.http.Post(this.api.queryPetdtailOrderlist, data);
  }

  /**
   *
   * @param params 积分商城订单删除
   */
  deletePetOrder(data) {
    return this.http.Post(this.api.deletePetOrder, data);
  }

  /**
   * 短信验证
   * @param params
   */
  sendCode(data) {
    return this.http.Post(this.api.sendCode, data);
  }

  /**
   * 修改密码
   * @param params
   */
  updapassword(data) {
    return this.http.Post(this.api.updapassword, data);
  }

  /**
   * 修改手机号
   * @param params
   */
  updaphonenumber(data) {
    return this.http.Post(this.api.updaphonenumber, data);
  }
  /**
   * 微信支付订单处理
   * https://api.mch.weixin.qq.com/pay/unifiedorder
   */
  sendPaymentRequest(params: WechatPayParam) {
    return new Promise((resolve, reject) => {
      Wechat.sendPaymentRequest(
        params,
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        }
      );
    });
  }
}
