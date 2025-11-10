import { Routes } from '@angular/router';
import { Home }from './features/landing/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home Page'
    }
];
