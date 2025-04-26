import { Component, effect, inject, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { ApiError } from '@shared/interfaces/api-error.interface';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
import { BallGuyBubbleComponent } from '@shared/components/ball-guy-bubble/ball-guy-bubble.component';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    ReactiveFormsModule,
    SpinnerComponent,
    BallGuyBubbleComponent,
    FormsModule
  ],
  host: {
    'class': 'view spreadsheet-changer-view'
  }
})
export class IndexComponent {
  private spreadsheetFacade = inject(SpreadsheetFacade);

  searchValue = signal('');
  hasRequested = false;
  loadedSpreadsheet$ = this.spreadsheetFacade.searchResult;

  spreadsheetHistory$ = this.spreadsheetFacade.getSpreadsheetHistory$();

  error: ApiError | null = null;

  constructor() {

    effect(() => {
      const error = this.spreadsheetFacade.searchResult.error() as HttpErrorResponse | null;
      if (error) {
        this.error = this.spreadsheetFacade.convertApiErrors(error.status);
      }
    });


    effect(() => {
      if (this.searchValue().length)
        this.submitSearch(this.searchValue);
    });
  }

  submitSearch(searchValue: () => string): void {
    this.hasRequested = true;
    this.spreadsheetFacade.currentSearchTerm.set(searchValue());

  }

  saveSpreadsheet(spreadsheet: Spreadsheet): void {
    this.spreadsheetFacade.updateCurrentSpreadsheet(spreadsheet);
  }

  fromHistory(id: string): void {
    this.hasRequested = true;
    this.spreadsheetFacade.currentSearchTerm.set(id);
  }

}
