import { CalendarComponentOptions } from 'ion2-calendar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController  } from 'ionic-angular';

import { DatePickerProvider } from 'ionic2-date-picker';
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
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public navParams: NavParams,private datePickerProvider: DatePickerProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
   
    // this.showCalendar()
  }
  ionViewWillEnter(){
    this.petids=this.navParams.data
    console.log(this.petids)
  }



}
