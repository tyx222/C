import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrickPage } from './trick';

@NgModule({
  declarations: [
    TrickPage,
  ],
  imports: [
    IonicPageModule.forChild(TrickPage),
  ],
})
export class TrickPageModule {}
