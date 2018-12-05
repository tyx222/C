
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { UserService } from '../../app/shared/service/user.service';
import { WechatChenyu } from "wechat-chenyu";
import { DefaultAppConfig } from "./../../app/app.config";

/**
 * Generated class for the AllordersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allorders',
  templateUrl: 'allorders.html',
})
export class AllordersPage {
  order_status=0
  order_list=[]
  httpResponseData:any;
  get imgUrl(): string {
	return this.appConfig.ip + 'imgs/';
  }
  constructor(
  private http:UserService, 
  public actionSheetCtrl:ActionSheetController,  
  public alertCtrl:AlertController,  
  public wechatChenyu:WechatChenyu,
  public appConfig: DefaultAppConfig,
  public navCtrl: NavController, 
  public navParams: NavParams) {
  }
  goevaluate(item,citem){
    this.navCtrl.push("EvaluatePage",{type:0,orderid:item.order_id,goodsid:citem.goods_id,cover:this.imgUrl+citem.cover})
  }
  lookevaluate(item,citem){
      this.navCtrl.push("LookevaluatePage",{type:0,orderid:item.order_id,goodsid:citem.goods_id})
  }
  shopoder(){
    this.navCtrl.push("ShippingoderPage")
  }
  // 立即付款
  order(item,citem){
    //this.navCtrl.push("OrderPage")
	this.actionSheetCtrl.create({
		  buttons: [
			{
			  text: "支付宝支付",
			  handler: () => {
			   this.aliPay(item);
			  }
			},
			{
			  text: "微信支付",
			  handler: () => {
				this.weiXinPay(item);
			  }
			},
			{
			  text:"取消",
			  role: 'cancel'
			}
		  ]
		}).present();

		console.log(item)	

  }
	async weiXinPay(item){
		let payResult=await this.http.weixinor({orderid:item.order_id})
		console.log(payResult)	
		var params = {
          partnerid:payResult.object.partnerid, // merchant id
          prepayid: payResult.object.prepayid, // prepay id
          noncestr: payResult.object.noncestr, // nonce
          timestamp: payResult.object.timestamp+"", // timestamp
          sign: payResult.object.sign // signed string
        };
		this.wechatChenyu.sendPaymentRequest(params).then((result)=>{
          //支付成功
          this.queryapporderlist()
        },(error)=>{
         //支付失败
          this.http.presentToast('支付失败')
        })


	}

	unescapeHTML(a){
	  let aNew = "" + a;
		 return aNew.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
	 }

	async aliPay(item){
		let data=await this.http.alipay({orderid:item.order_id})
		console.log(data)

		let payInfo=this.unescapeHTML(data);
		  /*cordova.plugins.alipay.payment(payInfo,(success)=>{
			success.resultStatus==="9000"?this.paySuccess(sn): this.payFailed();
			//支付成功
			this.queryapporderlist();
		  },(error)=>{
			//支付失败
			this.http.presentToast('支付失败')
		  });*/


	}

	
/*
	async goalipay() {
    let that = this;
    console.log(this.httpResponseData)
    this.alipay.pay(this.httpResponseData)
      .then(res => {
        
        if(res.resultStatus=='4000'){
          this.nativeService.showToast('订单支付失败');
        }
        if(res.resultStatus=='6001'){
          console.log(res.resultStatus);
        }
        if(res.resultStatus=='9000'){
          this.info.status = 2;
          console.log('成功');
          this.viewCtrl.dismiss();
        }
        
        console.log('res',res.resultStatus)
        console.log('memo',res.memo)

      }, err => {
        console.log('err')

      })
      .catch(e => {
          that.info.status = 2;
          this.viewCtrl.dismiss();
      });

  }
*/
  gouout(){
	this.navCtrl.push("RefundPage")
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AllordersPage');
  
  }

  ionViewWillEnter(){
  		this.queryapporderlist()
    //this.statuslist()
  }
async queryapporderlist(){
	let params = {
			order_status:this.order_status
		}
  	
	let res = await this.http.queryapporderlist(params)
	if(res.info=="ok"){
		this.order_list = res.arrayList
	}else{
		this.order_list = [];
	}
}
 async statuslist(){
   let parmas={
    pageNum	:1,		
    rowsPrePage:10	,	
    order_status:this.order_status
   }
	let res=await this.http.statuslist(parmas)
	console.log(res)
  }
  status(index){
    this.order_status=index
    this.statuslist()
	console.log(index)
  }


	// 取消订单
  cancelOrder(item){
	const confirm = this.alertCtrl.create({
      title: '确定要取消订单吗？',
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: data => {
				console.log('cancelOrder',item)
          }
        }
      ]
    });
    confirm.present();
  }
  
  goodsdetail(item){
	this.navCtrl.push("StoreproductviewPage",{goodsid:item.goods_id})
  }

  goShop(shopid){
  	this.navCtrl.push("StorecenterPage",{shopid:shopid})
  }

}
