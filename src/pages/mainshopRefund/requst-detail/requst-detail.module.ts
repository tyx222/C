import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequstDetailPage } from './requst-detail';

@NgModule({
  declarations: [
    RequstDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RequstDetailPage),ComponentsModule,
  ],
})
export class RequstDetailPageModule {}
