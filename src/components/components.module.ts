import { CalendarModule } from 'ion2-calendar';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GuidanceComponent } from './guidance/guidance';
import { CalendarPageComponent } from './calendar-page/calendar-page';

@NgModule({
	declarations: [GuidanceComponent,
    CalendarPageComponent],
	imports: [CalendarModule],
	exports: [GuidanceComponent,
	CalendarPageComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
