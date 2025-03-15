import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'home', loadComponent: () => import('./living-dexes.component').then(m => m.LivingDexesComponent)
  }
];
