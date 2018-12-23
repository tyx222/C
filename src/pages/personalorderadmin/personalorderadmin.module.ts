import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalorderadminPage } from './personalorderadmin';

@NgModule({
  declarations: [
    PersonalorderadminPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalorderadminPage),
  ],
})
export class PersonalorderadminPageModule {}
