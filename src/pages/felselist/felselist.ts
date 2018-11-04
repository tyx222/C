import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../app/shared/service/user.service';

/**
 * Generated class for the FelselistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-felselist',
  templateUrl: 'felselist.html',
})
export class FelselistPage {
felselist=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FelselistPage');
  }
  ionViewWillEnter(){
   this.navParams.get("petcardid")
 this.list()
  }
 async list(){
   let parmas={
    petcardid:this.navParams.get("petcardid")
   }
 let res=await this.http.queryPetConcernclientlist(parmas)
 console.log(res)
// this.felselist=res.listdata
  }

}
