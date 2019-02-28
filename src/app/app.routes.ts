import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KEY_STRING } from './app.strings';
import { ErrorComponent } from './error/error.component';

export const ROUTES: Routes = [
    // { path: '', component: ErrorComponent, pathMatch: 'full', redirectTo: '/error' },
    // { path: 'error', component: ErrorComponent },
    { path: ':key', component: HomeComponent }
];
