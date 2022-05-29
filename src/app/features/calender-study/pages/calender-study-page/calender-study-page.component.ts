import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {CalendarModel} from '../../../../core/models/calendar.model';
import {CommonService} from '../../../../core/services/common.service';
import {CalendarService} from '../../../../core/services/calendar.service';

@Component({
  selector: 'app-calender-study-page',
  templateUrl: './calender-study-page.component.html',
  styleUrls: ['./calender-study-page.component.scss'],
})
export class CalenderStudyPageComponent implements OnInit {
  calendarList: Subject<CalendarModel[]> = new Subject<CalendarModel[]>();

  constructor(private commonService: CommonService, private calenderService: CalendarService) {
  }
  ngOnInit(): void {
    this.commonService.currentUser.subscribe(res => {
      const courseList: string[] = [];
      res.courses.forEach(course => {
        if (course.status) {
          courseList.push(course.course)
        }
      })
      this.calenderService.getListCalendarOfStudent(courseList).subscribe(value => {
        this.calendarList.next(value);
      })
    });
  }


}
