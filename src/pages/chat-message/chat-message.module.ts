import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatMessagePage } from './chat-message';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    ChatMessagePage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ChatMessagePage),
  ],
})
export class ChatMessagePageModule {}
