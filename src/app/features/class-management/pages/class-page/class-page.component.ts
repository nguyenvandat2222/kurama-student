import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {CourseService} from '../../../../core/services/course.service';
import {CourseModel} from '../../../../core/models/course.model';
import {UserInfoModel} from '../../../../core/models/user-info.model';
import {ClassDetailModalComponent} from '../../components/class-detail-modal/class-detail-modal.component';
import {CommonService} from '../../../../core/services/common.service';
import {CalendarService} from '../../../../core/services/calendar.service';
import {CalendarModel} from '../../../../core/models/calendar.model';

@Component({
  selector: 'app-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.scss']
})
export class ClassPageComponent implements OnInit {

  @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective | undefined;
  @ViewChild(MdbTablePaginationComponent, {static: true}) mdbTablePagination: MdbTablePaginationComponent | undefined;
  @ViewChild('row', {static: true}) row: ElementRef | undefined;
  detail = false;
  elements: CourseModel[] = [];
  headElements = ['#', 'Id', 'Name', 'Lesson total', 'Student total', 'Status' , 'Command'];
  currentUser!: UserInfoModel;
  modalRef!: MDBModalRef;
  calendarCurrent: CalendarModel[] = [];
  courseList: string[] = [];
  constructor(private courseService: CourseService,
              private modalService: MDBModalService,
              private commonService: CommonService,
              private calendarService: CalendarService) {
  }

  ngOnInit(): void {
    this.initData();

  }

  initData(): void {
    this.courseService.currentUser.subscribe(res => {
      this.currentUser = res;
    });
    this.courseService.getListCourse().subscribe(res => {
      this.elements = res;
      this.mdbTable?.setDataSource(this.elements);
    });
    this.commonService.currentUser.subscribe(res => {
      this.courseList = [];
      res.courses.forEach(course => {
        this.courseList.push(course.course)
      })
      console.log(this.courseList)
      if(this.courseList?.length > 0) {
        this.calendarService.getListCalendarOfStudent(this.courseList).subscribe(value => {
          this.calendarCurrent = value;
        })
      }
      
    });
  }

  onDetail(idCourse: string): void {
    const modalOptions = {
      class: 'modal-lg',
      data: {
        course: idCourse,
        calendarCurrent: this.calendarCurrent,
        courseList: this.courseList
      }
    };
    this.modalRef = this.modalService.show(ClassDetailModalComponent, modalOptions);
    this.modalRef.content.saveButtonClicked.subscribe((res: any) => {
      this.initData();
    });
  }


}
