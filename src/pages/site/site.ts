import { UserService } from "./../../app/shared/service/user.service";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { ReviceServeProvider } from "./../../providers/revice-serve/revice-serve";
declare var BMap
declare var BMAP_ANIMATION_BOUNCE;
/**
 * Generated class for the SitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-site",
  templateUrl: "site.html",
  providers: [ReviceServeProvider]
})
export class SitePage {
  mydata = {
    myname: "",
    ipone: "",
    myipam: "",
    ipam: ""
  };
  address_lable
  default_address
  myorder = [];

  listData = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public reviceServe: ReviceServeProvider,
    public toastCtrl: ToastController,
    private http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SitePage");
    console.log("地址" + localStorage.getItem("myipam1"));

    if (localStorage.getItem("myipam1") !== null) {
      this.myorder = JSON.parse(localStorage.getItem("myipam1"));
      // for(let i=0;i<=JSON.parse(localStorage.getItem('myipam1')).length;i++){
      //   this.myorder.push(JSON.parse(localStorage.getItem('myipam1'))[i])
      // }
    }
    console.log(this.myorder);
    this.baidumap()
    this.getRequestContact();
  }
  getRequestContact() {
    this.reviceServe.getRequestContact().subscribe(
      res => {
        this.listData = res.json();
      },
      error => {
        console.log(error);
      }
    );
  }
  async save(myipam: HTMLEmbedElement) {
    console.log(myipam["_text"]);
    this.mydata.myipam = myipam["_text"];
    console.log(myipam);

    for (let item in this.mydata) {
      if (this.mydata[item] == "") {
        const toast = this.toastCtrl.create({
          message: "请不要留空",
          duration: 3000
        });
        toast.present();
        return false;
      }
    }
    let city = this.mydata.myipam.split(" ");
    console.log(city);
    let parmas = {
      address_lable: "",
      receiver_name: this.mydata.myname,
      default_address: "",
      phonenumber: this.mydata.ipone,
      province: city[0],
      city: city[1],
      county: city[2],
      detaile_address: this.mydata.ipam,
      mytoken: localStorage.getItem("mytoken")
    };

    let res=await this.http.addPetReceiver(parmas)
    console.log(res);
    //   const toast = this.toastCtrl.create({
    //     message: "保存成功",
    //     duration: 3000
    //   });
    //   toast.present();
    //   if (localStorage.getItem("myipamindex") == null) {
    //     localStorage.setItem("myipamindex", "0");
    //   }

    //   this.myorder.push(this.mydata);
    //   const myimapdatas = JSON.stringify(this.myorder);
    //   localStorage.setItem("myipam1", myimapdatas);
    //   setTimeout(() => {
    //     this.navCtrl.pop();
    //   }, 1500);
  }

  public async baidumap() {

    var map = new BMap.Map("container");
  
    var point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point, 12);
    // 创建地址解析器实例
    var myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上,并调整地图视野
  
    myGeo.getPoint("武汉市江夏区金口街金水闸", function(point) {
      if (point) {
        map.centerAndZoom(point, 16);
        map.addOverlay(new BMap.Marker(point));
        console.log(point);
        var marker = new BMap.Marker(point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        // marker.addEventListener("click",this.getAttr(marker));
        var p = marker.getPosition(); //获取marker的位置
        alert("marker的位置是" + p.lng + "," + p.lat);
      } else {
        alert("您选择地址没有解析到结果!");
      }
    });
  
    // console.log(point);
    // // 创建点坐标
    // map.centerAndZoom(point, 16);
    // // 初始化地图， 设置中心点坐标和地图级别
    // function myFun(result) {
    //   var cityName = result.name;
    //   map.setCenter(cityName);
    //   // alert("当前定位城市:"+cityName);
    // }
    // var myCity = new BMap.LocalCity();
    // myCity.get(myFun);
  }
}
