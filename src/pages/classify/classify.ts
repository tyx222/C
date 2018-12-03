import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from "./../../app/shared/service/user.service";

/**
 * Generated class for the ClassifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classify',
  templateUrl: 'classify.html',
})
export class ClassifyPage {
	cateId
	cateTitle
	cateList:any = []
  constructor(
  public navCtrl: NavController, 
  public http: UserService, 
  public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassifyPage');
	this.queryclasslist()
  }

  // 查找分类
 async queryclasslist(){

	let res =  await this.http.queryclasslist()

	if(res.info == 'ok'){
		this.cateList = res.arrayList
	}
}


  checkClass(item){
	this.cateId = item.classify_id;
	this.cateTitle = item.classify_name;
  }


}
