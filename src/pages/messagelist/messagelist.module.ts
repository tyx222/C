import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagelistPage } from './messagelist';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
@NgModule({
  declarations: [
    MessagelistPage,
  ],
  imports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    IonicPageModule.forChild(MessagelistPage),
  ],
})
export class MessagelistPageModule {}
