import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '', loadComponent: () => import('./components/index/index.component').then(m => m.IndexComponent), children: [
      {
        path: 'overview',
        loadComponent: () => import('./components/overview/overview.component').then(m => m.OverviewComponent)
      },
      {
        path: ':worksheetTitle',
        loadComponent: () => import('./components/ball/ball.component').then(m => m.BallComponent)
      }
    ]
  }
];
