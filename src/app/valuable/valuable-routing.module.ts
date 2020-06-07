import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ValuablesComponent } from './components/valuables/valuables.component';


const routes: Routes = [
  {
    path: '', component: IndexComponent, children: [
      {path: ':worksheetTitle', component: ValuablesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValuableRoutingModule {
}
