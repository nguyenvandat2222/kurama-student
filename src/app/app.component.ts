import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserInfoModel} from './core/models/user-info.model';
import {AuthService} from './core/services/auth.service';
import {CommonService} from './core/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  specialPage = false;

  // private specialPages: any[] = [
  //   `/auth/${CONST.FrontURI.LOGIN}`,
  //   `/auth/${CONST.FrontURI.REGISTER}`,
  //   '/'
  // ];
  currentUser!: UserInfoModel;

  constructor(private router: Router, private commonService: CommonService) {
    // this.router.events.subscribe((route: any) => {
    //   if (route.routerEvent) {
    //     this.currentUrl = route.routerEvent.url || '';
    //   } else {
    //     this.currentUrl = route.url || '';
    //   }
    //   this.specialPage = this.specialPages.indexOf(this.currentUrl) === -1;
    // });
    this.commonService.currentUser.subscribe(res => {
      this.currentUser = res;
    });



  }

}
