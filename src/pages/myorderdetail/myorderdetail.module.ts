import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyorderdetailPage } from './myorderdetail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MyorderdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MyorderdetailPage), ComponentsModule
  ],
})
export class MyorderdetailPageModule { }
