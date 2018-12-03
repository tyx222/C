import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MyHttpService } from "./../../app/shared/service/my-http.service";
import { UserService } from "./../../app/shared/service/user.service";

/**
 * Generated class for the StorecollectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storecollect',
  templateUrl: 'storecollect.html',
})
export class StorecollectPage {
	collect = [];
	total:number = 0;
	isCheckAll = false
	checkTxt = '全选'
	checks=[];
	  imgUrl = "http://116.62.219.45/imgs/";

  constructor(public navCtrl: NavController,public http: UserService,public myhttp: MyHttpService, public alertCtrl: AlertController,  public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
	  this.getCollect()
  }

	
	checkAll(){
		if(!this.collect){
			return
		}
		if(this.isCheckAll){
			this.checkTxt = '全选'
			this.collect.forEach((val,index)=>{
				this.checks[index] = false
			})
			this.isCheckAll = false

		}else{

			this.checkTxt = '取消全选'
			this.collect.forEach((val,index)=>{
				this.checks[index] = true
			})
			this.isCheckAll = true
		}
		
	}
	async getCollect() {
   		let res = await this.http.querycollectionlist({_time:1})
   		if(res.info=='ok'){
			this.collect = res.arrayList;
			if(res.arrayList){
				res.arrayList.forEach((val,index)=>{
					this.checks[index] = false
				})
			}
		}else{
			this.collect = [];
		}
		
	  }
	  
	  removeItem(collection_id,index) {
	  	let self = this
	  	const confirm = this.alertCtrl.create({
		  title: '确定要移出收藏夹?',
		  buttons: [
			{
			  text: '取消',
			  handler: () => {
				console.log('Disagree clicked');
			  }
			},
			{
			  text: '确定',
			  handler: () => {
				self.collect.splice(index,1)
				self.http.deletecollection({collection_id:collection_id})

			  }
			}
		  ]
		});
		confirm.present();
		
	  }

	  check(index) {
		this.checks[index] = !this.checks[index];
	  }

	  dels(){
	  	let self = this
	  	const confirm = this.alertCtrl.create({
		  title: '确定要移出收藏夹?',
		  buttons: [
			{
			  text: '取消',
			  handler: () => {
				console.log('Disagree clicked');
			  }
			},
			{
			  text: '确定',
			  handler: () => {
			  	self.myhttp.showLoading('请稍等...')
				self.collect.forEach((val,index)=>{
					if(self.checks[index]==true){
						self.http.deletecollection({collection_id:val.collection_id})
					}
				})
				setTimeout(()=>{
					self.myhttp.hideLoading()
					self.http.presentToast('删除成功')
					self.isCheckAll = false
					self.checkTxt = '全选'
					self.getCollect()
				},1000);
				


			  }
			}
		  ]
		});
		confirm.present();
	  }

}
