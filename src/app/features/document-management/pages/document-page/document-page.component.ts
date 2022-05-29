import {Component, OnInit} from '@angular/core';
import {UserInfoModel} from '../../../../core/models/user-info.model';
import {AuthService} from '../../../../core/services/auth.service';
import {CourseModel} from '../../../../core/models/course.model';
import {CourseService} from '../../../../core/services/course.service';
import {CommonService} from '../../../../core/services/common.service';

@Component({
  selector: 'app-document-page',
  templateUrl: './document-page.component.html',
  styleUrls: ['./document-page.component.scss']
})
export class DocumentPageComponent implements OnInit {

  courseList: string[] = [];
  courses!: CourseModel []
  currentUser!: UserInfoModel;
  documentList = true;
  constructor(private courseService: CourseService, private commonService: CommonService) {

  }

  ngOnInit(): void {
    this.documentList = false;
    this.commonService.currentUser.subscribe(user => {
      user.courses.forEach(course => {
        if (course.status) {
          this.courseList.push(course.course);
        }
      });
      this.courseService.getListCourseRegistered(this.courseList).subscribe(res => {
        this.courses = res;
        this.documentList = true;
      })
    })
  }
}
