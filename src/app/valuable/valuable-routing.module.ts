import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '', loadComponent: () => import('./components/index/index.component').then(m => m.IndexComponent), children: [
      {
        path: ':worksheetTitle',
        loadComponent: () => import('./components/valuables/valuables.component').then(m => m.ValuablesComponent)
      }
    ]
  }
];
