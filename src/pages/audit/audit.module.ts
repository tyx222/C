import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuditPage } from './audit';

@NgModule({
  declarations: [
    AuditPage,
  ],
  imports: [
    IonicPageModule.forChild(AuditPage),
  ],
})
export class AuditPageModule {}
