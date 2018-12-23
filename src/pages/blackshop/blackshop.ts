import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BlackshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blackshop',
  templateUrl: 'blackshop.html',
})
export class BlackshopPage {
	public classInfo:any;
  obj_goodsListData = [];
  goods: any;
  errorMessage: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlackshopPage');
  }
	
  info(item){
  
  }

  private loadNetData(refresher: any) {

    let GoodsUrl:string = "http://rapapi.org/mockjsdata/18396/api/discove/goodlist";
    
    
  }

  private loadData() {
    let GoodsUrl:string = "http://rapapi.org/mockjsdata/18396/api/discove/goodlist";
    
  }


  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.loadNetData(infiniteScroll);
      infiniteScroll.complete();
    }, 500);
  }

  doRefresh(refresher) {
    this.loadData();
    setTimeout(() => {
       refresher.complete();
     }, 3000);
  }

}
