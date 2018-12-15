
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { UserService } from '../../app/shared/service/user.service';
import { WechatChenyu } from "wechat-chenyu";
import { DefaultAppConfig } from "./../../app/app.config";
declare let cordova;
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
    this.navCtrl.push("EvaluatePage",{type:0,orderid:item.order_id,goodsid:citem.goods.goods_id,cover:this.imgUrl+citem.goods.cover})
  }
  lookevaluate(item,citem){
      this.navCtrl.push("LookevaluatePage",{type:0,orderid:item.order_id,goodsid:citem.goods.goods_id})
  }
  shopoder(){
    this.navCtrl.push("ShippingoderPage")
  }

  async shouhuo(order_id){
	let res = await this.http.updateorderstatus({orderid:order_id,status:"3"})
	if(res.info=="ok"){
		this.http.presentToast("收货成功")
		this.queryapporderlist()
	}else{
		this.http.presentToast("收货失败")
	}
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
		var prepay = payResult.object.package.split("=");
		var params = {
          partnerid:"1510171201",//payResult.object.partnerid, // merchant id 商户号
          prepayid: prepay[1], // prepay id
          noncestr: payResult.object.nonceStr, // nonce
          timestamp: payResult.object.timeStamp, // timestamp
          sign: payResult.object.sign // signed string
        };
		
		this.http.presentToast(JSON.stringify(params))

		this.wechatChenyu.sendPaymentRequest(params).then((result)=>{
          //支付成功
		  this.http.presentToast(JSON.stringify(result))

          this.queryapporderlist()
        },(error)=>{
         //支付失败
          this.http.presentToast(JSON.stringify(error))
        })


	}

	unescapeHTML(a){
	  let aNew = "" + a;
		 return aNew.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
	 }

	async aliPay(item){
		let data=await this.http.alipay({orderid:item.order_id})
		console.log(data)
		try{
			let payInfo=this.unescapeHTML(data);
			this.http.presentToast(payInfo)
			  cordova.plugins.alipay.payment(payInfo,(success)=>{
				if(success.resultStatus==="9000"){
					this.http.presentToast('支付成功')
					this.queryapporderlist();
				}else{
					this.http.presentToast('支付失败')
				}
			  },(error)=>{
				//支付失败
				this.http.presentToast('支付失败')
			  });
		}catch(err){
			this.http.presentToast('调用支付失败')
		}
		

	}

	
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
    this.queryapporderlist()
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
	this.navCtrl.push("StoreproductviewPage",{goodsid:item.goods.goods_id})
  }

  goShop(shopid){
  	this.navCtrl.push("StorecenterPage",{shopid:shopid})
  }

}
