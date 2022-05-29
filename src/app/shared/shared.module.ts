import {NgModule} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {NgxDocViewerModule} from 'ngx-doc-viewer';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    MDBBootstrapModule.forRoot(),
    NgxDocViewerModule
  ],
  exports: [
    MDBBootstrapModule,
    NgxDocViewerModule,
    CommonModule
  ],
  providers: [],
  declarations: []
})
export class SharedModule {}
