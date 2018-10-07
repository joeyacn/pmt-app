import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../_components/login/login.component';
import { LoginPageComponent } from './login-page.component';
import { loginRouter } from './login-page.router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    loginRouter,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ],
  declarations: [
    LoginComponent,
    LoginPageComponent
  ]
})
export class LoginPageModule { }
