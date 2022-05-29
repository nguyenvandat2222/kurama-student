import {Injectable} from '@angular/core';
import {CommonService} from './common.service';
import {Observable} from 'rxjs';
import {DocumentModel} from '../models/document.model';

@Injectable({providedIn: 'root'})
export class DocumentService extends CommonService {

  getListDocument(course: string): Observable<DocumentModel[]> {
    return this.post(this.api.GET_LIST_DOCUMENT, {course: course});
  }

}
