import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinimalComponent } from './minimal/minimal.component';
import { GridComponent } from './grid.component';



@NgModule({
  declarations: [MinimalComponent, GridComponent],
  imports: [
    CommonModule
  ]
})
export class GridModule { }
