import { NavParams } from "ionic-angular";
import {
  Component,
  Output,
  EventEmitter,
  CUSTOM_ELEMENTS_SCHEMA,
  Input
} from "@angular/core";
import { NavController, AlertController } from "ionic-angular";
import { CalendarComponentOptions } from "ion2-calendar";
import { UserService } from "../../app/shared/service/user.service";

/**
 * Generated class for the CalendarPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "calendar-page",
  templateUrl: "calendar-page.html"
})
export class CalendarPageComponent {
  @Input()
  petids;
  @Output()
  dates = new EventEmitter();

  date;
  type: "string"; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
    // pickMode: 'range',
    color: "danger",
    monthPickerFormat: [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月"
    ],
    weekdays: ["日", "一", "二", "三", "四", "五", "六"],
    monthFormat: "YYYY 年 MM 月 "
  };

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private http: UserService,
    private navParams: NavParams
  ) {}

  gohomes() {
    this.dates.emit(this.date);
  }
  pudate($event) {
    console.log(this.date);
    console.log($event);
    console.log(this.petids["id"]);
    const prompt = this.alertCtrl.create({
      title: "添加日程",
      message: "铲屎的有什么安排呢",
      inputs: [
        {
          name: "title",
          placeholder: "标题"
        },
        {
          name: "text",
          placeholder: "明天给小主洗澡吗"
        }
      ],
      buttons: [
        {
          text: "取消",
          handler: data => {
            // this.date = null;
          }
        },
        {
          text: "添加",
          handler: data => {
            this.addcalenderevent(data);
          }
        }
      ]
    });
    prompt.present();
  }
  onChange($event) {
    console.log($event);
    this.date = $event["_i"];
    var today = new Date(this.date); //获得当前日期
    var year = today.getFullYear(); //获得年份
    var month = today.getMonth() + 1; //此方法获得的月份是从0---11，所以要加1才是当前月份
    var day = today.getDate(); //获得当前日期
    this.date = `${year}-${month}-${day}`;
  }
  async addcalenderevent(data) {
    let parmas = {
      event: data.text,
      calendar_time: this.date,
      petcardid: this.petids["id"],
      event_title: data.title
    };
    let res = await this.http.addcalenderevent(parmas);
    console.log(res);
  }
  addsaver() {
    console.log(this.date);
  }
}
