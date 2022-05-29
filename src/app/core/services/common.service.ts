import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import * as CONST from '../constants';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserInfoModel} from '../models/user-info.model';

@Injectable()
export class CommonService {

  protected url = environment.url;
  protected api = CONST.ApiURI;
  public currentUser!: Observable<UserInfoModel>;
  public currentUserSubject!: BehaviorSubject<any>;
  constructor(protected http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserInfoModel>(JSON.parse(this.getLocalStorage(CONST.LocalStorage.USER_INFO)));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  protected get(API: string): Observable<any> {
    const currentUser: UserInfoModel = JSON.parse(this.getLocalStorage(CONST.LocalStorage.USER_INFO));
    let headers;
    if (currentUser) {
      headers = {
        'Authorization': 'Bearer ' + currentUser.token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    }
    return this.http.get<any>(this.url + API, {headers});
  }
  protected post(API: string, reBody: any): Observable<any> {
    const currentUser: UserInfoModel = JSON.parse(this.getLocalStorage(CONST.LocalStorage.USER_INFO));
    let headers;
    if (currentUser) {
      headers = {
        'Authorization': 'Bearer ' + currentUser.token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    }
    return this.http.post<any>(this.url + API, reBody, {headers});
  }
  public setLocalStorage(key: string, data: any): void {
    if (key === CONST.LocalStorage.USER_INFO) {
      this.currentUserSubject.next(data);
    }
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getLocalStorage(key: string): any {
    return localStorage.getItem(key);
  }

  public removeLocalStorage(key: string): void {
    if (key === CONST.LocalStorage.USER_INFO) {
      this.currentUserSubject.next(null);
    }
    localStorage.removeItem(key);
  }



}
