import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  App,
  Platform,
  Tabs
} from "ionic-angular";
import { BackButtonService } from "../../services/backButton.service";
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html"
})
export class TabsPage {
  @ViewChild("myTabs")
  tabRef: Tabs;
  mySelectedIndex = 0;
  show = true;
  mgs: string;
  bg = false;
  tabs = [
    {
      tab1Root: "HomePage", //首页
      tabIcon: "home",
      tabTitle: "首页"
    },
    {
      tab1Root: "CarePage", //首页
      tabIcon: "heart",
      tabTitle: "关爱"
    },
    {
      tab1Root: "StorePage", //首页
      tabIcon: "md-basket",
      tabTitle: "商城"
    },
    {
      tab1Root: "SciencePage", //首页
      tabIcon: "md-albums",
      tabTitle: "科普"
    },
    {
      tab1Root: "PersonalcenterPage", //首页
      tabIcon: "md-person",
      tabTitle: "我的"
    }
  ];
  tabs2 = [
    {
      tab1Root: "StorePage", //首页
      tabIcon: "md-basket",
      tabTitle: "商城"
    },
    {
      tab1Root: "ClassifyPage", //首页
      tabIcon: "heart",
      tabTitle: "分类"
    },
    {
      tab1Root: "StoretwoPage", //活体商城
      tabIcon: "md-basket",
      tabTitle: "活体商城"
    },

    {
      tab1Root: "PersonalcenterPage", //首页
      tabIcon: "md-person",
      tabTitle: "我的"
    }
  ];
  constructor(
    public navCtrl: NavController,
    public app: App,
    public navParams: NavParams,
    public backButtonService: BackButtonService,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.backButtonService.registerBackButtonAction(this.tabRef);
    });
  }
  changeTabs() {
    // console.log(this.app);
    // console.log(this.navCtrl)
    if (this.app["_title"] == "商城") {
      this.bg = true;
      this.mySelectedIndex = 0;

      this.show = false;
    } else if (
      this.app["_title"] == "个人中心" ||
      this.app["_title"] == "首页"
    ) {
      this.mySelectedIndex = 4;
      this.show = true;
    }
  }

  ionViewDidLoad() {
    // console.log("ionViewDidLoad TabsPage");
    // console.log(this.navCtrl.id);
  }
}
