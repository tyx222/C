import { ReviceServeProvider } from "./../../providers/revice-serve/revice-serve";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ImgServiceProvider } from "../../providers/img-service/img-service";
import { UserService } from "../../app/shared/service/user.service";
import { Component, ViewChild, ElementRef } from "@angular/core";
declare var AMap;
/**
 * Generated class for the EnterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-enter",
  templateUrl: "enter.html",
  providers: [ReviceServeProvider]
})
export class EnterPage {
  @ViewChild("map_container") map_container: ElementRef;
  map: any; //地图对象
  listData = [];
  jsonParamter = {
    shop_introduce:"", //"商铺介绍",
    head_path: "assets/imgs/images/shangchuan@2x.png", //店铺头像
    shop_key: "", //"商铺关键字",
    shop_name: "", // "店铺名称",
    business_license: "assets/imgs/images/shangchuan@2x.png", //"营业执照",
    remark: "", //"备注",
    phonenumber: "", // "商铺负责人联系电话",
    address: "", //"地址",
    shop_type: 0, //"0. 未上传营业执照  1.上传营业执照",
    business_hours: "", // "营业时间",
    caac: "1",
    caacimg: "2",
    cku: "3",
    ckuimg: "4",
    idcard: "", //"身份证号",
    idcardimg1: "assets/imgs/images/shangchuan@2x.png", // "身份证正面",
    idcardimg2: "assets/imgs/images/shangchuan@2x.png", // "身份证反面",
    latitude: "", // "纬度",
    longitude: "", // "经度",
    qq: "", //"123456",
    wechat: "" //"微信号"
  };
  myipam
  myDate = "";
  mydata;
  asscity = "";
  items = [
    { title: "item1" },
    { title: "item2" },
    { title: "item3" },
    { title: "item4" },
    { title: "item5" },
    { title: "item6" }
  ];
  rgps;
  mapbox = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public reviceServe: ReviceServeProvider,
    private upimgserve: ImgServiceProvider,
    private http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad EnterPage");
    this.getRequestContact();
    this.gps();
    // this.mapinit()
  }
  async gps() {
    this.rgps = await this.http.getGPS();
    console.log(this.rgps);
  }
  getRequestContact() {
    this.reviceServe.getRequestContact().subscribe(
      res => {
        this.listData = res.json();
        console.log(res.json());
      },
      error => {
        console.log(error);
      }
    );
  }
  lokmap(citys) {
    this.mapbox = true;
    console.log(citys._text);
    console.log(AMap);
    let data = citys._text + this.asscity;
    setTimeout(() => {
      this.mapinit(data);
    }, 1000);
  }
  mapinit(data) {
    var _this=this
    console.log(data);
    var marker, geocoder;
    var x ,y
    this.map = new AMap.Map(this.map_container.nativeElement, {
      view: new AMap.View2D({
        //创建地图二维视口
        zoom: 20, //设置地图缩放级别
        rotateEnable: true,
        showBuildingBlock: true,
        center: [this.rgps.longitude, this.rgps.latitude] //初始地图中心点
      })
    });
    marker = new AMap.Marker({
      position: new AMap.LngLat(this.rgps.longitude, this.rgps.latitude), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      title: "当前坐标"
    });
    marker.setMap(null);
    this.map.add(marker);
    AMap.service("AMap.Geocoder", () => {
      let geocoder = new AMap.Geocoder({
        city: "010"
      });
      console.log(geocoder, "fuwu");
      let positionInfo = [121.498586, 31.239637];
      console.log(positionInfo);
      geocoder.getAddress(positionInfo, (status, result) => {
        console.log(status, result, "转换定位信息");
        if (status === "complete" && result.info === "OK") {
          //获得了有效的地址信息:
          console.log(result.regeocode.formattedAddress);
          // this.formattedAddress = result.regeocode.formattedAddress;
        } else {
          //获取地址失败
          console.log("获取地址失败");
        }
      });
    });

    this.map.on("click", function(ev) {
      // 触发事件的对象
      var target = ev.target;

      // 触发事件的地理坐标，AMap.LngLat 类型

      var lnglat = ev.lnglat;
       x = ev.lng;
      y = ev.lat;
      if (marker) {
        marker.setMap(null);
        marker = null;
      }
      marker = new AMap.Marker({
        position: new AMap.LngLat(lnglat.lng, lnglat.lat), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "当前坐标"
      });
      _this.jsonParamter.latitude=lnglat.lat
      _this.jsonParamter.longitude=lnglat.lng
      _this.http.http.showToast(`${lnglat.lng}, ${lnglat.lat}`)
      marker.setMap(null);
      this.add(marker);
      // 触发事件的像素坐标，AMap.Pixel 类型
      var pixel = ev.pixel;
      // 触发事件类型
      var type = ev.type;
      console.log(lnglat);
    });
  }

  initImgSer() {
    return;
  }

 async updata(citys){
    console.log(citys._text)
    if(citys._text==""||this.asscity==''){
      this.http.http.showToast("请填写地址")
      return false
    }
    this.jsonParamter.address=citys._text+this.asscity
    if(this.jsonParamter.latitude==""||this.jsonParamter.longitude==""){
      this.http.http.showToast("请点击精确,获取经纬度")
      return false
    }
    if(this.jsonParamter.shop_name==""||this.jsonParamter.shop_name.indexOf(" ")!=-1||this.jsonParamter.phonenumber.length<8||this.jsonParamter.idcard.length<18){
    this.http.http.showToast("请填写完整")
    return false
    }
    this.jsonParamter
let res=await this.http.addshop({jsonParamter:JSON.stringify(this.jsonParamter)})
    this.http.http.showToast(res.message)
  }
/**
 * 店铺logo
 */
headlogo() {
    this.upimgserve.showPicActionSheet();
    this.upimgserve.upload.success = data => {
      console.log(data);
      this.jsonParamter.head_path=data.imageUrl+data.object.map.filename
    };
  }

  /**
   * 营业执照
   */
  business() {
    this.upimgserve.showPicActionSheet();
    this.upimgserve.upload.success = data => {
      console.log(data);
      this.jsonParamter.business_license=data.imageUrl+data.object.map.filename
    };
  }
  /**
   * 身份证正面
   */
  async mydatasup() {
    // let res=await this.initImgSer();
    // console.log(res)
    this.upimgserve.showPicActionSheet();
    this.upimgserve.upload.success = data => {
      console.log(data);
      this.jsonParamter.idcardimg1=data.imageUrl+data.object.map.filename
    };
  }

  /**
   * 身份证反面
   */
  async mydatasout() {
    this.upimgserve.showPicActionSheet();
    this.upimgserve.upload.success = data => {
      console.log(data);
      this.jsonParamter.idcardimg1=data.imageUrl+data.object.map.filename
    };
  }
}
