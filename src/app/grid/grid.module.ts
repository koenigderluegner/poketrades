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



@NgModule({
  declarations: [MinimalComponent, GridComponent, GridItemComponent, NormalComponent, DetailedComponent, ChangerComponent],
  exports: [
    GridComponent,
    GridItemComponent,
    ChangerComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class GridModule { }
