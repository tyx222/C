import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductadminPage } from './productadmin';

@NgModule({
  declarations: [
    ProductadminPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductadminPage),
  ],
})
export class ProductadminPageModule {}
