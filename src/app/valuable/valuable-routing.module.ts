import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ValuablesComponent } from './components/valuables/valuables.component';


export const routes: Routes = [
  {
    path: '', component: IndexComponent, children: [
      {path: ':worksheetTitle', component: ValuablesComponent}
    ]
  }
];
