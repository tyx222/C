import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../app/shared/service/user.service';

/**
 * Generated class for the ToushilistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toushilist',
  templateUrl: 'toushilist.html',
})
export class ToushilistPage {
list=[]
type
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToushilistPage');
    this.type=this.navParams.get('type')
    this.querypetfeedinglist()
  }

async  querypetfeedinglist(){
let parmas={
  reciveclientid:localStorage.getItem("mytoken"),
  rowsPrePage:50,
  pageNum:1
}
let res= await this.http.querypetfeedingclientlist(parmas)
this.list=res.arrayList
  }
}
