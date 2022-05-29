import {CalendarItemModel} from './calendarItem.model';

export interface CourseDetailModel {
  _id: string;
  name: string;
  studentQuantity: number;
  lessonQuantity: number;
  studentRegistered: number;
  status: boolean;
  code: string;
  calendars: CalendarItemModel[];
  teacher: {
    name: string,
    email: string
  };
  user: any[];
}
