import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { ValuableRoutingModule } from './valuable-routing.module';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ValuableRoutingModule
  ]
})
export class ValuableModule { }
