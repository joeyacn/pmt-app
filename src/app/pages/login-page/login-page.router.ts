import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page.component';

const LOGIN_ROUTER: Routes = [
    {
        path: '',
        component: LoginPageComponent,
    },
];

export const loginRouter = RouterModule.forChild(LOGIN_ROUTER);
