import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../_components/login/login.component';
import { LoginPageComponent } from './login-page.component';
import { loginRouter } from './login-page.router';

@NgModule({
  imports: [
    CommonModule,
    loginRouter,
  ],
  declarations: [
    LoginComponent,
    LoginPageComponent
  ]
})
export class LoginPageModule { }
