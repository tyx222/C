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
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffmsgPage');
	this.list()
  }

  async list(){
  	let res = await this.http.querymyclerklist();
	if(res.info=="ok"){
		//this.lists = res.arrayList;
	}
	this.lists.push({name:"测试1",work:"员工",avatar:"./assets/imgs/loginLogo.png",id:1,status:0})
	this.lists.push({name:"测试2",work:"员工",avatar:"./assets/imgs/loginLogo.png",id:2,status:0})
  }
	// type 1 同意 2拒绝
  set(shop_clientid,type){
	//this.lists[index].status=type
	//this.http.choiceclerk({shop_clientid:shop_clientid,status:type})
  }


}
