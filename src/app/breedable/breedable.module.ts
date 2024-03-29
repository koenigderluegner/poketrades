import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { BreedableRoutingModule } from './breedable-routing.module';
import { BallComponent } from './components/ball/ball.component';
import { SharedModule } from '@shared/shared.module';
import { GridModule } from '../grid/grid.module';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '../icon/icon.module';
import { OverviewComponent } from './components/overview/overview.component';


@NgModule({
  declarations: [IndexComponent, BallComponent, OverviewComponent],
  imports: [
    CommonModule,
    BreedableRoutingModule,
    SharedModule,
    GridModule,
    ReactiveFormsModule,
    IconModule
  ],
  providers: [SlugifyPipe]
})
export class BreedableModule {
}
