import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetuserPage } from './setuser';
import { MultiPickerModule } from "ion-multi-picker";
import { ComponentsModule } from './../../components/components.module';
@NgModule({
  declarations: [
    SetuserPage,
  ],
  imports: [
    IonicPageModule.forChild(SetuserPage),MultiPickerModule,ComponentsModule
  ],
})
export class SetuserPageModule {}
