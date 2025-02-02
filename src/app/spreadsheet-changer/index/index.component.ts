import { Component, HostBinding, inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { SearchHistoryEntry } from '../models/search-history-entry.interface';
import { environment } from '../../../environments/environment';
import { ApiError } from '@shared/interfaces/api-error.interface';
import { catchError } from 'rxjs/operators';
import { AsyncPipe } from "@angular/common";
import { SpinnerComponent } from "@shared/components/spinner/spinner.component";
import { BallGuyBubbleComponent } from "@shared/components/ball-guy-bubble/ball-guy-bubble.component";

interface SearchGroup {
  search: FormControl<string>;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    SpinnerComponent,
    BallGuyBubbleComponent
  ]
})
export class IndexComponent {
  private spreadsheetFacade = inject(SpreadsheetFacade);


  @HostBinding('class') classes = 'view spreadsheet-changer-view';

  searchForm: FormGroup<SearchGroup>;
  hasRequested = false;

  apiKey = environment.googleApiKey;

  loadedSpreadsheet$: Observable<Spreadsheet> | undefined;
  isLoading$: Observable<boolean>;

  spreadsheetHistory$: Observable<SearchHistoryEntry[]>;

  error: ApiError | null = null;

  constructor() {
    this.searchForm = new FormGroup({
      search: new FormControl('', {nonNullable: true})
    });
    this.isLoading$ = this.spreadsheetFacade.isLoading$();
    this.spreadsheetHistory$ = this.spreadsheetFacade.getSpreadsheetHistory$();
  }

  submitSearch(): void {
    this.hasRequested = true;
    this.error = null;
    this.loadedSpreadsheet$ = this.spreadsheetFacade.searchSpreadsheet(this.searchForm.controls.search.value, this.apiKey)
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
    this.loadedSpreadsheet$ = this.spreadsheetFacade.loadSpreadsheet(id, this.apiKey);

  }

  trackBy(index: number, item: SearchHistoryEntry): string {
    return item.id;
  }
}
