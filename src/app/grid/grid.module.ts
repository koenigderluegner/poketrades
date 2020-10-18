import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinimalComponent } from './minimal/minimal.component';
import { GridComponent } from './grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { IconModule } from '../icon/icon.module';
import { SharedModule } from '@shared/shared.module';
import { NormalComponent } from './normal/normal.component';
import { DetailedComponent } from './detailed/detailed.component';
import { ChangerComponent } from './changer/changer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStructuralsModule } from '@tngtech/ngx-structurals';
import { GridControllerComponent } from './grid-controller/grid-controller.component';


@NgModule({
  declarations: [
    MinimalComponent,
    GridComponent,
    GridItemComponent,
    NormalComponent,
    DetailedComponent,
    ChangerComponent,
    GridControllerComponent
  ],
  exports: [
    GridComponent,
    GridItemComponent,
    ChangerComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    SharedModule,
    ReactiveFormsModule,
    NgxStructuralsModule
  ]
})
export class GridModule {
}
