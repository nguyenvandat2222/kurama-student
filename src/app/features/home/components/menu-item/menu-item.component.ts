import {Component, Input, OnInit} from '@angular/core';
import {MenuItemModel} from '../../../../core/models/menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() item: MenuItemModel | any;
  constructor() { }

  ngOnInit(): void {

  }

}
