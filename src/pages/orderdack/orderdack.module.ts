import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderdackPage } from './orderdack';

@NgModule({
  declarations: [
    OrderdackPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderdackPage),
  ],
})
export class OrderdackPageModule {}
