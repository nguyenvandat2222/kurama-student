import {NgModule} from '@angular/core';
import {AppRoutes} from './feature.routing';
import { HeaderComponent } from './main-layouts/header/header.component';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  providers: [],
  imports: [
    AppRoutes,
    SharedModule,

  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class FeatureModule {
}
