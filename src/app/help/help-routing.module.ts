import { Routes } from '@angular/router';


export const routes: Routes = [{path: '', loadComponent: () => import('./help.component').then(m => m.HelpComponent)}];
