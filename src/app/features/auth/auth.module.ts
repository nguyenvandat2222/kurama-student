import {NgModule} from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import {RouterModule, Routes} from '@angular/router';
import * as CONST from '../../core/constants';
import {SharedModule} from '../../shared/shared.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {ReactiveFormsModule} from '@angular/forms';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: CONST.FrontURI.LOGIN},
  {path: CONST.FrontURI.LOGIN, component: LoginPageComponent},
  {path: CONST.FrontURI.REGISTER, component: RegisterPageComponent}
];
@NgModule({
  providers: [
  ],
  declarations: [LoginPageComponent, RegisterPageComponent, LoginFormComponent, RegisterFormComponent],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        ReactiveFormsModule,

    ]
})
export class AuthModule {
}
