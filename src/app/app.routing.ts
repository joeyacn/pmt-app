import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: 'app/pages/home-page/home-page.module#HomePageModule',
    },
    // otherwise, redirect to home.
    {
        path: '**',
        redirectTo: '',
    },
];

export const appRouter = RouterModule.forRoot(appRoutes);
