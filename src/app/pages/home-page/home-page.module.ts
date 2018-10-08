import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent} from '../../_components/content/content.component';
import { FooterComponent } from '../../_components/footer/footer.component';
import { HeaderComponent} from '../../_components/header/header.component';
import { SiderComponent } from '../../_components/sider/sider.component';
import { HomePageComponent } from './home-page.component';
import { homeRouter } from './home-page.router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    homeRouter,
    NgZorroAntdModule,
  ],
  declarations: [
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    SiderComponent,
    HomePageComponent,
  ]
})
export class HomePageModule { }
