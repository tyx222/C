import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DynamicPage } from './dynamic';

@NgModule({
  declarations: [
    DynamicPage,
  ],
  imports: [
    IonicPageModule.forChild(DynamicPage),
  ],
})
export class DynamicPageModule {}
