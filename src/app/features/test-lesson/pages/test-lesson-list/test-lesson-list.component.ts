import { Component, OnInit } from '@angular/core';
import {TestLessonService} from '../../../../core/services/test-lesson.service';
import {TestLessonModel} from '../../../../core/models/test-lesson.model';
import {CourseService} from '../../../../core/services/course.service';
import {CommonService} from '../../../../core/services/common.service';

@Component({
  selector: 'app-test-lesson-list',
  templateUrl: './test-lesson-list.component.html',
  styleUrls: ['./test-lesson-list.component.scss']
})
export class TestLessonListComponent implements OnInit {

  tests!: TestLessonModel[];
  courses: string[] = [];
  constructor(private testLessonService: TestLessonService, private courseService: CourseService, private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.currentUser.subscribe(res => {
      res.courses.forEach(course => {
        if (course.status) {
          this.courses.push(course.course);
        }
      })
      this.testLessonService.getListTestByCourse(this.courses).subscribe(tests => {
        this.tests = tests;
      })
    })
  }

}
