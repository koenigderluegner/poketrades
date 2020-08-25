import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { BallComponent } from './components/ball/ball.component';
import { OverviewComponent } from './components/overview/overview.component';


const routes: Routes = [
  {
    path: '', component: IndexComponent, children: [
      {path: 'overview', component: OverviewComponent},
      {path: ':worksheetTitle', component: BallComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreedableRoutingModule {
}
