import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { loginRouter } from './login-page.router';

@NgModule({
  imports: [
    CommonModule,
    loginRouter,
  ],
  declarations: [LoginPageComponent]
})
export class LoginPageModule { }
