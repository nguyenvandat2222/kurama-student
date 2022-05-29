import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {FeatureModule} from './features/feature.module';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DatePipe} from '@angular/common';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {StripeCheckoutModule} from 'ng-stripe-checkout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FeatureModule,
    CoreModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    DatePipe,
    StripeCheckoutModule
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
