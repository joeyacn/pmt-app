import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { homeRouter } from './home-page.router';

@NgModule({
  imports: [
    CommonModule,
    homeRouter,
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
