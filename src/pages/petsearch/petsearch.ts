import { Component,ViewChild, ElementRef,Renderer  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../app/shared/service/user.service';

/**
 * Generated class for the PetsearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-petsearch',
  templateUrl: 'petsearch.html',
})
export class PetsearchPage {
  @ViewChild('myInput')
  myInput:ElementRef  //ElementRef;
  petid
  petcenlistg=[]
  imgsrc=""
  mgs=false
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:UserService,public renderer:Renderer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetsearchPage');
    this.renderer.invokeElementMethod(this.myInput.nativeElement,"focus")
  }
  async showResult() {
    if (this.petid != "") {
      let parmas = {
        petnum: this.petid
      };
      let res = await this.http.querypetcardnum(parmas);
     
      if (res.info == "ok") {
        console.log(res)
        this.petcenlistg=[]
        if(res.arrayList.length==0||!res.arrayList.length){
          this.http.http.showToast("没有查到哟");
          this.mgs=true
        }else{
          this.petcenlistg=res.arrayList
          this.imgsrc=res.imageUrl
        
        }
   
      }
    }
  }
  goDetails(i){
    console.log(i)
         this.navCtrl.push("DetailsPage", {
          type: 0,
          id:this.petcenlistg[i]
        });
  }
}
