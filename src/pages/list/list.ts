import { RefundPage } from './../refund/refund';
import { MatchPage } from './../match/match';
import { ShopcallPage } from './../shopcall/shopcall';
import { OrderdackPage } from './../orderdack/orderdack';
import { PardackpushPage } from './../pardackpush/pardackpush';
import { AllordersPage } from './../allorders/allorders';
import { AdditionalPage } from './../additional/additional';
import { ShippingoderPage } from './../shippingoder/shippingoder';
import { SetPage } from './../set/set';
import { OrderformPage } from './../orderform/orderform';
import { ProductadminPage } from './../productadmin/productadmin';
import { PushcouponPage } from './../pushcoupon/pushcoupon';
import { CouponPage } from './../coupon/coupon';
import { EnterPage } from './../enter/enter';
import { EvaluatePage } from './../evaluate/evaluate';
import { AuditPage } from './../audit/audit';
import { SoplPage } from "./../sopl/sopl";

import { ClassifyPage } from "./../classify/classify";
import { NewlayPage } from "./../newlay/newlay";
import { PlaycodePage } from "./../playcode/playcode";
import { WalletPage } from "./../wallet/wallet";
import { PersonalcenterPage } from "./../personalcenter/personalcenter";
import { AppraisePage } from "./../appraise/appraise";
import { ChatroomPage } from "./../chatroom/chatroom";
import { OrderPage } from "./../order/order";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { LoginPage } from "../login/login";
import { RegisterPage } from "../register/register";
import { ForgetPasswordPage } from "../forget-password/forget-password";

import { PetAdminPage } from "../pet-admin/pet-admin";

import { DetailsPage } from "../details/details";
import { GuidancePage } from "../guidance/guidance";
import { PushdiaryPage } from "../pushdiary/pushdiary";
import { DiaryPage } from "../diary/diary";
import { CkeckPage } from "../ckeck/ckeck";
import { CallshopPage } from "../callshop/callshop";

import { NewswordPage } from "../newsword/newsword";
import { ShoppingPage } from "../shopping/shopping";
import { IpamPage } from "../ipam/ipam";
import { DepositPage } from "../deposit/deposit";
import { RecordPage } from "../record/record";
import { SciencePage } from '../science/science';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-list",
  templateUrl: "list.html"
})
export class ListPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ListPage");
  }

  login() {
    this.navCtrl.push(LoginPage);
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  forgetpassword() {
    this.navCtrl.push(ForgetPasswordPage);
  }

  checkIn() {
    this.navCtrl.push("CheckInPage");
  }

  petAdmin() {
    this.navCtrl.push(PetAdminPage);
  }

  GoDetails() {
    this.navCtrl.push(DetailsPage);
  }
  GuidancePage() {
    this.navCtrl.push(GuidancePage);
  }
  Pushdiary() {
    this.navCtrl.push(PushdiaryPage);
  }
  Diary() {
    this.navCtrl.push(DiaryPage);
  }
  Dynamic() {
    this.navCtrl.push("DynamicPage");
  }
  Ckeck() {
    this.navCtrl.push(CkeckPage);
  }
  callshop() {
    this.navCtrl.push(CallshopPage);
  }
  Care() {
    this.navCtrl.push('CarePage');
  }
  Newsword() {
    this.navCtrl.push(NewswordPage);
  }
  shopping() {
    this.navCtrl.push(ShoppingPage);
  }
  order() {
    this.navCtrl.push(OrderPage);
  }

  Chatroom() {
    this.navCtrl.push(ChatroomPage);
  }
  Appraise() {
    this.navCtrl.push(AppraisePage);
  }
  Site() {
    this.navCtrl.push('SitePage');
  }
  ipam() {
    this.navCtrl.push(IpamPage);
  }
  Personalcenter() {
    this.navCtrl.push(PersonalcenterPage);
  }
  wallet() {
    this.navCtrl.push(WalletPage);
  }
  deposit() {
    this.navCtrl.push(DepositPage);
  }
  Record() {
    this.navCtrl.push(RecordPage);
  }
  playcode() {
    this.navCtrl.push(PlaycodePage);
  }
  newlay() {
    this.navCtrl.push(NewlayPage);
  }
  classify() {
    this.navCtrl.push(ClassifyPage);
  }
  store() {
    this.navCtrl.push('StorePage');
  }
  sopl() {
    this.navCtrl.push(SoplPage);
  }
  audit(){
    this.navCtrl.push(AuditPage)
  }
  evaluate(){
    this.navCtrl.push(EvaluatePage)
  }
  enter(){
    this.navCtrl.push(EnterPage)
  }
  Coupon(){
    this.navCtrl.push(CouponPage)
  }
  pushoupon(){
    this.navCtrl.push(PushcouponPage)
  }
  productadmin(){
    this.navCtrl.push(ProductadminPage)
  }
  Orderform(){
    this.navCtrl.push(OrderformPage)
  }
  setpage(){
    this.navCtrl.push(SetPage)
  }
  shoppingoder(){
    this.navCtrl.push(ShippingoderPage)
  }
  Additional(){
    this.navCtrl.push(AdditionalPage)
  }
  Allorders(){
    this.navCtrl.push(AllordersPage)
  }

  pardackpush(){
    this.navCtrl.push(PardackpushPage)
  }

  orderdack(){
    this.navCtrl.push(OrderdackPage)
  }
  shopcall(){
    this.navCtrl.push(ShopcallPage)
  }
  match(){
    this.navCtrl.push(MatchPage)
  }
  refund(){
    this.navCtrl.push(RefundPage)
  }

  science(){
    this.navCtrl.push(SciencePage)
  }
}
