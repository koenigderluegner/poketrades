import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: ':dexId', loadComponent: () => import('./living-dexes.component').then(m => m.LivingDexesComponent)
  }
];
