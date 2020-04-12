import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinimalComponent } from './minimal/minimal.component';
import { GridComponent } from './grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';



@NgModule({
  declarations: [MinimalComponent, GridComponent, GridItemComponent],
  exports: [
    GridComponent,
    GridItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GridModule { }
