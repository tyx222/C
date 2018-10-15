import { ComponentsModule } from './../../components/components.module';
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SitePage } from "./site";
import { MultiPickerModule } from "ion-multi-picker";
@NgModule({
  declarations: [SitePage],
  imports: [IonicPageModule.forChild(SitePage), MultiPickerModule,ComponentsModule]
})
export class SitePageModule {}
