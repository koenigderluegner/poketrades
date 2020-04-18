import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SpreadsheetChangerRoutingModule } from './spreadsheet-changer-routing.module';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SpreadsheetChangerRoutingModule
  ]
})
export class SpreadsheetChangerModule { }
