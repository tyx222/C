import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvidencePage } from './evidence';

@NgModule({
  declarations: [
    EvidencePage,
  ],
  imports: [
    IonicPageModule.forChild(EvidencePage),
  ],
})
export class EvidencePageModule {}
