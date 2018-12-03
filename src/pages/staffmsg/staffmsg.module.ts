import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffmsgPage } from './staffmsg';

@NgModule({
  declarations: [
    StaffmsgPage,
  ],
  imports: [
    IonicPageModule.forChild(StaffmsgPage),
  ],
})
export class StaffmsgPageModule {}
