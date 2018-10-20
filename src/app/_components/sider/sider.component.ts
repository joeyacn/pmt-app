import { Component, Input, OnInit } from '@angular/core';
import { MenuData } from '../../../assets/object/menu-data';
import { MenuItem } from '../../_models/menu-item';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {

  @Input() isCollapsed;
  menuData = MenuData as MenuItem[];

  constructor() { }

  ngOnInit() {
  }

}
