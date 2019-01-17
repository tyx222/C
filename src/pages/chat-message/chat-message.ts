import { FormControl, FormBuilder } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import {IonicPage, NavController, Content, NavParams} from 'ionic-angular';
import { SharedWebSocketProvider } from '../../providers/shared-web-socket/shared-web-socket';

@IonicPage()
@Component({
  selector: 'page-chat-message',
  templateUrl: 'chat-message.html',
  providers:[SharedWebSocketProvider]
})
export class ChatMessagePage {

  toUser = {
    _id: '534b8e5aaa5e7afc1b23e69b',
    pic: 'https://www.petbashi.com/imgs/219e02ce1c1c9350fdecaa54d038d40c.jpg',
    username: '匿名',
  };

  user = {
    _id: '534b8fb2aa5e7afc1b23e69c',
    pic: 'https://www.petbashi.com/imgs/219e02ce1c1c9350fdecaa54d038d40c.jpg',
    username: '自己',
  };

  doneLoading = false;

  messages = [
    {
      _id: 1,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: 'OH CRAP!!'
    },
    {
      _id: 2,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: this.toUser.pic,
      text: 'what??'
    },
    {
      _id: 3,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: this.toUser.pic,
      text: 'Pretty long message with lots of content'
    },
    {
      _id: 4,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: 'Pretty long message with even way more of lots and lots of content'
    },
    {
      _id: 5,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: '哪尼??'
    },
    {
      _id: 6,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: this.toUser.pic,
      text: 'yes!'
    }
  ];

  @ViewChild(Content) content: Content;

  public messageForm: any;
  chatBox: any;

  constructor(public navParams: NavParams,
              public navCtrl: NavController,
              public formBuilder: FormBuilder,
              private wsService:SharedWebSocketProvider) {
    this.messageForm = formBuilder.group({
      message: new FormControl('')
    });
    this.chatBox = '';
  }
 
  /**
   * 与服务器建立长链接
   */
  ionViewDidLoad() {
    let modelData: string = '用户名：' + this.navParams.get('chatId');
    console.log(modelData);

    console.log('ionViewDidLoad');
    //WS连接的IP和端口提前保存在localStorage里，现在读出来
    const printsIp = localStorage.getItem("prints-ipAddress");
    const printsPort = localStorage.getItem("prints-port");
    console.log(printsIp)
    console.log(printsPort)
    if(printsIp != null && printsPort !=null){
      this.wsService.createObservableSocket(`ws://${printsIp}:${printsPort}`).subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log("流已经结束")
      );;
      console.log(`已连接ws://${printsIp}:${printsPort}`)
    }else {
      console.log("请配置打印机");
    }
  }
  /**
   * 发送消息
   */
  sendMessageToserver(){
    this.wsService.sendMessage("Hello from client");
}
  // 发送消息
  send(message) {
    if (message && message !== '') {
      // this.messageService.sendMessage(chatId, message);

      const messageData =
        {
          toId: this.toUser._id,
          _id: 6,
          date: new Date(),
          userId: this.user._id,
          username: this.toUser.username,
          pic: this.toUser.pic,
          text: message
        };

      this.messages.push(messageData);
      this.scrollToBottom();

      setTimeout(() => {
        const replyData =
          {
            toId: this.toUser._id,
            _id: 6,
            date: new Date(),
            userId: this.toUser._id,
            username: this.toUser.username,
            pic: this.toUser.pic,
            text: 'Just a quick reply'
          };
        this.messages.push(replyData);
        this.scrollToBottom();
      }, 1000);
    }
    this.chatBox = '';
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }

  viewProfile(message: string){
    console.log(message);
  }

}
