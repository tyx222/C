import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the StorestaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storestaff',
  templateUrl: 'storestaff.html',
})
export class StorestaffPage {
	lists:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorestaffPage');
	this.list()
  }

  add(data){
	this.lists.push({name:"测试3",work:"员工",avatar:"./assets/imgs/loginLogo.png",id:1})
  }

  list(){
	this.lists.push({name:"测试1",work:"员工",avatar:"./assets/imgs/loginLogo.png",id:1})
	this.lists.push({name:"测试2",work:"员工",avatar:"./assets/imgs/loginLogo.png",id:2})
  }
  del(index){
	this.lists.splice(index,1)
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: '添加员工',
      message: "输入员工数字ID即可",
      inputs: [
        {
          name: 'id',
          placeholder: '员工ID'
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
		  	this.add(data)
            console.log(data);
          }
        }
      ]
    });
    prompt.present();
  }

}
