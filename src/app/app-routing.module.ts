import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const userRoutes: Routes = [
  {path: 'breedables', loadChildren: () => import('./breedable/breedable.module').then(m => m.BreedableModule)},
  {path: 'valuables', loadChildren: () => import('./valuable/valuable.module').then(m => m.ValuableModule)}
];


const routes: Routes = [
  {
    path: 'change-spreadsheet',
    loadChildren: () => import('./spreadsheet-changer/spreadsheet-changer.module').then(m => m.SpreadsheetChangerModule)
  },
  {
    path: ':spreadsheetId', children: userRoutes
  },
  {
    path: 'u/:username', children: userRoutes
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
