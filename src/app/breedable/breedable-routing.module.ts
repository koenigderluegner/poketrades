import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { BallComponent } from './components/ball/ball.component';


const routes: Routes = [
  {
    path: '', component: IndexComponent, children: [
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
