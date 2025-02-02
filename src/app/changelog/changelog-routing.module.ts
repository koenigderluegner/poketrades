import { Routes } from '@angular/router';


export const routes: Routes = [
  {path: '', loadComponent: () => import('./changelog.component').then(m => m.ChangelogComponent)},

];
