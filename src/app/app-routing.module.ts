import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'change-spreadsheet',
    loadChildren: () => import('./spreadsheet-changer/spreadsheet-changer.module').then(m => m.SpreadsheetChangerModule)
  },
  {
    path: ':spreadsheetId', children: [
      {path: 'breedables', loadChildren: () => import('./breedable/breedable.module').then(m => m.BreedableModule)},
      {path: 'valuables', loadChildren: () => import('./valuable/valuable.module').then(m => m.ValuableModule)}
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
