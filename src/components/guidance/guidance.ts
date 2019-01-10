import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from "ionic-angular";
import { MyHttpService } from '../../app/shared/service/my-http.service';

/**
 * Generated class for the GuidanceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "guidance",
  templateUrl: "guidance.html"
})
export class GuidanceComponent {
  @Output() changehomes=new EventEmitter
  text: string;
  homes: boolean = true;
  constructor(private navCtrl: NavController,public http:MyHttpService) {}

  gohomes(){
    this.homes=false
    this.changehomes.emit(this.homes)
  }
  gonewlay() {
    if(!localStorage.getItem("mytoken")){
      this.http.showToast("请先登录")
      return false
    }
 console.log(localStorage.getItem("mytoken"))
    this.navCtrl.push("NewlayPage");

  }
}
