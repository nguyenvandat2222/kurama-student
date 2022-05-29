import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import { CertificatePageComponent } from './pages/certificate-page/certificate-page.component';
const routes: Routes = [
  {path: '', component: CertificatePageComponent}
]
@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [CertificatePageComponent]
})
export class CertificateModule {}
