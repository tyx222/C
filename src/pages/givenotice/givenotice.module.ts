import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GivenoticePage } from './givenotice';

@NgModule({
  declarations: [
    GivenoticePage,
  ],
  imports: [
    IonicPageModule.forChild(GivenoticePage),
  ],
})
export class GivenoticePageModule {}
