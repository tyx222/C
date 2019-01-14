import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  chats = [{
    id: '001',
    imageUrl: 'https://www.petbashi.com/imgs/219e02ce1c1c9350fdecaa54d038d40c.jpg',
    title: '房东',
    lastMessage: '这个月的房租怎么还没有交?',
    timestamp: new Date()
  },
    {
      id: '002',
      imageUrl: 'https://www.petbashi.com/imgs/219e02ce1c1c9350fdecaa54d038d40c.jpg',
      title: '房产中介',
      lastMessage: '上次给你推荐的房子，你看了没有?我这边有新的房源，你要不要过来看看？',
      timestamp: new Date()
    },
    {
      id: '003',
      imageUrl: 'https://www.petbashi.com/imgs/219e02ce1c1c9350fdecaa54d038d40c.jpg',
      title: '公司前台',
      lastMessage: '你有新的快递，请注意查收',
      timestamp: new Date()
    }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
 // 界面跳转并且传值
 viewMessages(chat) {
  this.navCtrl.push('ChatMessagePage', {chatId: chat.id});
}
}
