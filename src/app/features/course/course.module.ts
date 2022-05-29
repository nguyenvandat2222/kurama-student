import {NgModule} from '@angular/core';
import { CourseListComponent } from './pages/course-list/course-list.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {StripeModule} from 'stripe-angular';
import {FormsModule} from '@angular/forms';
import {StripeCheckoutLoader, StripeCheckoutModule} from 'ng-stripe-checkout';

const routes: Routes = [
  {path: '', component:CourseListComponent}
]
@NgModule({
  declarations: [CourseListComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    StripeModule,
    FormsModule,
  ],
  providers: [
    StripeCheckoutModule,
    StripeCheckoutLoader
  ]
})
export class CourseModule {
}
