import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImgServiceProvider } from '../../../providers/img-service/img-service';
import { UserService } from '../../../app/shared/service/user.service';
import { Http } from '@angular/http';


/**
 * Generated class for the RequstRefundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'RequstRefundPage'
})
@Component({
  selector: 'page-requst-refund',
  templateUrl: 'requst-refund.html',
})
export class RequstRefundPage {
  listData = [];
  arrayList
  object
  plice
  params = {
    order_id: '',    //  	订单ID
    goodid: '',    //  商品ID
    order_detail_id: '', //	商品详情ID
    reason: '',  //   	退货原因
    goodnum: '',  //  	商品数量
    price: '',  //  价格
    order_code: '',  //  	订单编号
    picture: '',  //  		图片
    refundable_adress: '',   //    退货地址（type为2）
    express_company: '',   //    快递公司（2）
    express_number: '',   //    	快递单号（2）
  }
  status
  afterMoney
  myipam    // 地区

  constructor(
    public http: UserService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private devolup: ImgServiceProvider,
    public http2: Http,
  ) {

    this.plice = 54
    this.status = this.navParams.get("status")
  }

  ionViewDidLoad() {
    this.getRequestContact();
    this.plice = 45
    let x = this.navParams.get("data")
    console.log(x);

    this.arrayList = x.arrayList[0]
    this.object = x.object

    this.params.order_id = this.object.order_id;    //  	订单ID
    this.params.goodid = this.arrayList.good_id;    //  商品ID
    this.params.order_detail_id = this.arrayList.details_id; //	商品详情ID
    this.params.reason = '';  //   	退货原因
    this.params.goodnum = this.arrayList.good_num;  //  	商品数量
    this.params.price = '';  //  价格
    this.params.order_code = this.object.order_code;  //  	订单编号
    this.params.picture = '';  //  		图片
    if (this.status == '2') {
      this.params.refundable_adress = ''   //    退货地址（type为2）
      this.params.express_company = this.object.express_company  //    快递公司（2）
      this.params.express_number = this.object.express_number   //    	快递单号（2）
    }

  }

  //规格上传图片
  guigeimgup(index) {
    let selfs = this
    this.devolup.showPicActionSheet();
    this.devolup.upload.success = data => {
      if (data.info == "ok") {
        //selfs.imageUrl = data.imageUrl;
        selfs.http.presentToast('上传成功')
        console.log(data.object.map.filename)
        // selfs.guigeList[index].cover = data.object.map.filename
      } else {
        selfs.http.presentToast('上传失败')
      }
    };
  }


  // 退款金额绑定
  requestMoney() {
    setTimeout(() => {
      this.afterMoney = Math.floor(this.object.final_payment * 0.99)

    }, 500);
    return this.afterMoney
  }

  // changeMoney(e){
  //   Math.floor()
  // }


  getRequestContact() {
    this.http2.get("assets/json/city.json")
      .subscribe(
        res => {
          this.listData = res.json();
          console.log(res.json());
        },
        error => {
          console.log(error);
        }
      );
  }


  sub() {

  }
}
