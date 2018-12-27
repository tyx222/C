import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendgoodsPage } from './sendgoods';

@NgModule({
  declarations: [
    SendgoodsPage,
  ],
  imports: [
    IonicPageModule.forChild(SendgoodsPage),
  ],
})
export class SendgoodsPageModule {}
