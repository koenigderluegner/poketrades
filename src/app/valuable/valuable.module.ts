import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { ValuableRoutingModule } from './valuable-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { GridModule } from '../grid/grid.module';
import { ValuablesComponent } from './components/valuables/valuables.component';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { IconModule } from '../icon/icon.module';


@NgModule({
  declarations: [IndexComponent, ValuablesComponent],
  imports: [
    CommonModule,
    ValuableRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    GridModule,
    IconModule
  ],
  providers: [SlugifyPipe]
})
export class ValuableModule {
}
