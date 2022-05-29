import {CourseUserModel} from './course-user.model';

export interface UserInfoModel {
  _id: string;
  authorities: Array<string>;
  username: string;
  email: string;
  role: string;
  token: string;
  imgUrl: string;
  name: string;
  location: string;
  major: string;
  birthDay: Date;
  courses: CourseUserModel[];
}
