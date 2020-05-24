import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinimalComponent } from './minimal/minimal.component';
import { GridComponent } from './grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { IconModule } from '../icon/icon.module';
import { SharedModule } from '@shared/shared.module';
import { NormalComponent } from './normal/normal.component';



@NgModule({
  declarations: [MinimalComponent, GridComponent, GridItemComponent, NormalComponent],
  exports: [
    GridComponent,
    GridItemComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    SharedModule
  ]
})
export class GridModule { }
