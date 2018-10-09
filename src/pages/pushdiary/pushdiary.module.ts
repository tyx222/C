import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushdiaryPage } from './pushdiary';

@NgModule({
  declarations: [
    PushdiaryPage,
  ],
  imports: [
    IonicPageModule.forChild(PushdiaryPage),
  ],
})
export class PushdiaryPageModule {}
