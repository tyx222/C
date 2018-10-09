import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KnowledgPage } from './knowledg';

@NgModule({
  declarations: [
    KnowledgPage,
  ],
  imports: [
    IonicPageModule.forChild(KnowledgPage),
  ],
})
export class KnowledgPageModule {}
