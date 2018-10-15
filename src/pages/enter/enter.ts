import { ReviceServeProvider } from './../../providers/revice-serve/revice-serve';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EnterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enter',
  templateUrl: 'enter.html',
  providers:[ReviceServeProvider]
})
export class EnterPage {
  listData = []
  myDate='' 
    items = [
      {title: 'item1'},
      {title: 'item2'},
      {title: 'item3'},
      {title: 'item4'},
      {title: 'item5'},
      {title: 'item6'}]
  constructor(public navCtrl: NavController, public navParams: NavParams,public reviceServe:ReviceServeProvider) {
 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnterPage');
    this.getRequestContact();
  }
  getRequestContact() {
    this.reviceServe.getRequestContact().subscribe(res => {
        this.listData = res.json();
        console.log(res.json())
    }, error => {
        console.log(error);
    })
}

removeItem(item){
 
  for(let i = 0; i < this.items.length; i++) {

    if(this.items[i] == item){
      this.items.splice(i, 1);
    }
  }
}
}
