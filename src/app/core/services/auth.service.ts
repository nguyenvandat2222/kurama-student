import {Injectable} from '@angular/core';
import {CommonService} from './common.service';
import {Observable} from 'rxjs';
import {LoginRequestModel} from '../models/login-request.model';
import {LoginInfoModel} from '../models/login-info.model';

@Injectable({providedIn: 'root'})
export class AuthService extends CommonService {

  login(loginRequest: LoginRequestModel): Observable<LoginInfoModel> {
    return this.post(this.api.LOGIN, loginRequest);
  }

  logout(id: string, token: string): Observable<any> {
    return this.post(this.api.LOGOUT, {id, token});
  }


}
