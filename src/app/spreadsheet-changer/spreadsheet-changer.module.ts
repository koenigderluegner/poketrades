import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SpreadsheetChangerRoutingModule } from './spreadsheet-changer-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SpreadsheetChangerRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SpreadsheetChangerModule { }
