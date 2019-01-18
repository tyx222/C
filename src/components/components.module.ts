import { CalendarModule } from 'ion2-calendar';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GuidanceComponent } from './guidance/guidance';
import { CalendarPageComponent } from './calendar-page/calendar-page';
import { MapComponent } from './map/map';
import { TrickComponent } from './trick/trick';
import { OrdergoodsComponent } from './ordergoods/ordergoods';
import { IonicModule } from 'ionic-angular';

@NgModule({
    declarations: [GuidanceComponent,
        CalendarPageComponent,
        MapComponent,
        TrickComponent,
        OrdergoodsComponent,
    ],
    imports: [CalendarModule, IonicModule],
    exports: [GuidanceComponent,
        CalendarPageComponent,
        MapComponent,
        TrickComponent,
        OrdergoodsComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
