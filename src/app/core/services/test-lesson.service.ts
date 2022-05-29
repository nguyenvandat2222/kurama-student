import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CommonService} from './common.service';
import {TestLessonModel} from '../models/test-lesson.model';
import {UserInfoModel} from '../models/user-info.model';

@Injectable({providedIn: 'root'})
export class TestLessonService extends CommonService{
  getListTestByCourse(courseList: string[]): Observable<TestLessonModel[]> {
    return this.post(this.api.GET_LIST_TEST_LESSON, {courses: courseList});
  }
  getDetailTest(test: string): Observable<any> {
    return this.post(this.api.GET_DETAIL_TEST_LESSON, {test: test});
  }
  onAnswerLesson(test: string, question: string, score: string): Observable<{score: boolean}> {
    return this.post(this.api.ANSWER_LESSON, {test: test, question: question, score: score});
  }
  saveCountAnswer(uid: string, source: string, count: number): Observable<UserInfoModel> {
    return this.post(this.api.SAVE_COUNT_ANSWER, {uid: uid, source: source, count: count});
  }
  changeStatus(test: string): Observable<any> {
    return this.post(this.api.CHANGE_STATUS_TEST, {test: test});
  }
}
