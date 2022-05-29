import { Component, OnInit } from '@angular/core';
import {TestLessonModel} from '../../../../core/models/test-lesson.model';
import {QuestionModel} from '../../../../core/models/question.model';
import {ActivatedRoute, Router} from '@angular/router';
import {TestLessonService} from '../../../../core/services/test-lesson.service';
import {UserInfoModel} from '../../../../core/models/user-info.model';
import {CommonService} from '../../../../core/services/common.service';
import * as CONST from '../../../../core/constants';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {AlertModalComponent} from '../../components/alert-modal/alert-modal.component';
import {AlertScoreComponent} from '../../components/alert-score/alert-score.component';
@Component({
  selector: 'app-test-lesson',
  templateUrl: './test-lesson.component.html',
  styleUrls: ['./test-lesson.component.scss']
})
export class TestLessonComponent implements OnInit {
  testId: any;
  testLesson!: TestLessonModel;
  questions!: QuestionModel[];
  loading = false;
  count = 0;
  answers: {question: string, score: boolean}[] = [];
  currentUser!: UserInfoModel;
  source!: string;
  score = 0;
  modalRef!: MDBModalRef;

  constructor(private route: ActivatedRoute,
              private testLessonService: TestLessonService,
              private router: Router,
              private commonService: CommonService,
              private modalService: MDBModalService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(param => {
          this.testId = param.get('id');
          this.testLessonService.getDetailTest(this.testId).subscribe((res) => {
            this.testLesson = res[0].testLesson;
            this.questions = res[1].questions;
            this.source = res[2].source;
          })
        }
      );
    this.commonService.currentUser.subscribe(res => this.currentUser = res);
  }

  onAnswer(question: string, answer: string) {
    this.testLessonService.onAnswerLesson(this.testId, question ,answer).subscribe(res => {
      let flag = false;
      const item = {
        question: question,
        score: res.score
      }
      if (this.answers.length === 0) {
        this.answers.push(item);
      } else {
        this.answers.forEach(value => {
          if (value.question === question) {
             value.score = res.score;
             flag = true;
          }
        });
        if (!flag){
          this.answers.push(item);
        }
      }
      this.onSave();
    }, error => {
      this.alert();
    })
  }
  onSave() {
    this.count = 0;
    this.answers.forEach(value => {
      if (value.score) {
        this.count += 1;
        this.score = Math.round((this.count / this.questions.length) * 100)
      }
    })
    this.testLessonService.saveCountAnswer(this.currentUser._id, this.source, this.score).subscribe(res => {
      this.currentUser.courses = res.courses;
      this.commonService.setLocalStorage(CONST.LocalStorage.USER_INFO, this.currentUser);
    }, error => {
    })
  }
  alert() {
    this.modalRef = this.modalService.show(AlertModalComponent);
  }
  alertScore() {
    const options = {
      data: {
        score: this.score
      },
      backdrop: 'static',
      keyboard: false
    }
    this.modalRef = this.modalService.show(AlertScoreComponent, options);
    this.modalRef.content.saveButtonClicked.subscribe((res: any) => {
      this.testLessonService.changeStatus(this.testId).subscribe(value => {
        this.router.navigate(['/test-lesson'])
      })
    })
  }
}
