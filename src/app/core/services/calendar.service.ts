import {Injectable} from '@angular/core';
import {CommonService} from './common.service';
import {Observable} from 'rxjs';
import * as CONST from '../constants';
import {CalendarModel} from '../models/calendar.model';
@Injectable({providedIn: 'root'})
export class CalendarService extends CommonService{
  getListCalendarByStudent(student: string): Observable<any> {
    return this.get(CONST.ApiURI.GET_CALENDAR_BY_STUDENT + `?student=${student}`);
  }

  getListCalendarOfStudent(courseList: string[]): Observable<any> {
    return this.post(CONST.ApiURI.GET_CALENDAR_OF_STUDENT, {listCourse :courseList});
  }

  getCalendarByCourse(course: string): Observable<CalendarModel[]> {
    return this.get(CONST.ApiURI.GET_CALENDAR_BY_COURSE + `?course=${course}`);
  }
}
