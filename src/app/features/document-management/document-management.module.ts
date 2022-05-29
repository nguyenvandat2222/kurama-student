import {NgModule} from '@angular/core';
import { DocumentPageComponent } from './pages/document-page/document-page.component';
import {RouterModule, Routes} from '@angular/router';
import { DocumentListComponent } from './pages/document-list/document-list.component';
import { DocumentDetailComponent } from './pages/document-detail/document-detail.component';
import * as CONST from '../../core/constants';
import { DocumentFolderItemComponent } from './components/document-folder-item/document-folder-item.component';
import {SharedModule} from '../../shared/shared.module';
import { FileWordItemComponent } from './components/file-word-item/file-word-item.component';
const routes: Routes = [
  {path: '', component: DocumentPageComponent},
  {path: CONST.FrontURI.DOCUMENT_LIST + '/:id', component: DocumentListComponent},
  {path: CONST.FrontURI.DOCUMENT_DETAIL + '/:id', component: DocumentDetailComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule, ],
  declarations: [DocumentPageComponent, DocumentListComponent, DocumentDetailComponent, DocumentFolderItemComponent, FileWordItemComponent]
})
export class DocumentManagementModule {
}
