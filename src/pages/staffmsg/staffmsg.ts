import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../app/shared/service/user.service';

/**
 * Generated class for the StaffmsgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staffmsg',
  templateUrl: 'staffmsg.html',
})
export class StaffmsgPage {
	lists=[]
	shop = {}
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffmsgPage');
	this.list()
  }

  async list(){
		let shopid = JSON.parse(localStorage.getItem("storeinfo")).shop_id
		let res = await this.http.queryclerklist({shopid});
	if(res.info=="ok"){
		this.lists = res.arrayList;
		this.shop = res.object
	}
	//this.lists.push({name:"测试1",work:"员工",avatar:"./assets/imgs/loginLogo.png",id:1,status:0})
	//this.lists.push({name:"测试2",work:"员工",avatar:"./assets/imgs/loginLogo.png",id:2,status:0})
  }
	// type 1 同意 0拒绝
  async set(index,type){
  	let params = {
		shop_clientid:this.lists[index].shop_clientid,
		status:type
	}
  	let res = await this.http.choiceclerk(params)
	if(res.info=="ok"){
		this.http.presentToast('操作成功')
		this.list()
	}else{
		this.http.presentToast('操作失败')

	}
  }


}
