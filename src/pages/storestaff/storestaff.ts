import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserService } from "./../../app/shared/service/user.service";

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
  datas: any = [];
  constructor(public navCtrl: NavController, public http: UserService, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorestaffPage');
    this.list()
  }

  async add(data) {
    let storeinfo = JSON.parse(localStorage.getItem("storeinfo"))
    let res = await this.http.addshopclient({ clientid: data + "", shop_id: storeinfo.shop_id })
    if (res.info == "ok") {
      this.http.presentToast('发出邀请成功')
    } else {
      this.http.presentToast('发出邀请失败')
    }
    //this.lists.push({name:"测试3",work:"员工",avatar:"./assets/imgs/loginLogo.png",id:1})
  }

  async list() {
    let storeinfo = JSON.parse(localStorage.getItem("storeinfo"))
    let res = await this.http.queryclerklist({ shopid: storeinfo.shop_id });
    if (res.info == "ok") {
      this.datas = res.arrayList;
    }
    console.log(this.datas)
  }

  async del(index) {
    console.log(index)
    // this.lists.splice(index,1)
    let res = await this.http.deleteclerk({ shop_clientid: index });

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
          text: '查询',
          handler: data => {
            this.queryclientunum(data.id)
            console.log(data);
          }
        }
      ]
    });
    prompt.present();
  }

  async queryclientunum(num) {
    //  判断是否邀请自己
    let mydata = JSON.parse(localStorage.getItem("mydata"))
    if (num === mydata.clientnum) {
      this.http.presentToast('不能邀请自己')
      return
    }
    let res = await this.http.queryclientunum({ clientunum: num + "" })
    if (res.info == "ok" && res.object != undefined) {
      this.showPeoplePrompt(res.object)
    } else {
      this.http.presentToast('搜索不到该用户')
    }
  }

  showPeoplePrompt(datas) {
    const prompt = this.alertCtrl.create({
      title: '是否邀请',
      message: "<p><img src='" + datas.headimgpath + "' width='40'/></p><p>" + datas.client_username + "</p>",
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '邀请',
          handler: data => {
            this.add(datas.client_id)
          }
        }
      ]
    });
    prompt.present();
  }

}
