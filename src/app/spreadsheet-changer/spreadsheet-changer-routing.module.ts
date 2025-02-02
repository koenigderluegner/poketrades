import { Routes } from '@angular/router';


export const routes: Routes = [
  {path: '', loadComponent: () => import('./index/index.component').then(m => m.IndexComponent)}
];
