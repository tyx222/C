import { CalendarComponentOptions } from 'ion2-calendar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController  } from 'ionic-angular';

import { DatePickerProvider } from 'ionic2-date-picker';
import { UserService } from '../../app/shared/service/user.service';
/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  petids:any
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public navParams: NavParams,private datePickerProvider: DatePickerProvider,private http:UserService ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
    this.petids=this.navParams.data
  }
  ionViewWillEnter(){
    this.petids=this.navParams.data
    console.log(this.petids)
    this.initlist()
  }
async initlist(){
console.log(new Date().getTime())
  this.petids=this.navParams.data
  let parmas={
    calendartime:new Date().getTime(),
    petcardid:this.navParams.data.id
  }
  let res=await this.http.queryCalendar(parmas)
  console.log(res)
}


}
