import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinimalComponent } from './minimal/minimal.component';
import { GridComponent } from './grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { IconModule } from '../icon/icon.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [MinimalComponent, GridComponent, GridItemComponent],
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
