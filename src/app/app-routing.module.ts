import { Route, Routes } from '@angular/router';


const toolsRoutes: Route = {
  path: 'tools',
  loadChildren: () => import('./tools/tools-routing.module').then(m => m.routes)
};


const userRoutes: Routes = [
  {path: 'breedables', loadChildren: () => import('./breedable/breedable-routing.module').then(m => m.routes)},
  {path: 'valuables', loadChildren: () => import('./valuable/valuable-routing.module').then(m => m.routes)},
];

userRoutes.push(toolsRoutes);

export const appRoutes: Routes = [
  {path: '', loadChildren: () => import('./changelog/changelog-routing.module').then(m => m.routes)},
  {
    path: 'help',
    loadChildren: () => import('./help/help-routing.module').then(m => m.routes)
  },
  {
    path: 'change-spreadsheet',
    loadChildren: () => import('./spreadsheet-changer/spreadsheet-changer-routing.module').then(m => m.routes)
  },
  {
    path: ':spreadsheetId', children: userRoutes
  },
  {
    path: 'u/:username', children: userRoutes
  },
];

appRoutes.unshift(toolsRoutes);
