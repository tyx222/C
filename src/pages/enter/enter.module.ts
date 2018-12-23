import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnterPage } from './enter';
import { MultiPickerModule } from 'ion-multi-picker';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EnterPage,
  ],
  imports: [
    MultiPickerModule,
    IonicPageModule.forChild(EnterPage),ComponentsModule
  ],
})
export class EnterPageModule {}
