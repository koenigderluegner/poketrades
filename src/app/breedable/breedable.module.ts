import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { BreedableRoutingModule } from './breedable-routing.module';
import { BallComponent } from './components/ball/ball.component';


@NgModule({
  declarations: [IndexComponent, BallComponent],
  imports: [
    CommonModule,
    BreedableRoutingModule
  ]
})
export class BreedableModule {
}
