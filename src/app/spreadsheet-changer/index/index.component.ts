import { Component, effect, inject, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { ApiError } from '@shared/interfaces/api-error.interface';
import { catchError } from 'rxjs/operators';
import { AsyncPipe } from "@angular/common";
import { SpinnerComponent } from "@shared/components/spinner/spinner.component";
import { BallGuyBubbleComponent } from "@shared/components/ball-guy-bubble/ball-guy-bubble.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
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
  loadedSpreadsheet$: Observable<Spreadsheet> | undefined;
  isLoading$: Observable<boolean>;

  spreadsheetHistory$ = this.spreadsheetFacade.getSpreadsheetHistory$();

  error: ApiError | null = null;

  constructor() {

    this.isLoading$ = this.spreadsheetFacade.isLoading$();

    effect(() => {
      if (this.searchValue().length)
        this.submitSearch(this.searchValue)
    });
  }

  submitSearch(searchValue: () => string): void {
    this.hasRequested = true;
    this.error = null;
    this.loadedSpreadsheet$ = this.spreadsheetFacade.searchSpreadsheet(searchValue)
      .pipe(
        catchError((err, observable) => {
          this.error = err;
          return observable;
        })
      );
  }

  saveSpreadsheet(spreadsheet: Spreadsheet): void {
    this.spreadsheetFacade.updateCurrentSpreadsheet(spreadsheet);
  }

  fromHistory(id: string): void {
    this.hasRequested = true;
    this.loadedSpreadsheet$ = this.spreadsheetFacade.loadSpreadsheet(() => id);
  }

}
