import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MirrorPage } from './mirror';

@NgModule({
  declarations: [
    MirrorPage,
  ],
  imports: [
    IonicPageModule.forChild(MirrorPage),
  ],
})
export class MirrorPageModule {}
