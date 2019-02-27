import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    // { path: '', component: ErrorComponent, pathMatch: 'full', redirectTo: '/error' },
    // { path: 'error', component: ErrorComponent },
    { path: ':id', component: HomeComponent },
];

