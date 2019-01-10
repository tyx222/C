import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController,
  AlertController
} from "ionic-angular";
import { ImagePicker, ImagePickerOptions } from "@ionic-native/image-picker";
import { Camera, CameraOptions } from "@ionic-native/camera";
import {
  MediaCapture,
  MediaFile,
  CaptureError,
  CaptureImageOptions,
  MediaFileData,
  ConfigurationData
} from "@ionic-native/media-capture";
import { VideoEditor } from "@ionic-native/video-editor";
import { File } from "@ionic-native/file";
import { ImgServiceProvider } from "../../providers/img-service/img-service";
import { UserService } from "./../../app/shared/service/user.service";
import { MyHttpService } from "./../../app/shared/service/my-http.service";

import { DefaultAppConfig } from "./../../app/app.config";

/**
 * Generated class for the PardackpushPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-pardackpush",
  templateUrl: "pardackpush.html"
})
export class PardackpushPage {
	type = "";
	navGoodsInfo:any = false
	zhekou;
	proClassify:number ;
	proClassifyList:any = [];
	propertylist:any = [];
	brandList:any=[];
	childs:any=[];
	childids:any=["","",""];
	childid:string="";
	guigeList:any = [
		{specifications_name:"",specifications_size:"",specifications_price:"",postage:"",cover:"assets/imgs/images/dsp.png",display_price:""}
	];
	slides:any = ["68094a1351e0323ce804ddb403b85f86.jpg"];	
	remarkimgs:any = ["68094a1351e0323ce804ddb403b85f86.jpg"];
	video_cover_isup:any = false;
	video_cover:string='./assets/imgs/images/dsp.png';
	selectOptions:any;
	imageUrl:string = "";
	proData:any = {
		goods_name:'',
		goods_price:'0',
		goods_introduce:'介绍',
		goods_key:'',
		living:0,
		postage:'0',
		brand_id:'',
		shopid:'',
		classify_id:'',
		specification:'',
		stock:'1',
		favorable_price:'1',
		deposit:'0',
		propterty:[],
		specifications:[],
		turns_picture:['68094a1351e0323ce804ddb403b85f86.jpg'],
		video_path:'f9e3315645f9696fcc7864c0ca797dac.mp4',
		cover:'',
		status:'1',

	}
  constructor(
    public navCtrl: NavController,
	public http: UserService,
	public myhttp: MyHttpService,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private mediaCapture: MediaCapture,
    private videoEditor: VideoEditor,
    private file: File,
    private devolup: ImgServiceProvider,
	public appConfig: DefaultAppConfig
  ) {
	this.selectOptions = {
	  title: '请选择'
	};
	this.imageUrl = this.appConfig.ip + 'imgs/';
	//this.navGoodsInfo = this.navParams.get('goodsinfo')
  }

  ionViewDidLoad() {
	
	if(this.navParams.get('goodsinfo')!=undefined ){
		var navGoodsInfo = this.navParams.get('goodsinfo')
		this.goodsInfo(navGoodsInfo.goods_id)
	}else{
		this.queryclasslist();
	}
    console.log("ionViewDidLoad PardackpushPage");
  }

  async goodsInfo(goods_id){
  	let res = await this.http.querygoods({goodsid:goods_id});
	if(res.info=="ok"){
		this.navGoodsInfo = res.object;
		this.guigeList = res.arrayList;
		if(this.navGoodsInfo.goods_introduce!=''){
			this.remarkimgs = this.navGoodsInfo.goods_introduce.split(',')
		}
		if(this.navGoodsInfo.turns_picture!=''){
			this.slides = this.navGoodsInfo.turns_picture.split(',')
		}
		if(this.navGoodsInfo.video_path!=''){
			this.video_cover_isup = true
		}
		
		this.proData.goodid = this.navGoodsInfo.goods_id
		this.proData.goods_name = this.navGoodsInfo.goods_name
		this.proData.goods_price = this.navGoodsInfo.goods_price
		this.proData.living = this.navGoodsInfo.living||'0'
		this.proData.postage = this.navGoodsInfo.postage||0
		this.proData.brand_id = this.navGoodsInfo.brand_id
		this.proData.classify_id = this.navGoodsInfo.classify_id
		this.proData.favorable_price = this.navGoodsInfo.favorable_price
		this.proData.shopid = this.navGoodsInfo.shopid
		this.proData.cover = this.navGoodsInfo.cover
		this.proData.deposit = this.navGoodsInfo.deposit
		this.proData.status = this.navGoodsInfo.status
		this.proData.specification = this.navGoodsInfo.specifications
	}
			console.log(this.proData)
		console.log(this.guigeList)

	this.queryclasslist();
  }

  check(type){
	  this.type = type
  }

  // 查询全局分类
 async queryclasslist(){
	let res = await this.http.queryclasslist();
	if(res.info=="ok"){
		this.proClassifyList = res.arrayList;
		
	}
 }
	
	//折扣变化
 setzhekou(ev){
	if(ev!='' && ev>0 ){
		this.guigeList.forEach((val, idx, array) => {
			this.guigeList[idx]['specifications_price'] = (this.guigeList[idx]['display_price'] * (ev/10)).toFixed(2)
		 });
	}
 }

 setprice(ev,index){
	if(ev>0 && this.zhekou!='' && this.zhekou > 0 ){
		this.guigeList[index]['specifications_price'] = (ev * (this.zhekou/10)).toFixed(2)
	}
 }

 childChange(index){
	this.queryclasschildlist(this.childids[index-1],index)
	this.childid = this.childids[index-1];
 }

 packagTypeChange(){
	if(this.proData.classify_id!=''){
		this.queryclassbrandlist();
		this.querypropertylist()
	}
		this.queryclasschildlist(this.proData.classify_id,0)
 }

 // 查询全局分类下的品牌
 async queryclassbrandlist(){
 	if(this.proData.classify_id==''){
		return
	}
 	let params = {
		classify_id:this.proData.classify_id,
		pageNum:1,
		rowsPrePage:10
	}
	let res = await this.http.queryclassbrandlist(params);
	if(res.info=="ok"){
			this.brandList = res.arrayList;
		}

		
 }

 // 查询全局分类下的子分类
 async queryclasschildlist(classify_prentid,index){
 	if(this.proData.classify_id==''){
		return
	}
 	let params = {
		classify_prentid:classify_prentid
	}
	let res = await this.http.queryclasschildlist(params);
	if(index==0){
		this.childids = ["","",""];
		this.childid = "";
	}
	if(res.info=="ok"){
		if(res.arrayList&&res.arrayList.length>0){
			this.childs[index] = res.arrayList;
		}else{
			this.childs.splice(index,1)
		}
	}

	console.log(this.childs)
	console.log(this.childids)
	console.log(this.childid)

		
 }

	// 查询属性
  async querypropertylist(){
       let res = await this.http.querypropertylist({classify_id:this.proData.classify_id});
		if(res.info=="ok" && res.arrayList ){
			res.arrayList.forEach((val, idx, array) => {
				// val: 当前值
				// idx：当前index
				// array: Array
				let newProperty = {
					property_id:val.property_id,
					property_name:val.property_name,
					property_val:'',
					classify_id:val.classify_id
				}
				this.propertylist.push(newProperty);
			});
		}
  }

// 轮播图
 devoup() {
 	let selfs = this
    this.devolup.showPicActionSheet();
    this.devolup.upload.success = data => {
		if(data.info=="ok"){
			//selfs.imageUrl = data.imageUrl;
	  		selfs.slides.push(data.object.map.filename)
	  		selfs.http.presentToast('上传成功')
	  		console.log(data.object.map.filename)
			//selfs.proData.turns_picture.push(data.object.map.filename)
		}else{
			selfs.http.presentToast('上传失败')
		}
     };
  }
	
	//规格上传图片
  guigeimgup(index){
	let selfs = this
    this.devolup.showPicActionSheet();
    this.devolup.upload.success = data => {
		if(data.info=="ok"){
			//selfs.imageUrl = data.imageUrl;
	  		selfs.http.presentToast('上传成功')
	  		console.log(data.object.map.filename)
			selfs.guigeList[index].cover = data.object.map.filename
		}else{
			selfs.http.presentToast('上传失败')
		}
     };
  }

//视频
 videoup() {
 	let selfs = this
    this.devolup.choosePhoto(async res => {
		//console.log(JSON.stringify(res))
		//let r = await this.devolup.create([{"fullPath":res,"name":'thumbnail'}])
		//this.video_cover_isup = true;
		//this.video_cover = "file://" + r;
		//console.log('over', r )
		//return
	  selfs.myhttp.showLoading('视频上传中...');
      let mgs = await this.devolup.uploadByTransfer(res);
	  		console.log(JSON.stringify(mgs))

	  if(mgs.info=="ok"){
	  		selfs.http.presentToast('上传成功')
	  		console.log(mgs.object.map.filename)
			selfs.video_cover = "./assets/imgs/images/dsp.png"
			selfs.proData.video_path = mgs.object.map.filename
			selfs.video_cover_isup = true;
		}else{
			selfs.http.presentToast('上传失败')

		}
		selfs.myhttp.hideLoading()
    });
  }

  
  presentConfirm() {
  
}


// 描述图
  async remarkimg() {
  	if(this.proData.turns_picture.length>5){
		this.http.presentToast('抱歉，最多传只能传5张图')
		return
	}
	let selfs = this;
    this.devolup.showPicActionSheet();
    this.devolup.upload.success = data => {
		if(data.info=="ok"){
			//selfs.imageUrl = data.imageUrl;
			selfs.http.presentToast('上传成功')
			console.log(data.object.map.filename)
			selfs.remarkimgs.push(data.object.map.filename)
		}else{
			selfs.http.presentToast('上传失败')
		}
     };
    }

	delRemarkimg(i){
		let alert = this.alertCtrl.create({
		title: 'Confirm purchase',
		message: '确定要删除吗?',
		buttons: [
		  {
			text: '确定',
			handler: () => {
			  this.remarkimgs.splice(i,1)
			}
		  },
		  {
			text: '取消',
			handler: () => {
			}
		  }
		]
	  });
	  alert.present();

		
	}
	delSildes(i){
		let alert = this.alertCtrl.create({
		title: '提示',
		message: '确定要删除吗?',
		buttons: [
		  {
			text: '确定',
			handler: () => {
			   this.slides.splice(i,1)
			}
		  },
		  {
			text: '取消',
			handler: () => {
			}
		  }
		]
	  });
	  alert.present();
		
	}

  save(){
  	 if(this.guigeList[0].specifications_name=='' || this.guigeList[0].specifications_size=='' || this.guigeList[0].display_price=='' ||
	 	this.guigeList[0].specifications_price=='' || this.guigeList[0].postage=='' || this.guigeList[0].cover==''
	 ){
		this.http.presentToast('请至少填全一组商品规格信息')
		return false;
	 }
	 let propertys = []
	 let that = this
	 let storeinfo = JSON.parse(localStorage.getItem('storeinfo'))
	 this.propertylist.forEach((val, idx, array) => {
	 	let property = {};
		property[val.property_name] = val.property_val
		propertys.push(property)
	 });
	
	 // 商品规格
	 this.guigeList.forEach((val, idx, array) => {
		that.proData.specifications.push(val)
		if(val.specifications_price>that.proData.goods_price){
			that.proData.goods_price = val.specifications_price
		}
	 });

	 this.proData.shopid = storeinfo.shop_id;
	 this.proData.cover = this.slides[0]
	 this.proData.propterty = propertys;
 	 this.proData.goods_key = this.proData.goods_name;
	 this.proData.goods_introduce = this.remarkimgs.join(',')
	 this.proData.turns_picture = this.slides.join(',')
	 if(this.childid!=""){ //如果选择了子分类
		this.proData.classify_id = this.childid
	 }
	 console.log(JSON.stringify(this.proData)) ;
	 
	 if(this.navGoodsInfo){
		this.updategood()
	 }else{
		this.addgood()
	 }
	 
  }
	
	//增加规格
  addguige(){
	this.guigeList.push({specifications_name:"",specifications_size:"",specifications_price:"",postage:"",cover:"",display_price:""})
  }
	async updategood(){
		let res = await this.http.updategoods(this.proData)
		if(res.info=="ok"){
			this.http.presentToast('修改商品成功!')
			this.navCtrl.pop()
		}else{
			this.http.presentToast('修改商品失败!')
		}
	}
  async addgood(){
	let res = await this.http.addgood({jsonPramter:JSON.stringify(this.proData)})
	if(res.info=="ok"){
		this.http.presentToast('添加商品成功!')
		this.navCtrl.pop()
	}else{
		this.http.presentToast('添加商品失败!')
	}
  }

  // presentActionSheet() {
  //   const actionSheet = this.actionSheetCtrl.create({
  //     title: "Modify your album",
  //     buttons: [
  //       {
  //         text: "拍摄视频",
  //         handler: () => {
  //           this.takeVideo();
  //           console.log("Destructive clicked");
  //         }
  //       },
  //       {
  //         text: "选择视频",
  //         handler: () => {
  //           console.log("Archive clicked");
  //         }
  //       },
  //       {
  //         text: "取消",
  //         role: "cancel",
  //         handler: () => {
  //           console.log("Cancel clicked");
  //         }
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }

  // public takeVideo() {
  //   let options: MediaFileData = {
  //     codecs: "mp4",
  //     bitrate: 1500,
  //     height: 540,
  //     width: 960,
  //     duration: 15
  //   };
  //   this.mediaCapture.captureVideo(options).then(
  //     (data: MediaFile[]) => {
  //       this.ditor(data);
  //       console.log(data[0]["fullPath"]);
  //     },
  //     (err: CaptureError) => console.error(err)
  //   );
  // }

  // ditor(data) {
  //   console.log(data[0]["fullPath"]);

  //   let options = {
  //     fileUri: data[0]["fullPath"], // the path to the video on the device
  //     outputFileName: data[0]["name"], // the file name for the transcoded video
  //     saveToLibrary: true, // optional, defaults to true
  //     deleteInputFile: false, // optional (android only), defaults to false
  //     maintainAspectRatio: true, // optional (ios only), defaults to true
  //     width: 640, // optional, see note below on width and height
  //     height: 640, // optional, see notes below on width and height
  //     videoBitrate: 1000000, // optional, bitrate in bits, defaults to 1 megabit (1000000)
  //     fps: 24, // optional (android only), defaults to 24
  //     audioChannels: 2, // optional (ios only), number of audio channels, defaults to 2
  //     audioSampleRate: 44100, // optional (ios only), sample rate for the audio, defaults to 44100
  //     audioBitrate: 128000, // optional (ios only), audio bitrate for the video in bits, defaults to 128 kilobits (128000)
  //     progress: function(info) {
  //       console.log(info);
  //     } // info will be a number from 0 to 100
  //   };
  //   this.videoEditor
  //     .transcodeVideo(options)
  //     .then((fileUri: string) => {
  //       console.log(fileUri);
  //       this.create(data);
  //       this.filevideoget(fileUri, data);
  //     })
  //     .catch((error: any) => console.log("video transcode error", error));
  // }

  // create(data) {
  //   let options = {
  //     fileUri: data[0]["fullPath"],
  //     outputFileName: data[0]["name"],
  //     atTime: 1,
  //     width: 640,
  //     height: 640,
  //     quality: 80
  //   };
  //   this.videoEditor.createThumbnail(options).then((fileUri: string) => {
  //     this.fileimgget(fileUri, data);
  //   });
  // }

  // /**
  //  * 压缩后的视频
  //  * @param fileUri 压缩前的视频路径
  //  * @param data
  //  */
  // filevideoget(fileUri, data) {
  //   let evets = fileUri.split(data[0].name);
  //   let fileName = data[0].name + ".mp4";
  //   let Options = {};
  //   this.file
  //     .resolveDirectoryUrl("file://" + evets[0])
  //     .then(res => {
  //       this.file.getFile(res, fileName, Options).then(filedata => {
  //         console.log(filedata);
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  // /**
  //  * 压缩后的图片
  //  * @param fileUri
  //  * @param data
  //  */
  // fileimgget(fileUri, data) {
  //   let evets = fileUri.split(data[0].name);
  //   let fileName = data[0].name + ".jpg";
  //   let Options = {};
  //   this.file
  //     .resolveDirectoryUrl("file://" + evets[0])
  //     .then(res => {
  //       this.file.getFile(res, fileName, Options).then(filedata => {
  //         console.log(filedata);
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }
}
