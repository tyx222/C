import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StorecartsPage } from './storecarts';

@NgModule({
  declarations: [
    StorecartsPage,
  ],
  imports: [
    IonicPageModule.forChild(StorecartsPage),
  ],
})
export class StorecartsPageModule {}
