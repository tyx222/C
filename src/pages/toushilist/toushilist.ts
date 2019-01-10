import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UserService } from "../../app/shared/service/user.service";

/**
 * Generated class for the ToushilistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-toushilist",
  templateUrl: "toushilist.html"
})
export class ToushilistPage {
  list = [];
  type;
  msgfd = 0;
  imageUrl
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: UserService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ToushilistPage");
    this.type = this.navParams.get("type");
    this.querypetfeedinglist();
  }
  clickEventHandler(i) {
    this.msgfd = i;
    this.list=[]
    console.log(i)
    if (i == 0) {
      this.querypetfeedinglist();
    } else {
      this.querypetfeedingclientlist();
    }
  }

  /**
   * i=1 的时候调用
   * 查询别人给我的投食记录
   */
  async querypetfeedingclientlist() {
    let parmas = {
      pageNum: 1, //	[string]	是	当前显示页码
      rowsPrePage: 50, //	[string]	是	每页显示行数
      reciveclientid: JSON.parse(localStorage.getItem("mydata")).client_id, //	[string]	是	接收投食的用户id
      petcardid: JSON.parse(localStorage.getItem("petdata")).id //	[string]	是
    };
    let res = await this.http.querypetfeedingclientlist(parmas);
    this.list = res.arrayList;
    this.imageUrl=res.imageUrl
    console.log(res);
  }

  /**
   * querypetfeedinglist
   * 查询我给别人的投食记录
   */
  async querypetfeedinglist() {
   
    let parmas = {
      mytoken:localStorage.getItem("mytoken")
    };
    let res = await this.http.querypetotherfeedinglist(parmas);
    console.log(res);
    this.list = res.arrayList;
    this.imageUrl=res.imageUrl

  }
}
