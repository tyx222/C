import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserService } from "./../../app/shared/service/user.service";

/**
 * Generated class for the StoreevaluatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storeevaluate',
  templateUrl: 'storeevaluate.html',
})
export class StoreevaluatePage {
	goodsid=""
	commects = []
  constructor(public navCtrl: NavController, public http: UserService, public navParams: NavParams, public alertCtrl: AlertController) {
  	this.goodsid = this.navParams.get("goods_id")
  }

  ionViewDidLoad() {
  	this.getComment()
    console.log('ionViewDidLoad StoreevaluatePage');
  }

  async getComment(){
	let res = await this.http.queryevaluatelist({goodid:this.goodsid})
	if(res.info=="ok"){
		this.commects = res.arrayList
		res.arrayList.forEach((val,index)=>{
			val.evaluateContentList.forEach((v,i)=>{
				this.commects[index]["evaluateContentList"][i]["path"] = v.path.split(',')
			})
			
		})
		console.log(res)
	}
  }

  reply(item){
	const prompt = this.alertCtrl.create({
      title: '商家回复',
      inputs: [
        {
          name: 'content',
          placeholder: '输入回复内容'
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
		  	this.replyadd(data,item)
          }
        }
      ]
    });
    prompt.present();
  }

  async replyadd(txt,item){

  	let params = {
		 goodid: item.goodid,
		orderid: item.orderid,
		father_id:item.evaluate_id,
		level:"5",
		type:1,
		evaluatecontentlist:[{
			path:"",
			text:txt
		}]
	}
	let res = await this.http.addevaluate({jsonPramter:JSON.stringify(params)})
	if(res.info=="ok"){
		this.http.presentToast("回复成功")
	}else{
		this.http.presentToast(res.info)
	}
  }
}
