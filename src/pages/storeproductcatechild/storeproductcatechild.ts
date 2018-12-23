import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { UserService } from "./../../app/shared/service/user.service";

/**
 * Generated class for the StoreproductcatechildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storeproductcatechild',
  templateUrl: 'storeproductcatechild.html',
})
export class StoreproductcatechildPage {
  parentId:string = ''
  parentTitle
  cateId:string = ''
  cateTitle:string = ''
  cateupdateinfo:any = {}
  cateList:any = []
  constructor(public http: UserService, public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams, public modalCtrl: ModalController) {
	this.parentId = navParams.get('cateId')
  	this.parentTitle = navParams.get('cateTitle')

  }

		
  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreproductcatePage');
    this.queryshopclassify();
  }

 // 查找商家店铺分类
 async queryshopclassify(){
	let params = {
		mytoken: localStorage.getItem("mytoken"),
		parentid:this.parentId
	};

	let res =  await this.http.queryshopclassify(params)

	if(res.info == 'ok'){
		this.cateList = res.arrayList
	}
}	
	
			
				
  
  addCate(){
    this.cateId = '';
    this.cateTitle = '';
  }
  // 添加子分类
  addChild(){
  	this.navCtrl.push("StoreproductcatechildPage",{cateId:this.cateId,cateTitle:this.cateTitle})
  }

  checkClass(item){
  	this.cateupdateinfo = item
	this.cateId = item.classify_id;
	this.cateTitle = item.classify_name
  }


  presentToast(msg) {
	  let toast = this.toastCtrl.create({
		message: msg,
		duration: 3000,
		position: 'top'
	  });

	  toast.onDidDismiss(() => {
		console.log('Dismissed toast');
	  });

	  toast.present();
}


// 保存分类
  async saveCate(){
	if(this.cateTitle==''){
      return 
    }
    let params = {
		classify_name:this.cateTitle,
		classify_key:this.cateTitle,
		type:0,
		mytoken: localStorage.getItem("mytoken")
    }
	    console.log(JSON.stringify(params));
	if(this.cateId!=''){
		
		let res = await this.http.updateshopclassify({classifyid:this.cateId,classify_name:this.cateTitle})
		if(res.info=="ok"){
			this.cateId=''
			this.cateTitle = '';
			this.presentToast('保存成功')
			this.queryshopclassify();
		}
	}else{
	    let res = await this.http.addshopclassify(params)
		if(res.info=="ok"){
			this.cateId=''
			this.cateTitle = '';
			this.presentToast('保存成功')
			this.queryshopclassify();
		}

	}
    
  }

   
  async delCate(){
  	if(this.cateId == ''){
		return 
	}
	let res = await this.http.deleteshopclassify({classifyid:this.cateId});
	if(res.info == 'ok'){
		this.cateList.forEach((val, idx, array) => {
			// val: 当前值
			// idx：当前index
			// array: Array
			if(val.classify_id==this.cateId){
				this.cateList.splice(idx,1);
				this.cateTitle = '';
				this.cateId = '';
			}
		});

	}
  }

  linkProduct(){
  	if(this.cateId == '' || this.cateTitle == ''){
		this.presentToast('请先设置分类,再关联商品')
		return
	}
    this.navCtrl.push("StorelinkproductPage",{cateId:this.cateId})
    /*const modal = this.modalCtrl.create('StorelinkproductPage',{cateId:this.cateId});
    modal.onDidDismiss(data => {
     console.log(data);
   });
    modal.present();*/
  }

  openShop(){
	let params = {
	      mytoken: localStorage.getItem("mytoken"),
	      status:1
	    };
	    this.http.updateshopstatus(params)
	    
  }
}
