import {NgModule} from '@angular/core';
import {CalenderStudyPageComponent} from './pages/calender-study-page/calender-study-page.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {StudyItemComponent} from './components/study-item/study-item.component';
import {CalendarCommonModule, CalendarModule, CalendarMonthModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';

const routes: Routes = [
  {path: '', component: CalenderStudyPageComponent}
];

@NgModule({
  declarations: [CalenderStudyPageComponent, StudyItemComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CalendarMonthModule,
    CalendarCommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
})
export class CalenderStudyModule {
}
