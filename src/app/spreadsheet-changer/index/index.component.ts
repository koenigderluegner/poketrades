import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  host: {class: 'view'}
})
export class IndexComponent implements OnInit {

  searchForm: FormGroup;
  hasRequested = false;

  loadedSpreadsheet$: Observable<Spreadsheet>;
  isLoading$: Observable<boolean>;

  spreadsheetHistory$: Observable<any[]>;

  constructor(private spreadsheetFacade: SpreadsheetFacade) {
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });
    this.isLoading$ = this.spreadsheetFacade.isLoading$();
    this.spreadsheetHistory$ = this.spreadsheetFacade.getSpreadsheetHistory$();
  }

  submitSearch() {
    this.hasRequested = true;
    this.loadedSpreadsheet$ = this.spreadsheetFacade.searchSpreadsheet(this.searchForm.controls.search.value)
  }

  saveSpreadsheet(spreadsheet: Spreadsheet) {
    this.spreadsheetFacade.updateCurrentSpreadsheet(spreadsheet)
  }

  fromHistory(id: any) {
    this.hasRequested = true;
    this.loadedSpreadsheet$ = this.spreadsheetFacade.loadSpreadsheet(id)

  }

  trackBy(index, item){
    return item.id
  }
}
