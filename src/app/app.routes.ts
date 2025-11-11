import { Routes } from '@angular/router';
import { Home }from './features/landing/home/home';
import { LoginComponent } from "./core/login.component/login.component";

export const routes: Routes = [

    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: '',
        component: Home,
        title: 'Home Page',
        pathMatch: 'full'
    },
];
