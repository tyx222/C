import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetAdminPage } from './pet-admin';

@NgModule({
  declarations: [
    PetAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(PetAdminPage),
  ],
})
export class PetAdminPageModule {}
