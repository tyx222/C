import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RefundservivePage } from './refundservive';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    RefundservivePage,
  ],
  imports: [
    IonicPageModule.forChild(RefundservivePage),
    ComponentsModule
  ],
})
export class RefundservivePageModule { }
