import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllordersPage } from './allorders';

@NgModule({
  declarations: [
    AllordersPage,
  ],
  imports: [
    IonicPageModule.forChild(AllordersPage),
  ],
})
export class AllordersPageModule {}
