import {Component, Input, OnInit} from '@angular/core';
import {CourseModel} from '../../../../core/models/course.model';
import {CourseService} from '../../../../core/services/course.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {SubjectSubscriber} from 'rxjs/internal/Subject';
import {SubjectSubscription} from 'rxjs/internal-compatibility';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {

  @Input() listCourse!: {course: string, status: boolean}[];
  headElements = ['Thứ tự', 'Tên khóa học', 'Trạng thái'];
  courses!: CourseModel;
  courseList: CourseModel[] = [];
  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    if (this.listCourse) {
      const course: string[] = [];
      let courseMap = new Map();
      this.listCourse.forEach(value => {
        course.push(value.course);
        courseMap.set(value.course, value.status);
      })
      this.courseService.getListCourseRegistered(course).subscribe(res => {
        res.forEach(value => {
          value.status = courseMap.get(value._id);
          this.courseList.push(value);
        });

      })
    }
  }

}
