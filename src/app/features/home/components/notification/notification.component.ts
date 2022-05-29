import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() listCourse!: {course: string, status: boolean}[];
  count = 0;
  constructor() { }

  ngOnInit(): void {
    if (this.listCourse) {
      this.listCourse.forEach(res => {
        if (!res.status) {
          this.count += 1
        }
      })
    }

  }

}
