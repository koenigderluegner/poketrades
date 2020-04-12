import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { BreedableRoutingModule } from './breedable-routing.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    BreedableRoutingModule
  ]
})
export class BreedableModule {
}
