
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the IpamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ipam',
  templateUrl: 'ipam.html',
})
export class IpamPage {
  letfbor=-1;
  mpindex=0
  ipml=0;
  myipam=[]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter (){
    this.letfbor=-1;
    this.myipam=JSON.parse(localStorage.getItem('myipam1'))
    console.log(localStorage.getItem('myipamindex'))
      this.mpindex=JSON.parse(localStorage.getItem('myipamindex'))

    if(JSON.parse(localStorage.getItem('myipam1'))!==null){
      this.ipml=JSON.parse(localStorage.getItem('myipam1')).length
    }
    console.log(this.myipam)
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad IpamPage');
  //   console.log(localStorage.getItem('myipam1'))
  //   this.myipam.push(JSON.parse(localStorage.getItem('myipam1')))
  //   console.log(this.myipam)
  // }
  goder(){
    this.navCtrl.push("SitePage")
  }
  setindex(i){
    console.log(i)
    this.mpindex=i
    localStorage.setItem("myipamindex", i)
  }
  rmoder(i){
    this.myipam.splice(i,1)
    localStorage.setItem("myipam1",JSON.stringify(this.myipam))
    this.ipml=this.myipam.length;
  }
  swipeEvent(e,i) {
    // console.log(e.offsetDirection);
    if (e.offsetDirection == 2) {
    this.letfbor=i
    }
    if (e.offsetDirection == 4) {
      this.letfbor=-1
    }
  }

}
