import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DaylistPage } from './daylist';

@NgModule({
  declarations: [
    DaylistPage,
  ],
  imports: [
    IonicPageModule.forChild(DaylistPage),
  ],
})
export class DaylistPageModule {}
