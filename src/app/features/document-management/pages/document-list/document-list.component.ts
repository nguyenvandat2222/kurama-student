import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../../core/services/course.service';
import {CommonService} from '../../../../core/services/common.service';
import {CourseModel} from '../../../../core/models/course.model';
import {UserInfoModel} from '../../../../core/models/user-info.model';
import {DocumentModel} from '../../../../core/models/document.model';
import {ActivatedRoute, Router} from '@angular/router';
import {DocumentService} from '../../../../core/services/document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  courseId: any;
  documents!: DocumentModel[]
  doc = '';
  loading = false;
  document!: DocumentModel;
  constructor(private route: ActivatedRoute, private documentService: DocumentService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(param => {
          this.courseId = param.get('id');
          if (this.courseId) {
            this.documentService.getListDocument(this.courseId).subscribe((res) => {
              this.documents = res;
            })
          }
        }
      );
  }

  onDetail(doc: DocumentModel) {
    this.document = doc
    this.doc = doc.link;
  }




}
