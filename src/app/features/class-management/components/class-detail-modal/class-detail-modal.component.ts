import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CourseService} from '../../../../core/services/course.service';
import {CourseDetailModel} from '../../../../core/models/course-detail.model';
import {CalendarEvent, CalendarView} from 'angular-calendar';
import {TeacherModel} from '../../../../core/models/teacher.model';
import * as CONST from '../../../../core/constants';
import {UserInfoModel} from '../../../../core/models/user-info.model';
import {CommonService} from '../../../../core/services/common.service';
import {MDBModalService} from 'angular-bootstrap-md';
import {CalendarService} from '../../../../core/services/calendar.service';
import {CalendarModel} from '../../../../core/models/calendar.model';

@Component({
  selector: 'app-class-detail-modal',
  templateUrl: './class-detail-modal.component.html',
  styleUrls: ['./class-detail-modal.component.scss']
})
export class ClassDetailModalComponent implements OnInit {
  public saveButtonClicked: Subject<any> = new Subject<any>();
  course!: string;
  courseDetail!: CourseDetailModel;
  teacherInfo!: TeacherModel;
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  currentUser!: UserInfoModel;
  calendarList: Subject<CalendarModel[]> = new Subject<CalendarModel[]>();
  calendarCurrent!: CalendarModel[];
  calendarCourse: CalendarModel[] = [];
  error = '';
  loading = false;
  courseList!: string[];
  registered = false;
  errorCancel = true;
  constructor(private courseService: CourseService,
              private commonService: CommonService,
              private modalService: MDBModalService,
              private calendarService: CalendarService,
  ) {
    this.commonService.currentUser.subscribe(res => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.courseList.forEach(value => {
      if (value === this.course) {
        this.registered = true;
      }
    })
    const req = {
      id: this.course
    };
    this.calendarService.getCalendarByCourse(this.course).subscribe(res => {
      this.calendarList.next(res);
      this.calendarCourse = res;
    })
    this.courseService.getCourseById(req).subscribe(res => {
      this.courseDetail = res.course;
      this.teacherInfo = res.teacher;
    });

  }

  onRegister(id: string): void {
    console.log(this.calendarCurrent)
    this.loading = true;
    const request = {
      user: this.currentUser._id,
      course: {
        idCourse: id,
        status: false,
      },
    };
    if (this.calendarCurrent?.length > 0 && this.calendarCourse?.length > 0) {
      this.calendarCurrent.forEach(calendar => {
        this.calendarCourse.forEach(value => {
          const count = new Date(calendar.date).getTime() - new Date(value.date).getTime();
          if (count > -2400000 && count < 2400000) {
            this.error = 'Duplicate calendar'
            this.loading = false;
          }
          return this.error;
        })
        return this.error;
      })
      if (!this.error) {
        this.courseService.registerCourse(request).subscribe(res => {
          this.loading = false;
          this.currentUser.courses = res.courses;
          console.log(res.courses);
          this.commonService.setLocalStorage(CONST.LocalStorage.USER_INFO, this.currentUser);
          this.saveButtonClicked.next(res);
          this.modalService.hide(1);
        });
      }

    }
    if (this.calendarCurrent?.length == 0) {
      this.courseService.registerCourse(request).subscribe(res => {
        this.loading = false;
        this.currentUser.courses = res.courses;
        this.commonService.setLocalStorage(CONST.LocalStorage.USER_INFO, this.currentUser);
        this.saveButtonClicked.next(res);
        this.modalService.hide(1);
      });
    }



  }

  onCancel():void {
    this.loading = true;
    this.courseService.cancel(this.course, this.currentUser._id).subscribe(res => {
      this.currentUser.courses = res.courses;
      this.commonService.setLocalStorage(CONST.LocalStorage.USER_INFO, this.currentUser);
      this.saveButtonClicked.next(res);
    }, error => this.error = error.message);
    if (!this.error) {
      this.courseService.cancelCourse(this.course, this.currentUser._id).subscribe(res => {
        this.loading = false;
        this.modalService.hide(1);
      })
    }
    else {
      this.loading = false;
    }

  }
}
