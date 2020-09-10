import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsComponent } from './tools.component';
import { BreedingComponent } from './breeding/breeding.component';


const routes: Routes = [
  {
    path: '', component: ToolsComponent, children: [
      {
        path: 'breeding', component: BreedingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule {
}
