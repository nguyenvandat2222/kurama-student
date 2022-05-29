import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../../core/services/common.service';
import {UserInfoModel} from '../../../../core/models/user-info.model';

@Component({
  selector: 'app-certificate-page',
  templateUrl: './certificate-page.component.html',
  styleUrls: ['./certificate-page.component.scss']
})
export class CertificatePageComponent implements OnInit {

  currentUser!: UserInfoModel
  date = new Date();
  constructor(private commonService: CommonService) {
    commonService.currentUser.subscribe(res => this.currentUser = res);
  }

  ngOnInit(): void {
  }

}
