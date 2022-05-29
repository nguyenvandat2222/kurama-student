import {CalendarItemModel} from './calendarItem.model';
import {CalendarModel} from './calendar.model';
import {TeacherModel} from './teacher.model';

export interface CourseModel {
  code: string;
  _id: string;
  name: string;
  studentQuantity: number;
  lessonQuantity: number;
  calendars: CalendarModel[];
  status: boolean;
  teacher: TeacherModel;
  price: number;
  studentRegistered: number;
  learned: number;
  score: number;
}
