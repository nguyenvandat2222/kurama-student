
export const FrontURI = {
  AUTH: 'auth',
  HOME: 'home',
  LOGIN: 'login',
  REGISTER: 'register',
  COURSES: 'courses',
  LESSONS: 'lessons',
  MENTOR: 'mentor',
  CLASS_MANAGEMENT: 'class-management',
  CALENDER_STUDY: 'calendar-study',
  DOCUMENT: 'document',
  DOCUMENT_LIST: 'document-list',
  DOCUMENT_DETAIL: 'document-detail',
  TEST_LESSON: 'test-lesson',
  CERTIFICATE: 'certificate'

};
export const LocalStorage = {
  LOGIN_INFO: 'login_info',
  USER_INFO: 'user_info'

};

export const ApiURI = {
  LOGIN: 'auth/login',
  REGISTER: 'auth/register',
  LOGOUT: 'auth/logout',
  GET_LIST_COURSE: 'student/course/list',
  GET_COURSE_BY_ID: 'student/course/getFindById',
  REGISTER_COURSE: 'student/course/register',
  CANCEL_COURSE: 'student/course/cancel',
  GET_CALENDAR_BY_COURSE: 'calendar/getListCalendarOfCourse',
  GET_CALENDAR_BY_STUDENT: 'calendar/getListCalendarOfStudent',
  GET_CALENDAR_OF_STUDENT: 'calendar/getListCalendarOfStudent',
  GET_LIST_COURSE_REGISTERED: 'student/course/listCourseRegistered',
  GET_LIST_TEST_LESSON: 'student/test/getListTestByCourse',
  GET_DETAIL_TEST_LESSON: 'student/test/getDetailTestLesson',
  ANSWER_LESSON: 'student/test/answerLesson',
  SAVE_COUNT_ANSWER: 'student/test/saveCount',
  CHANGE_STATUS_TEST: 'student/test/changeStatus',
  PAYMENT_COURSE: 'student/course/payment',
  GET_LIST_DOCUMENT: 'student/document/getListDocument',
  CANCEL_COURSE_STUDENT: 'student/course/cancelCourse'

};
