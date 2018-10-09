import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewswordPage } from './newsword';

@NgModule({
  declarations: [
    NewswordPage,
  ],
  imports: [
    IonicPageModule.forChild(NewswordPage),
  ],
})
export class NewswordPageModule {}
