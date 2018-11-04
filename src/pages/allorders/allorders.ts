
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../app/shared/service/user.service';


/**
 * Generated class for the AllordersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allorders',
  templateUrl: 'allorders.html',
})
export class AllordersPage {
  order_status=0
  constructor(private http:UserService, public navCtrl: NavController, public navParams: NavParams) {
  }
  goevaluate(){
    this.navCtrl.push("EvaluatePage")
  }
  shopoder(){
    this.navCtrl.push("ShippingoderPage")
  }
  order(){
    this.navCtrl.push("OrderPage")
  }
  gouout(){
this.navCtrl.push("RefundPage")
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AllordersPage');
  
  }

  ionViewWillEnter(){
    this.statuslist()
  }

 async statuslist(){
   let parmas={
    pageNum	:1,		
    rowsPrePage:10	,	
    order_status:this.order_status
   }
let res=await this.http.statuslist(parmas)
console.log(res)
  }
  status(index){
    this.order_status=index
    this.statuslist()
console.log(index)
  }

}
