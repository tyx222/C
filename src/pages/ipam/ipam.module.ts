import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IpamPage } from './ipam';

@NgModule({
  declarations: [
    IpamPage,
  ],
  imports: [
    IonicPageModule.forChild(IpamPage),
  ],
})
export class IpamPageModule {}
