import {Component, Input, OnInit} from '@angular/core';
import * as CONST from '../../../../core/constants';
import {CourseModel} from '../../../../core/models/course.model';
@Component({
  selector: 'app-document-folder-item',
  templateUrl: './document-folder-item.component.html',
  styleUrls: ['./document-folder-item.component.scss']
})
export class DocumentFolderItemComponent implements OnInit {

  routing = CONST.FrontURI;
  @Input() folder!: CourseModel;
  constructor() { }

  ngOnInit(): void {
  }

}
