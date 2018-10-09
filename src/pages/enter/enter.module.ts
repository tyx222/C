import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnterPage } from './enter';
import { MultiPickerModule } from 'ion-multi-picker';

@NgModule({
  declarations: [
    EnterPage,
  ],
  imports: [
    MultiPickerModule,
    IonicPageModule.forChild(EnterPage),
  ],
})
export class EnterPageModule {}
