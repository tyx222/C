import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from "ionic-angular";

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
  constructor(private navCtrl: NavController) {}

  gohomes(){
    this.homes=false
    this.changehomes.emit(this.homes)
  }
  gonewlay() {
    this.navCtrl.push("NewlayPage");
  }
}
