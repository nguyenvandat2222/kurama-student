import {NgModule} from '@angular/core';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {RouterModule, Routes} from '@angular/router';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {NotificationComponent} from './components/notification/notification.component';
import {SharedModule} from '../../shared/shared.module';
import {MenuItemComponent} from './components/menu-item/menu-item.component';
import {CalendarItemComponent} from './components/calendar-item/calendar-item.component';
import {BarChartComponent} from './components/bar-chart/bar-chart.component';
import {PieChartComponent} from './components/pie-chart/pie-chart.component';
import {ListCourseComponent} from './components/list-course/list-course.component';

const routes: Routes = [
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [
    HomePageComponent,
    UserInfoComponent,
    NotificationComponent,
    MenuItemComponent,
    CalendarItemComponent,
    BarChartComponent,
    PieChartComponent,
    ListCourseComponent
  ]
})
export class HomeModule {
}
