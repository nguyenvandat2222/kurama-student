import {Component, Input, OnInit, TemplateRef, ViewChild,} from '@angular/core';
import {isSameDay, isSameMonth, subDays,} from 'date-fns';
import {Subject} from 'rxjs';
import {CalendarEvent, CalendarView,} from 'angular-calendar';
import {CalendarModel} from '../../../../core/models/calendar.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() calendarList!: Subject<CalendarModel[]>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = false;

  constructor(public datePipe: DatePipe) {
  }

  ngOnInit(): void {
    if (this.calendarList) {
      this.calendarList.subscribe(res => {
        res.forEach(value => {
          let date: any = this.datePipe.transform(value.date, 'hh:mm');
          const item: CalendarEvent = {
            start: new Date(value.date),
            title: date.toString(),
            allDay: true,
            resizable: {
              beforeStart: true,
              afterEnd: true,
            },
            draggable: true,
          };
          this.events.push(item);
          this.dayClicked({date: new Date(), events: []})
        });
      });

    }
  }

  dayClicked({date, events}: { date: Date; events: CalendarEvent[] } ): void {
    if (isSameMonth(date, this.viewDate)) {
      this.activeDayIsOpen = !((isSameDay(this.viewDate, date) && this.activeDayIsOpen) ||
        events.length === 0);
      this.viewDate = date;
    }
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
