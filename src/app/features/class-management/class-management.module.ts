import {NgModule} from '@angular/core';
import {ClassPageComponent} from './pages/class-page/class-page.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import { ClassDetailModalComponent } from './components/class-detail-modal/class-detail-modal.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import { CalendarComponent } from './components/calendar/calendar.component';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: ClassPageComponent}
];

@NgModule({

  imports: [RouterModule.forChild(routes), SharedModule, CalendarModule ,CalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory,
  }), FormsModule, ],
  declarations: [ClassPageComponent, ClassDetailModalComponent, CalendarComponent]
})
export class ClassManagementModule {
}
