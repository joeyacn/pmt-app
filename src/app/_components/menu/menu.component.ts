import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../_models/menu-item';

// from 'ng-zorro-antd';
// import { NzDemoMenuHorizontalComponent } from 'ng-zorro-antd/menu/demo/horizontal';
// import { NzDemoMenuInlineComponent } from './demo/inline';
// import { NzDemoMenuInlineCollapsedComponent } from './demo/inline-collapsed';
// import { NzDemoMenuSiderCurrentComponent } from './demo/sider-current';
// import { NzDemoMenuSwitchModeComponent } from './demo/switch-mode';
// import { NzDemoMenuThemeComponent } from './demo/theme';
// import { NzMenuItemDirective } from 'ng-zorro-antd/menu/nz-menu-item.directive';
// import { NzMenuDirective } from 'ng-zorro-antd/menu/nz-menu.directive';
// import { NzMenuModule } from 'ng-zorro-antd/menu/nz-menu.module';
// import { NzSubMenuComponent } from 'ng-zorro-antd/menu/nz-submenu.component';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() isCollapsed;
  @Input() item: MenuItem;

  constructor() { }

  ngOnInit() {
  }

  menuClicked(item){
    console.log('menu', item, 'clicked.');
  }
}
