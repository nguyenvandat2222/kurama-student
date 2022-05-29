import {RouterModule, Routes} from '@angular/router';
import * as CONST from '../core/constants';
import {ModuleWithProviders} from '@angular/core';
import {UserGuard} from '../shared/guards/user.guard';
import {AuthGuard} from '../shared/guards/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: CONST.FrontURI.AUTH},
  {path: CONST.FrontURI.HOME, loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [UserGuard]},
  {path: CONST.FrontURI.AUTH, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate: [AuthGuard]},
  {path: CONST.FrontURI.COURSES, loadChildren: () => import('./course/course.module').then(m => m.CourseModule), canActivate: [UserGuard]},
  {path: CONST.FrontURI.LESSONS, loadChildren: () => import('./lesson/lesson.module').then(m => m.LessonModule), canActivate: [UserGuard]},
  {path: CONST.FrontURI.MENTOR, loadChildren: () => import('./mentor/mentor.module').then(m => m.MentorModule), canActivate: [UserGuard]},
  {
    path: CONST.FrontURI.CLASS_MANAGEMENT,
    loadChildren: () => import('./class-management/class-management.module').then(m => m.ClassManagementModule),
    canActivate: [UserGuard]
  },
  {
    path: CONST.FrontURI.CALENDER_STUDY,
    loadChildren: () => import('./calender-study/calender-study.module').then(m => m.CalenderStudyModule),
    canActivate: [UserGuard]
  },
  {
    path: CONST.FrontURI.DOCUMENT,
    loadChildren: () => import('./document-management/document-management.module').then(m => m.DocumentManagementModule),
    canActivate: [UserGuard]
  },
  {path: CONST.FrontURI.TEST_LESSON, loadChildren: () => import('./test-lesson/test-lesson.module').then(m => m.TestLessonModule), canActivate: [UserGuard]},
  {path: CONST.FrontURI.CERTIFICATE, loadChildren: () => import('./certificate/certificate.module').then(m => m.CertificateModule), canActivate: [UserGuard]}
];
export const AppRoutes: ModuleWithProviders<any> = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
