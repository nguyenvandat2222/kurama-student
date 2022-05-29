import {NgModule} from '@angular/core';
import {CommonService} from './services/common.service';
import {AuthService} from './services/auth.service';

@NgModule({
  providers: [CommonService, AuthService]
})
export class CoreModule {
}
