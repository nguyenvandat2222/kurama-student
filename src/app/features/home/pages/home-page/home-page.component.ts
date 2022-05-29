import {Component, OnInit} from '@angular/core';
import * as CONST from '../../../../core/constants';
import {MenuItemModel} from '../../../../core/models/menu-item.model';
import {UserInfoModel} from '../../../../core/models/user-info.model';
import {AuthService} from '../../../../core/services/auth.service';
import {CommonService} from '../../../../core/services/common.service';
import {SubjectSubscription} from 'rxjs/internal-compatibility';
import {BehaviorSubject, Subject} from 'rxjs';
import {SubjectSubscriber} from 'rxjs/internal/Subject';
import {CourseService} from '../../../../core/services/course.service';
import {CourseModel} from '../../../../core/models/course.model';
import {CalendarService} from '../../../../core/services/calendar.service';
import {CalendarModel} from '../../../../core/models/calendar.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  routing = CONST.FrontURI;
  calendarList: CalendarModel[] = [];
  menuItems: MenuItemModel[] = [
    {name: 'Lịch học', icon: 'calendar-alt', router: `/${this.routing.CALENDER_STUDY}`},
    {name: 'Tài liệu', icon: 'folder-open', router: `/${this.routing.DOCUMENT}`},
    {name: 'Đăng ký lớp học', icon: 'newspaper', router: `/${this.routing.CLASS_MANAGEMENT}`},
    {name: 'Thành tích', icon: 'award', router: `/${this.routing.CERTIFICATE}`},
    {name: 'Bài kiểm tra', icon: 'clipboard', router: `/${this.routing.TEST_LESSON}`},
    {name: 'Đóng học phí', icon: 'dollar-sign', router: `/${this.routing.COURSES}`}
  ];
  calendarItem = [
    {name: 'Calender study', icon: 'calendar-alt', router: `/${this.routing.CALENDER_STUDY}`},
    {name: 'Calender test', icon: 'calendar-check', router: `/${this.routing.CALENDER_STUDY}`}
  ];
  currentUser!: UserInfoModel;
  count = 0;
  listCourse: {course: string, status: boolean, score: number}[] = [];
  constructor(private commonService: CommonService, private calenderService: CalendarService) {
  }

  ngOnInit(): void {
    this.commonService.currentUser.subscribe(res => {
      this.currentUser = res;
      if (res) {
        this.listCourse = res.courses;
        this.listCourse.forEach(course => {
          if (course.score) {
            this.count = this.count + course.score
          }
        })
        const courseList: string[] = [];
        res.courses.forEach(course => {
          courseList.push(course.course)
        })
        this.calenderService.getListCalendarOfStudent(courseList).subscribe(value => {
          this.calendarList = value;
        })
      }


    });

  }

}
