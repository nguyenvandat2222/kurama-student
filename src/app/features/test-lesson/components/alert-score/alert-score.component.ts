import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {MDBModalService} from 'angular-bootstrap-md';

@Component({
  selector: 'app-alert-score',
  templateUrl: './alert-score.component.html',
  styleUrls: ['./alert-score.component.scss']
})
export class AlertScoreComponent implements OnInit {

  score!: number;
  public saveButtonClicked: Subject<any> = new Subject<any>();

  constructor(private modalService: MDBModalService) { }

  ngOnInit(): void {
  }

  onOk() {
    this.saveButtonClicked.next();
    this.modalService.hide(1);
  }

}
