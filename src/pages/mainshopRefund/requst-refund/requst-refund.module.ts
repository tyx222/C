import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequstRefundPage } from './requst-refund';

@NgModule({
  declarations: [
    RequstRefundPage,
  ],
  imports: [
    IonicPageModule.forChild(RequstRefundPage), ComponentsModule,
  ],
})
export class RequstRefundPageModule {}
