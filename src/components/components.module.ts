import { CalendarModule } from 'ion2-calendar';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GuidanceComponent } from './guidance/guidance';
import { CalendarPageComponent } from './calendar-page/calendar-page';
import { MapComponent } from './map/map';

@NgModule({
	declarations: [GuidanceComponent,
    CalendarPageComponent,
    MapComponent],
	imports: [CalendarModule],
	exports: [GuidanceComponent,
	CalendarPageComponent,
    MapComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
