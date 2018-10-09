import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaycodePage } from './playcode';

@NgModule({
  declarations: [
    PlaycodePage,
  ],
  imports: [
    IonicPageModule.forChild(PlaycodePage),
  ],
})
export class PlaycodePageModule {}
