import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderformPage } from './orderform';

@NgModule({
  declarations: [
    OrderformPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderformPage),
  ],
})
export class OrderformPageModule {}
