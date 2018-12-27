import { Component } from '@angular/core';
import { UserService } from "./../../app/shared/service/user.service";
import { IpamPage } from "./../ipam/ipam";
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { DefaultAppConfig } from "./../../app/app.config";

/**
 * Generated class for the LookevaluatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lookevaluate',
  templateUrl: 'lookevaluate.html',
})
export class LookevaluatePage {
	goods:any =[];
	shopName = "";
	shop={};
	commects = [];
	total = 0;
	ipamord = {
		myname: "",
		ipone: "",
		order: ""
	  };
  get imgUrl(): string {
	return this.appConfig.ip + 'imgs/';
  }
  cityid
  type = 1 //0买家 1卖家
  order_id
  goods_id
  buyerid=""
  buyerCommentCount = 0
  salerid=""
  salerCommentCount = 0
  orderinfo:any = {}
  goodssumprice=0
  constructor(
    public navCtrl: NavController,
	public appConfig: DefaultAppConfig,
    public navParams: NavParams,
	public alertCtrl: AlertController,
    private http: UserService,
    private actionSheetCtrl:ActionSheetController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LookevaluatePage');
  }
  ionViewWillEnter() {
  	// type 0买家评论 1卖家评论
  	this.type = this.navParams.get('type')
	this.goods_id = this.navParams.get('goodsid')
	this.order_id = this.navParams.get('orderid')
	console.log(this.goods_id)
	console.log(this.order_id)
	console.log(this.type)
	this.getDetail()
    this.address();
    
  }
	async getDetail(){
		
		let res = await this.http.queryappdtailOrderlist({orderid:this.order_id})
		if(res.info=="ok"){
			this.orderinfo = res.object
			this.goods = res.arrayList
			this.goods.forEach((val)=>{
				this.goodssumprice += val.unit_price
			})
			this.buyerid = res.object.client_id
			console.log(res)
			let res1 = await this.http.queryshopbyshopid({shopid:this.orderinfo.shopid})
			if(res1.info=="ok"){
				this.shop = res1.object
				this.salerid = res1.object.client_id
				this.shopName = res1.object.shop_name
			}
			//this.getComment();
		}
	}
  async getComment(){
	let res = await this.http.queryevaluatelist({goodid:this.goods_id})
	if(res.info=="ok"){
		this.commects = res.arrayList
		res.arrayList.forEach((val,index)=>{
			if(val.client_id==this.buyerid){
				this.buyerCommentCount++
			}
			if(val.client_id==this.salerid){
				this.salerCommentCount++
			}
			val.evaluateContentList.forEach((v,i)=>{
				this.commects[index]["evaluateContentList"][i]["path"] = v.path.split(',')
			})
			
		})
		console.log(res)
	}
  }



 

  //追平
  zping(evaluate_id){
	const prompt = this.alertCtrl.create({
      title: '追加评论',
      inputs: [
        {
          name: 'content',
          placeholder: '输入评论内容'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '保存',
          handler: data => {
		  	this.addzping(data,evaluate_id)
          }
        }
      ]
    });
    prompt.present();
  }

  addzping(data,evaluate_id) {
  		var params = {
			goodid: this.goods_id,
			orderid:this.order_id,
			father_id:evaluate_id

		}
      console.log(data);

  }

	// 评论
  pingl(){
	this.navCtrl.push("EvaluatePage",{type:this.type})

  }

   async address() {
    let parmas = {
      mytoken: localStorage.getItem("mytoken")
    };
    let res = await this.http.address(parmas);
	if(res.arrayList.length<1){
		return
	}else{
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
        this.cityid=res.arrayList[0].id
	}
    console.log(res);
    
  }

}
