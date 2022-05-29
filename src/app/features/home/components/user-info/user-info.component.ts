import {Component, Input, OnInit} from '@angular/core';
import {UserInfoModel} from '../../../../core/models/user-info.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input() userInfo!: UserInfoModel;
  constructor() { }

  ngOnInit(): void {
  }

}
