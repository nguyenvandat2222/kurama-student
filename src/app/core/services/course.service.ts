import {Injectable} from '@angular/core';
import {CommonService} from './common.service';
import {Observable} from 'rxjs';
import {CourseModel} from '../models/course.model';
import * as CONST from '../constants';
import {CalendarModel} from '../models/calendar.model';
import {TeacherModel} from '../models/teacher.model';
import {CourseDetailModel} from '../models/course-detail.model';
import {UserInfoModel} from '../models/user-info.model';
import {CourseUserModel} from '../models/course-user.model';

@Injectable({providedIn: 'root'})
export class CourseService extends CommonService {
  getListCourse(): Observable<CourseModel[]> {
    return this.get(CONST.ApiURI.GET_LIST_COURSE);
  }

  getCourseById(request: any): Observable<{ course: CourseDetailModel, teacher: TeacherModel }> {
    return this.post(CONST.ApiURI.GET_COURSE_BY_ID, request);
  }

  registerCourse(request: any): Observable<UserInfoModel> {
    return this.post(CONST.ApiURI.REGISTER_COURSE, request);
  }
  getListCourseRegistered(listIdCourse: string[]): Observable<CourseModel[]> {
    return this.post(CONST.ApiURI.GET_LIST_COURSE_REGISTERED, {listCourseId: listIdCourse});
  }
  cancel(course: string, user: string): Observable<UserInfoModel> {
    return this.post(CONST.ApiURI.CANCEL_COURSE, {course: course, user: user})
  }
  cancelCourse(course: string, user: string): Observable<any> {
    return this.post(CONST.ApiURI.CANCEL_COURSE_STUDENT, {course: course, user: user})
  }

  getCalendarByCourse(courseId: string): Observable<CalendarModel[]> {
    return this.get(CONST.ApiURI.GET_CALENDAR_BY_COURSE + `?course=${courseId}`);
  }

  payment(uid: string, courses: CourseUserModel[]): Observable<UserInfoModel> {
    return this.post(CONST.ApiURI.PAYMENT_COURSE, {uid: uid, courses: courses});
  }
}
