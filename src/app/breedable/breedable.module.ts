import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { BreedableRoutingModule } from './breedable-routing.module';
import { BallComponent } from './components/ball/ball.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [IndexComponent, BallComponent],
  imports: [
    CommonModule,
    BreedableRoutingModule,
    SharedModule
  ]
})
export class BreedableModule {
}
