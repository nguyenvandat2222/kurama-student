import { Component, OnInit } from '@angular/core';
import * as CONST from '../../../core/constants';
import {AuthService} from '../../../core/services/auth.service';
import {UserInfoModel} from '../../../core/models/user-info.model';
import {Router} from '@angular/router';
import {CommonService} from '../../../core/services/common.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routing = CONST.FrontURI;
  currentUser!: UserInfoModel;
  constructor(private authService: AuthService, private router: Router, private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.commonService.currentUser.subscribe(res => this.currentUser = res);
  }

  onLogout(): void {
      this.commonService.removeLocalStorage(CONST.LocalStorage.USER_INFO);
      this.commonService.removeLocalStorage(CONST.LocalStorage.LOGIN_INFO);
      this.router.navigate(['/', this.routing.AUTH]);
  }

}
