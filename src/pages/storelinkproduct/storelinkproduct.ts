import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserService } from "./../../app/shared/service/user.service";

/**
 * Generated class for the StorelinkproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storelinkproduct',
  templateUrl: 'storelinkproduct.html',
})
export class StorelinkproductPage {
  myInput: string = ''
  proList:any = []
  proIds:any = []
  type:string = 'no'
  imageUrl:string = ''
  cateId = ''
  pageNum:number = 1
  storeinfo:any={}
  constructor(public navCtrl: NavController, public http: UserService, public navParams: NavParams, public viewCtrl:ViewController) {
	this.cateId = this.navParams.get('cateId');
	console.log(this.cateId)
  }

  ionViewDidLoad() {
  	this.storeinfo = JSON.parse(localStorage.getItem("storeinfo"))
    this.queryshopclassifygoodlist()
  }

	checkpro(proid){
		let index  = this.proIds.indexOf(proid);
		if(index == -1){
			this.proIds.push(proid)
		}else{
			this.proIds.splice(index ,1)
		}


    }

    onInput(){
        console.log(this.myInput)
		this.querygoodsbyseach()
    }

    onCancel(){

    }

	// 保存商品归类
    async save(){
		
		let goodsidlist = [];
		this.proIds.forEach((val,idx,arr)=>{
			goodsidlist.push({goods_id:val})
		})
		let params = {
			goodsidlist:goodsidlist
		}
		let datas = {
			shop_classifyid:this.cateId,
			jsonPramter:JSON.stringify(params)
		}

		if(this.type=='yes'){ // 去掉关联
			datas.shop_classifyid='0'
		}
		if(this.type=='no'){ // 去掉关联
			datas.shop_classifyid=this.cateId
		}
		
		let res = await this.http.updategoodshopclassify(datas)
		if(res.info == 'ok'){
			this.http.presentToast('操作成功')
		}else{
			this.http.presentToast('操作失败')
		}
		this.navCtrl.pop()
    }

	//关联按钮点击事件 yes已关联 no未关联
	link(type){
		this.type = type
		if(this.type=='yes'){
			this.queryshopgoods()
		}else{
			this.queryshopclassifygoodlist()
		}
		
	}



    dismiss() {
        this.viewCtrl.dismiss();
    }

	// 已经关联的列表
	async queryshopgoods(){
		let params = {
			shop_classify_id:this.cateId,
			shopid:this.storeinfo.shop_id
		}
		let res = await this.http.querygoodsbyseach({jsonPramter:JSON.stringify(params)})

		if(res.info == 'ok'){
			if(res.arrayList && res.arrayList.length>0){
				this.proList = res.arrayList;
			}else{
				this.proList = []
			}
		}else{
			this.proList = []
		}
	
	}
	// 未关联分类的商品列表
	async queryshopclassifygoodlist(){
		let params = {
			shop_classify_id:"0",
			shopid:this.storeinfo.shop_id
		}
		let res = await this.http.querygoodsbyseach({jsonPramter:JSON.stringify(params)})
		if(res.info == 'ok'){
			if(res.arrayList && res.arrayList.length>0){
				this.proList = res.arrayList;
			}else{
				this.proList = []
			}
		}else{
			this.proList = []
		}
	}
	
	// 关键字搜索
	async querygoodsbyseach(){
		let params={}
			params["shopid"] = this.storeinfo.shop_id

		if(this.myInput!=''){
			params["goods_name"] = this.myInput
		}
		if(this.type=="no"){
			params["shop_classify_id"] = "0"
		}
		if(this.type=="yes"){
			params["shop_classify_id"] = this.cateId
		}
		let res = await this.http.querygoodsbyseach({jsonPramter:JSON.stringify(params)})
		if(res.info == 'ok'){
			if(res.arrayList && res.arrayList.length>0){
				this.proList = res.arrayList;
			}else{
				this.proList = []
			}
		}else{
			this.proList = []
		}
	}

}
