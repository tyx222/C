import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetsearchPage } from './petsearch';

@NgModule({
  declarations: [
    PetsearchPage,
  ],
  imports: [
    IonicPageModule.forChild(PetsearchPage),
  ],
})
export class PetsearchPageModule {}
