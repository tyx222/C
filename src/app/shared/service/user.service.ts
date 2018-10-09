import { Injectable } from "@angular/core";
import { MyHttpService } from "./my-http.service";
import { ToastController } from 'ionic-angular';
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
    addpetcard:"chongwu/chongwu/addpetcard",
    deletePetcard:"chongwu/chongwu/deletePetcard"
  };
  constructor(public http: MyHttpService,public toastCtrl: ToastController) {}
  
  /**
   * 提示框
   * @param data 提示文字
   */
  presentToast(data) {
    const toast = this.toastCtrl.create({
      message: data,
      duration: 3000,
      position:"middle",
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
  addpetcard(data){
    return this.http.Post(this.api.addpetcard,data)
  }

  /**
   * deletePetcard 删除宠物卡
   */
  deletePetcard(data){
    return this.http.Post(this.api.deletePetcard,data)
  }
}
