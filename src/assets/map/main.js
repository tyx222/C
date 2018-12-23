webpackJsonp([68],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditionalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AdditionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdditionalPage = (function () {
    function AdditionalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdditionalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdditionalPage');
    };
    AdditionalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-additional',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\additional\additional.html"*/`<!--\n  Generated template for the AdditionalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>additional</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div style="margin-top:3.7rem;">\n        <div class=\'selectStyle\'>\n            <textarea name="" id="" placeholder="请填写您的追评信息"></textarea>\n            <p>点击上传图片</p>\n            <button>\n        <img src="assets/imgs/images/shangchuan@2x.png" alt="" srcset="">\n      </button>\n        </div>\n        <div class="cont4">\n\n            <div class="text2">\n                <ion-list>\n                    <ion-item style="border: 0px;line-height: 30px;padding-left: 0px;">\n                        <ion-avatar class=\'ion-user-avator\' item-start style="margin-left: 15px;">\n                            <img class=\'userAvator\' src="assets/imgs/images/petImg.png">\n                        </ion-avatar>\n                        <h2>asdasd</h2>\n                        <p>asdasdasdsad</p>\n                    </ion-item>\n                    <span>youtu pingjia</span>\n                    <div class=\'imgContent\' text-center>\n                        <img src="assets/imgs/images/petImg.png" alt="">\n                        <img src="assets/imgs/images/petImg.png" alt="">\n                        <img src="assets/imgs/images/petImg.png" alt="">\n                        <img src="assets/imgs/images/petImg.png" alt="">\n                        <img src="assets/imgs/images/petImg.png" alt="">\n                        <img src="assets/imgs/images/petImg.png" alt="">\n                    </div>\n                </ion-list>\n            </div>\n        </div>\n    </div>\n\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\additional\additional.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AdditionalPage);
    return AdditionalPage;
}());

//# sourceMappingURL=additional.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppraisePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AppraisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppraisePage = (function () {
    function AppraisePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AppraisePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppraisePage');
    };
    AppraisePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-appraise',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\appraise\appraise.html"*/`<!--\n  Generated template for the ShopCommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>查看评价</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div style="margin-top:3.7rem;">\n        <div class=\'selectStyle\'>\n            <span class=\'options\' [ngClass]="{\'checked\':isChose==0}">全部</span>\n            <span class=\'options\' [ngClass]="{\'checked\':isChose==1}">最新</span>\n            <span class=\'options\' [ngClass]="{\'checked\':isChose==2}">追加(1)</span>\n            <span class=\'options\' [ngClass]="{\'checked\':isChose==3}">有图(1)</span>\n            <span class=\'options\' [ngClass]="{\'checked\':isChose==4}">视频(1)</span>\n            <span class=\'options\' [ngClass]="{\'checked\':isChose==5}">差评(1)</span>\n        </div>\n        <div class="cont4">\n            <div class="text1">\n                <span>宝宝评价( 1321 )</span>\n            </div>\n            <div class="text2">\n                <ion-list>\n                    <ion-item style="border: 0px;line-height: 30px;padding-left: 0px;">\n                        <ion-avatar class=\'ion-user-avator\' item-start style="margin-left: 15px;">\n                            <img class=\'userAvator\' src="assets/imgs/images/petImg.png">\n                        </ion-avatar>\n                        <h2>asdasd</h2>\n                        <p>asdasdasdsad</p>\n                    </ion-item>\n                    <span>youtu pingjia</span>\n                    <div class=\'imgContent\' text-center>\n                        <img src="assets/imgs/images/petImg.png" alt="">\n                        <img src="assets/imgs/images/petImg.png" alt="">\n                        <img src="assets/imgs/images/petImg.png" alt="">\n                        <img src="assets/imgs/images/petImg.png" alt="">\n                        <img src="assets/imgs/images/petImg.png" alt="">\n                        <img src="assets/imgs/images/petImg.png" alt="">\n                    </div>\n                </ion-list>\n            </div>\n        </div>\n    </div>\n    <div class="shoppingcall">\n        <div>\n            <p>\n                <span>\n              <img src="assets/imgs/images/dp.png" alt="">\n            </span>\n                <span>店铺</span>\n            </p>\n            <p>\n                <span>\n              <img src="assets/imgs/images/aixin.png" alt="">\n            </span>\n                <span>收藏</span>\n            </p>\n        </div>\n        <div>\n            <button class="join">加入购物车</button><button class="shop">立即购买</button>\n        </div>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\appraise\appraise.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AppraisePage);
    return AppraisePage;
}());

//# sourceMappingURL=appraise.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_http_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http, toastCtrl, geolocation) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.api = {
            userLogin: "chongwu/app/Applogin",
            querypetpolularlist: "chongwu/chongwu/querypetpolularlist",
            querypetdtailpolular: "chongwu/chongwu/querypetdtailpolular",
            registerclient: "chongwu/app/registerclient",
            addcalenderevent: "chongwu/app/addcalenderevent",
            queryCalendar: "chongwu/app/queryCalendar",
            queryhistorytypeAlllist: "chongwu/chongwu/queryhistorytypeAlllist",
            queryPetConcernhistorytypelist: "chongwu/chongwu/queryPetConcernhistorytypelist",
            queryPetConcernlist: "chongwu/chongwu/queryPetConcernlist",
            querypetcardnum: "chongwu/chongwu/querypetcardnum",
            querypetcardlist: "chongwu/chongwu/querypetcardlist",
            addpetcard: "chongwu/chongwu/addpetcard",
            deletePetcard: "chongwu/chongwu/deletePetcard",
            updatepetcard: "chongwu/chongwu/updatepetcard",
            uploadFile: "chongwu/chongwu/uploadFile",
            querypetpetcardfeedingrankinglist: "chongwu/chongwu/querypetpetcardfeedingrankinglist",
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
            querypetcardmatinglist: "chongwu/app/querypetcardmatinglist"
        };
    }
    /**
     * gps定位
     */
    UserService.prototype.getGPS = function () {
        return this.geolocation
            .getCurrentPosition()
            .then(function (position) {
            // var x = position.coords.latitude;
            // var y = position.coords.longitude;
            var city = {
                x: position.coords.latitude,
                y: position.coords.longitude
            };
            // var pi = (3.14159265358979324 * 3000.0) / 180.0,
            //   z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * pi),
            //   theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * pi),
            //   lon = z * Math.cos(theta) + 0.0065,
            //   lan = z * Math.sin(theta) + 0.006;
            if (!city.x || !city.y) {
                alert("地址获取失败，请刷新页面重新获取！");
                return false;
            }
            // var city = {
            //   x: lan,//latitude
            //   y: lon//longitude
            // };
            return city;
        })
            .catch(function (error) {
            console.log("Error getting location", error);
        });
    };
    /**
     * 活动详情
     */
    UserService.prototype.queryPetactivity = function (data) {
        return this.http.Post(this.api.queryPetactivity, data);
    };
    /**
     * 提示框
     * @param data 提示文字
     */
    UserService.prototype.presentToast = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 3000,
            position: "middle"
        });
        toast.present();
    };
    /**
     *  登录
     * @param username 用户名
     * @param password 密码
     * @param code 验证码
     * @param divcie_key 手机设备关键字
     * @param divcie_type 设备类型
     */
    UserService.prototype.login = function (data) {
        return this.http.Postlogin(this.api.userLogin, data);
    };
    /**
     * 查询我的猫卡
     * @param pageNum 页数
     * @param rowsPrePage 每次加载的条数
     * @param mytoken 用户tokoen
     */
    UserService.prototype.querypetcardlist = function (data) {
        return this.http.Post(this.api.querypetcardlist, data);
    };
    /**
     * 科普列表
     * @param pageNum 页数
     * @param rowsPrePage 每次加载的条数
     */
    UserService.prototype.querypetpolularlist = function (data) {
        return this.http.Post(this.api.querypetpolularlist, data);
    };
    /**
     * 科普详情
     * @param scienceid  科普id
     */
    UserService.prototype.querypetdtailpolular = function (data) {
        return this.http.Post(this.api.querypetdtailpolular, data);
    };
    /**
     * 注册
     * @param client_username 用户名
     * @param client_password 密码
     */
    UserService.prototype.registerclient = function (data) {
        return this.http.Post(this.api.registerclient, data);
    };
    /**
     * 添加日历事件
     * @param event 事件
     * @param calendar_time 时间
     * @param petcardid 猫卡ID
     * @param event_title 事件标题
     */
    UserService.prototype.addcalenderevent = function (data) {
        return this.http.Post(this.api.addcalenderevent, data);
    };
    /**
     * 查询日历事件
     * @param mytoken 用户token
     * @param calendartime 时间
     * @param petcardid 猫卡ID
     */
    UserService.prototype.queryCalendar = function (data) {
        return this.http.Post(this.api.queryCalendar, data);
    };
    /**
     *发现(所有猫卡的动态)
     * @param pageNum 当前页数
     * @param rowsPrePage 每次加载多少条
     */
    UserService.prototype.queryhistorytypeAlllist = function (data) {
        return this.http.Post(this.api.queryhistorytypeAlllist, data);
    };
    /**
     * 关注（我关注的猫卡的动态）
     * @param mytoken 用户token
     */
    UserService.prototype.queryPetConcernhistorytypelist = function (data) {
        return this.http.Post(this.api.queryPetConcernhistorytypelist, data);
    };
    /**
     * 关注（我关注的猫卡的动态）
     * @param pageNum 当前页数
     * @param rowsPrePage 每次加载多少条
     * @param mytoken 用户token
     */
    UserService.prototype.queryPetConcernlist = function (data) {
        return this.http.Post(this.api.queryPetConcernlist, data);
    };
    /**
     * 根据猫卡号搜索猫卡
     * @param petnum 宠物卡编号
     */
    UserService.prototype.querypetcardnum = function (data) {
        return this.http.Post(this.api.querypetcardnum, data);
    };
    /**
     * 添加猫卡
     * @param
     */
    UserService.prototype.addpetcard = function (data) {
        return this.http.Post(this.api.addpetcard, data);
    };
    /**
     * deletePetcard 删除宠物卡
     */
    UserService.prototype.deletePetcard = function (data) {
        return this.http.Post(this.api.deletePetcard, data);
    };
    /**
     *
     * @param data 修改宠卡
     */
    UserService.prototype.updatepetcard = function (data) {
        return this.http.Post(this.api.updatepetcard, data);
    };
    /**
     * 今日宠榜
     */
    UserService.prototype.querypetpetcardfeedingrankinglist = function () {
        return this.http.Post(this.api.querypetpetcardfeedingrankinglist, {});
    };
    /**
     * 添加收货地址
     */
    UserService.prototype.addPetReceiver = function (data) {
        return this.http.Post(this.api.addPetReceiver, data);
    };
    /**
     * 首页动态查询
     */
    UserService.prototype.chongwuqueryhistorytypeAlllist = function (data) {
        return this.http.Post(this.api.chongwuqueryhistorytypeAlllist, data);
    };
    /**
     * queryclevertricklist 小妙招
     */
    UserService.prototype.queryclevertricklist = function (data) {
        return this.http.Post(this.api.queryclevertricklist, data);
    };
    /**
     *
     * @param data 小妙招详情
     */
    UserService.prototype.queryclevertrick = function (data) {
        return this.http.Post(this.api.queryclevertrick, data);
    };
    /**
     *查询默认收货地址
     */
    UserService.prototype.address = function (data) {
        return this.http.Post(this.api.address, data);
    };
    /**
     * 查询所有收货地址
     */
    UserService.prototype.queryPetReceiverlist = function (data) {
        return this.http.Post(this.api.queryPetReceiverlist, data);
    };
    /**
     * 删除收货地址
     */
    UserService.prototype.deletePetReceiver = function (data) {
        return this.http.Post(this.api.deletePetReceiver, data);
    };
    /**
     * 编辑收货地址
     */
    UserService.prototype.updatePetReceiver = function (data) {
        return this.http.Post(this.api.updatePetReceiver, data);
    };
    /**
     * 按类型查询动态
     * @param type 1:写真  2：传记  3:健康  4:活动
     * @param petcardid 宠卡ID
     */
    UserService.prototype.queryhistoryTypetypelist = function (data) {
        return this.http.Post(this.api.queryhistoryTypetypelist, data);
    };
    /**
     * addhistoryType
     * @param type 1:写真  2：传记  3:健康  4:活动
     */
    UserService.prototype.addhistoryType = function (data) {
        return this.http.Post(this.api.addhistoryType, data);
    };
    /**
     *   商品查询
     */
    UserService.prototype.querypetproductlist = function (data) {
        return this.http.Post(this.api.querypetproductlist, data);
    };
    /**
     * 签到
     */
    UserService.prototype.addpetFeedingsign = function (data) {
        return this.http.Post(this.api.addpetFeedingsign, data);
    };
    /**
     * 查询活动列表
     * @param data
     */
    UserService.prototype.querypetactivitylist = function (data) {
        return this.http.Post(this.api.querypetactivitylist, data);
    };
    /**
     * 关注宠卡
     */
    UserService.prototype.addpetConcern = function (data) {
        return this.http.Post(this.api.addpetConcern, data);
    };
    /**
     * 绑定用户信息
     * @param data
     */
    UserService.prototype.bangdingclient = function (data) {
        return this.http.Post(this.api.bangdingclient, data);
    };
    /**
     * 点赞动态
     */
    UserService.prototype.addpetLikes = function (data) {
        return this.http.Post(this.api.addpetLikes, data);
    };
    /**
     * 查询评论
     * @param data
     */
    UserService.prototype.queryPetMessagelist = function (data) {
        return this.http.Post(this.api.queryPetMessagelist, data);
    };
    /**
     * 发表评论
     */
    UserService.prototype.addpetMessage = function (data) {
        return this.http.Post(this.api.addpetMessage, data);
    };
    /**
     * 查询单个宠卡
     */
    UserService.prototype.querypetcard = function (data) {
        return this.http.Post(this.api.querypetcard, data);
    };
    /**
     * 添加订单
     */
    UserService.prototype.addappOrder = function (data) {
        return this.http.Post(this.api.addappOrder, data);
    };
    /**
     * 查询订单
     */
    UserService.prototype.statuslist = function (data) {
        return this.http.Post(this.api.statuslist, data);
    };
    /**
     * 微信支付预处理
     */
    UserService.prototype.weixinor = function (data) {
        return this.http.Post(this.api.weixinor, data);
    };
    /**
     * 查询某用户的所有猫卡
     * @param data
     */
    UserService.prototype.querypetcardotherclientlist = function (data) {
        return this.http.Post(this.api.querypetcardotherclientlist, data);
    };
    /**
     * 投食
     */
    UserService.prototype.addpetFeeding = function (data) {
        return this.http.Post(this.api.addpetFeeding, data);
    };
    /**
     * 单张宠卡的投食榜
     */
    UserService.prototype.querypetfeedingtop = function (data) {
        return this.http.Post(this.api.querypetfeedingtop, data);
    };
    /**
     * 粉丝列表
     * @param data
     */
    UserService.prototype.queryPetConcernclientlist = function (data) {
        return this.http.Post(this.api.queryPetConcernclientlist, data);
    };
    /**
     * 查询通知消息
     */
    UserService.prototype.querymessageNew = function (data) {
        return this.http.Post(this.api.querymessageNew, data);
    };
    /**
     * 删除动态
     */
    UserService.prototype.deletehistoryType = function (data) {
        return this.http.Post(this.api.deletehistoryType, data);
    };
    /**
     * 查询单条动态
     */
    UserService.prototype.querypethistorytypecontent = function (data) {
        return this.http.Post(this.api.querypethistorytypecontent, data);
    };
    /**
     *
     * @param data 举报
     */
    UserService.prototype.addreport = function (data) {
        return this.http.Post(this.api.addreport, data);
    };
    /**
     * 加入黑名单
     */
    UserService.prototype.addblack = function (data) {
        return this.http.Post(this.api.addblack, data);
    };
    /**
     * 查询我投食
     */
    UserService.prototype.querypetfeedinglist = function (data) {
        return this.http.Post(this.api.querypetfeedinglist, data);
    };
    /**
     * 查询别人给我的投食记录
     */
    UserService.prototype.querypetfeedingclientlist = function (data) {
        return this.http.Post(this.api.querypetfeedingclientlist, data);
    };
    /**
     * 配种状态设置
     */
    UserService.prototype.updatemating = function (data) {
        return this.http.Post(this.api.updatemating, data);
    };
    /**
     * 发送配种消息
     */
    UserService.prototype.addmating = function (data) {
        return this.http.Post(this.api.addmating, data);
    };
    /**
     * 同城配种猫卡
     */
    UserService.prototype.querypetcardmatinglist = function (data) {
        return this.http.Post(this.api.querypetcardmatinglist, data);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__my_http_service__["a" /* MyHttpService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AuditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AuditPage = (function () {
    function AuditPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AuditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AuditPage');
    };
    AuditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-audit',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\audit\audit.html"*/`<!--\n  Generated template for the AuditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>audit</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="audit">\n        <p>申请已提交,请耐心等待</p>\n        <p> <img src="assets/imgs/images/shenh.png" alt="" srcset=""></p>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\audit\audit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AuditPage);
    return AuditPage;
}());

//# sourceMappingURL=audit.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ForgetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetPasswordPage = (function () {
    function ForgetPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPasswordPage');
    };
    ForgetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forget-password',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\forget-password\forget-password.html"*/`<!--\n  Generated template for the ForgetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>忘记密码</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="input">\n    <i class="iconfont icon-user"></i>\n    <input type="text" placeholder="请输入您的手机账号">\n  </div>\n\n  <div class="input">\n    <i class="iconfont icon-anquanrenzheng"></i>\n    <input type="text" placeholder="请输入验证码">\n    <button class="btnSend">发送</button>\n  </div>\n\n  <div class="input ">\n    <i class="iconfont icon-3701mima"></i>\n    <input type="text" placeholder="请设置您的密码">\n\n  </div>\n\n\n\n  <button class="btn">确认</button>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\forget-password\forget-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ForgetPasswordPage);
    return ForgetPasswordPage;
}());

//# sourceMappingURL=forget-password.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatchPage = (function () {
    function MatchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MatchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MatchPage');
    };
    MatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-match',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\match\match.html"*/`<!--\n  Generated template for the MatchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>match</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="fler">\n        <img src="assets/imgs/images/xinzengmaoka.png" alt="">\n\n    </div>\n    <p class="datas">\n        <span>xxx向你发了一条配种申请</span>\n\n    </p>\n\n    <p class="data">\n        <span>联系方式:12345678911</span>\n        <span>\n         \n        </span>\n    </p>\n    <p class="data">\n        <span>推荐微信:asdasd</span>\n\n    </p>\n    <p class="data">\n        <span>配种理由:没理由</span>\n\n    </p>\n\n\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\match\match.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MatchPage);
    return MatchPage;
}());

//# sourceMappingURL=match.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderdackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrderdackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderdackPage = (function () {
    function OrderdackPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrderdackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderdackPage');
    };
    OrderdackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-orderdack',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\orderdack\orderdack.html"*/`<!--\n  Generated template for the OrderdackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>orderdack</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="dateout">\n        <div>\n            <p>卖家已经发货</p>\n            <p>还剩 6天10小时自动确认</p>\n        </div>\n        <div><img src="assets/imgs/images/che.png" alt="" srcset=""></div>\n    </div>\n    <div class="titaa">\n        <div class="ble">\n            <div>\n                <img src="assets/imgs/images/xdgps.png" alt="" class="userimg">\n            </div>\n            <div class="ble2">\n                <div class="name">\n                    <p><span>快递已发往武汉  下一站天涯海角 </span><span style="float: right;"></span></p>\n                    <p><span style="color: #999">2018-8-3 8:30:00</span></p>\n\n                </div>\n                <div>\n                    <img src="assets/imgs/images/right.png" alt="">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="titaa">\n        <div class="ble">\n            <div>\n                <img src="assets/imgs/images/xdgps.png" alt="" class="userimg">\n            </div>\n            <div class="ble2">\n                <div class="name">\n                    <p><span>收货人:张三 </span><span style="float: right;">1888888888</span></p>\n                    <p><span>收货地址:啊是大神大所大所大所大所多啊是大神大所大所大所大所多啊是大神大所大所大所大所多啊是大神大所大所大所大所多</span></p>\n\n                </div>\n                <div>\n                    <img src="assets/imgs/images/right.png" alt="">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="shops">\n        <p>\n            <span>\n            <img src="assets/imgs/images/goudai.png" alt="">asdasd</span>\n            <span>\n            <img src="assets/imgs/images/right.png" alt="" srcset="">\n          </span>\n        </p>\n        <div class="datas">\n            <div>\n                <img src="assets/imgs/images/goudai.png" alt="">\n                <div>\n                    <h1>这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼</h1>\n                    <p>商品明细</p>\n                    <p>\n                        <span class="money">¥999</span>\n                        <span style="font-size: 1.5rem">X1</span>\n                    </p>\n\n                </div>\n            </div>\n            <div class="tag">\n                <span class="ok">七天退换</span>\n                <span class="flow">申请退款</span>\n            </div>\n        </div>\n    </div>\n\n\n    <div class="moneybox">\n        <p><span>商品总价</span><span>¥999</span></p>\n        <p><span>运费险(快递)</span><span>-0.00</span></p>\n        <p><span>店铺优惠</span><span>-0.00</span></p>\n    </div>\n    <div class="moneybox2">\n        <p><span>订单总价</span><span style="color: #fb7a3a;font-size: 1.5rem">¥999</span></p>\n\n    </div>\n    <div class="moneybox">\n        <p>订单编号 : ¥999</p>\n        <p>创建时间 : 2018-10-11</p>\n        <p>付款时间 : 2018-12-12</p>\n    </div>\n\n    <div class="tag2">\n        <span class="ok">查看物流</span>\n        <span class="flow">延长收货</span>\n        <span class="flow">确认收货</span>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\orderdack\orderdack.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], OrderdackPage);
    return OrderdackPage;
}());

//# sourceMappingURL=orderdack.js.map

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultAppConfig; });
/* unused harmony export ProdAppConfig */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DefaultAppConfig = (function () {
    function DefaultAppConfig() {
        this.localIp = 'http://localhost';
        this.serverIp = 'http://116.62.219.45/';
        //  eolike:string='http://result.eolinker.com/daB2tJV365bcbeb49660595f30dfebd2832cd37ca35653f?uri=http://116.62.219.45/'
        this.debug = true;
    }
    Object.defineProperty(DefaultAppConfig.prototype, "ip", {
        get: function () {
            return this.serverIp;
        },
        enumerable: true,
        configurable: true
    });
    return DefaultAppConfig;
}());

var ProdAppConfig = (function (_super) {
    __extends(ProdAppConfig, _super);
    function ProdAppConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProdAppConfig;
}(DefaultAppConfig));

//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/additional/additional.module": [
		537,
		67
	],
	"../pages/advices/advices.module": [
		539,
		26
	],
	"../pages/allkinds/allkinds.module": [
		538,
		25
	],
	"../pages/allorders/allorders.module": [
		540,
		66
	],
	"../pages/appraise/appraise.module": [
		541,
		65
	],
	"../pages/audit/audit.module": [
		542,
		64
	],
	"../pages/calendar/calendar.module": [
		543,
		3
	],
	"../pages/callshop/callshop.module": [
		544,
		63
	],
	"../pages/care/care.module": [
		545,
		24
	],
	"../pages/chatroom/chatroom.module": [
		546,
		62
	],
	"../pages/check-in/check-in.module": [
		547,
		23
	],
	"../pages/ckeck/ckeck.module": [
		548,
		61
	],
	"../pages/classify/classify.module": [
		549,
		60
	],
	"../pages/coupon/coupon.module": [
		550,
		59
	],
	"../pages/daylist/daylist.module": [
		551,
		22
	],
	"../pages/deposit/deposit.module": [
		552,
		58
	],
	"../pages/details/details.module": [
		553,
		57
	],
	"../pages/detemgs/detemgs.module": [
		554,
		21
	],
	"../pages/diary/diary.module": [
		555,
		56
	],
	"../pages/dynamic/dynamic.module": [
		556,
		20
	],
	"../pages/enter/enter.module": [
		557,
		4
	],
	"../pages/evaluate/evaluate.module": [
		558,
		55
	],
	"../pages/felselist/felselist.module": [
		559,
		19
	],
	"../pages/forget-password/forget-password.module": [
		560,
		54
	],
	"../pages/givenotice/givenotice.module": [
		561,
		18
	],
	"../pages/guidance/guidance.module": [
		562,
		53
	],
	"../pages/home/home.module": [
		563,
		2
	],
	"../pages/huodongpage/huodongpage.module": [
		564,
		17
	],
	"../pages/ipam/ipam.module": [
		565,
		52
	],
	"../pages/knowledg/knowledg.module": [
		566,
		16
	],
	"../pages/list/list.module": [
		568,
		51
	],
	"../pages/login/login.module": [
		567,
		50
	],
	"../pages/match/match.module": [
		570,
		49
	],
	"../pages/messagelist/messagelist.module": [
		569,
		15
	],
	"../pages/mirror/mirror.module": [
		571,
		14
	],
	"../pages/newlay/newlay.module": [
		572,
		48
	],
	"../pages/newsword/newsword.module": [
		573,
		47
	],
	"../pages/order/order.module": [
		575,
		46
	],
	"../pages/orderdack/orderdack.module": [
		574,
		45
	],
	"../pages/orderform/orderform.module": [
		576,
		44
	],
	"../pages/pardackpush/pardackpush.module": [
		577,
		43
	],
	"../pages/personalcenter/personalcenter.module": [
		578,
		42
	],
	"../pages/pet-admin/pet-admin.module": [
		579,
		41
	],
	"../pages/petstort/petstort.module": [
		580,
		13
	],
	"../pages/playcode/playcode.module": [
		581,
		40
	],
	"../pages/productadmin/productadmin.module": [
		582,
		39
	],
	"../pages/pushcoupon/pushcoupon.module": [
		583,
		38
	],
	"../pages/pushdiary/pushdiary.module": [
		584,
		37
	],
	"../pages/query-petactivity/query-petactivity.module": [
		585,
		12
	],
	"../pages/record/record.module": [
		586,
		36
	],
	"../pages/refund/refund.module": [
		587,
		35
	],
	"../pages/register/register.module": [
		588,
		34
	],
	"../pages/science/science.module": [
		589,
		33
	],
	"../pages/set/set.module": [
		590,
		32
	],
	"../pages/setuser/setuser.module": [
		591,
		1
	],
	"../pages/shippingoder/shippingoder.module": [
		592,
		31
	],
	"../pages/shopcall/shopcall.module": [
		593,
		30
	],
	"../pages/shopping/shopping.module": [
		594,
		29
	],
	"../pages/site/site.module": [
		595,
		0
	],
	"../pages/sopl/sopl.module": [
		596,
		28
	],
	"../pages/store/store.module": [
		597,
		11
	],
	"../pages/tabs/tabs.module": [
		598,
		10
	],
	"../pages/tongchenglist/tongchenglist.module": [
		599,
		9
	],
	"../pages/toushilist/toushilist.module": [
		600,
		8
	],
	"../pages/trick/trick.module": [
		601,
		7
	],
	"../pages/video/video.module": [
		602,
		6
	],
	"../pages/wallet/wallet.module": [
		603,
		27
	],
	"../pages/xiezhen/xiezhen.module": [
		604,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ToastProvider = (function () {
    function ToastProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastProvider_1 = ToastProvider;
    // 显示 toast提示
    ToastProvider.prototype.showToast = function (message, position) {
        if (position === void 0) { position = ToastProvider_1.TOAST_POS_BOTTOM; }
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: position
        });
        toast.present();
        return toast;
    };
    ToastProvider.prototype.showNoticeByToast = function (code, msg) {
        var m = "";
        if (msg && msg.length > 0) {
            if (msg.charAt(msg.length - 1) == "!" ||
                msg.charAt(msg.length - 1) == "！") {
                msg = msg.substr(0, msg.length - 1);
            }
        }
        if (code == 1) {
            m = "提示：" + msg + "！";
        }
        else {
            m = "错误" + code + "：" + msg + "！";
        }
        return this.showToast(m);
    };
    ToastProvider.TOAST_POS_BOTTOM = "top";
    ToastProvider.TOAST_POS_MIDDLE = "middle";
    ToastProvider = ToastProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], ToastProvider);
    return ToastProvider;
    var ToastProvider_1;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = (function () {
    function StorageProvider(http) {
        this.http = http;
        console.log("Hello StorageProvider Provider");
    }
    StorageProvider.prototype.write = function (key, value) {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    };
    StorageProvider.prototype.read = function (key) {
        var value = localStorage.getItem(key);
        if (value && value != "undefined" && value != "null") {
            return JSON.parse(value);
        }
        return null;
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviceServeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// revice-serve.ts



var ReviceServeProvider = (function () {
    function ReviceServeProvider(http) {
        this.http = http;
    }
    // 网络请求接口
    ReviceServeProvider.prototype.getHomeInfo = function () {
        return this.http.request('');
    };
    // 本地JSON文件请求
    ReviceServeProvider.prototype.getRequestContact = function () {
        return this.http.get("assets/json/city.json");
    };
    ReviceServeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ReviceServeProvider);
    return ReviceServeProvider;
}());

//# sourceMappingURL=revice-serve.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllordersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_service_user_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the AllordersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllordersPage = (function () {
    function AllordersPage(http, navCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.order_status = 0;
    }
    AllordersPage.prototype.goevaluate = function () {
        this.navCtrl.push("EvaluatePage");
    };
    AllordersPage.prototype.shopoder = function () {
        this.navCtrl.push("ShippingoderPage");
    };
    AllordersPage.prototype.order = function () {
        this.navCtrl.push("OrderPage");
    };
    AllordersPage.prototype.gouout = function () {
        this.navCtrl.push("RefundPage");
    };
    AllordersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllordersPage');
    };
    AllordersPage.prototype.ionViewWillEnter = function () {
        this.statuslist();
    };
    AllordersPage.prototype.statuslist = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parmas, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parmas = {
                            pageNum: 1,
                            rowsPrePage: 10,
                            order_status: this.order_status
                        };
                        return [4 /*yield*/, this.http.statuslist(parmas)];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    AllordersPage.prototype.status = function (index) {
        this.order_status = index;
        this.statuslist();
        console.log(index);
    };
    AllordersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-allorders',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\allorders\allorders.html"*/`<!--\n  Generated template for the AllordersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>全部订单</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="tabs">\n        <ul>\n            <li [ngClass]="{\'eft\':order_status==0}" (click)="status(0)">未支付</li>\n            <li [ngClass]="{\'eft\':order_status==1}" (click)="status(1)">待发货</li>\n            <li [ngClass]="{\'eft\':order_status==2}" (click)="status(2)">已发货</li>\n            <li [ngClass]="{\'eft\':order_status==3}" (click)="status(3)">已完成</li>\n        </ul>\n        <div class="tabspage">\n            <div class="shops">\n                <p>\n                    <span>\n            <img src="assets/imgs/images/goudai.png" alt="">asdasd</span>\n                    <span>\n            <img src="assets/imgs/images/right.png" alt="" srcset="">\n          </span>\n                </p>\n                <div class="datas">\n                    <div>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <div>\n                            <h1>这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼</h1>\n                            <p>商品明细</p>\n                            <p>\n                                <span class="money">¥999</span>\n                                <span style="font-size: 1.5rem">X1</span>\n                            </p>\n\n                        </div>\n                    </div>\n                    <div class="tag">\n                        <span>交易成功</span><button (click)=\'gouout()\'>申请退款</button><button (click)="order()">立即付款</button><button>取消订单</button><button (click)=\'shopoder()\'>查看物流</button><button>延长收货</button><button (click)=\'goevaluate()\'>评价</button>\n                    </div>\n                </div>\n            </div>\n\n            <div class="shops">\n                <p>\n                    <span>\n            <img src="assets/imgs/images/goudai.png" alt="">asdasd</span>\n                    <span>\n            <img src="assets/imgs/images/right.png" alt="" srcset="">\n          </span>\n                </p>\n                <div class="datas">\n                    <div>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <div>\n                            <h1>这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼</h1>\n                            <p>商品明细</p>\n                            <p>\n                                <span class="money">¥999</span>\n                                <span style="font-size: 1.5rem">X1</span>\n                            </p>\n\n                        </div>\n                    </div>\n                    <div class="tag">\n                        <span>交易成功</span><button>申诉</button><button>立即付款</button><button>取消订单</button><button>查看物流</button><button>延长收货</button><button>立即评价</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\allorders\allorders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_shared_service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AllordersPage);
    return AllordersPage;
}());

//# sourceMappingURL=allorders.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallshopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_service_user_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_buffer__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_buffer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the CallshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CallshopPage = (function () {
    function CallshopPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.pordack = {
            pageNum: 1,
            rowsPrePage: 10
        };
        this.pordacklist = [];
    }
    CallshopPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CallshopPage");
        console.log(localStorage.getItem('petdata'));
        this.petdata = JSON.parse(localStorage.getItem('petdata'));
        console.log(this.petdata);
        this.petimg = this.petdata.headimgpath;
        this.petname = this.petdata.pet_name;
        this.integral_num = this.petdata.integral_num;
        this.coneprnt = this.petdata.comment;
    };
    CallshopPage.prototype.ionViewWillEnter = function () {
        this.mypordack();
    };
    CallshopPage.prototype.mypordack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.querypetproductlist(this.pordack)];
                    case 1:
                        res = _a.sent();
                        for (index = 0; index < res.arrayList.length; index++) {
                            res.arrayList[index].product_img1 = res.arrayList[index].product_img1.split(",,");
                            res.arrayList[index].product_introduce = new __WEBPACK_IMPORTED_MODULE_3_buffer__["Buffer"](res.arrayList[index].product_introduce, 'base64').toString();
                            this.pordacklist.push(res.arrayList[index]);
                        }
                        this.imageUrl = res.imageUrl;
                        console.log(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    CallshopPage.prototype.goorder = function (i) {
        this.navCtrl.push("OrderPage", { pordack: this.pordacklist[i], type: 2, imgUrl: this.imageUrl });
    };
    CallshopPage.prototype.goshopping = function (i) {
        console.log(this.pordacklist[i]);
        this.navCtrl.push("ShoppingPage", { pordack: this.pordacklist[i], type: 2, imgUrl: this.imageUrl });
    };
    CallshopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-callshop",template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\callshop\callshop.html"*/`<!--\n  Generated template for the CallshopPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>积分商城</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <h5>剩余零食：{{integral_num}}Kg</h5>\n    <div class="titaa">\n        <div class="ble">\n            <div class="userimg">\n                <img src="{{petimg}}" alt="">\n            </div>\n            <div class="ble2">\n                <div class="name">\n                    <p>{{petname}}</p>\n                    <span>\n            <img src="assets/imgs/bq.png" alt="">\n            <span>{{coneprnt}}</span></span>\n                </div>\n                <div>\n                    <!--   <button class="djd">\n           <img src="assets/imgs/bq.png" alt="">去赚钱</button> -->\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class="shopmoss">\n        <ul>\n            <li *ngFor="let item of pordacklist;let i=index">\n                <img src="{{imageUrl}}{{item.product_img1[0]}}" alt="" (click)="goshopping(i)">\n                <p style="margin:0;color:red;padding-left: 0.5rem">{{item.integral_proportion}}积分抵扣0.1元</p>\n                <p class="goshop sizet" (click)="goshopping(i)">{{item.product_name}}</p>\n\n                <p class="goshop">\n                    <span>\n            <img src="assets/imgs/bq.png" alt="">  <span style="color: rgb(245, 57, 57)"> ¥{{item.product_price | number:\'1.2-2\'}}</span>\n\n                    </span>\n                    <button class="gogogo" *ngIf="item.product_guige-0==0" style="background: #999;">售完</button>\n                    <button class="gogogo" *ngIf="item.product_guige-0!==0" (click)="goorder(i)">兑换</button>\n                </p>\n            </li>\n\n            <!-- <li>\n\n                <img src="../../assets/imgs/gongxi_03.jpg" alt="">\n\n                <p class="goshop sizet">猫粮</p>\n                <p class="goshop">\n                    <span>\n            <img src="assets/imgs/bq.png" alt="">  <span style="color: rgb(245, 57, 57)"> x1</span>\n                    <span class="black">可兑换</span>\n                    </span>\n                    <button class="gogogo2">已兑完\n\n          </button>\n                </p>\n            </li>\n            <li>\n\n                <img src="../../assets/imgs/gongxi_03.jpg" alt="">\n\n                <p class="goshop sizet">猫粮</p>\n                <p class="goshop">\n                    <span>\n            <img src="assets/imgs/bq.png" alt="">  <span style="color: rgb(245, 57, 57)"> x1</span>\n                    <span class="black">可兑换</span>\n                    </span>\n                    <button class="gogogo">兑换\n\n          </button>\n                </p>\n            </li> -->\n        </ul>\n\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\callshop\callshop.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_shared_service_user_service__["a" /* UserService */]])
    ], CallshopPage);
    return CallshopPage;
}());

//# sourceMappingURL=callshop.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatroomPage = (function () {
    function ChatroomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.show = true;
    }
    ChatroomPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ChatroomPage");
    };
    ChatroomPage.prototype.pushnews = function () {
        this.show = !this.show;
    };
    ChatroomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-chatroom",template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\chatroom\chatroom.html"*/`<!--\n  Generated template for the ChatroomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>chatroom</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="myusertext">\n        <img src="assets/imgs/images/goudai.png">\n        <p>是聊天是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字文字是聊天文字是聊天文字是聊天文字是聊天文字这里是聊天文字显示的位置0231321321321</p>\n    </div>\n    <div class="youusertext">\n        <img src="assets/imgs/images/goudai.png">\n        <p>是聊天是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字文字是聊天文字是聊天文字是聊天文字是聊天文字这里是聊天文字显示的位置0231321321321</p>\n    </div>\n    <div class="youusertext">\n        <img src="assets/imgs/images/goudai.png">\n        <p>是聊天是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字文字是聊天文字是聊天文字是聊天文字是聊天文字这里是聊天文字显示的位置0231321321321</p>\n    </div>\n    <div class="youusertext">\n        <img src="assets/imgs/images/goudai.png">\n        <p>是聊天是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字文字是聊天文字是聊天文字是聊天文字是聊天文字这里是聊天文字显示的位置0231321321321</p>\n    </div>\n    <div class="myusertext">\n        <img src="assets/imgs/images/goudai.png">\n        <p>是聊天是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字文字是聊天文字是聊天文字是聊天文字是聊天文字这里是聊天文字显示的位置0231321321321</p>\n    </div>\n    <div class="myusertext">\n        <img src="assets/imgs/images/goudai.png">\n        <p>是聊天是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字是聊天文字文字是聊天文字是聊天文字是聊天文字是聊天文字这里是聊天文字显示的位置0231321321321</p>\n    </div>\n\n    <div *ngIf="show" style="height: 5rem;"></div>\n    <div *ngIf="!show" style="height: 10rem;"></div>\n    <div>\n        <div class="pushnews">\n            <p>\n                <button>\n          <img src="assets/imgs/images/bqb.png">\n        </button>\n                <input type="text">\n                <button (click)="pushnews()">\n          <img src="assets/imgs/images/pushnews.png">\n        </button>\n            </p>\n            <!-- <p class="btnimg" *ngIf="!show">\n        <button>\n          <img src="assets/imgs/images/xc.png">\n          <span>相册 </span>\n        </button>\n        <button>\n          <img src="assets/imgs/images/pz.png">\n          <span>拍照 </span>\n        </button>\n        <button>\n          <img src="assets/imgs/images/dsp.png">\n          <span>短视频 </span>\n        </button>\n        <button>\n          <img src="assets/imgs/images/liaotiangps.png">\n          <span>定位 </span>\n        </button>\n      </p> -->\n        </div>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\chatroom\chatroom.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ChatroomPage);
    return ChatroomPage;
}());

//# sourceMappingURL=chatroom.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CkeckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_service_user_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the CkeckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CkeckPage = (function () {
    function CkeckPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.ctn = 1;
        this.pitarr = [];
    }
    CkeckPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CkeckPage");
        this.ctn = 1;
        this.queryPetConcernlist();
    };
    CkeckPage.prototype.queryPetConcernlist = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parmas, res, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parmas = {
                            pageNum: 1,
                            rowsPrePage: 50,
                        };
                        return [4 /*yield*/, this.http.queryPetConcernlist(parmas)];
                    case 1:
                        res = _a.sent();
                        for (i = 0; i < res.arrayList.length; i++) {
                            if (res.arrayList[i].petcard.headimgpath.indexOf("http") == -1) {
                                res.arrayList[i].petcard.headimgpath = res.imageUrl + res.arrayList[i].petcard.headimgpath;
                            }
                        }
                        this.pitarr = res.arrayList;
                        console.log(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    CkeckPage.prototype.quxiao = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            var parmas, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parmas = {
                            reciveclientid: this.pitarr[i].petcard.client_id,
                            concerntype: 0,
                            //mytoken: localStorage.getItem("mytoken"),
                            recivepetcardid: this.pitarr[i].petcard.id
                        };
                        return [4 /*yield*/, this.http.addpetConcern(parmas)];
                    case 1:
                        res = _a.sent();
                        this.http.http.showToast(res.message);
                        if (res.info == "ok") {
                            this.pitarr.splice(i, 1);
                            //  this.petlist[i].concernStatus = !this.petlist[i].concernStatus;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CkeckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-ckeck",template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\ckeck\ckeck.html"*/`<!--\n  Generated template for the CkeckPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>我的关注</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="titaa">\n        <div class="ble" *ngFor="let item of pitarr;let i=index">\n            <div>\n                <img src="{{item.petcard.headimgpath}}" alt="" class="userimg">\n            </div>\n            <div class="ble2">\n                <div class="name">\n                    <p>{{item.petcard.pet_name}}</p>\n                    <span>{{item.petcard.comment}}</span>\n                </div>\n                <div>\n                    <button class="djd" *ngIf="!item.petcard.concernStatus" (click)="quxiao(i)">取消关注</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <p style="text-align: center;margin-bottom: 2rem;color: #ffc43596;" *ngIf="loding">已经没有更多数据咯</p>\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <!-- <div class="titaa">\n        <div class="ble">\n            <div>\n                <img src="assets/imgs/images/petImg.png" alt="" class="userimg">\n            </div>\n            <div class="ble2">\n                <div class="name">\n                    <p>宠卡</p>\n                    <span><img src="assets/imgs/bq.png" alt=""> 可爱调皮捣蛋</span>\n                </div>\n                <div>\n                    <button class="djd">+关注</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="titaa">\n        <div class="ble">\n            <div>\n                <img src="assets/imgs/images/petImg.png" alt="" class="userimg">\n            </div>\n            <div class="ble2">\n                <div class="name">\n                    <p>宠卡</p>\n                    <span><img src="assets/imgs/bq.png" alt=""> 可爱调皮捣蛋</span>\n                </div>\n                <div>\n                    <button class="djd">+关注</button>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\ckeck\ckeck.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_shared_service_user_service__["a" /* UserService */]])
    ], CkeckPage);
    return CkeckPage;
}());

//# sourceMappingURL=ckeck.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ClassifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClassifyPage = (function () {
    function ClassifyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ClassifyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClassifyPage');
    };
    ClassifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-classify',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\classify\classify.html"*/`<!--\n  Generated template for the ClassifyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>推荐分类</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="box">\n        <div class="tuijian">\n            <h1>推荐分类</h1>\n            <ul>\n                <li>活体</li>\n                <li>非活体</li>\n                <li>分类4</li>\n                <li>活体</li>\n                <li>非活体</li>\n                <li>分类4</li>\n                <li>活体</li>\n                <li>非活体</li>\n                <li>分类4</li>\n            </ul>\n        </div>\n        <div class="fenlei">\n            <div class="bannar">\n                <img src="assets/imgs/images/goudai.png" alt="">\n            </div>\n\n            <div>\n                <h1>专家推荐</h1>\n                <ul>\n                    <li>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <span>推荐1</span>\n                    </li>\n                    <li>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <span>推荐1</span>\n                    </li>\n                    <li>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <span>推荐1</span>\n                    </li>\n                    <li>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <span>推荐1</span>\n                    </li>\n                    <li>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <span>推荐1</span>\n                    </li>\n                </ul>\n            </div>\n            <div>\n                <h1>热门分类</h1>\n                <ul>\n                    <li>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <span>推荐1</span>\n                    </li>\n                    <li>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <span>推荐1</span>\n                    </li>\n                    <li>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <span>推荐1</span>\n                    </li>\n                    <li>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <span>推荐1</span>\n                    </li>\n                    <li>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <span>推荐1</span>\n                    </li>\n                    <li>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <span>推荐1</span>\n                    </li>\n                    <li>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <span>推荐1</span>\n                    </li>\n                    <li>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <span>推荐1</span>\n                    </li>\n                    <li>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <span>推荐1</span>\n                    </li>\n                    <li>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <span>推荐1</span>\n                    </li>\n                    <li>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <span>推荐1</span>\n                    </li>\n                    <li>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <span>推荐1</span>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\classify\classify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ClassifyPage);
    return ClassifyPage;
}());

//# sourceMappingURL=classify.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CouponPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CouponPage = (function () {
    function CouponPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CouponPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CouponPage');
    };
    CouponPage.prototype.pushoupon = function () {
        this.navCtrl.push("PushcouponPage");
    };
    CouponPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-coupon',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\coupon\coupon.html"*/`<!--\n  Generated template for the CouponPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>代金券</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="coupon">\n        <ul>\n            <li (click)="pushoupon()">\n                <img src="assets/imgs/images/youhuiquan.png" alt="" srcset="">\n            </li>\n\n            <li>\n                <div>\n                    <img src="assets/imgs/images/quan.png" alt="">\n                    <span>库存:98</span>\n                    <span>已领取:98</span>\n                </div>\n                <div>\n                    <h1>¥99</h1>\n                    <p>满 100 减 99</p>\n                    <span>2018-01-11 到 2018-9-30</span>\n                </div>\n            </li>\n            <li>\n                <div>\n                    <img src="assets/imgs/images/quan.png" alt="">\n                    <span>库存:98</span>\n                    <span>已领取:98</span>\n                </div>\n                <div>\n                    <h1>¥99</h1>\n                    <p>满 100 减 99</p>\n                    <span>2018-01-11 到 2018-9-30</span>\n                </div>\n            </li>\n        </ul>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\coupon\coupon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], CouponPage);
    return CouponPage;
}());

//# sourceMappingURL=coupon.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DepositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DepositPage = (function () {
    function DepositPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DepositPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DepositPage');
    };
    DepositPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-deposit',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\deposit\deposit.html"*/`<!--\n  Generated template for the DepositPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>deposit</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="userdata">\n        <div><img src="assets/imgs/images/tixian.png" alt="" srcset=""></div>\n        <div>\n            <h3>支付宝</h3>\n            <p>张三 1887124654654</p>\n        </div>\n    </div>\n    <div class="upmoney">\n        <p>提现金额</p>\n        <h1>¥<input type="text" placeholder="请输入提现金额"></h1>\n        <hr>\n        <p>可以用余额 0.00 元</p>\n        <button>确认提现</button>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\deposit\deposit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], DepositPage);
    return DepositPage;
}());

//# sourceMappingURL=deposit.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_service_user_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams, alertCtrl, tabs, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.tabs = tabs;
        this.http = http;
        this.index = 0;
        this.userpage = {
            iphome: "",
            weixL: "",
            text: ""
        };
        this.gay = true;
        this.checked = true;
        this.callname = [];
        this.daylist = [];
    }
    DetailsPage.prototype.ionViewWillEnter = function () {
        this.swipers();
        if (!this.navParams.get("type")) {
            if (!this.navParams.get("id")) {
                this.index = parseInt(localStorage.getItem("index")) - 0;
                this.querypetcardlist();
                this.gay = true;
            }
            else {
                this.integral_num = this.navParams.get("id").integral_num;
                this.querypetcard();
                this.gay = false;
            }
        }
        else {
            this.querypetcard();
            this.gay = true;
        }
        console.log(this.gay);
        console.log(this.navParams);
    };
    /**
     * 获取经纬度
     */
    DetailsPage.prototype.gps = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.getGPS()];
                    case 1:
                        res = _a.sent();
                        console.log();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 初始化宠卡
     */
    DetailsPage.prototype.querypetcard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parmas, res, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.callname = [];
                        parmas = {
                            clientId: ""
                        };
                        if (this.navParams.get("type") == 0) {
                            parmas.clientId = this.navParams.get("id")[0].client_id;
                        }
                        else {
                            parmas.clientId = this.navParams.get("id").petcard.client_id;
                        }
                        return [4 /*yield*/, this.http.querypetcardotherclientlist(parmas)];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        if (res.info == "ok") {
                            for (index = 0; index < res.arrayList.length; index++) {
                                if (res.arrayList[index].headimgpath.indexOf("https") == -1 &&
                                    res.arrayList[index].headimgpath.indexOf("http") == -1) {
                                    res.arrayList[index].headimgpath =
                                        "https://www.petbashi.com/imgs/" + res.arrayList[index].headimgpath;
                                }
                                if (this.navParams.get("type") == 0) {
                                    if (res.arrayList[index].pet_num - 0 ==
                                        this.navParams.get("id")[0].pet_num - 0) {
                                        console.log(index);
                                        this.callname = [];
                                        this.callname.push(res.arrayList[index]);
                                        if (res.arrayList[index].client_id ==
                                            JSON.parse(localStorage.getItem("mydata")).client_id) {
                                            this.gay = true;
                                        }
                                        else {
                                            this.gay = false;
                                        }
                                    }
                                }
                                if (res.arrayList[index].mating_status == 0) {
                                    res.arrayList[index]["peizhong"] = false;
                                }
                                else {
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
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 举报
     */
    DetailsPage.prototype.jubao = function (i) {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                        var parmas, res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    parmas = {
                                        report_petcardid: this.callname[i].id,
                                        mytoken: localStorage.getItem("mytoken"),
                                        report_reason: data.title,
                                        receive_clientid: this.callname[i].client_id
                                    };
                                    return [4 /*yield*/, this.http.addreport(parmas)];
                                case 1:
                                    res = _a.sent();
                                    this.http.http.showToast(res.message);
                                    return [2 /*return*/];
                            }
                        });
                    }); }
                },
                {
                    text: "取消",
                    handler: function (data) { }
                }
            ]
        });
        prompt.present();
    };
    /**
     * 配种开关
     * @param i
     */
    DetailsPage.prototype.updatemating = function (i, j) {
        return __awaiter(this, void 0, void 0, function () {
            var buff, gps, parmas, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(i, j);
                        buff = 1;
                        if (!j) {
                            buff = 1;
                        }
                        else {
                            buff = 0;
                        }
                        return [4 /*yield*/, this.http.getGPS()];
                    case 1:
                        gps = _a.sent();
                        parmas = {
                            petcardid: this.callname[i].id,
                            mating_status: buff,
                            gps_longitude: gps['y'].toString(),
                            gps_latitude: gps['x'].toString()
                        };
                        console.log(parmas);
                        return [4 /*yield*/, this.http.updatemating(parmas)];
                    case 2:
                        res = _a.sent();
                        this.http.http.showToast(res.message);
                        console.log(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 加入黑名单
     */
    DetailsPage.prototype.lahei = function (i) {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                        var parmas, res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    parmas = {
                                        mytoken: localStorage.getItem("mytoken"),
                                        reason: data.title,
                                        black_clientid: this.callname[i].client_id
                                    };
                                    return [4 /*yield*/, this.http.addblack(parmas)];
                                case 1:
                                    res = _a.sent();
                                    this.http.http.showToast(res.message);
                                    return [2 /*return*/];
                            }
                        });
                    }); }
                },
                {
                    text: "取消",
                    handler: function (data) { }
                }
            ]
        });
        prompt.present();
    };
    /**
     * 查询单张宠卡的投食榜
     * @param petdata
     */
    DetailsPage.prototype.querypetfeedingtop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parmas, res, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.gaylist = [];
                        parmas = {
                            petcardid: this.callname[this.index].id,
                            mytoken: localStorage.getItem("mytoken")
                        };
                        return [4 /*yield*/, this.http.querypetfeedingtop(parmas)];
                    case 1:
                        res = _a.sent();
                        if (res.info == "ok") {
                            this.myboject = res.object;
                            this.daylist = res.arrayList;
                            if (res.arrayList.length !== 0) {
                                if (res.arrayList.length <= 5) {
                                    this.gaylist = res.arrayList;
                                }
                                else if (res.arrayList.length > 5) {
                                    for (i = 0; i < 5; i++) {
                                        this.gaylist.push(res.arrayList[i]);
                                    }
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailsPage.prototype.gohome = function () {
        this.tabs.select(0);
        this.navCtrl.popToRoot();
    };
    DetailsPage.prototype.goguanai = function () {
        this.tabs.select(1);
        this.navCtrl.popToRoot();
    };
    DetailsPage.prototype.Personalcenter = function () {
        this.tabs.select(4);
        this.navCtrl.popToRoot();
    };
    /**
     * 投食
     */
    DetailsPage.prototype.addpetFeeding = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parmas, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parmas = {
                            mytoken: localStorage.getItem("mytoken"),
                            petcardid: this.callname[this.index].id,
                            recive_clientid: this.callname[this.index].client_id,
                            feednum: this.callname[this.index].pet_num,
                            type: 1
                        };
                        return [4 /*yield*/, this.http.addpetFeeding(parmas)];
                    case 1:
                        res = _a.sent();
                        if (res.info == "ok") {
                            this.http.http.showToast("\u96F6\u98DF +" + res.object + "Kg");
                            this.querypetfeedingtop();
                        }
                        else {
                            this.http.http.showToast(res.message);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    DetailsPage.prototype.godaylist = function () {
        this.navCtrl.push("DaylistPage", {
            daylist: this.daylist,
            object: this.myboject,
            type: 2
        });
    };
    /**
     * 查看关注列表
     */
    DetailsPage.prototype.felelist = function () {
        this.navCtrl.push("FelselistPage", {
            petcardid: this.callname[this.index - 0].id
        });
    };
    DetailsPage.prototype.godate = function () {
        if (!this.gay) {
            return false;
        }
        this.navCtrl.push("CalendarPage", this.callname[this.index]);
    };
    DetailsPage.prototype.postlo = function (i) {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) { }
                },
                {
                    text: "确认",
                    handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                        var parmas, res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log(prompt.data.inputs);
                                    // this.userpage.iphome = prompt.data.inputs[0].value;
                                    // this.userpage.weixL = prompt.data.inputs[1].value;
                                    // this.userpage.text = prompt.data.inputs[2].value;
                                    console.log(prompt);
                                    console.log(this.callname[i].id);
                                    parmas = {
                                        // mytoken:localStorage.getItem("mytoken"),//..	[string]	是
                                        petcardid: JSON.parse(localStorage.getItem("petdata")).id,
                                        mating_status: "",
                                        phonenum: prompt.data.inputs[0].value,
                                        remark: prompt.data.inputs[1].value,
                                        otherpetcardid: this.callname[i].id,
                                        otherclientid: this.callname[i].client_id,
                                        otherphone: ""
                                    };
                                    return [4 /*yield*/, this.http.addmating(parmas)];
                                case 1:
                                    res = _a.sent();
                                    this.http.http.showToast(res.message);
                                    return [2 /*return*/];
                            }
                        });
                    }); }
                }
            ]
        });
        prompt.present();
    };
    DetailsPage.prototype.Pushdiary = function () {
        this.navCtrl.push("DiaryPage", {
            datas: this.callname[this.index],
            gay: this.gay
        });
    };
    DetailsPage.prototype.xiezhen = function () {
        this.navCtrl.push("XiezhenPage", {
            datas: this.callname[this.index],
            gay: this.gay
        });
    };
    DetailsPage.prototype.querypetcardlist = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, res, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            pageNum: 1,
                            rowsPrePage: 10,
                            mytoken: ""
                        };
                        data.mytoken = localStorage.getItem("mytoken");
                        return [4 /*yield*/, this.http.querypetcardlist(data)];
                    case 1:
                        res = _a.sent();
                        if (res.info == "ok") {
                            for (index = 0; index < res.arrayList.length; index++) {
                                if (this.navParams.get("type") == 0) {
                                    if (res.arrayList[index].pet_num - 0 ==
                                        this.navParams.get("id")[0].pet_num - 0) {
                                        console.log(index);
                                        this.callname = [];
                                        this.callname.push(res.arrayList[index]);
                                        if (res.arrayList[index].client_id ==
                                            JSON.parse(localStorage.getItem("mydata")).client_id) {
                                            this.gay = true;
                                        }
                                        else {
                                            this.gay = false;
                                        }
                                    }
                                }
                                if (res.arrayList[index].mating_status == 0) {
                                    res.arrayList[index]["peizhong"] = false;
                                }
                                else {
                                    res.arrayList[index]["peizhong"] = true;
                                }
                            }
                            this.callname = res.arrayList;
                            console.log(this.callname);
                            this.integral_num = res.arrayList[this.index - 0].integral_num;
                            this.querypetfeedingtop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailsPage.prototype.swipers = function () {
        var _this = this;
        var index = this.index;
        var mySwiper = new Swiper(".swiper-container", {
            pagination: ".swiper-pagination",
            // loop:true,
            //autoplay:1000,
            //grabCursor:true,
            initialSlide: localStorage.getItem("index"),
            centeredSlides: true,
            slidesPerView: "auto",
            effect: "coverflow",
            observer: true,
            observeParents: true,
            coverflow: {
                rotate: 0,
                stretch: 100,
                depth: 100,
                modifier: 1,
                slideShadows: false //是否阴影
            },
            on: {
                slideChangeTransitionStart: function () {
                    // alert(this.activeIndex);
                    _this.index = this.activeIndex - 0;
                    // if (!_this.navParams.get("id")) {
                    clearTimeout(timeout);
                    var timeout = setTimeout(function () {
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
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-details",template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\details\details.html"*/`<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>宠卡</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div>\n        <div>\n            <div class="swiper-container">\n                <div class="swiper-wrapper">\n                    <div class="swiper-slide" *ngFor="let item of callname;let i=index">\n                        <div class="addshow">\n                            <div>\n                                <h1> {{item.pet_name}}</h1>\n                                <p> <button style="background: rgb(173, 36, 214);" (click)="postlo(i)" *ngIf="!gay&&item.peizhong">\n                                    <button style="background: rgb(142, 140, 143);" *ngIf="!gay&&!item.peizhong"></button>\n                                    <span *ngIf="item.is_sterilisation==\'1\'" style="color:#fff">GG</span> <span *ngIf="item.is_sterilisation==\'2\'" style="color:#fff">MM</span> 请求配种\n                                    </button>\n                                    <ion-toggle style="margin-left: 0.5rem;" [checked]="item.peizhong" (ionChange)="updatemating(i,item.peizhong)" *ngIf="gay"></ion-toggle>\n\n                                    <span> {{item.petAge}}</span>\n                                    <!-- <span>射手座</span> -->\n                                </p>\n\n                                <div class="msg2" style="margin-left:1rem;margin-top:1rem">\n                                    <div>\n                                        <img src="assets/imgs/images/maozhua.png" alt="">\n                                        <span>体重{{item.pet_wheight}}kg</span>\n                                    </div>\n\n                                    <div>\n                                        <img src="assets/imgs/images/xiangjiao.png" alt="">\n                                        <span style="overflow: hidden;width: 100%;height: 1.4rem;text-align: left;">{{item.comment}}</span>\n                                    </div>\n\n                                    <div>\n                                        <img src="assets/imgs/images/jiantou.png" alt="">\n                                        <span>总能量值 {{item.integral_num}}kg</span>\n                                    </div>\n                                    <div class="baybay" *ngIf="!gay">\n                                        <button (click)="jubao(i)">举报</button>\n                                        <button (click)="lahei(i)" *ngIf="!item.blackstatus">加入黑名单</button>\n                                        <button (click)="lahei(i)" *ngIf="item.blackstatus">移出黑名单</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="addimg" (click)="godate(index)">\n                                <span><img src="{{item.headimgpath}}" alt="" srcset=""></span>\n                                <span style="width: 10rem;">猫卡号:{{item.pet_num}}</span>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n                    <!-- <div class="swiper-slide">\n                        <div class="addshow">\n                            <div>\n                                <h1>locasd3</h1>\n                                <p> <button (click)="postlo()"><ion-icon ios="ios-male" md="md-male"></ion-icon>请求配种</button><span>0.7岁</span><span>射手座</span></p>\n\n                                <div class="msg2" style="margin-left:1rem;margin-top:1rem">\n                                    <div>\n                                        <img src="assets/imgs/images/maozhua.png" alt="">\n                                        <span>体重2.4kg</span>\n                                    </div>\n\n                                    <div>\n                                        <img src="assets/imgs/images/xiangjiao.png" alt="">\n                                        <span>喵~</span>\n                                    </div>\n\n                                    <div>\n                                        <img src="assets/imgs/images/jiantou.png" alt="">\n                                        <span>总能量值 10.23kg</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="addimg" (click)="godate()"><img src="assets/imgs/images/petImg.png" alt="" srcset=""><span>猫卡号:9999</span></div>\n                        </div>\n                    </div> -->\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n\n\n    <div class="details_box">\n\n        <div class="state_box">\n            <div class="bq_box">\n                <div class="bq">\n                    零食能量 :{{integral_num}}Kg\n                </div>\n\n\n                <div class="feed" *ngIf="!gay" (click)="addpetFeeding()">\n                    <p>\n                        <img src="assets/imgs/dj.png" alt="">\n                    </p>\n                    <p>投食</p>\n                </div>\n            </div>\n\n        </div>\n\n        <div class="pk_box" (click)="godaylist()">\n            <div class="pk">\n                投食榜\n                <!-- <p class="kg">233kG</p> -->\n            </div>\n            <div class="imgsT">\n                <img *ngFor="let item of gaylist" src="{{item.headimgpath}}" alt="">\n                <!-- <img src="assets/imgs/images/home1_15.png" alt="">\n                    <img src="assets/imgs/images/home1_15.png" alt="">\n                    <img src="assets/imgs/images/home1_15.png" alt="">\n                    <img src="assets/imgs/images/home1_15.png" alt=""> -->\n            </div>\n        </div>\n\n        <div class="consult" *ngIf="gay">\n            <p (click)="goguanai()">\n                <span>医生咨询</span>\n                <span>\n          <img src="assets/imgs/images/right.png" alt="">\n        </span>\n            </p>\n        </div>\n        <div class="consult" *ngIf="gay">\n            <p (click)="felelist()">\n                <span>粉丝列表</span>\n                <span>\n          <img src="assets/imgs/images/right.png" alt="">\n        </span>\n            </p>\n        </div>\n        <div class="consult" *ngIf="gay">\n            <p (click)="godate()">\n                <span>我的日历</span>\n                <span>\n          <img src="assets/imgs/images/right.png" alt="">\n        </span>\n            </p>\n        </div>\n        <div class="consult" (click)="Pushdiary()">\n            <p>\n                <span>传记</span>\n                <span>\n          <img src="assets/imgs/images/right.png" alt="">\n        </span>\n            </p>\n        </div>\n        <div class="consult" (click)="xiezhen()">\n            <p>\n                <span>写真</span>\n                <span>\n              <img src="assets/imgs/images/right.png" alt="">\n            </span>\n            </p>\n        </div>\n    </div>\n    <!-- <div style="height:8rem"></div>\n    <ion-footer>\n        <div class="terbox">\n            <div> <img src="assets/imgs/images/home1_15.png" alt=""></div>\n            <div>\n                <div>\n                    <h3>qian</h3>\n                    <p>有 3 张猫卡</p>\n                </div>\n                <div>\n                    <p (click)=\'gohome()\'><span><img src="assets/imgs/images/homeppp.png" alt=""></span><span>首页</span></p>\n                    <p (click)=\'Personalcenter()\'><span><img src="assets/imgs/images/cartmu.png" alt=""></span><span>我的</span></p>\n                </div>\n            </div>\n            <div><button ion-button>取消关注</button></div>\n        </div>\n    </ion-footer> -->\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\details\details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Tabs"],
            __WEBPACK_IMPORTED_MODULE_0__app_shared_service_user_service__["a" /* UserService */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_service_user_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the DiaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DiaryPage = (function () {
    function DiaryPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.letfbor = -1;
        this.gay = false;
        this.data = [];
    }
    DiaryPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad DiaryPage");
        console.log(this.navParams);
        if (this.navParams.get("gay")) {
            this.gay = this.navParams.get("gay");
        }
        this.petdata = this.navParams.get('datas');
        //  this.queryhistoryTypetypelist()
    };
    DiaryPage.prototype.ionViewWillEnter = function () {
        this.queryhistoryTypetypelist();
    };
    DiaryPage.prototype.gopushdiary = function () {
        this.navCtrl.push("PushdiaryPage", {
            datas: this.petdata,
            type: 2
        });
    };
    DiaryPage.prototype.queryhistoryTypetypelist = function () {
        return __awaiter(this, void 0, void 0, function () {
            var Params, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Params = {
                            type: 2,
                            petcardid: this.petdata.id
                        };
                        return [4 /*yield*/, this.http.queryhistoryTypetypelist(Params)];
                    case 1:
                        res = _a.sent();
                        // for (const iterator of res.arrayList) {
                        //   iterator['path']=iterator.historycontentlist[0].path
                        //   iterator['date']=iterator.updatetime.split(" ")[0]
                        //   iterator['day']=iterator.updatetime.split(" ")[1]
                        // }
                        console.log(res);
                        this.data = res.arrayList;
                        console.log(this.data);
                        console.log(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    DiaryPage.prototype.remlist = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            var parmas, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // alert("我要删除"+i)
                        console.log(this.data[i]);
                        parmas = {
                            historyTypeid: this.data[i].id
                        };
                        return [4 /*yield*/, this.http.deletehistoryType(parmas)];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        if (res.info == "ok") {
                            this.data.splice(this.letfbor, 1);
                            this.letfbor = -1;
                        }
                        console.log(this.data);
                        return [2 /*return*/];
                }
            });
        });
    };
    DiaryPage.prototype.gomess = function (i) {
        this.letfbor = -1;
        this.navCtrl.push("MessagelistPage", {
            datas: this.data[i]
        });
    };
    DiaryPage.prototype.swipeEvent = function (e, i) {
        // console.log(e.offsetDirection);
        if (!this.gay) {
            return false;
        }
        if (e.offsetDirection == 2) {
            this.letfbor = i;
        }
        if (e.offsetDirection == 4) {
            this.letfbor = -1;
        }
    };
    DiaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-diary",template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\diary\diary.html"*/`<!--\n  Generated template for the DiaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>传记</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="listbox">\n        <ul>\n            <li *ngFor="let item of data let i=index" (swipe)="swipeEvent($event,i)">\n                <div [ngClass]="{\'list\':letfbor!==i,\'list2\':letfbor==i}" (click)="gomess(i)" (click)=\'letfbor=-1\'>\n                    <div class="date">\n                        <img src="{{item.path}}" alt="">\n                    </div>\n                    <div class="ttt">\n                        <span class="ddd">\n              <span class="hh">{{item.title}}</span>\n                        <span>\n                {{item.remark}}\n              </span>\n                        <span>{{item.date}}</span>\n                        </span>\n\n                    </div>\n\n                </div>\n                <div class="listbutton">\n                    <!-- <button class="editor">编辑</button> -->\n                    <button class="rem" (click)="remlist(i)">删除</button>\n                </div>\n            </li>\n        </ul>\n    </div>\n\n    <button class="gopage" (click)=\'gopushdiary()\' *ngIf="gay">\n    <img src="assets/imgs/images/imhpush.png" alt="">\n  </button>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\diary\diary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0__app_shared_service_user_service__["a" /* UserService */]])
    ], DiaryPage);
    return DiaryPage;
}());

//# sourceMappingURL=diary.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_revice_serve_revice_serve__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_img_service_img_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared_service_user_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the EnterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnterPage = (function () {
    function EnterPage(navCtrl, navParams, reviceServe, upimgserve, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reviceServe = reviceServe;
        this.upimgserve = upimgserve;
        this.http = http;
        this.listData = [];
        this.myDate = "";
        this.items = [
            { title: "item1" },
            { title: "item2" },
            { title: "item3" },
            { title: "item4" },
            { title: "item5" },
            { title: "item6" }
        ];
    }
    EnterPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad EnterPage");
        this.getRequestContact();
    };
    EnterPage.prototype.getRequestContact = function () {
        var _this = this;
        this.reviceServe.getRequestContact().subscribe(function (res) {
            _this.listData = res.json();
            console.log(res.json());
        }, function (error) {
            console.log(error);
        });
    };
    EnterPage.prototype.initImgSer = function () {
        return;
    };
    /**
     * 身份证正面
     */
    EnterPage.prototype.mydatasup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // let res=await this.initImgSer();
                // console.log(res)
                this.upimgserve.showPicActionSheet();
                this.upimgserve.upload.success = function (data) {
                    console.log(data);
                };
                return [2 /*return*/];
            });
        });
    };
    /**
     * 身份证反面
     */
    EnterPage.prototype.mydatasout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.upimgserve.showPicActionSheet();
                this.upimgserve.upload.success = function (data) {
                    console.log(data);
                };
                return [2 /*return*/];
            });
        });
    };
    EnterPage.prototype.removeItem = function (item) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i] == item) {
                this.items.splice(i, 1);
            }
        }
    };
    EnterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-enter",template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\enter\enter.html"*/`<!--\n  Generated template for the EnterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>店铺申请</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="fromdata">\n        <ul>\n            <li>\n                <span>商家名称</span>\n                <input type="text" placeholder="请输入商家名称">\n            </li>\n            <li>\n                <span>主持人</span>\n                <input type="text" placeholder="请输入主持人名称">\n            </li>\n            <li>\n                <span>联系人姓名</span>\n                <input type="text" placeholder="请输入联系人名称">\n            </li>\n            <li>\n                <span>身份证号</span>\n                <input type="text" placeholder="请输入身份证号">\n            </li>\n            <li>\n                <span>手机号</span>\n                <input type="text" placeholder="请输入手机号">\n            </li>\n            <li>\n                <span>微信号</span>\n                <input type="text" placeholder="请输入微信号">\n            </li>\n\n            <ion-item>\n                <ion-label>地区</ion-label>\n                <ion-multi-picker item-content [cancelText]="\'取消\'" [doneText]="\'完成\'" [multiPickerColumns]="listData"></ion-multi-picker>\n            </ion-item>\n\n            <li>\n                <span>详细地址</span>\n                <input type="text" placeholder="请输入联系地址">\n            </li>\n            <li>\n                <span>CKU有效专业会员/犬舍会员编号</span>\n                <input type="text" placeholder="请输入会员编号">\n            </li>\n            <li>\n                <span>CAAC有效专业会员/猫舍会员编号</span>\n                <input type="text" placeholder="请输入会员编号">\n            </li>\n            <li>\n                <span>繁殖犬种</span>\n                <input type="text" placeholder="请输入繁殖犬种">\n            </li>\n\n            <!-- <ion-item>\n                <ion-label>日期</ion-label>\n                <ion-datetime [cancelText]="\'取消\'" [doneText]="\'完成\'" displayFormat="YYYY/DD/MM" [(ngModel)]="myDate"></ion-datetime>\n            </ion-item> -->\n        </ul>\n        <div class=\'selectStyle\'>\n            <p>点击上传手持身份证正面照</p>\n            <button (click)="mydatasup()">\n        <img src="assets/imgs/images/shangchuan@2x.png" alt="" srcset="">\n      </button>\n        </div>\n        <div class=\'selectStyle\'>\n            <p>点击上传手持身份证反面照</p>\n            <button (click)="mydatasout()">\n        <img src="assets/imgs/images/shangchuan@2x.png" alt="" srcset="">\n      </button>\n        </div>\n        <p><input type="checkbox" name="" id="">我已同意XXX用户协议</p>\n        <button class="subfrom">确认注册</button>\n    </div>\n    <map name=""></map>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\enter\enter.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_0__providers_revice_serve_revice_serve__["a" /* ReviceServeProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__providers_revice_serve_revice_serve__["a" /* ReviceServeProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_img_service_img_service__["a" /* ImgServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared_service_user_service__["a" /* UserService */]])
    ], EnterPage);
    return EnterPage;
}());

//# sourceMappingURL=enter.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvaluatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EvaluatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EvaluatePage = (function () {
    function EvaluatePage(navCtrl, navParams, actionSheetCtrl, alertCtrl, imagePicker, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.ok = 0;
        this.ok2 = 0;
        this.ok3 = 0;
        this.text = '暂无评分';
        this.good2 = ["assets/imgs/images/dingdan.png", "assets/imgs/images/dingdan.png", "assets/imgs/images/dingdan.png", "assets/imgs/images/dingdan.png", "assets/imgs/images/dingdan.png"];
        this.avatar = ["/assets/imgs/images/pushimg.png"];
    }
    EvaluatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EvaluatePage');
    };
    EvaluatePage.prototype.presentActionSheet = function (i) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: "拍照",
                    role: "takePhoto",
                    handler: function () {
                        _this.takePhoto(i);
                    }
                },
                {
                    text: "从相册选择",
                    role: "chooseFromAlbum",
                    handler: function () {
                        _this.chooseFromAlbum(i);
                    }
                },
                {
                    text: "取消",
                    role: "cancel",
                    handler: function () {
                        console.log("cancel");
                    }
                }
            ]
        });
        actionSheet.present().then(function (value) {
            return value;
        });
        console.log(i);
        // console.log(this.avatar[i])
        // this.avatar[i]='assets/imgs/images/goudai.png'
    };
    EvaluatePage.prototype.takePhoto = function (i) {
        var _this = this;
        var options = {
            quality: 90,
            allowEdit: true,
            targetWidth: 1280,
            targetHeight: 720,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options).then(function (image) {
            console.log("Image URI: " + image);
            // this.avatar = image.slice(7);
            console.log(_this.avatar[i]);
            alert(image);
            _this.avatar[i] = image;
            if (_this.avatar.length < 6) {
                if (_this.avatar.indexOf("assets/imgs/images/pushimg.png") == -1) {
                    _this.avatar.push("assets/imgs/images/pushimg.png");
                }
            }
        }, function (error) {
            console.log("Error: " + error);
            // this.avatar[i] = "assets/imgs/images/goudai.png";
            console.log(_this.avatar);
        });
    };
    EvaluatePage.prototype.remimages = function (i) {
        // this.avatar[i]="assets/imgs/images/pushimg.png"
        this.avatar.splice(i, 1);
        console.log(this.avatar.indexOf("assets/imgs/images/pushimg.png"));
        // this.avatar.slice(i,1)
        if (this.avatar.indexOf("assets/imgs/images/pushimg.png") == -1) {
            this.avatar.push("assets/imgs/images/pushimg.png");
        }
        console.log(i);
        console.log(this.avatar);
    };
    EvaluatePage.prototype.chooseFromAlbum = function (i) {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
            width: 1280,
            height: 720,
            quality: 90
        };
        this.imagePicker.getPictures(options).then(function (images) {
            if (images.length === 1) {
                console.log("Image URI: " + images[0]);
                // this.avatar = images[0].slice(7);
                alert(images);
                _this.avatar[i] = images;
                if (_this.avatar.length < 6) {
                    if (_this.avatar.indexOf("assets/imgs/images/pushimg.png") == -1) {
                        _this.avatar.push("assets/imgs/images/pushimg.png");
                    }
                }
            }
        }, function (error) {
            console.log("Error: " + error);
            console.log(_this.avatar[i]);
        });
    };
    EvaluatePage.prototype.goods3 = function (i) {
        this.ok3 = i + 1;
    };
    EvaluatePage.prototype.goods2 = function (i) {
        this.ok2 = i + 1;
    };
    EvaluatePage.prototype.goods = function (i) {
        this.ok = i + 1;
        if (this.ok < 2) {
            this.text = '差';
        }
        if (this.ok >= 2 && this.ok < 4) {
            this.text = '一般';
        }
        if (this.ok >= 4) {
            this.text = '非常好';
        }
    };
    EvaluatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-evaluate',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\evaluate\evaluate.html"*/`<!--\n  Generated template for the EvaluatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>evaluate</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="title2">\n        <span>\n      <img src="assets/imgs/images/goudai.png" alt="">&nbsp; 符合描述:\n    </span>\n        <span>\n      <span *ngFor="let item of good2 let i=index">\n        <img src="{{item}}" *ngIf="ok>i" alt="" srcset="" (click)=\'goods(i)\'>\n        <img style="width: 2.5rem;" src="assets/imgs/images/cx.png" *ngIf="ok<=i" alt="" srcset="" (click)=\'goods(i)\'>\n      </span>\n        <!-- <span *ngFor="let item of good let i=index"> <img src="{{item}}"  *ngIf="ok>i" alt="" srcset="" (click)=\'goods(i)\'></span> -->\n\n        </span>\n        <span>{{text}}</span>\n    </div>\n    <div class="texfiler">\n        <textarea name="" id="" placeholder="宝贝满足你的期待吗?说说它的优点和美中不足的地方吧"></textarea>\n        <div>\n            <p>上传图片</p>\n            <div class="area">\n                <div class="Fileimg">\n                    <div class="itembox" *ngFor="let item of avatar let i =index">\n                        <span class="remimg" *ngIf="item!==\'/assets/imgs/images/pushimg.png\'" (click)=\'remimages(i)\'>X</span>\n                        <img src="{{item}}" alt="" (click)="presentActionSheet(i)">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="title2">\n        <p>\n            <span>\n        物流服务</span>\n            <span>\n        <span *ngFor="let item of good2 let i=index">\n          <img src="{{item}}" *ngIf="ok2>i" alt="" srcset="" (click)=\'goods2(i)\'>\n          <img style="width: 2.5rem;" src="assets/imgs/images/cx.png" *ngIf="ok2<=i" alt="" srcset="" (click)=\'goods2(i)\'>\n        </span>\n            <!-- <span *ngFor="let item of good let i=index"> <img src="{{item}}"  *ngIf="ok>i" alt="" srcset="" (click)=\'goods(i)\'></span> -->\n\n            </span>\n        </p>\n        <p>\n            <span>\n        服务态度</span>\n            <span>\n        <span *ngFor="let item of good2 let i=index">\n          <img src="{{item}}" *ngIf="ok3>i" alt="" srcset="" (click)=\'goods3(i)\'>\n          <img style="width: 2.5rem;" src="assets/imgs/images/cx.png" *ngIf="ok3<=i" alt="" srcset="" (click)=\'goods3(i)\'>\n        </span>\n            <!-- <span *ngFor="let item of good let i=index"> <img src="{{item}}"  *ngIf="ok>i" alt="" srcset="" (click)=\'goods(i)\'></span> -->\n\n            </span>\n        </p>\n\n        <button>提交</button>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\evaluate\evaluate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], EvaluatePage);
    return EvaluatePage;
}());

//# sourceMappingURL=evaluate.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuidancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GuidancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GuidancePage = (function () {
    function GuidancePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GuidancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GuidancePage');
    };
    GuidancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-guidance',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\guidance\guidance.html"*/`<!--\n  Generated template for the GuidancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>guidance</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div class="bg">\n        <img src="assets/imgs/images/home2_02.png" alt="">\n    </div>\n\n    <div class="btnbox">\n        <button class="yes">添加</button>\n        <button>忽略</button>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\guidance\guidance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], GuidancePage);
    return GuidancePage;
}());

//# sourceMappingURL=guidance.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_service_user_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the IpamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IpamPage = (function () {
    function IpamPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.letfbor = -1;
        this.mpindex = 0;
        this.ipml = 0;
        this.myipam = [];
        this.parmas = {
            pageNum: 1,
            rowsPrePage: 10,
            mytoken: 'JSON.parse(localStorage.getItem("mytoken"))'
        };
    }
    IpamPage.prototype.ionViewWillEnter = function () {
        // this.letfbor = -1;
        // this.myipam = JSON.parse(localStorage.getItem("myipam1"));
        // console.log(localStorage.getItem("myipamindex"));
        // this.mpindex = JSON.parse(localStorage.getItem("myipamindex"));
        // if (JSON.parse(localStorage.getItem("myipam1")) !== null) {
        //   this.ipml = JSON.parse(localStorage.getItem("myipam1")).length;
        // }
        // console.log(this.myipam);
        this.queryPetReceiverlist();
    };
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad IpamPage');
    //   console.log(localStorage.getItem('myipam1'))
    //   this.myipam.push(JSON.parse(localStorage.getItem('myipam1')))
    //   console.log(this.myipam)
    // }
    IpamPage.prototype.goder = function () {
        this.navCtrl.push("SitePage");
    };
    IpamPage.prototype.queryPetReceiverlist = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.parmas.mytoken = localStorage.getItem("mytoken");
                        return [4 /*yield*/, this.http.queryPetReceiverlist(this.parmas)];
                    case 1:
                        res = _a.sent();
                        this.myipam = res.arrayList;
                        console.log(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    IpamPage.prototype.setindex = function (i) {
        console.log(i);
        this.mpindex = i;
        localStorage.setItem("myipamindex", i);
    };
    IpamPage.prototype.petreceiverid = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            var parmas, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(i);
                        parmas = {
                            id: this.myipam[i].id,
                            mytoekn: localStorage.getItem('mytoken'),
                            receiver_name: this.myipam[i].receiver_name,
                            phonenumber: this.myipam[i].phone_number,
                            //receiver_address: this.myipam[i].receiver_address,
                            address_lable: this.myipam[i].address_lable,
                            default_address: 1,
                            province: this.myipam[i].province,
                            city: this.myipam[i].city,
                            county: this.myipam[i].county,
                            detaile_address: this.myipam[i].detaile_address
                        };
                        return [4 /*yield*/, this.http.updatePetReceiver(parmas)];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        this.http.http.showToast(res.message);
                        this.queryPetReceiverlist();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param i 编辑地址下标
     */
    IpamPage.prototype.saver = function (i) {
        var datas = this.myipam[i];
        this.navCtrl.push("SitePage", {
            datas: datas
        });
    };
    /**
     * 删除地址
     * @param i
     */
    IpamPage.prototype.rmoder = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            var parmas, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parmas = {
                            petreceiverid: this.myipam[i].id
                        };
                        return [4 /*yield*/, this.http.deletePetReceiver(parmas)];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        this.http.http.showToast(res.message);
                        this.myipam.splice(i, 1);
                        this.letfbor = -1;
                        return [2 /*return*/];
                }
            });
        });
    };
    IpamPage.prototype.swipeEvent = function (e, i) {
        // console.log(e.offsetDirection);
        if (e.offsetDirection == 2) {
            this.letfbor = i;
        }
        if (e.offsetDirection == 4) {
            this.letfbor = -1;
        }
    };
    IpamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-ipam",template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\ipam\ipam.html"*/`<!--\n  Generated template for the IpamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>收货地址管理</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="titaa" (click)="goder()">\n        <div class="ble">\n            <div>\n                <img src="assets/imgs/images/gprs.png" alt="" class="userimg">\n            </div>\n            <div class="ble2">\n                <div class="name">\n                    <p>添加收货地址</p>\n                </div>\n                <div>\n                    <img src="assets/imgs/images/right.png" alt="" style="width:1.5rem">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="titaa" *ngFor="let item of myipam let i=index" (swipe)="swipeEvent($event,i)">\n\n        <div [ngClass]="{\'ble\':letfbor!==i,\'ble3\':letfbor==i}" (click)=\'setindex(i)\'>\n            <p style="color: #ffc435;width: 2rem;" *ngIf="item.default_address==1">默认地址</p>\n            <p style="color: #cfcfcf;width: 2rem;" (click)="petreceiverid(i)" *ngIf="item.default_address==2">设置默认</p>\n            <div>\n                <img src="assets/imgs/images/xdgps.png" alt="" class="userimg">\n            </div>\n            <div class="ble2" (click)=\'letfbor=-1\'>\n                <div class="name">\n                    <p><span>收货人:{{item.receiver_name}} \n                        <!-- <span *ngIf="item.address_lable==1" style="color: #0cff00;font-weight: 900; margin-left: 0.5rem; border: 2px solid;border-radius: 50%;width: 1.5rem;display: inline-block;height: 1.5rem;line-height: 1.5rem;">校</span>\n                        <span *ngIf="item.address_lable==2" style="color: #ffc435;font-weight: 900; margin-left: 0.5rem; border: 2px solid;border-radius: 50%;width: 1.5rem;display: inline-block;height: 1.5rem;line-height: 1.5rem;">司</span>\n                        <span *ngIf="item.address_lable==3" style="color: red;font-weight: 900; margin-left: 0.5rem; border: 2px solid;border-radius: 50%;width: 1.5rem;display: inline-block;height: 1.5rem;line-height: 1.5rem;">家</span> -->\n                        </span><span style="float: right;">{{item.phone_number}}</span></p>\n                    <p><span>地址: {{item.province}} {{item.city}} {{item.county}} {{item.detaile_address}}</span></p>\n\n                </div>\n                <div>\n                    <img src="assets/imgs/images/right.png" alt="" style="width:1.5rem">\n                </div>\n            </div>\n        </div>\n\n        <div class="orderbutton">\n            <button (click)="saver(i)">编辑</button>\n            <button (click)="rmoder(i)">删除</button>\n        </div>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\ipam\ipam.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_shared_service_user_service__["a" /* UserService */]])
    ], IpamPage);
    return IpamPage;
}());

//# sourceMappingURL=ipam.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_service_user_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, http, device, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.device = device;
        this.toastCtrl = toastCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LoginPage");
        console.log(this.device);
        // let result = await this.http.localGetJSON('/assets/test.json');
        // console.log(result);
    };
    LoginPage.prototype.registerPage = function () {
        this.navCtrl.push("RegisterPage");
    };
    LoginPage.prototype.Gohome = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var myreg, message, parmas, res, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
                        if (!myreg.test(username.value)) {
                            message = "请输入正确手机号";
                            this.showToast(message);
                            return [2 /*return*/, false];
                        }
                        parmas = {
                            username: username.value,
                            password: password.value
                            // code:'',
                            // divcie_key:'',
                            // divcie_type:''
                        };
                        return [4 /*yield*/, this.http.login(parmas)];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        if (res.info == "ok") {
                            localStorage.setItem("mytoken", res.object.mytoken);
                            localStorage.setItem("mydata", JSON.stringify(res.object));
                            this.navCtrl.setRoot('TabsPage');
                        }
                        else {
                            message = res.message;
                            this.showToast(message);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // forgetPassword() {
    //   this.navCtrl.push(ForgetPasswordPage);
    // }
    LoginPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: "middle"
        });
        toast.present(toast);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-login",template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\login\login.html"*/`<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n    <ion-navbar>\n        <ion-title>Login</ion-title>\n    </ion-navbar>\n\n</ion-header> -->\n\n<ion-content class="content" padding>\n    <div class="loginLogo" style="margin-top:4rem;">\n        <img src="assets/imgs/loginLogo.png" alt="">\n    </div>\n\n    <ion-list style="margin-top:2rem;">\n        <ion-item>\n            <ion-label>\n                <span class="iconfont icon-user"></span>\n            </ion-label>\n            <ion-input type="text" placeholder="请输入您的手机号" #username></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>\n                <span class="iconfont icon-3701mima"></span>\n            </ion-label>\n            <ion-input type="password" placeholder="登录密码" #password></ion-input>\n        </ion-item>\n\n    </ion-list>\n\n    <button class="btn" style="margin-top:1rem;" (click)=\'Gohome(username,password)\'>登录</button>\n\n    <div class="flex-between" style="margin-top:1rem;">\n        <span (click)="registerPage()">注册</span>\n        <span (click)="forgetPassword()">忘记密码</span>\n    </div>\n\n\n\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__app_shared_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__refund_refund__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__match_match__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopcall_shopcall__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orderdack_orderdack__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pardackpush_pardackpush__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__allorders_allorders__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__additional_additional__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shippingoder_shippingoder__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__set_set__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__orderform_orderform__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__productadmin_productadmin__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pushcoupon_pushcoupon__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__coupon_coupon__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__enter_enter__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__evaluate_evaluate__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__audit_audit__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sopl_sopl__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__classify_classify__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__newlay_newlay__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__playcode_playcode__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__wallet_wallet__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__personalcenter_personalcenter__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__appraise_appraise__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__chatroom_chatroom__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__order_order__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__login_login__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__register_register__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__forget_password_forget_password__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pet_admin_pet_admin__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__details_details__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__guidance_guidance__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pushdiary_pushdiary__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__diary_diary__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ckeck_ckeck__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__callshop_callshop__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__newsword_newsword__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__shopping_shopping__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ipam_ipam__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__deposit_deposit__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__record_record__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__science_science__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











































/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ListPage");
    };
    ListPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_27__login_login__["a" /* LoginPage */]);
    };
    ListPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_28__register_register__["a" /* RegisterPage */]);
    };
    ListPage.prototype.forgetpassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_29__forget_password_forget_password__["a" /* ForgetPasswordPage */]);
    };
    ListPage.prototype.checkIn = function () {
        this.navCtrl.push("CheckInPage");
    };
    ListPage.prototype.petAdmin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_30__pet_admin_pet_admin__["a" /* PetAdminPage */]);
    };
    ListPage.prototype.GoDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_31__details_details__["a" /* DetailsPage */]);
    };
    ListPage.prototype.GuidancePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_32__guidance_guidance__["a" /* GuidancePage */]);
    };
    ListPage.prototype.Pushdiary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_33__pushdiary_pushdiary__["a" /* PushdiaryPage */]);
    };
    ListPage.prototype.Diary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_34__diary_diary__["a" /* DiaryPage */]);
    };
    ListPage.prototype.Dynamic = function () {
        this.navCtrl.push("DynamicPage");
    };
    ListPage.prototype.Ckeck = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_35__ckeck_ckeck__["a" /* CkeckPage */]);
    };
    ListPage.prototype.callshop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_36__callshop_callshop__["a" /* CallshopPage */]);
    };
    ListPage.prototype.Care = function () {
        this.navCtrl.push('CarePage');
    };
    ListPage.prototype.Newsword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_37__newsword_newsword__["a" /* NewswordPage */]);
    };
    ListPage.prototype.shopping = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_38__shopping_shopping__["a" /* ShoppingPage */]);
    };
    ListPage.prototype.order = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_24__order_order__["a" /* OrderPage */]);
    };
    ListPage.prototype.Chatroom = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_23__chatroom_chatroom__["a" /* ChatroomPage */]);
    };
    ListPage.prototype.Appraise = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_22__appraise_appraise__["a" /* AppraisePage */]);
    };
    ListPage.prototype.Site = function () {
        this.navCtrl.push('SitePage');
    };
    ListPage.prototype.ipam = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_39__ipam_ipam__["a" /* IpamPage */]);
    };
    ListPage.prototype.Personalcenter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_21__personalcenter_personalcenter__["a" /* PersonalcenterPage */]);
    };
    ListPage.prototype.wallet = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__wallet_wallet__["a" /* WalletPage */]);
    };
    ListPage.prototype.deposit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_40__deposit_deposit__["a" /* DepositPage */]);
    };
    ListPage.prototype.Record = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_41__record_record__["a" /* RecordPage */]);
    };
    ListPage.prototype.playcode = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_19__playcode_playcode__["a" /* PlaycodePage */]);
    };
    ListPage.prototype.newlay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__newlay_newlay__["a" /* NewlayPage */]);
    };
    ListPage.prototype.classify = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__classify_classify__["a" /* ClassifyPage */]);
    };
    ListPage.prototype.store = function () {
        this.navCtrl.push('StorePage');
    };
    ListPage.prototype.sopl = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__sopl_sopl__["a" /* SoplPage */]);
    };
    ListPage.prototype.audit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__audit_audit__["a" /* AuditPage */]);
    };
    ListPage.prototype.evaluate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__evaluate_evaluate__["a" /* EvaluatePage */]);
    };
    ListPage.prototype.enter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__enter_enter__["a" /* EnterPage */]);
    };
    ListPage.prototype.Coupon = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__coupon_coupon__["a" /* CouponPage */]);
    };
    ListPage.prototype.pushoupon = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pushcoupon_pushcoupon__["a" /* PushcouponPage */]);
    };
    ListPage.prototype.productadmin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__productadmin_productadmin__["a" /* ProductadminPage */]);
    };
    ListPage.prototype.Orderform = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__orderform_orderform__["a" /* OrderformPage */]);
    };
    ListPage.prototype.setpage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__set_set__["a" /* SetPage */]);
    };
    ListPage.prototype.shoppingoder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__shippingoder_shippingoder__["a" /* ShippingoderPage */]);
    };
    ListPage.prototype.Additional = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__additional_additional__["a" /* AdditionalPage */]);
    };
    ListPage.prototype.Allorders = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__allorders_allorders__["a" /* AllordersPage */]);
    };
    ListPage.prototype.pardackpush = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pardackpush_pardackpush__["a" /* PardackpushPage */]);
    };
    ListPage.prototype.orderdack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__orderdack_orderdack__["a" /* OrderdackPage */]);
    };
    ListPage.prototype.shopcall = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__shopcall_shopcall__["a" /* ShopcallPage */]);
    };
    ListPage.prototype.match = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__match_match__["a" /* MatchPage */]);
    };
    ListPage.prototype.refund = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__refund_refund__["a" /* RefundPage */]);
    };
    ListPage.prototype.science = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_42__science_science__["a" /* SciencePage */]);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_25__angular_core__["Component"])({
            selector: "page-list",template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\list\list.html"*/`<!--\n  Generated template for the ListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>list</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n\n    <ion-list>\n        <button ion-item (click)="login()">\n      登录\n    </button>\n\n        <button ion-item (click)="register()">\n      注册\n    </button>\n\n        <button ion-item (click)="forgetpassword()">\n      忘记密码\n    </button>\n\n        <button ion-item (click)="checkIn()">\n      签到\n    </button>\n\n        <button ion-item (click)="Newsword()">\n      消息通知\n    </button>\n        <button ion-item (click)="petAdmin()">\n      宠物管理\n    </button>\n        <button ion-item (click)="GoDetails()">\n      宠物卡详情页\n    </button>\n        <button ion-item (click)="Pushdiary()">\n      新增日记\n    </button>\n        <button ion-item (click)="Diary()">\n      日记\n    </button>\n        <button ion-item (click)="Dynamic()">\n      图文详情\n    </button>\n        <button ion-item (click)="callshop()">\n      零食兑换\n    </button>\n        <button ion-item (click)="Ckeck()">\n      我的关注\n    </button>\n        <button ion-item (click)="Care()">\n      关爱\n    </button>\n        <button ion-item (click)="shopping()">\n      商品详情\n    </button>\n        <button ion-item (click)="order()">\n      下单\n    </button>\n        <button ion-item (click)="GuidancePage()">\n      无宠卡引导页\n    </button>\n        <button ion-item (click)="Chatroom()">\n      聊天\n    </button>\n\n        <button ion-item (click)="Site()">\n      新增收货地址\n    </button>\n        <button ion-item (click)="ipam()">\n      收货地址管理\n    </button>\n        <button ion-item (click)=\'Appraise()\'>\n      查看评价\n    </button>\n\n        <button ion-item (click)="Personalcenter()">\n      个人中心\n    </button>\n        <button ion-item (click)="wallet()">\n      钱包\n    </button>\n        <button ion-item (click)="deposit()">\n      提现\n    </button>\n        <button ion-item (click)="Record()">\n      交易记录\n    </button>\n        <button ion-item (click)="playcode()">\n      支付密码\n    </button>\n        <button ion-item (click)="newlay()">\n      猫卡新增\n    </button>\n\n        <button ion-item (click)=" classify()">\n      推荐分类分类\n    </button>\n        <button ion-item (click)="store()">\n      商城\n    </button>\n        <button ion-item (click)="sopl()">\n      商家管理\n    </button>\n        <button ion-item (click)="audit()">\n      等待审核\n    </button>\n        <button ion-item (click)="evaluate()">\n      发表评价\n    </button>\n        <button ion-item (click)="enter()">\n      商家申请\n    </button>\n        <button ion-item (click)="Coupon()">\n      优惠券\n    </button>\n        <button ion-item (click)="pushoupon()">\n      添加优惠券\n    </button>\n        <button ion-item (click)="productadmin()">\n      商品管理\n    </button>\n        <button ion-item (click)="Orderform()">\n      订单管理\n    </button>\n        <button ion-item (click)="Allorders()">\n      全部订单\n    </button>\n        <button ion-item (click)="setpage()">\n      设置\n    </button>\n        <button ion-item (click)="shoppingoder()">\n      物流详情\n    </button>\n        <button ion-item (click)="Additional()">\n      追评\n    </button>\n        <button ion-item (click)="pardackpush()">\n      商品添加\n    </button>\n        <button ion-item (click)="orderdack()">\n      订单详情\n    </button>\n        <button ion-item (click)="shopcall()">\n      购物车\n    </button>\n        <button ion-item (click)="match()">\n      配种申请\n    </button>\n        <button ion-item (click)="refund()">\n      退款申请\n    </button>\n\n        <button ion-time (click)="science()">\n      科普\n    </button>\n    </ion-list>\n\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_26_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_26_ionic_angular__["NavParams"]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RefundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RefundPage = (function () {
    function RefundPage(navCtrl, navParams, actionSheetCtrl, alertCtrl, imagePicker, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.avatar = ["assets/imgs/images/pushimg.png"];
    }
    RefundPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RefundPage');
    };
    RefundPage.prototype.presentActionSheet = function (i) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: "拍照",
                    role: "takePhoto",
                    handler: function () {
                        _this.takePhoto(i);
                    }
                },
                {
                    text: "从相册选择",
                    role: "chooseFromAlbum",
                    handler: function () {
                        _this.chooseFromAlbum(i);
                    }
                },
                {
                    text: "取消",
                    role: "cancel",
                    handler: function () {
                        console.log("cancel");
                    }
                }
            ]
        });
        actionSheet.present().then(function (value) {
            return value;
        });
        console.log(i);
        // console.log(this.avatar[i])
        // this.avatar[i]='assets/imgs/images/goudai.png'
    };
    RefundPage.prototype.takePhoto = function (i) {
        var _this = this;
        var options = {
            quality: 90,
            allowEdit: true,
            targetWidth: 1280,
            targetHeight: 720,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options).then(function (image) {
            console.log("Image URI: " + image);
            // this.avatar = image.slice(7);
            console.log(_this.avatar[i]);
            alert(image);
            _this.avatar[i] = image;
            if (_this.avatar.length < 6) {
                if (_this.avatar.indexOf("assets/imgs/images/pushimg.png") == -1) {
                    _this.avatar.push("assets/imgs/images/pushimg.png");
                }
            }
        }, function (error) {
            console.log("Error: " + error);
            // this.avatar[i] = "assets/imgs/images/goudai.png";
            console.log(_this.avatar);
        });
    };
    RefundPage.prototype.remimages = function (i) {
        // this.avatar[i]="assets/imgs/images/pushimg.png"
        this.avatar.splice(i, 1);
        console.log(this.avatar.indexOf("assets/imgs/images/pushimg.png"));
        // this.avatar.slice(i,1)
        if (this.avatar.indexOf("assets/imgs/images/pushimg.png") == -1) {
            this.avatar.push("assets/imgs/images/pushimg.png");
        }
        console.log(i);
        console.log(this.avatar);
    };
    RefundPage.prototype.chooseFromAlbum = function (i) {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
            width: 1280,
            height: 720,
            quality: 90
        };
        this.imagePicker.getPictures(options).then(function (images) {
            if (images.length === 1) {
                console.log("Image URI: " + images[0]);
                // this.avatar = images[0].slice(7);
                alert(images);
                _this.avatar[i] = images;
                if (_this.avatar.length < 6) {
                    if (_this.avatar.indexOf("assets/imgs/images/pushimg.png") == -1) {
                        _this.avatar.push("assets/imgs/images/pushimg.png");
                    }
                }
            }
        }, function (error) {
            console.log("Error: " + error);
            console.log(_this.avatar[i]);
        });
    };
    RefundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-refund',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\refund\refund.html"*/`<!--\n  Generated template for the RefundPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>refund</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card class="first">\n\n        <ion-grid>\n            <ion-row class="goods">\n                <ion-col col-4>\n                    <img src="assets/imgs/images/goudai.png" class="goodPic">\n                </ion-col>\n                <ion-col col-8 class="mydetail">\n                    <h4 class="serviceName">asdasdasd啊是大神大所大所大阿萨德阿萨德</h4>\n\n\n                </ion-col>\n\n            </ion-row>\n\n\n        </ion-grid>\n    </ion-card>\n    <button ion-item>\n    货物状态\n  </button>\n    <p class="refundReason">申请原因（可填可不填）</p>\n    <ion-card class="last">\n        <textarea id="text" rows="6" placeholder="请在此输入，不超过200字" maxlength="200"></textarea>\n    </ion-card>\n\n    <ion-row class="same">\n        <ion-col col-3 id="left">\n            退款金额\n        </ion-col>\n        <ion-col col-9 class="way">\n            ￥9999\n        </ion-col>\n    </ion-row>\n    <ion-row class="same">\n        <ion-col col-9 id="left">\n            最多可退:￥9999,包含邮费(0.00)\n        </ion-col>\n\n    </ion-row>\n    <h4>上传凭证</h4>\n\n    <div class="Fileimg">\n        <div class="itembox" *ngFor="let item of avatar let i =index">\n            <span class="remimg" *ngIf="item!==\'assets/imgs/images/pushimg.png\'" (click)=\'remimages(i)\'>X</span>\n            <img src="{{item}}" alt="" (click)="presentActionSheet(i)">\n        </div>\n    </div>\n\n    <!--底部按钮-->\n    <button class="down">\n    提交\n  </button>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\refund\refund.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], RefundPage);
    return RefundPage;
}());

//# sourceMappingURL=refund.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopcallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ShopcallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShopcallPage = (function () {
    function ShopcallPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShopcallPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopcallPage');
    };
    ShopcallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shopcall',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\shopcall\shopcall.html"*/`<!--\n  Generated template for the ShopcallPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>购物车</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="callbox">\n        <p class="shops2">\n            <input type="radio" name="" id="">\n            <img src="assets/imgs/images/dp.png" alt="" srcset=""> 店铺名称></p>\n        <div class="shops">\n\n            <div class="datas">\n                <div> <input type="radio" name="" id=""></div>\n                <div>\n                    <img src="assets/imgs/images/goudai.png" alt="">\n                    <div>\n                        <h1>这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼</h1>\n                        <p>商品明细</p>\n                        <p>\n                            <span class="money">¥999</span>\n                            <span style="font-size: 1.5rem"><button>-</button><input type="text" value="1"><button>+</button></span>\n                        </p>\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <div style="height: 5rem;"></div>\n    <div class="jiesuan">\n        <span> <input type="radio" name="" id="">全选</span> <span> <span>合计 <span style="color: #fb7a3a;font-size: 1.5rem">¥999</span></span> <button>结算</button></span>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\shopcall\shopcall.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ShopcallPage);
    return ShopcallPage;
}());

//# sourceMappingURL=shopcall.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PardackpushPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_media_capture__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_video_editor__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_img_service_img_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the PardackpushPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PardackpushPage = (function () {
    function PardackpushPage(navCtrl, navParams, actionSheetCtrl, alertCtrl, mediaCapture, videoEditor, file, devolup) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.mediaCapture = mediaCapture;
        this.videoEditor = videoEditor;
        this.file = file;
        this.devolup = devolup;
    }
    PardackpushPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad PardackpushPage");
    };
    PardackpushPage.prototype.devoup = function () {
        var _this = this;
        this.devolup.choosePhoto(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var mgs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(res);
                        return [4 /*yield*/, this.devolup.uploadByTransfer(res)];
                    case 1:
                        mgs = _a.sent();
                        console.log(mgs);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PardackpushPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-pardackpush",template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\pardackpush\pardackpush.html"*/`<!--\n  Generated template for the PardackpushPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>pardackpush</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="fromdata">\n        <ul>\n\n            <li>\n                <span>宠物品种</span>\n                <input type="text" placeholder="请输入宠物品种名称 例:哈士奇">\n            </li>\n            <li>\n                <span>价格</span>\n                <input type="text" placeholder="请输入宠物价格">\n            </li>\n            <li>\n                <span>商品类型</span>\n\n                <ion-list radio-group [(ngModel)]="relationship" class="noionic">\n                    <ion-item>\n                        <ion-label>活体</ion-label>\n                        <ion-radio value="活体" checked></ion-radio>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>非活体</ion-label>\n                        <ion-radio value="非活体"></ion-radio>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>关爱</ion-label>\n                        <ion-radio value="关爱" [disabled]="isDisabled"></ion-radio>\n                    </ion-item>\n                </ion-list>\n            </li>\n            <li>\n                <span>宠物性别</span>\n                <ion-list radio-group [(ngModel)]="relationship2" class="noionic noionic2">\n                    <ion-item>\n                        <ion-label>弟弟</ion-label>\n                        <ion-radio value="弟弟" checked></ion-radio>\n                    </ion-item>\n                    <ion-item>\n\n                        <ion-label>妹妹</ion-label>\n                        <ion-radio value="妹妹" [disabled]="isDisabled"></ion-radio>\n                    </ion-item>\n\n                </ion-list>\n\n\n            </li>\n            <li>\n                <span>数量</span>\n                <input type="text" placeholder="请输入宠物数量">\n            </li>\n            <li>\n                <span>体重</span>\n                <input type="text" placeholder="请输入宠物体重">\n            </li>\n            <li>\n                <span>年龄</span>\n                <input type="text" placeholder="请输入宠物年龄">\n            </li>\n            <li>\n                <span>疫苗详情</span>\n                <input type="text" placeholder="请输入宠物疫苗详情">\n            </li>\n\n\n        </ul>\n    </div>\n\n    <div class="imgdata">\n        <p>商品图上传</p>\n        <ul>\n            <li (click)="devoup()">\n                <img src="assets/imgs/images/shangchuan@2x.png" alt="" srcset="">\n            </li>\n        </ul>\n        <button class="tijiao">下一步</button>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\pardackpush\pardackpush.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_media_capture__["a" /* MediaCapture */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_video_editor__["a" /* VideoEditor */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__providers_img_service_img_service__["a" /* ImgServiceProvider */]])
    ], PardackpushPage);
    return PardackpushPage;
}());

//# sourceMappingURL=pardackpush.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingoderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ShippingoderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShippingoderPage = (function () {
    function ShippingoderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShippingoderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShippingoderPage');
    };
    ShippingoderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shippingoder',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\shippingoder\shippingoder.html"*/`<!--\n  Generated template for the ShippingoderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>shippingoder</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="shippingoder">\n        <div class="box">\n            <div>\n                <span>04-03</span>\n                <span>19:09</span>\n                <span>收</span>\n            </div>\n            <div>\n                <p>[收货地址] 用户填写的真正收货地址</p>\n            </div>\n        </div>\n        <div class="box">\n            <div>\n                <span>04-03</span>\n                <span>19:09</span>\n                <span><img src="/assets/imgs/images/gou.png" alt="" srcset=""></span>\n            </div>\n            <div>\n                <p>[收货地址] 用户填写的真正收货地址</p>\n            </div>\n        </div>\n        <div class="box">\n            <div>\n                <span>04-03</span>\n                <span>19:09</span>\n                <span>取</span>\n            </div>\n            <div>\n                <p>[收货地址] 用户填写的真正收货地址</p>\n            </div>\n        </div>\n        <div class="box">\n            <div>\n                <span>04-03</span>\n                <span>19:09</span>\n                <span><img src="/assets/imgs/images/dingwei.png" alt="" srcset=""></span>\n            </div>\n            <div>\n                <p>[收货地址] 用户填写的真正收货地址</p>\n            </div>\n        </div>\n        <div class="box">\n            <div>\n                <span>04-03</span>\n                <span>19:09</span>\n                <span><img src="/assets/imgs/images/paisong.png" alt="" srcset=""></span>\n            </div>\n            <div>\n                <p>[收货地址] 用户填写的真正收货地址</p>\n            </div>\n        </div>\n        <div class="box2">\n            <div>\n                <span>04-03</span>\n                <span>19:09</span>\n                <span></span>\n            </div>\n            <div>\n                <p>[收货地址] 用户填写的真正收货地址</p>\n            </div>\n        </div>\n        <div class="box2">\n            <div>\n                <span>04-03</span>\n                <span>19:09</span>\n                <span></span>\n            </div>\n            <div>\n                <p>[收货地址] 用户填写的真正收货地址用户填写的真正收货地址用户填写的真正收货地址用户填写的真正收货地址</p>\n            </div>\n        </div>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\shippingoder\shippingoder.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ShippingoderPage);
    return ShippingoderPage;
}());

//# sourceMappingURL=shippingoder.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetPage = (function () {
    function SetPage(navCtrl, navParams, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.app = app;
    }
    SetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SetPage');
    };
    SetPage.prototype.goder = function () {
        this.navCtrl.push("IpamPage");
    };
    SetPage.prototype.gosetuser = function () {
        this.navCtrl.push("SetuserPage");
    };
    SetPage.prototype.playcode = function (i) {
        console.log(i);
        this.navCtrl.push("PlaycodePage", {
            type: i
        });
    };
    SetPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            //title: 'Use this lightsaber?',
            message: '是否退出当前账号',
            buttons: [
                {
                    text: '确定',
                    handler: function () {
                        localStorage.clear();
                        _this.app.getRootNav().push("LoginPage");
                        setTimeout(function () {
                            _this.navCtrl.popToRoot();
                        }, 1000);
                    }
                },
                {
                    text: '取消',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    SetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-set',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\set\set.html"*/`<!--\n  Generated template for the SetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>设置</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <!-- <div class="toggle">\n        <span>截屏后提示分享</span>\n        <span>\n\n        <ion-toggle  checked="false"></ion-toggle>\n   \n    </span>\n    </div>\n    <div class="toggle" style="margin-top: 1rem">\n        <span>WIFI下自动播放视频</span>\n        <span><ion-toggle checked="true"></ion-toggle></span>\n    </div> -->\n    <div class="toggle" style="margin-top: 1rem" (click)="goder()">\n        <span>设置收货地址</span>\n        <span></span>\n    </div>\n    <div class="toggle" style="margin-top: 1rem" (click)="gosetuser()">\n        <span>设置用户信息</span>\n        <span></span>\n    </div>\n    <div class="toggle" style="margin-top: 1rem" (click)="playcode(0)">\n        <span>设置手机号</span>\n        <span></span>\n    </div>\n    <div class="toggle" style="margin-top: 1rem" (click)="playcode(1)">\n        <span>设置密码</span>\n        <span></span>\n    </div>\n\n    <button class="outlogin" (click)="showConfirm()">退出登录</button>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\set\set.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]])
    ], SetPage);
    return SetPage;
}());

//# sourceMappingURL=set.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrderformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderformPage = (function () {
    function OrderformPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrderformPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderformPage');
    };
    OrderformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-orderform',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\orderform\orderform.html"*/`<!--\n  Generated template for the OrderformPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>orderform</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="date">\n        时间段筛选:\n    </div>\n    <div class="tabs">\n        <ul>\n            <li class="eft">全部</li>\n            <li>活体</li>\n            <li>非活体</li>\n            <li>添加商品+</li>\n        </ul>\n        <div class="tabspage">\n            <div class="shops">\n                <p>\n                    <span>\n            <img src="assets/imgs/images/goudai.png" alt="">asdasd</span>\n                    <span>\n            <img src="assets/imgs/images/right.png" alt="" srcset="">\n          </span>\n                </p>\n                <div class="datas">\n                    <div>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <div>\n                            <h1>这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼</h1>\n                            <p>商品明细</p>\n                            <p>\n                                <span class="money">¥999</span>\n                                <span style="font-size: 1.5rem">X1</span>\n                            </p>\n\n                        </div>\n                    </div>\n                    <div class="tag">\n                        <span class="ok">同意退款</span>\n                        <span class="flow">查看物流</span>\n                    </div>\n                </div>\n            </div>\n\n            <div class="shops">\n                <p>\n                    <span>\n            <img src="assets/imgs/images/goudai.png" alt="">asdasd</span>\n                    <span>\n            <img src="assets/imgs/images/right.png" alt="" srcset="">\n          </span>\n                </p>\n                <div class="datas">\n                    <div>\n                        <img src="assets/imgs/images/goudai.png" alt="">\n                        <div>\n                            <h1>这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼这里是称呼</h1>\n                            <p>商品明细</p>\n                            <p>\n                                <span class="money">¥999</span>\n                                <span style="font-size: 1.5rem">X1</span>\n                            </p>\n\n                        </div>\n                    </div>\n                    <div class="tag">\n                        <span class="ok">同意退款</span>\n                        <span class="flow">查看物流</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\orderform\orderform.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], OrderformPage);
    return OrderformPage;
}());

//# sourceMappingURL=orderform.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductadminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProductadminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductadminPage = (function () {
    function ProductadminPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.letfbor = -1;
        this.data = [
            { imgurl: "assets/imgs/images/goudai.png", title: "标题", date: "1" },
            { imgurl: "assets/imgs/images/goudai.png", title: "标题", date: "2" },
            { imgurl: "assets/imgs/images/goudai.png", title: "标题", date: "3" },
            { imgurl: "assets/imgs/images/goudai.png", title: "标题", date: "4" },
            { imgurl: "assets/imgs/images/goudai.png", title: "标题", date: "5" },
        ];
    }
    ProductadminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductadminPage');
    };
    ProductadminPage.prototype.pardackpush = function () {
        this.navCtrl.push("PardackpushPage");
    };
    ProductadminPage.prototype.remlist = function (i) {
        alert("我要删除" + i);
        this.data.splice(this.letfbor, 1);
        this.letfbor = -1;
        console.log(this.data);
    };
    ProductadminPage.prototype.swipeEvent = function (e, i) {
        // console.log(e.offsetDirection);
        if (e.offsetDirection == 2) {
            this.letfbor = i;
        }
        if (e.offsetDirection == 4) {
            this.letfbor = -1;
        }
    };
    ProductadminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-productadmin',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\productadmin\productadmin.html"*/`<!--\n  Generated template for the ProductadminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>productadmin</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="tabs">\n        <ul>\n            <li class="eft">全部</li>\n            <li>活体</li>\n            <li>非活体</li>\n            <li (click)="pardackpush()">添加商品+</li>\n        </ul>\n        <div class="tabspage">\n\n\n        </div>\n    </div>\n    <div class="listbox">\n        <ul>\n            <li *ngFor="let item of data let i=index" (swipe)="swipeEvent($event,i)">\n                <div [ngClass]="{\'list\':letfbor!==i,\'list2\':letfbor==i}" (click)=\'letfbor=-1\'>\n                    <div>\n                        <img src="assets/imgs/images/goudai.png" alt="" class="userimg">\n                    </div>\n                    <div class="ble2">\n                        <div class="name">\n                            <p><span>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊 </span><span>¥ 9999</span></p>\n                            <p><span>啊是大神大所大所大所大所多</span> <span>已售999</span></p>\n\n                        </div>\n                        <div>\n                            <img src="assets/imgs/images/right.png" alt="">\n                        </div>\n                    </div>\n\n                </div>\n                <div class="orderbutton">\n                    <!-- <div class="orderbutton">\n                        <button>编辑</button>\n                        <button>删除</button>\n                    </div> -->\n                    <button>编辑</button>\n                    <button class="rem" (click)="remlist(i)">删除</button>\n                </div>\n            </li>\n        </ul>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\productadmin\productadmin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ProductadminPage);
    return ProductadminPage;
}());

//# sourceMappingURL=productadmin.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushcouponPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PushcouponPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PushcouponPage = (function () {
    function PushcouponPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timeStarts = '2018-12-12';
        this.timeStarts2 = '2018-12-12';
    }
    PushcouponPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PushcouponPage');
    };
    PushcouponPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pushcoupon',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\pushcoupon\pushcoupon.html"*/`<!--\n  Generated template for the PushcouponPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pushcoupon</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="fromdata">\n    <ul>\n\n      <li>\n        <span>优惠券名称</span>\n        <input type="text" placeholder="请输入优惠券名称">\n      </li>\n      <li>\n        <span>面值</span>\n        <input type="text" placeholder="请输入优惠券面值">\n      </li>\n      <li>\n        <span>优惠券金额</span>\n        <span>\n          <input type="radio" name="money" id="">不限制</span>\n        <span>\n          <input type="radio" name="money1" id="">满\n          <input type="number" class="monet">元可使用\n        </span>\n      </li>\n      <li>\n        <span>发放总量</span>\n        <input type="text" placeholder="请输入发放总量">\n      </li>\n      <li>\n        <span>生效时间</span>\n        <ion-datetime  displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="timeStarts"></ion-datetime>\n      </li>\n      <li>\n        <span>过期时间</span>\n        <ion-datetime  displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="timeStarts2"></ion-datetime>\n      </li>\n   \n    </ul>\n    <p>\n      <input type="checkbox" name="" id="">我已同意XXX用户协议</p>\n    <button class="tijiao">确认注册</button>\n  </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\pushcoupon\pushcoupon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], PushcouponPage);
    return PushcouponPage;
}());

//# sourceMappingURL=pushcoupon.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoplPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SoplPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SoplPage = (function () {
    function SoplPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SoplPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SoplPage');
    };
    SoplPage.prototype.Coupon = function () {
        this.navCtrl.push("CouponPage");
    };
    SoplPage.prototype.Orderform = function () {
        this.navCtrl.push("OrderformPage");
    };
    SoplPage.prototype.productadmin = function () {
        this.navCtrl.push("ProductadminPage");
    };
    SoplPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sopl',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\sopl\sopl.html"*/`<!--\n  Generated template for the SoplPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>sopl</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n    <button ion-item (click)="Coupon()">\n    优惠券\n  </button>\n    <button ion-item (click)="Orderform()">\n    订单管理\n  </button>\n    <button ion-item (click)="productadmin()">\n    商品管理\n  </button>\n\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\sopl\sopl.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SoplPage);
    return SoplPage;
}());

//# sourceMappingURL=sopl.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_file__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared_service_user_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_img_service_img_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






// import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';

/**
 * Generated class for the NewlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewlayPage = (function () {
    function NewlayPage(navCtrl, navParams, toastCtrl, actionSheetCtrl, camera, http, file, upimgserve) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.http = http;
        this.file = file;
        this.upimgserve = upimgserve;
        this.petimage = "assets/imgs/images/xinzengmaoka.png";
        this.fromdata = {
            pet_name: "",
            pet_birthday: "1",
            is_sterilisation: "",
            pet_weight: 0,
            comment: "",
            sex: "",
            kind: "",
            headimgpath: "",
        };
    }
    NewlayPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad NewlayPage");
    };
    NewlayPage.prototype.ionViewWillEnter = function () {
        console.log(this.navParams.get("data"));
        if (this.navParams.get("data") != undefined) {
            this.fromdata.pet_name = this.navParams.get("data").pet_name;
            this.fromdata.comment = this.navParams.get("data").comment;
            this.fromdata.pet_weight = this.navParams.get("data").pet_wheight;
            this.fromdata.pet_birthday = this.navParams
                .get("data")
                .pet_birthday.substr(0, 10);
            if (this.navParams.get("data").concernStatus) {
                this.fromdata.is_sterilisation = "1";
            }
            else {
                this.fromdata.is_sterilisation = "2";
            }
            this.fromdata["petcardid"] = this.navParams.get("data").id;
            console.log(this.fromdata);
            this.fromdata.kind = this.navParams.get("data").kind;
            this.fromdata.sex = this.navParams.get("data").is_sterilisation;
            this.fromdata.headimgpath = this.navParams.get("data").headimgpath;
            this.petimage = this.navParams.get("data").headimgpath;
        }
    };
    /**
     * 图片上传的调用方法
     */
    NewlayPage.prototype.userimg = function () {
        this.initImgSer();
        this.upimgserve.showPicActionSheet();
    };
    NewlayPage.prototype.initImgSer = function () {
        var _this = this;
        this.upimgserve.upload.success = function (data) {
            console.log(data);
            //  this.fromdata.headimgpath=data.imageUrl+data.object.map.filename
            // this.petimage=data.imageUrl+data.object.map.filename
            _this.fromdata.headimgpath = "http://116.62.219.45/imgs/" + data.object.map.filename;
            _this.petimage = "http://116.62.219.45/imgs/" + data.object.map.filename;
        };
    };
    NewlayPage.prototype.subfrom = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mgs, message, res, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //this.fromdata.mytoken = localStorage.getItem("mytoken");
                        for (mgs in this.fromdata) {
                            console.log(this.fromdata[mgs]);
                            if (this.fromdata[mgs] == "" || this.fromdata[mgs] == null) {
                                message = "请认真填写资料";
                                this.showToast(message);
                                return [2 /*return*/, false];
                            }
                        }
                        if (!(this.navParams.get("data") !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http.updatepetcard(this.fromdata)];
                    case 1:
                        res = _a.sent();
                        this.http.http.showToast(res.message);
                        this.navCtrl.pop();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.http.addpetcard(this.fromdata)];
                    case 3:
                        res = _a.sent();
                        this.http.http.showToast(res.message);
                        _a.label = 4;
                    case 4:
                        this.fromdata = {
                            pet_name: "",
                            pet_birthday: "1",
                            is_sterilisation: "",
                            pet_weight: null,
                            comment: "",
                            sex: "",
                            kind: "",
                            headimgpath: "",
                        };
                        this.petimage = "assets/imgs/images/xinzengmaoka.png";
                        return [2 /*return*/];
                }
            });
        });
    };
    NewlayPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: "middle"
        });
        toast.present(toast);
    };
    NewlayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "page-newlay",template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\newlay\newlay.html"*/`<!--\n  Generated template for the NewlayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>添加猫卡</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="fler">\n        <img src="{{petimage}}" alt="" (click)="userimg()">\n        <p>点击图片上传头像</p>\n    </div>\n    <p class="data">\n        <span>昵称:</span>\n        <span>\n      <input type="text" [(ngModel)]=\'fromdata.pet_name\' placeholder="淼淼">\n    </span>\n    </p>\n    <p class="data">\n\n        <ion-list radio-group [(ngModel)]="fromdata.sex">\n            <ion-list-header>请选择性别</ion-list-header>\n            <ion-item>\n                <ion-label fixed>男生</ion-label>\n                <ion-radio value="1"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>女生</ion-label>\n                <ion-radio value="2"></ion-radio>\n            </ion-item>\n        </ion-list>\n\n\n    </p>\n    <p class="data" style="display: flex;">\n        <span>生日:</span>\n        <span>\n      <ion-datetime [cancelText]="\'取消\'" [doneText]="\'完成\'" displayFormat="YYYY-MM-DD" [(ngModel)]="fromdata.pet_birthday"></ion-datetime>\n    </span>\n    </p>\n    <p class="data">\n        <span>体重:</span>\n        <span>\n      <input type="number" [(ngModel)]=\'fromdata.pet_weight\' placeholder="2.0Kg"><span>Kg</span>\n        </span>\n    </p>\n    <p class="data">\n        <span>一句话描述:</span>\n        <span>\n      <input type="text" [(ngModel)]=\'fromdata.comment\' placeholder="一只爱吃鱼的猫">\n    </span>\n    </p>\n    <p class="data">\n        <ion-list radio-group [(ngModel)]="fromdata.is_sterilisation">\n            <ion-list-header>是否绝育</ion-list-header>\n            <ion-item>\n                <ion-label fixed>已绝育</ion-label>\n                <ion-radio value="1"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>未绝育</ion-label>\n                <ion-radio value="2"></ion-radio>\n            </ion-item>\n        </ion-list>\n    </p>\n    <p class="data">\n        <ion-list radio-group [(ngModel)]="fromdata.kind">\n            <ion-list-header>种类</ion-list-header>\n            <ion-item>\n                <ion-label fixed>喵星人</ion-label>\n                <ion-radio value="1"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>汪星人</ion-label>\n                <ion-radio value="2"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>其它</ion-label>\n                <ion-radio value="3"></ion-radio>\n            </ion-item>\n        </ion-list>\n    </p>\n    <button class="sub" (click)="subfrom()">提交</button>\n\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\newlay\newlay.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__providers_img_service_img_service__["a" /* ImgServiceProvider */]])
    ], NewlayPage);
    return NewlayPage;
}());

//# sourceMappingURL=newlay.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaycodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PlaycodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlaycodePage = (function () {
    function PlaycodePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.titles = ["修改手机号", "修改密码", "修改支付密码"];
        this.type = 0;
        this.title = '';
        this.disabled = false;
        this.num = 60;
    }
    PlaycodePage.prototype.ionViewDidLoad = function () {
        if (this.navParams.get("type")) {
            this.type = this.navParams.get("type");
        }
        this.title = this.titles[this.type];
        console.log('ionViewDidLoad PlaycodePage');
    };
    PlaycodePage.prototype.yanzm = function () {
        var _this = this;
        this.disabled = true;
        if (this.num > 0) {
            setInterval(function () {
                _this.num--;
            }, 1000);
        }
    };
    PlaycodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-playcode',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\playcode\playcode.html"*/`<!--\n  Generated template for the PlaycodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <div class="playcode" *ngIf="type==0"><img src="assets/imgs/images/re_12.png" alt="" srcset=""> <input type="text" placeholder="请设置您的手机号"></div>\n    <div class="playcode" *ngIf="type!==0"><img src="assets/imgs/images/re_12.png" alt="" srcset=""> <input type="text" placeholder="请设置您的密码"></div>\n    <div class="yanzm"><button class="yanz" [disabled]="disabled">获取验证码<span *ngIf="num>0" (click)="yanzm()" >({{num}})</span></button><input type="text" placeholder="请输入验证码"></div>\n    <button class="isok">确认</button>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\playcode\playcode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], PlaycodePage);
    return PlaycodePage;
}());

//# sourceMappingURL=playcode.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletPage = (function () {
    function WalletPage(actionSheetCtrl, navCtrl, navParams) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalletPage');
    };
    WalletPage.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: '支付方式',
            buttons: [
                {
                    text: '支付宝',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: '微信',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    WalletPage.prototype.deposit = function () {
        this.navCtrl.push("DepositPage");
    };
    WalletPage.prototype.Record = function () {
        this.navCtrl.push("RecordPage");
    };
    WalletPage.prototype.playcode = function () {
        this.navCtrl.push("PlaycodePage");
    };
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wallet',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\wallet\wallet.html"*/`<!--\n  Generated template for the WalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>wallet</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="bg">\n        <div class="wallet">\n            <p>零钱</p>\n            <h1>¥ 1000</h1>\n        </div>\n        <div><button (click)="deposit()"> <img src="assets/imgs/images/txl.png" alt="" >提现</button><button (click)="presentActionSheet()"><img src="assets/imgs/images/chongzhi.png" alt="">充值</button></div>\n    </div>\n\n    <!-- <div class="list"><span> <img src="assets/imgs/images/qianbao1.png" alt="">提现</span><img src="assets/imgs/images/right.png" alt=""></div> -->\n    <div class="list" (click)="Record()"><span> <img src="assets/imgs/images/jiaoyijilu.png" alt="">交易记录</span><img src="assets/imgs/images/right.png" alt=""></div>\n    <div class="list" (click)="playcode()"><span> <img src="assets/imgs/images/zhifumima.png" alt="">支付密码修改</span><img src="assets/imgs/images/right.png" alt=""></div>\n    <!-- <div class="list"><span> <img src="assets/imgs/images/zhifuguanli.png" alt="">支付管理</span><img src="assets/imgs/images/right.png" alt=""></div>\n    <div class="list"><span> <img src="assets/imgs/images/zhifuanquan.png" alt="">支付安全</span><img src="assets/imgs/images/right.png" alt=""></div> -->\n    <div class="list"><span> <img src="assets/imgs/images/bangzhu.png" alt="">帮助中心</span><img src="assets/imgs/images/right.png" alt=""></div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\wallet\wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalcenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PersonalcenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalcenterPage = (function () {
    function PersonalcenterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PersonalcenterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalcenterPage');
    };
    PersonalcenterPage.prototype.ionViewWillEnter = function () {
        if (localStorage.getItem('mydata')) {
            this.userimg = JSON.parse(localStorage.getItem('mydata')).headimgpath;
        }
    };
    PersonalcenterPage.prototype.wallet = function () {
        this.navCtrl.push("WalletPage");
    };
    PersonalcenterPage.prototype.gotoushilist = function (i) {
        console.log(i);
        this.navCtrl.push("ToushilistPage", { type: i });
    };
    PersonalcenterPage.prototype.enter = function () {
        this.navCtrl.push("EnterPage");
    };
    PersonalcenterPage.prototype.goshol = function () {
        this.navCtrl.push("SoplPage");
    };
    PersonalcenterPage.prototype.Detemgs = function () {
        this.navCtrl.push("CalendarPage");
    };
    PersonalcenterPage.prototype.Allorders = function () {
        this.navCtrl.push("AllordersPage");
    };
    PersonalcenterPage.prototype.callshop = function () {
        this.navCtrl.push("CallshopPage");
    };
    PersonalcenterPage.prototype.petAdmin = function () {
        this.navCtrl.push("PetAdminPage");
    };
    PersonalcenterPage.prototype.setpage = function () {
        this.navCtrl.push("SetPage");
    };
    PersonalcenterPage.prototype.Newsword = function () {
        this.navCtrl.push("NewswordPage");
    };
    PersonalcenterPage.prototype.advices = function () {
        this.navCtrl.push("AdvicesPage");
    };
    PersonalcenterPage.prototype.Coupon = function () {
        this.navCtrl.push("CouponPage");
    };
    PersonalcenterPage.prototype.Ckeck = function () {
        this.navCtrl.push("CkeckPage");
    };
    PersonalcenterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-personalcenter',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\personalcenter\personalcenter.html"*/`<!--\n  Generated template for the PersonalcenterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>个人中心</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="day">\n        <ul>\n            <li (click)="Ckeck()"><span>我的关注</span><span>2</span></li>\n            <li><img src="{{userimg}}" alt="" srcset=""></li>\n            <li (click)="Coupon()"><span>代金券</span><span>2</span></li>\n        </ul>\n    </div>\n    <div class="list">\n        <h4>日常管理</h4>\n        <ul>\n            <li (click)="petAdmin()">\n                <p>\n                    <img src="assets/imgs/images/cwgl.png" alt="">\n                </p>\n                <p>宠物管理</p>\n            </li>\n            <li (click)="callshop()">\n                <p>\n                    <img src="assets/imgs/images/duihuan.png" alt="">\n                </p>\n                <p>兑换</p>\n            </li>\n            <li (click)="gotoushilist(0)">\n                <p>\n                    <img src="assets/imgs/images/duihuan.png" alt="">\n                </p>\n                <p>投食记录</p>\n            </li>\n            <!-- <li (click)="gotoushilist(1)">\n                <p>\n                    <img src="assets/imgs/images/duihuan.png" alt="">\n                </p>\n                <p>黑名单</p>\n            </li> -->\n\n        </ul>\n    </div>\n\n    <div class="list">\n        <h4>商城购物</h4>\n        <ul>\n            <li (click)="Allorders()">\n                <p>\n                    <img src="assets/imgs/images/dingdan.png" alt="">\n                </p>\n                <p>订单</p>\n            </li>\n            <li>\n                <p>\n                    <img src="assets/imgs/images/shoucang.png" alt="">\n                </p>\n                <p>收藏</p>\n            </li>\n            <li (click)="enter()">\n                <p>\n                    <img src="assets/imgs/images/shangjiashenqing.png" alt="">\n                </p>\n                <p>商家申请</p>\n            </li>\n            <li (click)="goshol()">\n                <p>\n                    <img src="assets/imgs/images/shangjiashenqing.png" alt="">\n                </p>\n                <p>商家管理</p>\n            </li>\n            <li (click)="wallet()">\n                <p>\n                    <img src="assets/imgs/images/qianbao2.png" alt="">\n                </p>\n                <p>钱包</p>\n            </li>\n        </ul>\n    </div>\n\n    <div class="list">\n        <h4>其他</h4>\n        <ul>\n            <li>\n                <p>\n                    <img src="assets/imgs/images/lianxiwomen.png" alt="">\n                </p>\n                <p>联系我们</p>\n            </li>\n            <li (click)="setpage()">\n                <p>\n                    <img src="assets/imgs/images/shezhi.png" alt="">\n                </p>\n                <p>设置</p>\n            </li>\n            <li (click)="advices()">\n                <p>\n                    <img src="assets/imgs/images/tongzhi.png" alt="">\n                </p>\n                <p>通知</p>\n            </li>\n\n        </ul>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\personalcenter\personalcenter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], PersonalcenterPage);
    return PersonalcenterPage;
}());

//# sourceMappingURL=personalcenter.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_service_user_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderPage = (function () {
    function OrderPage(navCtrl, navParams, http, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.ipamord = {
            myname: "",
            ipone: "",
            order: ""
        };
        this.imgpath = "";
        this.imgUrl = "";
        this.pordacknum = 1;
        this.tabs = 0;
        this.show = false;
        this.linshinum = 1;
        this.rmb = 0.1;
    }
    OrderPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad OrderPage");
    };
    OrderPage.prototype.ionViewWillEnter = function () {
        this.address();
        console.log(this.navParams);
        this.pordackinit();
        this.querypetcard();
    };
    OrderPage.prototype.openPayActionSheet = function (data) {
        var _this = this;
        this.actionSheetCtrl.create({
            buttons: [
                {
                    text: "支付宝支付",
                    handler: function () {
                        // this.aliPay(data);
                    }
                },
                {
                    text: "微信支付",
                    handler: function () {
                        _this.weiXinPay(data);
                    }
                },
                {
                    text: "取消",
                    role: 'cancel'
                }
            ]
        }).present();
    };
    OrderPage.prototype.pordackinit = function () {
        this.type = this.navParams.get("type");
        this.imgpath = this.navParams.get("pordack").product_img1[0];
        this.pordackpage = this.navParams.get("pordack").product_img1[1];
        console.log(this.imgpath);
        this.imgUrl = this.navParams.get("imgUrl");
        console.log(this.imgUrl + this.imgpath);
        this.maxprice = this.navParams.get("pordack").product_price;
        this.title = this.navParams.get("pordack").product_name;
        this.cmment = this.navParams.get("pordack").product_introduce;
        this.leastpay = this.navParams.get("pordack").leastpay;
        this.integral_proportion = this.navParams.get("pordack").integral_proportion;
        this.product_guige = this.navParams.get("pordack").product_guige;
        console.log(this.product_guige);
    };
    OrderPage.prototype.upup = function () {
        if (this.product_guige <= this.pordacknum) {
            return false;
        }
        this.pordacknum++;
        if (this.linshinum > this.leastpay * this.pordacknum ||
            this.linshinum > this.integral_num) {
            if (this.integral_num > this.leastpay * this.pordacknum) {
                this.linshinum = this.leastpay;
            }
            else {
                this.linshinum = this.integral_num;
            }
        }
    };
    OrderPage.prototype.outout = function () {
        this.pordacknum--;
        if (this.pordacknum < 1) {
            return (this.pordacknum = 1);
        }
        if (this.linshinum > this.leastpay * this.pordacknum ||
            this.linshinum > this.integral_num) {
            if (this.integral_num > this.leastpay * this.pordacknum) {
                this.linshinum = this.leastpay;
            }
            else {
                this.linshinum = this.integral_num;
            }
        }
    };
    OrderPage.prototype.addappOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parmas, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parmas = {
                            order_number: this.pordacknum,
                            order_sum: this.maxprice * this.pordacknum,
                            order_code: "",
                            integral_num: this.linshinum,
                            receiver_id: this.cityid,
                            cash_sum: this.maxprice - this.rmb * this.linshinum / this.integral_proportion,
                            order_status: 0,
                            petcard_id: JSON.parse(localStorage.getItem("petdata")).id,
                            dept_id: this.navParams.get("pordack").dept_id,
                            petdtailorder: [
                                {
                                    //订单商品详情
                                    product_id: this.navParams.get("pordack").product_id,
                                    product_num: this.pordacknum,
                                    integral_num: this.linshinum,
                                    rule: this.integral_proportion,
                                    cash_price: this.maxprice * this.pordacknum - this.rmb * this.linshinum / this.integral_proportion,
                                    unit_price: this.maxprice,
                                }
                            ]
                        };
                        return [4 /*yield*/, this.http.addappOrder({ jsonPramter: JSON.stringify(parmas) })];
                    case 1:
                        res = _a.sent();
                        this.http.http.showToast(res.message);
                        if (res.info == "ok") {
                            this.openPayActionSheet(res.object);
                        }
                        console.log(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderPage.prototype.lingshiup = function () {
        this.linshinum++;
        if (this.linshinum > this.leastpay * this.pordacknum ||
            this.linshinum > this.integral_num) {
            if (this.integral_num > this.leastpay * this.pordacknum) {
                this.linshinum = this.leastpay;
            }
            else {
                this.linshinum = this.integral_num;
            }
        }
    };
    OrderPage.prototype.lingshiout = function () {
        this.linshinum--;
        if (this.linshinum < 1) {
            return (this.linshinum = 1);
        }
    };
    OrderPage.prototype.lingshig = function () {
        if (this.linshinum > this.integral_num) {
            this.linshinum = this.integral_num;
        }
        if (this.linshinum < 1) {
            this.linshinum = 1;
        }
        if (this.linshinum > this.leastpay * this.pordacknum ||
            this.linshinum > this.integral_num) {
            if (this.integral_num > this.leastpay * this.pordacknum) {
                this.linshinum = this.leastpay;
            }
            else {
                this.linshinum = this.integral_num;
            }
        }
    };
    OrderPage.prototype.pushipam = function () {
        this.navCtrl.push("IpamPage");
    };
    /**
     * 查询单个宠卡
     */
    OrderPage.prototype.querypetcard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parmas, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parmas = {
                            petcardid: JSON.parse(localStorage.getItem("petdata")).id
                        };
                        return [4 /*yield*/, this.http.querypetcard(parmas)];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        this.integral_num = res.object.integral_num;
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderPage.prototype.address = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parmas, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parmas = {
                            mytoken: localStorage.getItem("mytoken")
                        };
                        return [4 /*yield*/, this.http.address(parmas)];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        this.ipamord.myname = res.arrayList[0].receiver_name;
                        this.ipamord.ipone = res.arrayList[0].phone_number,
                            this.ipamord.order =
                                res.arrayList[0].province +
                                    " " +
                                    res.arrayList[0].city +
                                    " " +
                                    res.arrayList[0].county +
                                    " " +
                                    res.arrayList[0].detaile_address;
                        this.cityid = res.arrayList[0].id;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 立即付款
     */
    OrderPage.prototype.clickEventHandler = function () {
        this.addappOrder();
    };
    OrderPage.prototype.weiXinPay = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(data.order_id);
                        return [4 /*yield*/, this.http.weixinor({ orderid: data.order_id })];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    OrderPage.prototype.nums = function () {
        console.log(this.pordacknum);
        this.pordacknum < 1 ? (this.pordacknum = 1) : "";
    };
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-order",template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\order\order.html"*/`<!--\n  Generated template for the OrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>订单详情</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="titaa" (click)=\'pushipam()\' *ngIf="show">\n        <div class="ble">\n            <div>\n                <img src="assets/imgs/images/gprs.png" alt="" class="userimg">\n            </div>\n            <div class="ble2">\n                <div class="name">\n                    <p>选择收货地址</p>\n                </div>\n                <div>\n                    <img src="assets/imgs/images/right.png" alt="">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="titaa" (click)=\'pushipam()\' *ngIf="!show">\n        <div class="ble">\n            <div>\n                <img src="assets/imgs/images/xdgps.png" alt="" class="userimg" style="width:3rem">\n            </div>\n            <div class="ble2">\n                <div class="name">\n                    <p><span>收货人:{{ipamord.myname}}</span><span style="float: right;">{{ipamord.ipone}}</span></p>\n                    <p><span>{{ipamord.order}}</span></p>\n                </div>\n                <div>\n                    <img src="assets/imgs/images/right.png" alt="" style="width:1.5rem">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="titaa" *ngIf="type==1">\n        <div class="ble">\n            <div>\n                <img src="assets/imgs/images/gprs.png" alt="" class="userimg">\n            </div>\n            <div class="ble2">\n                <div class="name">\n                    <p>店铺名称</p>\n                </div>\n                <div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="titaa">\n        <div class="ble" style="height: 10rem;">\n            <div class="shopingimg">\n                <img src="{{imgUrl}}{{imgpath}}" alt="">\n            </div>\n            <div class="ble2">\n                <div class="title">\n                    <p>{{title}}</p>\n                    <p class="pardack" *ngIf="type==1">商品明细</p>\n                    <p class="pardack" *ngIf="type==2">库存:{{product_guige}} 件</p>\n                    <p class="total"><span class="maxprice">￥{{maxprice | number:\'1.2-2\'}}</span><span class="pordacknum"><button (click)="outout()">—</button><input type="number" min="0" (change)="nums()"  [(ngModel)]="pordacknum">\n                    <button (click)="upup()" >+</button></span></p>\n                </div>\n                <div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <p class="distribution" *ngIf="type==2"><span>零食：({{integral_num}}Kg)</span><span>每件可用{{leastpay}}Kg零食</span></p>\n    <p class="distribution" *ngIf="type==2"><span>可用抵：({{rmb*linshinum | number:\'1.2-2\'}}元)</span><span>使用<span class="pordacknum"><button (click)="lingshiout()">—</button><input type="number" min="0" (change)="lingshig()"  [(ngModel)]="linshinum">\n        <button (click)="lingshiup()" >+</button></span>Kg零食</span>\n    </p>\n    <p class="distribution" *ngIf="type==1"><span>配送方式：</span><span>快递 免邮</span></p>\n    <div class="tarea" *ngIf="type==1">\n        <p>买家留言：</p>\n        <textarea style="resize: none;width: 100%;height: 10rem;padding: 0.5rem;border: 1px solid #999;border-radius: 5px" placeholder="选填 填写内容和卖家协商"></textarea>\n    </div>\n\n    <div style="height: 7rem;"></div>\n\n    <div class="shoppingcall">\n        <div>\n\n            合计金额：<span class="maxprice">￥{{maxprice*pordacknum-rmb*linshinum/integral_proportion | number:\'1.2-2\'}}</span>\n\n        </div>\n        <div>\n            <button class="shop" (click)="clickEventHandler()">立即购买</button>\n        </div>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\order\order.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__app_shared_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ActionSheetController"]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_service_user_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.gotopage = false;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad RegisterPage");
    };
    RegisterPage.prototype.register = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var myreg, message, message, data, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(username.value, password.value);
                        myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
                        if (!myreg.test(username.value)) {
                            message = "请输入正确手机号";
                            this.showToast(message);
                            return [2 /*return*/, false];
                        }
                        if (password.value.length < 6) {
                            message = "密码长度要大于6位";
                            this.showToast(message);
                            return [2 /*return*/, false];
                        }
                        data = {
                            client_username: username.value,
                            client_password: password.value
                        };
                        return [4 /*yield*/, this.http.registerclient(data)];
                    case 1:
                        res = _a.sent();
                        console.log(res.info);
                        if (res.info == "ok") {
                            this.gotopage = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.gologin = function () {
        this.navCtrl.push("LoginPage");
    };
    RegisterPage.prototype.goenter = function () {
        this.navCtrl.push("EnterPage");
    };
    RegisterPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: "middle"
        });
        toast.present(toast);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-register",template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\register\register.html"*/`<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>注册</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="input">\n        <i class="iconfont icon-user"></i>\n        <input type="number" placeholder="请输入您的手机账号" #username>\n    </div>\n\n    <div class="input">\n        <i class="iconfont icon-anquanrenzheng"></i>\n        <input type="number" placeholder="请输入验证码">\n        <button class="btnSend">发送</button>\n    </div>\n\n    <div class="input ">\n        <i class="iconfont icon-3701mima"></i>\n        <input type="password" placeholder="请输入密码" #password>\n    </div>\n\n\n    <div class="input borderNone">\n        <div class="radio">\n            <div class="checked"></div>\n        </div>\n        <p>我已同意用户协议</p>\n    </div>\n\n    <button class="btn" (click)="register(username,password)">注册</button>\n    <div class="model" *ngIf="gotopage">\n        <div class="box">\n            <span class="success">注册成功</span>\n            <span class="signInShop">申请成为商家更多惊喜等着你</span>\n            <div class="select">\n                <span (click)="gologin()">立刻登录</span>\n                <span (click)="goenter()">立刻申请</span>\n            </div>\n        </div>\n    </div>\n\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_0__app_shared_service_user_service__["a" /* UserService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_service_user_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//import { NewlayPage } from './../newlay/newlay';



/**
 * Generated class for the PetAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PetAdminPage = (function () {
    function PetAdminPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.callname = [];
        this.data = {
            pageNum: 1,
            rowsPrePage: 10,
            mytoken: ""
        };
    }
    PetAdminPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad PetAdminPage');
        this.querypetcardlist();
    };
    PetAdminPage.prototype.gotongcheng = function () {
        this.navCtrl.push('TongchenglistPage');
    };
    PetAdminPage.prototype.querypetcardlist = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.querypetcardlist(this.data)];
                    case 1:
                        res = _a.sent();
                        console.log(res.arrayList.length);
                        if (res.arrayList.length == 0) {
                            console.log(res.arrayList.length);
                        }
                        else {
                            this.callname = res.arrayList;
                            console.log(this.callname);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PetAdminPage.prototype.rempet = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            var parmas, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.callname[i].id);
                        parmas = {
                            petcardid: this.callname[i].id
                        };
                        return [4 /*yield*/, this.http.deletePetcard(parmas)];
                    case 1:
                        res = _a.sent();
                        if (res.errorcode == '200')
                            this.http.presentToast(res.message);
                        this.callname.splice(i, 1);
                        console.log(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    PetAdminPage.prototype.newlay = function () {
        this.navCtrl.push("NewlayPage");
    };
    PetAdminPage.prototype.savepet = function (i) {
        this.navCtrl.push("NewlayPage", {
            data: this.callname[i]
        });
    };
    PetAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pet-admin',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\pet-admin\pet-admin.html"*/`<!--\n  Generated template for the PetAdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>宠物管理 <button (click)="gotongcheng()" style="float:right;background: none;color: #fff;font-size: 1.5rem;font-weight: 900;margin-top: 6px;margin-right: 1.5rem;">同城</button></ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="content">\n    <div class="petBox" (click)="newlay()">\n        <div class="pet">\n            <img src="assets/imgs/images/pet.png" alt="">\n        </div>\n\n        <span class="add">添加一宠猫卡</span>\n    </div>\n\n    <div class="petBox top" *ngFor="let item of callname,let i=index">\n        <div class="petCrad">\n            <span class="msg" style="margin-left:1rem">{{item.pet_name}}</span>\n\n            <div class="msg1" style="margin-left:1rem;margin-top:1rem">\n                <div>\n                    <i *ngIf="item.is_sterilisation==\'1\'" class="iconfont icon-sexm"></i>\n                    <i *ngIf="item.is_sterilisation==\'2\'" class="iconfont icon-sexw"></i>\n                </div>\n\n                <span style="margin-left:1rem">{{item.petAge}}</span>\n                <span style="margin-left:1rem">天秤座</span>\n            </div>\n\n\n            <div class="msg2" style="margin-left:1rem;margin-top:1rem">\n                <div>\n                    <img src="assets/imgs/images/maozhua.png" alt="">\n                    <span>体重{{item.pet_wheight}}kg</span>\n                </div>\n\n                <div>\n                    <img src="assets/imgs/images/xiangjiao.png" alt="">\n                    <span>{{item.comment}}</span>\n                </div>\n\n                <div>\n                    <img src="assets/imgs/images/jiantou.png" alt="">\n                    <span>总能量值 10.23kg</span>\n                </div>\n\n                <div>\n                    <img src="assets/imgs/images/aixin.png" alt="">\n                    <span>粉丝数：0</span>\n                </div>\n\n            </div>\n        </div>\n        <div class="imgCrad">\n            <div class="petImg">\n                <img src="{{item.headimgpath}}" alt="">\n                <span>宠卡号 : {{item.pet_num}}</span>\n            </div>\n            <div class="btn">\n                <button class="btn1" (click)="savepet(i)">修改</button>\n                <button class="btn2" (click)="rempet(i)">删除</button>\n            </div>\n\n        </div>\n\n\n\n\n    </div>\n\n\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\pet-admin\pet-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__app_shared_service_user_service__["a" /* UserService */]])
    ], PetAdminPage);
    return PetAdminPage;
}());

//# sourceMappingURL=pet-admin.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushdiaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_service_user_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_img_service_img_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the PushdiaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PushdiaryPage = (function () {
    function PushdiaryPage(navCtrl, navParams, http, upimgserve) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.upimgserve = upimgserve;
        this.avatar = ["assets/imgs/images/shangchuan@2x.png", "http://116.62.219.45/imgs/7ad3044c6a38b809d1bd3f802d5d5ffa.jpg "];
        // datas={
        // }
        this.posthttp = true;
        this.remark = "";
        this.title = "";
        this.arr = ["添加写真", "添加传记", "添加健康", "添加活动"];
        this.show = false;
        this.zhuanjilist = [];
    }
    PushdiaryPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad PushdiaryPage");
        console.log(this.navParams);
        this.type = this.navParams.get("type");
        this.petimg = this.navParams.get("datas").headimgpath;
        console.log(this.navParams.get("cityid"));
        this.PageTitle = this.arr[this.type - 1];
    };
    PushdiaryPage.prototype.pushtext = function () {
        console.log(this.remark);
        if (this.remark != "") {
            this.zhuanjilist.push({
                type: 2,
                text: this.remark,
                path: ""
            });
            this.remark = "";
        }
        console.log(this.zhuanjilist);
    };
    PushdiaryPage.prototype.shows = function () {
        this.show = !this.show;
    };
    PushdiaryPage.prototype.upindex = function (i) {
        if (i != 0) {
            console.log(this.zhuanjilist[i]);
            var cont = this.zhuanjilist[i - 1];
            this.zhuanjilist[i - 1] = this.zhuanjilist[i];
            this.zhuanjilist[i] = cont;
        }
    };
    PushdiaryPage.prototype.rmindex = function (i) {
        this.zhuanjilist.splice(i, 1);
        for (var index = 0; index < this.avatar.length; index++) {
            if (this.zhuanjilist[i].path) {
                if (this.zhuanjilist[i].path == this.avatar[index]) {
                    this.avatar.splice(index, 1);
                }
            }
        }
    };
    PushdiaryPage.prototype.userimg = function (i) {
        this.initImgSer(i);
        this.upimgserve.showPicActionSheet();
    };
    PushdiaryPage.prototype.pushimg = function () {
        this.initimg();
        this.upimgserve.showPicActionSheet();
    };
    PushdiaryPage.prototype.initimg = function () {
        var _this = this;
        this.upimgserve.upload.success = function (data) {
            console.log(data);
            if (data.info == "ok") {
                _this.zhuanjilist.push({
                    type: 2,
                    path: "http://116.62.219.45/imgs/" + data.object.map.filename,
                    text: ""
                });
            }
        };
    };
    PushdiaryPage.prototype.initImgSer = function (i) {
        var _this = this;
        console.log(i);
        this.upimgserve.upload.success = function (data) {
            console.log(data);
            if (data.info == "ok") {
                _this.avatar[i] = "http://116.62.219.45/imgs/" + data.object.map.filename;
                if (_this.avatar.length < 5 &&
                    _this.avatar.indexOf("assets/imgs/images/shangchuan@2x.png") == -1) {
                    _this.avatar.push("assets/imgs/images/shangchuan@2x.png");
                }
            }
        };
    };
    PushdiaryPage.prototype.remimages = function (i) {
        if (this.type == 2) {
            for (var _i = 0, _a = this.zhuanjilist; _i < _a.length; _i++) {
                var item = _a[_i];
                if (this.zhuanjilist[item].path == this.avatar[i]) {
                    this.zhuanjilist.splice(item, 1);
                }
            }
        }
        this.avatar[i] = "assets/imgs/images/shangchuan@2x.png";
        this.avatar.splice(i, 1);
        console.log(this.avatar.indexOf("assets/imgs/images/shangchuan@2x.png"));
        // this.avatar.slice(i,1)
        if (this.avatar.indexOf("assets/imgs/images/shangchuan@2x.png") == -1) {
            this.avatar.push("assets/imgs/images/shangchuan@2x.png");
        }
        console.log(i);
        console.log(this.avatar);
    };
    PushdiaryPage.prototype.addserve = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var parmas, lent, index, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parmas = {
                            title: this.title,
                            type: this.type,
                            // chose_time: new Date().getTime(),
                            remark: this.remark,
                            pet_id: this.navParams.get("datas").id,
                            activityid: "",
                            cover: "",
                            historycontentlist: []
                        };
                        if (this.type == 1) {
                            if (this.navParams.get("cityid")) {
                                parmas.type = 4;
                            }
                            if (this.avatar.length > 1) {
                                lent = void 0;
                                if (this.avatar.indexOf("assets/imgs/images/shangchuan@2x.png") == -1) {
                                    lent = this.avatar.length;
                                }
                                else {
                                    lent = this.avatar.length - 1;
                                }
                                for (index = 0; index < lent; index++) {
                                    parmas.historycontentlist.push({
                                        type: 2,
                                        path: this.avatar[index],
                                        text: ""
                                    });
                                }
                            }
                        }
                        if (this.type == 2) {
                            parmas.historycontentlist = this.zhuanjilist;
                        }
                        if (this.navParams.get("cituid")) {
                            parmas.activityid = this.navParams.get("cituid");
                        }
                        if (this.title == "") {
                            this.http.http.showToast("您是不是忘了写标题");
                            return [2 /*return*/, false];
                        }
                        console.log(parmas);
                        if (!this.posthttp) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.http.addhistoryType({
                                jsonPramter: JSON.stringify(parmas)
                            })];
                    case 1:
                        res = _a.sent();
                        this.http.http.showToast(res.message);
                        if (res.info == "ok") {
                            setTimeout(function () {
                                _this.posthttp = true;
                                _this.navCtrl.pop();
                            }, 2000);
                        }
                        console.log(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    PushdiaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-pushdiary",template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\pushdiary\pushdiary.html"*/`<!--\n  Generated template for the PushdiaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>{{PageTitle}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="put_box">\n\n        <input type="text" [(ngModel)]="title" name="" placeholder="点击输入标题" id="" class="">\n        <img src="{{petimg}}" alt="">\n    </div>\n    <div style="width: 90vw; margin-left: 5vw;background: #fff; margin-top: 1rem;" *ngIf="type==2&&!show">\n        <div *ngFor=" let item of zhuanjilist;let i=index" style="display: flex;flex-direction: column;justify-content: space-between;width: 100%;">\n            <textarea *ngIf="item.text!=\'\'" [(ngModel)]="item.text"></textarea>\n            <img src="{{item.path}} " *ngIf="item.path!=\'\' " alt=" " srcset=" ">\n            <span class="serve "> <button (click)="upindex(i) ">向上</button>  <button (click)="rmindex(i)">删除</button></span>\n        </div>\n    </div>\n    <div style="width: 90vw; margin-left: 5vw;background: #fff; margin-top: 1rem;" *ngIf="type==2&&show">\n        <div *ngFor=" let item of zhuanjilist;let i=index" style="display: flex;flex-direction: column;justify-content: space-between;width: 100%;">\n            <p *ngIf="item.text!=\'\'">{{item.text}}</p>\n            <img src="{{item.path}} " *ngIf="item.path!=\'\' " alt=" " srcset=" ">\n        </div>\n    </div>\n    <div class="xiezhen " *ngIf="type==1 ">\n        <div class="area ">\n            <textarea placeholder="记录今天成长的趣事 " [(ngModel)]="remark "></textarea>\n        </div>\n        <div class="area ">\n            <div class="Fileimg ">\n                <div class="itembox " *ngFor="let item of avatar let i=index ">\n                    <span class="remimg " *ngIf="item!==\'assets/imgs/images/shangchuan@2x.png\' " (click)=\'remimages(i)\'>X</span>\n                    <img src="{{item}} " alt=" " (click)="userimg(i) ">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="zhuanji " *ngIf="type==2 ">\n        <div class="area ">\n            <textarea placeholder="记录今天成长的趣事 " [(ngModel)]="remark "></textarea>\n        </div>\n        <div class="btnbox">\n            <button (click)="pushtext() ">新建段落</button>\n            <button (click)="pushimg() ">添加图片</button>\n            <button *ngIf="!show" (click)="shows()">预览</button>\n            <button *ngIf="show" (click)="shows()">取消预览</button>\n        </div>\n        <div class="area" *ngIf="type==1">\n            <p style="background: #fff ">最多添加6张图片</p>\n            <div class="Fileimg " *ngIf="type==1">\n                <div class="itembox " *ngFor="let item of avatar let i=index ">\n                    <span class="remimg " *ngIf="item!==\'assets/imgs/images/shangchuan@2x.png\' " (click)=\'remimages(i)\'>X</span>\n                    <img src="{{item}} " alt=" " (click)="userimg(i) ">\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- <div class="header-image " tappable [ngStyle]="{ \'background-image\': \'url(\'+avatar+ \')\'} " (click)="presentActionSheet() "></div> -->\n\n    <button class="pushimg " (click)="addserve() ">确认</button>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\pushdiary\pushdiary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__app_shared_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_img_service_img_service__["a" /* ImgServiceProvider */]])
    ], PushdiaryPage);
    return PushdiaryPage;
}());

//# sourceMappingURL=pushdiary.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NewswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewswordPage = (function () {
    function NewswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewswordPage');
    };
    NewswordPage.prototype.gochat = function () {
        this.navCtrl.push("ChatroomPage");
    };
    NewswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-newsword',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\newsword\newsword.html"*/`<!--\n  Generated template for the NewswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>newsword</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="listbox">\n        <ul>\n            <li (click)="gochat()">\n                <div class="ttt">\n                    <span style="width: 12rem;position: relative;overflow:inherit;">\n                <img src="assets/imgs/images/home1_15.png" alt="">\n                <span class="news">1</span>\n                    </span>\n                    <span class="ddd">\n                <span class="hh"><span>张三</span><span>2分钟前</span></span>\n                    <span>\n                    啊啊啊阿三大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊阿三大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊阿三大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊\n                </span>\n                    </span>\n                </div>\n            </li>\n\n        </ul>\n    </div>\n    <div class="listbox top">\n        <h5><img src="assets/imgs/images/date.png" alt="">一周前的消息</h5>\n        <ul>\n            <li>\n                <div class="ttt">\n                    <span style="width: 12rem;position: relative;overflow:inherit;">\n                  <img src="assets/imgs/images/home1_15.png" alt="">\n                  <span class="news">1</span>\n                    </span>\n                    <span class="ddd">\n                  <span class="hh"><span>张三</span><span>2分钟前</span></span>\n                    <span>\n                      啊啊啊阿三大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊阿三大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊阿三大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊\n                  </span>\n                    </span>\n                </div>\n            </li>\n        </ul>\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\newsword\newsword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], NewswordPage);
    return NewswordPage;
}());

//# sourceMappingURL=newsword.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShoppingPage = (function () {
    function ShoppingPage(toastCtrl, navCtrl, navParams) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imgpath = [];
        this.imgUrl = "";
        this.tabs = 0;
    }
    ShoppingPage.prototype.pushcall = function () {
        var toast = this.toastCtrl.create({
            message: "成功加入购物车",
            duration: 1000,
            position: "middle",
            cssClass: "borbox"
        });
        toast.present();
    };
    ShoppingPage.prototype.goshop = function () {
        this.navCtrl.push("OrderPage", {
            type: this.navParams.get("type"),
            pordack: this.navParams.get("pordack"),
            imgUrl: this.imgUrl
        });
    };
    ShoppingPage.prototype.ionViewWillEnter = function () {
        this.swipers();
        console.log(this.navParams.get("type"));
        console.log(this.navParams.get("pordack"));
        this.shopinit();
    };
    ShoppingPage.prototype.ionViewDidLoad = function () { };
    ShoppingPage.prototype.shopinit = function () {
        this.type = this.navParams.get("type");
        this.imgpath.push(this.navParams.get("pordack").product_img1[0]);
        this.pordackpage = this.navParams.get("pordack").product_img1[1];
        console.log(this.imgpath);
        this.imgUrl = this.navParams.get("imgUrl");
        this.maxprice = this.navParams.get("pordack").product_price;
        this.title = this.navParams.get("pordack").product_name;
        this.cmment = this.navParams.get("pordack").product_introduce;
    };
    ShoppingPage.prototype.swipers = function () {
        var mySwiper = new Swiper(".swiper-container", {
            direction: "horizontal",
            loop: true,
            autoplay: true,
            pagination: {
                el: ".swiper-pagination"
            }
        });
    };
    ShoppingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-shopping",template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\shopping\shopping.html"*/`<!--\n  Generated template for the ShoppingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>商品详情</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="imgpage">\n        <div class="swiper-container">\n            <div class="swiper-wrapper">\n                <div class="swiper-slide" *ngFor="let item of imgpath"><img src="{{imgUrl}}{{item}}" alt="" srcset="" *ngIf="item!==\'\'"></div>\n\n            </div>\n            <!-- 如果需要分页器 -->\n            <div class="swiper-pagination"></div>\n\n            <!-- 如果需要导航按钮 -->\n\n        </div>\n    </div>\n    <div class="msg">\n        <p class="title">{{title}}</p>\n        <p class="price">\n            <span>售价:\n        <span class="maxprice">￥{{maxprice}}</span>\n            </span>\n            <span *ngIf="type==1">定金:\n        <span class="minprice">￥18</span>\n            </span>\n            <span *ngIf="type==2">积分:\n                <span class="minprice">88</span>\n            </span>\n        </p>\n    </div>\n\n    <div class="titaa" *ngIf="type==1">\n        <div class="ble">\n            <div>\n                <img src="assets/imgs/images/petImg.png" alt="" class="userimg">\n            </div>\n            <div class="ble2">\n                <div class="name">\n                    <p>店铺名称</p>\n                    <span class="eee">已成功交易 0 单</span>\n                </div>\n                <div>\n                    <span>\n            <img src="assets/imgs/images/right.png" alt="">\n          </span>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="tabs">\n        <ul>\n            <li [ngClass]="{\'eft\': tabs==0}" (click)="tabs=0">详细介绍</li>\n            <li [ngClass]="{\'eft\': tabs==1}" (click)="tabs=1">评价详情</li>\n            <li [ngClass]="{\'eft\': tabs==2}" (click)="tabs=2">品类介绍</li>\n            <li [ngClass]="{\'eft\': tabs==3}" (click)="tabs=3">售后保障</li>\n        </ul>\n        <div class="tabspage" *ngIf="tabs==0">\n            <img src="{{imgUrl}}{{pordackpage}}">\n        </div>\n        <div class="tabspage" *ngIf="tabs==1">\n\n\n\n\n            <!-- <p>产品介绍：阿是大师大师的</p> -->\n        </div>\n        <div class="tabspage" *ngIf="tabs==2">\n            2\n        </div>\n        <div class="tabspage" *ngIf="tabs==3">\n            3\n        </div>\n    </div>\n    <div style="height: 7rem;"></div>\n    <div class="shoppingcall" *ngIf="type==1">\n        <div>\n            <p>\n                <span>\n          <img src="assets/imgs/images/dp.png" alt="">\n        </span>\n                <span>店铺</span>\n            </p>\n            <p>\n                <span>\n          <img src="assets/imgs/images/aixin.png" alt="">\n        </span>\n                <span>收藏</span>\n            </p>\n        </div>\n        <div>\n            <button class="join" (click)=\'pushcall()\'>加入购物车</button><button class="shop" (click)="goshop()">立即购买</button>\n        </div>\n    </div>\n    <div class="shoppingcall" *ngIf="type==2">\n\n        <button style="width: 100%;\n        height: 4rem;\n        color: #fff;\n        background: #fcc93c;" (click)="goshop()">立即购买</button>\n\n    </div>\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\shopping\shopping.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ShoppingPage);
    return ShoppingPage;
}());

//# sourceMappingURL=shopping.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecordPage = (function () {
    function RecordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RecordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecordPage');
    };
    RecordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-record',template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\record\record.html"*/`<!--\n  Generated template for the RecordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>record</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="userdata">\n        <div><img src="assets/imgs/images/tixian.png" alt="" srcset=""></div>\n        <div>\n            <h3>提现</h3>\n            <p>[其他]</p>\n        </div>\n        <div>\n            <h3>-640.00</h3>\n            <p>2018.01.01</p>\n        </div>\n    </div>\n    <div class="userdata">\n        <div><img src="assets/imgs/images/tixian.png" alt="" srcset=""></div>\n        <div>\n            <h3>提现</h3>\n            <p>[其他]</p>\n        </div>\n        <div>\n            <h3>-640.00</h3>\n            <p>2018.01.01</p>\n        </div>\n    </div>\n    <div class="userdata">\n        <div><img src="assets/imgs/images/tixian.png" alt="" srcset=""></div>\n        <div>\n            <h3>提现提现提现提现提现提现提现提现提现提现</h3>\n            <p>[商城购物]</p>\n        </div>\n        <div>\n            <h3>-640.00</h3>\n            <p>2018.01.01</p>\n        </div>\n    </div>\n\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\record\record.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], RecordPage);
    return RecordPage;
}());

//# sourceMappingURL=record.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SciencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_shared_service_my_http_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_service_user_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the SciencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SciencePage = (function () {
    function SciencePage(navCtrl, navParams, http, loadingCtrl, lodingserver) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.lodingserver = lodingserver;
        this.lib = 0;
        this.imgUrl = ["/assets/imgs/images/callbg.png", "/assets/imgs/images/callbg.png"];
        this.finddata = [];
        this.cookiedata = [];
        this.ctn = 1;
        this.number = 0;
        this.loding = false;
        this.lulartype = 1;
    }
    SciencePage.prototype.ionViewDidLoad = function () {
        console.log("第一次进入");
        this.myswipers();
        this.querypetpolularlist();
    };
    SciencePage.prototype.ionViewWillEnter = function () { };
    SciencePage.prototype.goknowledg = function (i) {
        console.log(i);
        console.log(this.finddata);
        this.navCtrl.push("KnowledgPage", this.finddata[i]);
    };
    SciencePage.prototype.ionViewWillUnload = function () {
        console.log(123);
    };
    SciencePage.prototype.doRefresh = function (refresher) {
        this.ctn = 1;
        this.finddata = [];
        this.loding = false;
        this.querypetpolularlist();
        setTimeout(function () {
            refresher.complete(); //停止下拉刷新
        }, 2000);
    };
    SciencePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.ctn++;
        this.querypetpolularlist();
        setTimeout(function () {
            console.log("加载完成后，关闭刷新");
            infiniteScroll.complete();
            //toast提示
            if (_this.ctn >= _this.totle.maxPage) {
                //如果都加载完成的情况，就直接 disable ，移除下拉加载
                _this.loding = true;
                infiniteScroll.enable(false);
            }
        }, 2000);
    };
    SciencePage.prototype.querypetpolularlist = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parmas, res, i, mgs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parmas = { pageNum: this.ctn, rowsPrePage: 10, type: this.lulartype };
                        return [4 /*yield*/, this.http.querypetpolularlist(parmas)];
                    case 1:
                        res = _a.sent();
                        this.totle = res.page;
                        console.log(res);
                        for (i = 0; i < res.arrayList.length; i++) {
                            res.arrayList[i].previewimg = res.arrayList[i].previewimg.replace(/,/g, "");
                            if (res.arrayList[i].science_title.indexOf("@@") != -1) {
                                mgs = res.arrayList[i].science_title.split("@@");
                                res.arrayList[i].science_title = mgs[0];
                                res.arrayList[i]["textmgs"] = mgs[1];
                                console.log(res.arrayList[i]["textmgs"][1]);
                            }
                            this.finddata.push(res.arrayList[i]);
                        }
                        console.log(this.finddata);
                        this.imgpaths = res.imageUrl;
                        return [2 /*return*/];
                }
            });
        });
    };
    SciencePage.prototype.expression = function () {
        this.ctn = 1;
        this.finddata = [];
        this.querypetpolularlist();
    };
    SciencePage.prototype.myswipers = function () {
        var mySwiper = new Swiper(".swiper-container", {
            direction: "horizontal",
            loop: true,
            autoplay: true,
            pagination: {
                el: ".swiper-pagination"
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Slides"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Slides"])
    ], SciencePage.prototype, "slides", void 0);
    SciencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-science",template:/*ion-inline-start:"G:\ionic3demos\petApp\src\pages\science\science.html"*/`<!--\n  Generated template for the SciencePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>科普</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-refresher (ionRefresh)=\'doRefresh($event)\'>\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新"  refreshingSpinner="circles" refreshingText="正在拼命加载">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div class="box">\n        <div class="imgbox">\n\n            <div class="swiper-container">\n                <div class="swiper-wrapper">\n                    <div class="swiper-slide" *ngFor="let item of imgUrl"><img src="{{item}}" alt="" srcset=""></div>\n\n                </div>\n                <!-- 如果需要分页器 -->\n                <div class="swiper-pagination"></div>\n\n                <!-- 如果需要导航按钮 -->\n\n            </div>\n        </div>\n        <p>\n            <button>\n        <img src="assets/imgs/images/kepu1.png" alt="" srcset="">宠圈</button>\n            <button>\n        <img src="assets/imgs/images/kepu2.png" alt="" srcset="">知识</button>\n        </p>\n    </div>\n\n    <p class="tabs">\n        <button [ngClass]="{\'cd\': lulartype==1}" (click)="expression(lulartype=1)">视频</button>\n        <button [ngClass]="{\'cd\': lulartype==2}" (click)="expression(lulartype=2)">图文</button>\n    </p>\n    <div class="list">\n\n        <ul>\n            <li *ngFor="let item of finddata,let i=index" (click)="goknowledg(i)">\n                <div>\n                    <img src="{{imgpaths}}{{item.previewimg}}" alt="" srcset="">\n                </div>\n                <div>\n                    <p *ngIf="item.science_title!==undefined">{{item.science_title}}</p>\n                    <p class="pagetext" *ngIf="item.textmgs!==undefined">{{item.textmgs}}</p>\n                    <p class="tags" *ngIf="lulartype==1">\n                        <img src="assets/imgs/images/home_13.png" alt="" srcset="">宠物培养</p>\n                    <p class="tags" *ngIf="lulartype==2">\n                        <img src="assets/imgs/images/home_13.png" alt="" srcset="">宠物护理</p>\n                </div>\n            </li>\n\n        </ul>\n        <p style="text-align: center;margin-bottom: 2rem;color: #ffc43596;" *ngIf="loding">已经没有更多数据咯</p>\n    </div>\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>`/*ion-inline-end:"G:\ionic3demos\petApp\src\pages\science\science.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__app_shared_service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_0__app_shared_service_my_http_service__["a" /* MyHttpService */]])
    ], SciencePage);
    return SciencePage;
}());

//# sourceMappingURL=science.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackButtonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackButtonService = (function () {
    //构造函数 依赖注入
    function BackButtonService(platform, appCtrl, toastCtrl) {
        this.platform = platform;
        this.appCtrl = appCtrl;
        this.toastCtrl = toastCtrl;
        //控制硬件返回按钮是否触发，默认false
        this.backButtonPressed = false;
    }
    //注册方法
    BackButtonService.prototype.registerBackButtonAction = function (tabRef) {
        var _this = this;
        //registerBackButtonAction是系统自带的方法
        this.platform.registerBackButtonAction(function () {
            //获取NavController
            var activeNav = _this.appCtrl.getActiveNavs()[0];
            //如果可以返回上一页，则执行pop
            if (activeNav.canGoBack()) {
                activeNav.pop();
            }
            else {
                if (tabRef == null || tabRef._selectHistory[tabRef._selectHistory.length - 1] === tabRef.getByIndex(0).id) {
                    //执行退出
                    _this.showExit();
                }
                else {
                    //选择首页第一个的标签
                    tabRef.select(0);
                }
            }
        });
    };
    //退出应用方法
    BackButtonService.prototype.showExit = function () {
        var _this = this;
        //如果为true，退出
        if (this.backButtonPressed) {
            this.platform.exitApp();
        }
        else {
            //第一次按，弹出Toast
            this.toastCtrl.create({
                message: '再按一次退出应用',
                duration: 2000,
                position: 'top'
            }).present();
            //标记为true
            this.backButtonPressed = true;
            //两秒后标记为false，如果退出的话，就不会执行了
            setTimeout(function () { return _this.backButtonPressed = false; }, 2000);
        }
    };
    BackButtonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], BackButtonService);
    return BackButtonService;
}());

//# sourceMappingURL=backButton.service.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(436);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toast_toast__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_video_editor__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_media_capture__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









/*
  Generated class for the ImgServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ImgServiceProvider = (function () {
    function ImgServiceProvider(actionSheetCtrl, noticeSer, camera, imagePicker, transfer, file, fileTransfer, mediaCapture, videoEditor) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.noticeSer = noticeSer;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.file = file;
        this.fileTransfer = fileTransfer;
        this.mediaCapture = mediaCapture;
        this.videoEditor = videoEditor;
        this.cameraOpt = {
            quality: 50,
            destinationType: 1,
            sourceType: 1,
            encodingType: 0,
            mediaType: 0,
            allowEdit: true,
            correctOrientation: true
        };
        // 调用相册时传入的参数
        this.imagePickerOpt = {
            maximumImagesCount: 1,
            width: 800,
            height: 800,
            quality: 80
        };
        // 图片上传的的api
        this.uploadApi = "http://116.62.219.45/chongwu/chongwu/uploadFile";
        this.upload = {
            fileKey: "file",
            fileName: "imageName.jpg",
            headers: {
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8" //不加入 发生错误！！
            },
            params: {},
            success: function (data) { },
            error: function (err) { },
            listen: function () { } //监听上传过程
        };
        this.fileTransfer = this.transfer.create();
    }
    /**
     * 图片菜单
     */
    ImgServiceProvider.prototype.showPicActionSheet = function () {
        this.useASComponent();
    };
    /**
     * 菜单组件
     */
    ImgServiceProvider.prototype.useASComponent = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: "请选择",
            buttons: [
                {
                    text: "拍照",
                    handler: function () {
                        _this.startCamera();
                    }
                },
                {
                    text: "从手机相册选择",
                    handler: function () {
                        _this.openImgPicker();
                    }
                },
                {
                    text: "取消",
                    role: "cancel",
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    /**
     * 启动拍照功能
     */
    ImgServiceProvider.prototype.startCamera = function () {
        var _this = this;
        this.camera.getPicture(this.cameraOpt).then(function (imageData) {
            _this.uploadImg(imageData);
        }, function (err) {
            _this.noticeSer.showToast("ERROR:" + err); //错误：无法使用拍照功能！
        });
    };
    /**
     * 打开手机相册选择照片
     */
    ImgServiceProvider.prototype.openImgPicker = function () {
        var _this = this;
        var temp = "";
        this.imagePicker.getPictures(this.imagePickerOpt).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                temp = results[i];
            }
            _this.uploadImg(temp);
        }, function (err) {
            _this.noticeSer.showToast("ERROR:" + err); //错误：无法从手机相册中选择图片！
        });
    };
    /**
     * 上传图片
     * @param path
     */
    ImgServiceProvider.prototype.uploadImg = function (path) {
        var _this = this;
        if (!path) {
            return;
        }
        var options;
        options = {
            fileKey: this.upload.fileKey,
            headers: this.upload.headers,
            params: this.upload.params
        };
        this.fileTransfer.upload(path, this.uploadApi, options).then(function (data) {
            if (_this.upload.success) {
                _this.upload.success(JSON.parse(data.response));
            }
        }, function (err) {
            if (_this.upload.error) {
                _this.upload.error(err);
            }
            else {
                _this.noticeSer.showToast("错误：上传失败！");
            }
        });
    };
    //上传成功
    // bjecterrorcode: "200"
    // imageUrl: "https://www.petbashi.com/imgs/"
    // info: "ok"
    // message: 
    // "操作成功！"
    // object: Object
    // map:Object
    //  cover: "aaf5a8250c1db2662b092007e3922812.jpg"
    //  filename: "4ec178b28fc4b1e722f0c8f690871261.jpg"
    /**
     * 视频上传
     * @param fileUrl
     * @param options
     */
    ImgServiceProvider.prototype.uploadByTransfer = function (fileUrl, options) {
        if (!options) {
            options = {
                fileKey: "file",
                fileName: fileUrl.substr(fileUrl.lastIndexOf("/") + 1)
            };
        }
        return this.fileTransfer.upload(fileUrl, this.uploadApi, options).then(function (res) {
            var rtn = JSON.parse(res.response);
            return rtn;
        });
    };
    /**
     * 调用视频拍摄
     */
    ImgServiceProvider.prototype.choosePhoto = function (successCallback) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: "选择图片来源",
            buttons: [
                {
                    text: "本地视频",
                    role: "destructive",
                    handler: function () {
                        _this.getLocalImage(successCallback);
                    }
                },
                {
                    text: "拍摄视频",
                    handler: function () {
                        _this.takeVideo(successCallback);
                    }
                },
                {
                    text: "取消",
                    role: "cancel",
                    handler: function () { }
                }
            ]
        });
        actionSheet.present();
    };
    /**
     * 选择本地视频
     */
    ImgServiceProvider.prototype.getLocalImage = function (successCallback) {
        var options = {
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: true,
            mediaType: 1,
            targetWidth: 640,
            targetHeight: 360
        };
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            successCallback(imageData);
            //  return this.uploadByTransfer(imageData);
        }, function (err) {
            // Handle error
            console.log(err);
        });
    };
    /**
     * 拍摄视频 附带视频截图
     */
    ImgServiceProvider.prototype.takeVideo = function (successCallback) {
        var _this = this;
        var options = {
            codecs: "mp4",
            bitrate: 1500,
            height: 360,
            width: 640,
            duration: 15
        };
        this.mediaCapture.captureVideo(options).then(function (data) {
            _this.ditor(data, successCallback);
        }, function (err) { return console.error(err); });
    };
    /**
     * 视频压缩处理
     */
    ImgServiceProvider.prototype.ditor = function (data, successCallback) {
        var _this = this;
        console.log(data[0]["fullPath"]);
        var options = {
            fileUri: data[0]["fullPath"],
            outputFileName: data[0]["name"],
            saveToLibrary: true,
            deleteInputFile: false,
            maintainAspectRatio: true,
            width: 640,
            height: 360,
            videoBitrate: 1000000,
            fps: 24,
            audioChannels: 2,
            audioSampleRate: 44100,
            audioBitrate: 128000,
            progress: function (info) {
                console.log(info);
            } // info will be a number from 0 to 100
        };
        this.videoEditor
            .transcodeVideo(options)
            .then(function (fileUri) { return __awaiter(_this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = "file://" + fileUri;
                successCallback(url);
                return [2 /*return*/];
            });
        }); })
            .catch(function (error) { return console.log("video transcode error", error); });
    };
    // /**
    //  *
    //  * @param data 图片压缩后
    //  */
    // private create(data) {
    //   let options = {
    //     fileUri: data[0]["fullPath"],
    //     outputFileName: data[0]["name"],
    //     atTime: 1,
    //     width: 640,
    //     height: 640,
    //     quality: 80
    //   };
    //   this.videoEditor.createThumbnail(options).then((fileUri: string) => {
    //     this.uploadImg("file://" + fileUri);
    //     // this.fileimgget(fileUri, data);
    //     console.log("上传" + fileUri);
    //   });
    // }
    /**
     * 压缩后的视频
     * @param fileUri 压缩前的视频路径
     * @param data
     */
    // private filevideoget(fileUri, data) {
    //   let evets = fileUri.split(data[0].name);
    //   let fileName = data[0].name + ".mp4";
    //   let Options = {};
    //   this.file
    //     .resolveDirectoryUrl("file://" + evets[0])
    //     .then(res => {
    //       this.file.getFile(res, fileName, Options).then(filedata => {
    //         console.log("视频压缩" + filedata.fullPath);
    //         this.uploadVideo("file://" + filedata.fullPath);
    //       });
    //     })
    //     .catch(err => console.log(err));
    // }
    // /**
    //  * 压缩后的图片
    //  * @param fileUri
    //  * @param data
    //  */
    ImgServiceProvider.prototype.fileimgget = function (fileUri, data) {
        var _this = this;
        var evets = fileUri.split(data[0].name);
        var fileName = data[0].name + ".jpg";
        var Options = {};
        this.file
            .resolveDirectoryUrl("file://" + evets[0])
            .then(function (res) {
            _this.file.getFile(res, fileName, Options).then(function (filedata) {
                console.log(filedata);
            });
        })
            .catch(function (err) { return console.log(err); });
    };
    // 停止上传
    ImgServiceProvider.prototype.stopUpload = function () {
        if (this.fileTransfer) {
            this.fileTransfer.abort();
        }
    };
    ImgServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_6__toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["b" /* FileTransferObject */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_media_capture__["a" /* MediaCapture */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_video_editor__["a" /* VideoEditor */]])
    ], ImgServiceProvider);
    return ImgServiceProvider;
}());

//# sourceMappingURL=img-service.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_service_user_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_match_match__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_additional_additional__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_audit_audit__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_videogular2_core__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_videogular2_controls__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_videogular2_overlay_play__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_videogular2_buffering__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_videogular2_buffering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_appraise_appraise__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_service_my_http_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ion_multi_picker__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ion_multi_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ion_multi_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_config__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_shared_module__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__node_modules_angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_list_list__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_forget_password_forget_password__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_orderdack_orderdack__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_qr_scanner__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_services_backButton_service__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_file__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_image_picker__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ionic2_date_picker__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ionic2_date_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_ionic2_date_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_device__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ion2_calendar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_media_capture__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_video_editor__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_img_service_img_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_toast_toast__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_storage_storage__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_wechat_chenyu__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { BarcodeScanner } from "@ionic-native/barcode-scanner";








//import { listener } from "@angular/core/src/render3/instructions";



// import { CalendarModule } from "ionic3-calendar";


// import { ReviceServeProvider } from '../providers/revice-serve/revice-serve';












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_22__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_forget_password_forget_password__["a" /* ForgetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_appraise_appraise__["a" /* AppraisePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_audit_audit__["a" /* AuditPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_additional_additional__["a" /* AdditionalPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_orderdack_orderdack__["a" /* OrderdackPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_match_match__["a" /* MatchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_videogular2_core__["VgCoreModule"],
                __WEBPACK_IMPORTED_MODULE_5_videogular2_controls__["VgControlsModule"],
                __WEBPACK_IMPORTED_MODULE_6_videogular2_overlay_play__["VgOverlayPlayModule"],
                __WEBPACK_IMPORTED_MODULE_7_videogular2_buffering__["VgBufferingModule"],
                __WEBPACK_IMPORTED_MODULE_20__node_modules_angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_31_ionic2_date_picker__["DatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_19__shared_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: "true",
                    backButtonText: ""
                }, {
                    links: [
                        { loadChildren: '../pages/additional/additional.module#AdditionalPageModule', name: 'AdditionalPage', segment: 'additional', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allkinds/allkinds.module#AllkindsPageModule', name: 'AllkindsPage', segment: 'allkinds', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/advices/advices.module#AdvicesPageModule', name: 'AdvicesPage', segment: 'advices', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allorders/allorders.module#AllordersPageModule', name: 'AllordersPage', segment: 'allorders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appraise/appraise.module#AppraisePageModule', name: 'AppraisePage', segment: 'appraise', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/audit/audit.module#AuditPageModule', name: 'AuditPage', segment: 'audit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/callshop/callshop.module#CallshopPageModule', name: 'CallshopPage', segment: 'callshop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/care/care.module#CarePageModule', name: 'CarePage', segment: 'care', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatroom/chatroom.module#ChatroomPageModule', name: 'ChatroomPage', segment: 'chatroom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/check-in/check-in.module#CheckInPageModule', name: 'CheckInPage', segment: 'check-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ckeck/ckeck.module#CkeckPageModule', name: 'CkeckPage', segment: 'ckeck', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/classify/classify.module#ClassifyPageModule', name: 'ClassifyPage', segment: 'classify', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coupon/coupon.module#CouponPageModule', name: 'CouponPage', segment: 'coupon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/daylist/daylist.module#DaylistPageModule', name: 'DaylistPage', segment: 'daylist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deposit/deposit.module#DepositPageModule', name: 'DepositPage', segment: 'deposit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detemgs/detemgs.module#DetemgsPageModule', name: 'DetemgsPage', segment: 'detemgs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/diary/diary.module#DiaryPageModule', name: 'DiaryPage', segment: 'diary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dynamic/dynamic.module#DynamicPageModule', name: 'DynamicPage', segment: 'dynamic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enter/enter.module#EnterPageModule', name: 'EnterPage', segment: 'enter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/evaluate/evaluate.module#EvaluatePageModule', name: 'EvaluatePage', segment: 'evaluate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/felselist/felselist.module#FelselistPageModule', name: 'FelselistPage', segment: 'felselist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget-password/forget-password.module#ForgetPasswordPageModule', name: 'ForgetPasswordPage', segment: 'forget-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/givenotice/givenotice.module#GivenoticePageModule', name: 'GivenoticePage', segment: 'givenotice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guidance/guidance.module#GuidancePageModule', name: 'GuidancePage', segment: 'guidance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/huodongpage/huodongpage.module#HuodongpagePageModule', name: 'HuodongpagePage', segment: 'huodongpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ipam/ipam.module#IpamPageModule', name: 'IpamPage', segment: 'ipam', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/knowledg/knowledg.module#KnowledgPageModule', name: 'KnowledgPage', segment: 'knowledg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messagelist/messagelist.module#MessagelistPageModule', name: 'MessagelistPage', segment: 'messagelist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match/match.module#MatchPageModule', name: 'MatchPage', segment: 'match', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mirror/mirror.module#MirrorPageModule', name: 'MirrorPage', segment: 'mirror', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newlay/newlay.module#NewlayPageModule', name: 'NewlayPage', segment: 'newlay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newsword/newsword.module#NewswordPageModule', name: 'NewswordPage', segment: 'newsword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orderdack/orderdack.module#OrderdackPageModule', name: 'OrderdackPage', segment: 'orderdack', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orderform/orderform.module#OrderformPageModule', name: 'OrderformPage', segment: 'orderform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pardackpush/pardackpush.module#PardackpushPageModule', name: 'PardackpushPage', segment: 'pardackpush', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personalcenter/personalcenter.module#PersonalcenterPageModule', name: 'PersonalcenterPage', segment: 'personalcenter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pet-admin/pet-admin.module#PetAdminPageModule', name: 'PetAdminPage', segment: 'pet-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/petstort/petstort.module#PetstortPageModule', name: 'PetstortPage', segment: 'petstort', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/playcode/playcode.module#PlaycodePageModule', name: 'PlaycodePage', segment: 'playcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productadmin/productadmin.module#ProductadminPageModule', name: 'ProductadminPage', segment: 'productadmin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pushcoupon/pushcoupon.module#PushcouponPageModule', name: 'PushcouponPage', segment: 'pushcoupon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pushdiary/pushdiary.module#PushdiaryPageModule', name: 'PushdiaryPage', segment: 'pushdiary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/query-petactivity/query-petactivity.module#QueryPetactivityPageModule', name: 'QueryPetactivityPage', segment: 'query-petactivity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/record/record.module#RecordPageModule', name: 'RecordPage', segment: 'record', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/refund/refund.module#RefundPageModule', name: 'RefundPage', segment: 'refund', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/science/science.module#SciencePageModule', name: 'SciencePage', segment: 'science', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/set/set.module#SetPageModule', name: 'SetPage', segment: 'set', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setuser/setuser.module#SetuserPageModule', name: 'SetuserPage', segment: 'setuser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shippingoder/shippingoder.module#ShippingoderPageModule', name: 'ShippingoderPage', segment: 'shippingoder', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopcall/shopcall.module#ShopcallPageModule', name: 'ShopcallPage', segment: 'shopcall', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopping/shopping.module#ShoppingPageModule', name: 'ShoppingPage', segment: 'shopping', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/site/site.module#SitePageModule', name: 'SitePage', segment: 'site', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sopl/sopl.module#SoplPageModule', name: 'SoplPage', segment: 'sopl', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/store/store.module#StorePageModule', name: 'StorePage', segment: 'store', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tongchenglist/tongchenglist.module#TongchenglistPageModule', name: 'TongchenglistPage', segment: 'tongchenglist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/toushilist/toushilist.module#ToushilistPageModule', name: 'ToushilistPage', segment: 'toushilist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trick/trick.module#TrickPageModule', name: 'TrickPage', segment: 'trick', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video/video.module#VideoPageModule', name: 'VideoPage', segment: 'video', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/xiezhen/xiezhen.module#XiezhenPageModule', name: 'XiezhenPage', segment: 'xiezhen', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_33_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_17_ion_multi_picker__["MultiPickerModule"]
                // CalendarModule
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_22__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_forget_password_forget_password__["a" /* ForgetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_appraise_appraise__["a" /* AppraisePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_audit_audit__["a" /* AuditPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_additional_additional__["a" /* AdditionalPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_orderdack_orderdack__["a" /* OrderdackPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_match_match__["a" /* MatchPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__shared_service_my_http_service__["a" /* MyHttpService */],
                __WEBPACK_IMPORTED_MODULE_0__shared_service_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_27__src_services_backButton_service__["a" /* BackButtonService */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_media_capture__["a" /* MediaCapture */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_video_editor__["a" /* VideoEditor */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_39_wechat_chenyu__["a" /* WechatChenyu */],
                { provide: __WEBPACK_IMPORTED_MODULE_11__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["IonicErrorHandler"] },
                { provide: __WEBPACK_IMPORTED_MODULE_18__app_config__["a" /* DefaultAppConfig */], useClass: __WEBPACK_IMPORTED_MODULE_18__app_config__["a" /* DefaultAppConfig */] },
                __WEBPACK_IMPORTED_MODULE_36__providers_img_service_img_service__["a" /* ImgServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_toast_toast__["a" /* ToastProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 187,
	"./af.js": 187,
	"./ar": 188,
	"./ar-dz": 189,
	"./ar-dz.js": 189,
	"./ar-kw": 190,
	"./ar-kw.js": 190,
	"./ar-ly": 191,
	"./ar-ly.js": 191,
	"./ar-ma": 192,
	"./ar-ma.js": 192,
	"./ar-sa": 193,
	"./ar-sa.js": 193,
	"./ar-tn": 194,
	"./ar-tn.js": 194,
	"./ar.js": 188,
	"./az": 195,
	"./az.js": 195,
	"./be": 196,
	"./be.js": 196,
	"./bg": 197,
	"./bg.js": 197,
	"./bm": 198,
	"./bm.js": 198,
	"./bn": 199,
	"./bn.js": 199,
	"./bo": 200,
	"./bo.js": 200,
	"./br": 201,
	"./br.js": 201,
	"./bs": 202,
	"./bs.js": 202,
	"./ca": 203,
	"./ca.js": 203,
	"./cs": 204,
	"./cs.js": 204,
	"./cv": 205,
	"./cv.js": 205,
	"./cy": 206,
	"./cy.js": 206,
	"./da": 207,
	"./da.js": 207,
	"./de": 208,
	"./de-at": 209,
	"./de-at.js": 209,
	"./de-ch": 210,
	"./de-ch.js": 210,
	"./de.js": 208,
	"./dv": 211,
	"./dv.js": 211,
	"./el": 212,
	"./el.js": 212,
	"./en-au": 213,
	"./en-au.js": 213,
	"./en-ca": 214,
	"./en-ca.js": 214,
	"./en-gb": 215,
	"./en-gb.js": 215,
	"./en-ie": 216,
	"./en-ie.js": 216,
	"./en-il": 217,
	"./en-il.js": 217,
	"./en-nz": 218,
	"./en-nz.js": 218,
	"./eo": 219,
	"./eo.js": 219,
	"./es": 220,
	"./es-do": 221,
	"./es-do.js": 221,
	"./es-us": 222,
	"./es-us.js": 222,
	"./es.js": 220,
	"./et": 223,
	"./et.js": 223,
	"./eu": 224,
	"./eu.js": 224,
	"./fa": 225,
	"./fa.js": 225,
	"./fi": 226,
	"./fi.js": 226,
	"./fo": 227,
	"./fo.js": 227,
	"./fr": 228,
	"./fr-ca": 229,
	"./fr-ca.js": 229,
	"./fr-ch": 230,
	"./fr-ch.js": 230,
	"./fr.js": 228,
	"./fy": 231,
	"./fy.js": 231,
	"./gd": 232,
	"./gd.js": 232,
	"./gl": 233,
	"./gl.js": 233,
	"./gom-latn": 234,
	"./gom-latn.js": 234,
	"./gu": 235,
	"./gu.js": 235,
	"./he": 236,
	"./he.js": 236,
	"./hi": 237,
	"./hi.js": 237,
	"./hr": 238,
	"./hr.js": 238,
	"./hu": 239,
	"./hu.js": 239,
	"./hy-am": 240,
	"./hy-am.js": 240,
	"./id": 241,
	"./id.js": 241,
	"./is": 242,
	"./is.js": 242,
	"./it": 243,
	"./it.js": 243,
	"./ja": 244,
	"./ja.js": 244,
	"./jv": 245,
	"./jv.js": 245,
	"./ka": 246,
	"./ka.js": 246,
	"./kk": 247,
	"./kk.js": 247,
	"./km": 248,
	"./km.js": 248,
	"./kn": 249,
	"./kn.js": 249,
	"./ko": 250,
	"./ko.js": 250,
	"./ky": 251,
	"./ky.js": 251,
	"./lb": 252,
	"./lb.js": 252,
	"./lo": 253,
	"./lo.js": 253,
	"./lt": 254,
	"./lt.js": 254,
	"./lv": 255,
	"./lv.js": 255,
	"./me": 256,
	"./me.js": 256,
	"./mi": 257,
	"./mi.js": 257,
	"./mk": 258,
	"./mk.js": 258,
	"./ml": 259,
	"./ml.js": 259,
	"./mn": 260,
	"./mn.js": 260,
	"./mr": 261,
	"./mr.js": 261,
	"./ms": 262,
	"./ms-my": 263,
	"./ms-my.js": 263,
	"./ms.js": 262,
	"./mt": 264,
	"./mt.js": 264,
	"./my": 265,
	"./my.js": 265,
	"./nb": 266,
	"./nb.js": 266,
	"./ne": 267,
	"./ne.js": 267,
	"./nl": 268,
	"./nl-be": 269,
	"./nl-be.js": 269,
	"./nl.js": 268,
	"./nn": 270,
	"./nn.js": 270,
	"./pa-in": 271,
	"./pa-in.js": 271,
	"./pl": 272,
	"./pl.js": 272,
	"./pt": 273,
	"./pt-br": 274,
	"./pt-br.js": 274,
	"./pt.js": 273,
	"./ro": 275,
	"./ro.js": 275,
	"./ru": 276,
	"./ru.js": 276,
	"./sd": 277,
	"./sd.js": 277,
	"./se": 278,
	"./se.js": 278,
	"./si": 279,
	"./si.js": 279,
	"./sk": 280,
	"./sk.js": 280,
	"./sl": 281,
	"./sl.js": 281,
	"./sq": 282,
	"./sq.js": 282,
	"./sr": 283,
	"./sr-cyrl": 284,
	"./sr-cyrl.js": 284,
	"./sr.js": 283,
	"./ss": 285,
	"./ss.js": 285,
	"./sv": 286,
	"./sv.js": 286,
	"./sw": 287,
	"./sw.js": 287,
	"./ta": 288,
	"./ta.js": 288,
	"./te": 289,
	"./te.js": 289,
	"./tet": 290,
	"./tet.js": 290,
	"./tg": 291,
	"./tg.js": 291,
	"./th": 292,
	"./th.js": 292,
	"./tl-ph": 293,
	"./tl-ph.js": 293,
	"./tlh": 294,
	"./tlh.js": 294,
	"./tr": 295,
	"./tr.js": 295,
	"./tzl": 296,
	"./tzl.js": 296,
	"./tzm": 297,
	"./tzm-latn": 298,
	"./tzm-latn.js": 298,
	"./tzm.js": 297,
	"./ug-cn": 299,
	"./ug-cn.js": 299,
	"./uk": 300,
	"./uk.js": 300,
	"./ur": 301,
	"./ur.js": 301,
	"./uz": 302,
	"./uz-latn": 303,
	"./uz-latn.js": 303,
	"./uz.js": 302,
	"./vi": 304,
	"./vi.js": 304,
	"./x-pseudo": 305,
	"./x-pseudo.js": 305,
	"./yo": 306,
	"./yo.js": 306,
	"./zh-cn": 307,
	"./zh-cn.js": 307,
	"./zh-hk": 308,
	"./zh-hk.js": 308,
	"./zh-tw": 309,
	"./zh-tw.js": 309
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 462;

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        // rootPage: any = "LoginPage";
        this.rootPage = 'TabsPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"G:\ionic3demos\petApp\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"G:\ionic3demos\petApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_my_http_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_my_http_service__["a" /* MyHttpService */], __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]],
            ngModule: SharedModule_1
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__["NgModule"])({
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_my_http_service__["a" /* MyHttpService */], __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_wechat_chenyu__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



// import { HttpErrorResponse } from "@angular/common/http";
// import { throwError } from "rxjs";


var MyHttpService = (function () {
    function MyHttpService(http, appConfig, loadingCtrl, toastCtrl, Wechat) {
        this.http = http;
        this.appConfig = appConfig;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.Wechat = Wechat;
        this.httpTimeout = 3000;
        this.isMock = false;
        this.isDev = true;
        this.lodingtype = true;
    }
    Object.defineProperty(MyHttpService.prototype, "ip", {
        get: function () {
            return this.appConfig.ip;
        },
        enumerable: true,
        configurable: true
    });
    MyHttpService.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
    };
    MyHttpService.prototype.showLoading = function (content) {
        var _this = this;
        if (content === void 0) { content = ""; }
        if (typeof content != "string") {
            content = "";
        }
        if (!this.loadingIsOpen) {
            this.loadingIsOpen = true;
            this.loading = this.loadingCtrl.create({
                content: content
            });
            this.loading.present();
            setTimeout(function () {
                //最长显示10秒
                _this.loadingIsOpen && _this.loading.dismiss();
                _this.loadingIsOpen = false;
            }, 10000);
        }
        else {
            this.loading.setContent(content);
        }
    };
    MyHttpService.prototype.hideLoading = function () {
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
    };
    /**
     * 文件上传
     * @param url
     * @param body
     * @param options
     */
    MyHttpService.prototype.upimg = function (url, body, options) {
        options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                mytoken: localStorage.getItem("mytoken"),
                "Content-Type": "multipart/form-data"
            })
        };
        return this.http
            .post("" + this.ip + url, body)
            .toPromise()
            .then(function (res) {
            console.log(res);
            return res.json();
        });
    };
    MyHttpService.prototype.Postlogin = function (url, body, options) {
        var _this = this;
        console.log(localStorage);
        if (this.isMock) {
            return this.mockGet(url);
        }
        if (!options)
            options = {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                    "Content-Type": "application/x-www-form-urlencoded"
                })
            };
        return this.http
            .post("" + this.ip + url, this.toQueryString(body), options)
            .toPromise()
            .then(function (rtn) {
            var result = rtn.json();
            if (rtn.status > 400 && rtn.status < 500) {
                result = {
                    ok: false,
                    data: "资源访问错误:" + rtn.json().message,
                    status: rtn.status
                };
            }
            else if (rtn.status >= 500) {
                result = {
                    ok: false,
                    data: _this.appConfig.debug ? rtn.json().msg : "服务器内部错误:",
                    status: rtn.status
                };
            }
            if (!rtn.ok) {
                _this.createMessage("error", result.msg);
                return false;
            }
            else {
                //  this.hideLoading()
                return result;
            }
        })
            .catch(function (e) { return _this.handleError(e); });
        /**超过timeout 时间就会执行以下代码,返回错误信息 */
    };
    MyHttpService.prototype.Post = function (url, body, options) {
        var _this = this;
        if (this.isMock) {
            return this.mockGet(url);
        }
        var mytoken;
        if (localStorage.getItem("mytoken")) {
            mytoken = localStorage.getItem("mytoken");
        }
        else {
            mytoken = -111111111;
        }
        if (!options)
            options = {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                    "Content-Type": "application/x-www-form-urlencoded",
                    mytoken: mytoken
                })
            };
        return this.http
            .post("" + this.ip + url, this.toQueryString(body), options)
            .toPromise()
            .then(function (rtn) {
            var result = rtn.json();
            if (rtn.status > 400 && rtn.status < 500) {
                result = {
                    ok: false,
                    data: "资源访问错误:" + rtn.json().message,
                    status: rtn.status
                };
            }
            else if (rtn.status >= 500) {
                result = {
                    ok: false,
                    data: _this.appConfig.debug ? rtn.json().msg : "服务器内部错误:",
                    status: rtn.status
                };
            }
            if (!rtn.ok) {
                _this.createMessage("error", result.msg);
                return false;
            }
            else {
                //  this.hideLoading()
                return result;
            }
        })
            .catch(function (e) { return _this.handleError(e); });
        /**超过timeout 时间就会执行以下代码,返回错误信息 */
    };
    MyHttpService.prototype.Delete = function (url, options) {
        var _this = this;
        url = url.startsWith("http") ? url : "" + this.ip + url;
        options = options ? options : {};
        return this.http
            .delete("" + this.ip + url)
            .toPromise()
            .then(function (rtn) {
            var result = rtn;
            return result.ok
                ? result.data
                : _this.createMessage("error", result.data);
        });
    };
    MyHttpService.prototype.Put = function (url, body, options) {
        var _this = this;
        url = url.startsWith("http") ? url : "" + this.ip + url;
        options = options ? options : {};
        // options.withCredentials = true;
        return this.http
            .put("" + this.ip + url, body)
            .toPromise()
            .then(function (rtn) {
            var result = rtn;
            return result.ok
                ? result.data
                : _this.createMessage("error", result.data);
        });
    };
    MyHttpService.prototype.handleError = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, body;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = res.status;
                        switch (_a) {
                            case 404: return [3 /*break*/, 1];
                            case 500: return [3 /*break*/, 2];
                        }
                        return [3 /*break*/, 4];
                    case 1:
                        this.createMessage("error", "404请求的资源不存在");
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, res.json()];
                    case 3:
                        body = _b.sent();
                        this.createMessage("error", this.appConfig.debug ? body.msg : "服务器内部错误");
                        return [3 /*break*/, 5];
                    case 4:
                        this.createMessage("error", res.status + "尚未捕获的请求异常");
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, false];
                }
            });
        });
    };
    MyHttpService.prototype.localGet = function (url) {
        return this.http.get(url).toPromise();
    };
    MyHttpService.prototype.localGetJSON = function (url) {
        return this.http
            .get(url)
            .toPromise()
            .then(function (rtn) { return rtn.json(); });
    };
    MyHttpService.prototype.mockGet = function (url) {
        return this.http
            .get("/assets/mock" + url + ".json")
            .toPromise()
            .then(function (rtn) { return rtn.json(); })
            .then(function (rtn) { return rtn.data; });
    };
    MyHttpService.prototype.toQueryString = function (obj) {
        var result = [];
        for (var key in obj) {
            key = encodeURIComponent(key);
            var values = obj[key];
            if (values && values.constructor == Array) {
                var queryValues = [];
                for (var i = 0, len = values.length, value = void 0; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                result = result.concat(queryValues);
            }
            else {
                result.push(this.toQueryPair(key, values));
            }
        }
        return result.join("&");
    };
    //参数序列化
    MyHttpService.prototype.toQueryPair = function (key, value) {
        if (typeof value == "undefined") {
            return key;
        }
        return key + "=" + encodeURIComponent(value === null ? "" : String(value));
    };
    /**
     *
     * @param mgs 弹窗消息字符串
     */
    MyHttpService.prototype.showToast = function (mgs) {
        var toast = this.toastCtrl.create({
            message: mgs,
            duration: 2000,
            position: "middle"
        });
        toast.present(toast);
    };
    MyHttpService.prototype.createMessage = function (type, text) {
        // return this._message.create(type, `${text}`);
    };
    MyHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* DefaultAppConfig */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_4_wechat_chenyu__["a" /* WechatChenyu */]])
    ], MyHttpService);
    return MyHttpService;
}());

//# sourceMappingURL=my-http.service.js.map

/***/ })

},[414]);
//# sourceMappingURL=main.js.map