import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { SearchHistoryEntry } from '../models/search-history-entry.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent {

  @HostBinding('class') classes = 'view';

  searchForm: FormGroup;
  hasRequested = false;

  loadedSpreadsheet$: Observable<Spreadsheet> | undefined;
  isLoading$: Observable<boolean>;

  spreadsheetHistory$: Observable<SearchHistoryEntry[]>;

  constructor(private spreadsheetFacade: SpreadsheetFacade) {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });
    this.isLoading$ = this.spreadsheetFacade.isLoading$();
    this.spreadsheetHistory$ = this.spreadsheetFacade.getSpreadsheetHistory$();
  }

  submitSearch(): void {
    this.hasRequested = true;
    this.loadedSpreadsheet$ = this.spreadsheetFacade.searchSpreadsheet(this.searchForm.controls.search.value);
  }

  saveSpreadsheet(spreadsheet: Spreadsheet): void {
    this.spreadsheetFacade.updateCurrentSpreadsheet(spreadsheet);
  }

  fromHistory(id: string): void {
    this.hasRequested = true;
    this.loadedSpreadsheet$ = this.spreadsheetFacade.loadSpreadsheet(id);

  }

  trackBy(index: number, item: SearchHistoryEntry): string {
    return item.id;
  }
}
