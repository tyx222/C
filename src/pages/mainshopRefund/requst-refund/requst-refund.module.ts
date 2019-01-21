import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequstRefundPage } from './requst-refund';
import { MultiPickerModule } from 'ion-multi-picker';

@NgModule({
  declarations: [
    RequstRefundPage,
  ],
  imports: [
    IonicPageModule.forChild(RequstRefundPage), ComponentsModule, MultiPickerModule
  ],
})
export class RequstRefundPageModule { }
