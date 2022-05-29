import {Component, Input, OnInit} from '@angular/core';
import {CalendarModel} from '../../../../core/models/calendar.model';

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.scss']
})
export class CalendarItemComponent implements OnInit {

  @Input() item: any;
  @Input() calendarList!: CalendarModel[]
  constructor() { }

  ngOnInit(): void {
  }

}
