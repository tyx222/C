import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvicesPage } from './advices';

@NgModule({
  declarations: [
    AdvicesPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvicesPage),
  ],
})
export class AdvicesPageModule {}
