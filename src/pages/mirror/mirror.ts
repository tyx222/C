
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the MirrorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mirror',
  templateUrl: 'mirror.html',
})
export class MirrorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MirrorPage');
  }
  gopushdiary(){
    this.navCtrl.push("PushdiaryPage")
  }
  goDiary(){
    this.navCtrl.push("DiaryPage")
  }
  video(){
    this.navCtrl.push("VideoPage")
  }
}
