import { Component } from '@angular/core';
import { UserService } from "./../../app/shared/service/user.service";
import { IpamPage } from "./../ipam/ipam";
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';

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
	total = 0;
	ipamord = {
		myname: "",
		ipone: "",
		order: ""
	  };
  imgUrl = "";
  cityid
  type = 1
  order_id
  goods_id
  orderinfo:any = {}
  constructor(
    public navCtrl: NavController,
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
	this.getComment();
    
  }
	async getDetail(){
		
		let res = await this.http.queryappdtailOrderlist({orderid:this.order_id})
		if(res.info=="ok"){
			this.orderinfo = res.object
			console.log(res)
		}
	}
  async getComment(){
	let res = await this.http.queryevaluatelist({goodid:this.goods_id})
	if(res.info=="ok"){
		console.log(res)
	}
  }

  //追平
  zping(){
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
		  	this.addzping(data)
          }
        }
      ]
    });
    prompt.present();
  }

  addzping(data) {
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
