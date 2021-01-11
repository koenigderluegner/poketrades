import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const toolsRoutes = {
  path: 'tools',
  loadChildren: () => import('./tools/tools.module').then(m => m.ToolsModule)
};


const userRoutes: Routes = [
  {path: 'breedables', loadChildren: () => import('./breedable/breedable.module').then(m => m.BreedableModule)},
  {path: 'valuables', loadChildren: () => import('./valuable/valuable.module').then(m => m.ValuableModule)},
];

userRoutes.push(toolsRoutes);

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

routes.unshift(toolsRoutes);

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
