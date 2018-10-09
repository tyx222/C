import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuidancePage } from './guidance';

@NgModule({
  declarations: [
    GuidancePage,
  ],
  imports: [
    IonicPageModule.forChild(GuidancePage),
  ],
})
export class GuidancePageModule {}
