import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StorecenterPage } from './storecenter';

@NgModule({
  declarations: [
    StorecenterPage,
  ],
  imports: [
    IonicPageModule.forChild(StorecenterPage),
  ],
})
export class StorecenterPageModule {}
