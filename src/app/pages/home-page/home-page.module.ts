import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent} from '../../_components/content/content.component';
import { FooterComponent } from '../../_components/footer/footer.component';
import { HeaderComponent} from '../../_components/header/header.component';
import { SiderComponent } from '../../_components/sider/sider.component';
import { TabComponent } from '../../_components/tab/tab.component';
import { MenuComponent } from '../../_components/menu/menu.component';
import { HomePageComponent } from './home-page.component';
import { homeRouter } from './home-page.router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzMenuItemDirective } from 'ng-zorro-antd/menu/nz-menu-item.directive';
import { NzMenuDirective } from 'ng-zorro-antd/menu/nz-menu.directive';
import { NzMenuModule } from 'ng-zorro-antd/menu/nz-menu.module';
import { NzSubMenuComponent } from 'ng-zorro-antd/menu/nz-submenu.component';

@NgModule({
  imports: [
    CommonModule,
    homeRouter,
    NgZorroAntdModule,
    // NzMenuItemDirective,
    // NzMenuDirective,
    // NzMenuModule,
    // NzSubMenuComponent
  ],
  declarations: [
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    SiderComponent,
    TabComponent,
    MenuComponent,
    HomePageComponent,
    // NzMenuItemDirective,
    // NzMenuDirective,
    // NzMenuModule,
    // NzSubMenuComponent
  ],
  providers:[
    // NzMenuItemDirective,
    // NzMenuDirective,
    // NzMenuModule,
    // NzSubMenuComponent
  ]

})
export class HomePageModule { }
