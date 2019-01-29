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
    type: '',
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

    this.status = this.navParams.get("status")
  }

  ionViewDidLoad() {
    this.getRequestContact();
    let x = this.navParams.get("data")


    this.arrayList = x.arrayList[0]
    this.object = x.object



    this.afterMoney = this.requestMoney(this.object.final_payment)

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
  requestMoney(m) {
    let a = Math.floor(m * 0.99)
    return a
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
    this.addrefundable()
  }

  async addrefundable() {
    let refundImgs = []
    // this.refundImgs.forEach((val) => {
    //   if (val != 'assets/imgs/images/pushimg.png') {
    //     refundImgs.push(val)
    //   }
    // })
    this.params.type = this.status
    this.params.order_id = this.object.order_id;    //  	订单ID
    this.params.goodid = this.arrayList.good_id;    //  商品ID
    this.params.order_detail_id = this.arrayList.details_id; //	商品详情ID
    this.params.reason = '';  //   	退货原因
    this.params.goodnum = this.arrayList.good_num;  //  	商品数量
    this.params.price = this.afterMoney;  //  价格
    this.params.order_code = this.object.order_code;  //  	订单编号
    this.params.picture = '';  //  		图片
    if (this.status == '2') {
      this.params.refundable_adress = ''   //    退货地址（type为2）
      this.params.express_company = this.object.express_company  //    快递公司（2）
      this.params.express_number = this.object.express_number   //    	快递单号（2）
    }

    let res = await this.http.addrefundable(this.params);
    if (res.info == "ok") {
      this.http.presentToast("操作成功")
      this.navCtrl.push('AllordersPage').then(() => {

        this.navCtrl.remove(1, this.navCtrl.length() - 2, null);

      })
    } else {
      this.http.presentToast("操作失败")
    }
  }
}
