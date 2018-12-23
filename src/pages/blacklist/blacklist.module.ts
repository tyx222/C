import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlacklistPage } from './blacklist';

@NgModule({
  declarations: [
    BlacklistPage,
  ],
  imports: [
    IonicPageModule.forChild(BlacklistPage),
  ],
})
export class BlacklistPageModule {}
