import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {CourseModel} from '../../../../core/models/course.model';
import {UserInfoModel} from '../../../../core/models/user-info.model';
import {CalendarModel} from '../../../../core/models/calendar.model';
import {CourseService} from '../../../../core/services/course.service';
import {CommonService} from '../../../../core/services/common.service';
import {CalendarService} from '../../../../core/services/calendar.service';
import {StripeCheckoutHandler, StripeCheckoutLoader} from 'ng-stripe-checkout';
import * as CONST from '../../../../core/constants';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, AfterViewInit {

  @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective | undefined;
  @ViewChild(MdbTablePaginationComponent, {static: true}) mdbTablePagination: MdbTablePaginationComponent | undefined;
  @ViewChild('row', {static: true}) row: ElementRef | undefined;
  detail = false;
  elements: CourseModel[] = [];
  headElements = ['Thứ tự', 'Id', 'Phòng học', 'Giá', 'Trạng học', 'Yêu cầu'];
  currentUser!: UserInfoModel;
  modalRef!: MDBModalRef;
  calendarCurrent!: CalendarModel[];
  courseList: { course: string, status: boolean }[] = [];
  courses: CourseModel[] = [];
  stripeCheckoutHandler: any;
  courseSelected!: string;

  constructor(private courseService: CourseService,
              private modalService: MDBModalService,
              private commonService: CommonService,
              private calendarService: CalendarService,
              private stripeCheckoutLoader: StripeCheckoutLoader) {
  }

  ngOnInit(): void {
    this.commonService.currentUser.subscribe(res => {
      this.currentUser = res;
      this.courseList = res.courses;
      this.initData();
    });

  }

  public ngAfterViewInit() {
    this.stripeCheckoutLoader.createHandler({
      key: 'pk_test_OoLqBRqZBoSWg4hKv8mA2Igh00kp7b90KE',
      token: (token) => {
        this.currentUser.courses.forEach(value => {
          if(value.course === this.courseSelected) {
            value.status = true;
          }
        })
        this.courseService.payment(this.currentUser._id, this.currentUser.courses).subscribe(res => {
          this.currentUser.courses = res.courses;
          this.courses = [];
          this.courseList = res.courses;
          this.commonService.setLocalStorage(CONST.LocalStorage.USER_INFO, this.currentUser);
        })

      }
    }).then((handler: StripeCheckoutHandler) => {
      this.stripeCheckoutHandler = handler;
    });
  }

  public onClickBuy(amount: number, course: string) {
    this.courseSelected = course;
    this.stripeCheckoutHandler.open({
      amount: amount,
      currency: 'VND',
    });
  }

  initData(): void {
    if (this.courseList) {
      const course: string[] = [];
      let courseMap = new Map();
      this.courseList.forEach(value => {
        course.push(value.course);
        courseMap.set(value.course, value.status);
      });
      this.courseService.getListCourseRegistered(course).subscribe(res => {
        res.forEach(value => {
          value.status = courseMap.get(value._id);
          this.courses.push(value);
        });
        this.elements = this.courses;
        this.mdbTable?.setDataSource(this.elements);
      });
    }

  }


}
