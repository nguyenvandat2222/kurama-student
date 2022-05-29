import { Component, OnInit } from '@angular/core';
import * as CONST from '../../../../core/constants';

@Component({
  selector: 'app-file-word-item',
  templateUrl: './file-word-item.component.html',
  styleUrls: ['./file-word-item.component.scss']
})
export class FileWordItemComponent implements OnInit {

  routing = `/${CONST.FrontURI.DOCUMENT}/${CONST.FrontURI.DOCUMENT_DETAIL}`;
  constructor() { }

  ngOnInit(): void {
  }

}
