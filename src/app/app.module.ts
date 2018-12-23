import { UserService } from "./shared/service/user.service";

import { MatchPage } from "./../pages/match/match";


import { AdditionalPage } from "./../pages/additional/additional";
import { AuditPage } from "./../pages/audit/audit";

import { VgCoreModule } from "videogular2/core";
import { VgControlsModule } from "videogular2/controls";
import { VgOverlayPlayModule } from "videogular2/overlay-play";
import { VgBufferingModule } from "videogular2/buffering";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer";
import { AppraisePage } from "./../pages/appraise/appraise";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
// import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { MyHttpService } from "./shared/service/my-http.service";

import { MyApp } from "./app.component";
import { MultiPickerModule } from "ion-multi-picker";
import { DefaultAppConfig } from "./app.config";
import { SharedModule } from "./shared/shared.module";
import { HttpModule } from "../../node_modules/@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { ListPage } from "../pages/list/list";
//import { listener } from "@angular/core/src/render3/instructions";
import { ForgetPasswordPage } from "../pages/forget-password/forget-password";
import { Geolocation } from '@ionic-native/geolocation';
import { OrderdackPage } from "../pages/orderdack/orderdack";

// import { CalendarModule } from "ionic3-calendar";
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner";
import { BackButtonService } from "../../src/services/backButton.service";
// import { ReviceServeProvider } from '../providers/revice-serve/revice-serve';
import { Camera } from "@ionic-native/camera";
import { File } from "@ionic-native/file";

import { ImagePicker } from "@ionic-native/image-picker";
import { DatePickerModule } from "ionic2-date-picker";
import { Device } from "@ionic-native/device";
import { CalendarModule } from "ion2-calendar";
import {
  MediaCapture,
  MediaFile,
  CaptureError,
  CaptureImageOptions
} from "@ionic-native/media-capture";
import { VideoEditor } from "@ionic-native/video-editor";
import { ImgServiceProvider } from "../providers/img-service/img-service";
import { ToastProvider } from "../providers/toast/toast";
import { StorageProvider } from "../providers/storage/storage";
import {WechatChenyu} from "wechat-chenyu"
@NgModule({
  declarations: [
    MyApp,
    ListPage,
    ForgetPasswordPage,
    AppraisePage,
    AuditPage,
    AdditionalPage,
    OrderdackPage,
    MatchPage
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    HttpModule,
    HttpClientModule,
    DatePickerModule,
    SharedModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: "true",
      backButtonText: ""
    }),
    CalendarModule,
    MultiPickerModule
    // CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    ForgetPasswordPage,
    AppraisePage,
    AuditPage,
    AdditionalPage,
    OrderdackPage,
    MatchPage
  ],
  providers: [
    MyHttpService,
    UserService,
    StatusBar,
    SplashScreen,
    BackButtonService,
    QRScanner,
    Camera,
    File,
    FileTransferObject,
    FileTransfer,
    ImagePicker,
    MediaCapture,
    VideoEditor,
    Device,
    WechatChenyu,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: DefaultAppConfig, useClass: DefaultAppConfig },
    ImgServiceProvider,
    ToastProvider,
    StorageProvider,
    Geolocation
  ]
})
export class AppModule {}
