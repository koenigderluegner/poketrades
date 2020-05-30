import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { BreedableRoutingModule } from './breedable-routing.module';
import { BallComponent } from './components/ball/ball.component';
import { SharedModule } from '@shared/shared.module';
import { GridModule } from '../grid/grid.module';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { NgxStructuralsModule } from '@tngtech/ngx-structurals';


@NgModule({
  declarations: [IndexComponent, BallComponent],
    imports: [
        CommonModule,
        BreedableRoutingModule,
        SharedModule,
        GridModule,
        NgxStructuralsModule
    ],
  providers: [SlugifyPipe]
})
export class BreedableModule {
}
