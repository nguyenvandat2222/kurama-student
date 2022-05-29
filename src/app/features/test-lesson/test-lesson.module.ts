import {NgModule} from '@angular/core';
import { TestLessonListComponent } from './pages/test-lesson-list/test-lesson-list.component';
import { TestLessonComponent } from './pages/test-lesson/test-lesson.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { AlertScoreComponent } from './components/alert-score/alert-score.component';
const routes: Routes = [
  {path: '', component: TestLessonListComponent},
  {path: 'detail/:id', component: TestLessonComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [TestLessonListComponent, TestLessonComponent, AlertModalComponent, AlertScoreComponent]
})
export class TestLessonModule {

}
