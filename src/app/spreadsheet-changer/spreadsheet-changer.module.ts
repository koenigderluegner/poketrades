import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SpreadsheetChangerRoutingModule } from './spreadsheet-changer-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStructuralsModule } from '@tngtech/ngx-structurals';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SpreadsheetChangerRoutingModule,
    ReactiveFormsModule,
    NgxStructuralsModule
  ]
})
export class SpreadsheetChangerModule { }
