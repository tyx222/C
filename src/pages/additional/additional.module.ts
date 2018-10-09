import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdditionalPage } from './additional';

@NgModule({
  declarations: [
    AdditionalPage,
  ],
  imports: [
    IonicPageModule.forChild(AdditionalPage),
  ],
})
export class AdditionalPageModule {}
