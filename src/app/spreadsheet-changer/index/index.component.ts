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
  submitted = false;

  loadedSpreadsheet$: Observable<Spreadsheet>;
  isLoading$: Observable<boolean>;

  constructor(private spreadsheetFacade: SpreadsheetFacade) {
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });
    this.isLoading$ = this.spreadsheetFacade.isLoading$();
  }

  submitSearch() {
    this.submitted = true;
    this.loadedSpreadsheet$ = this.spreadsheetFacade.loadSpreadsheet(this.searchForm.controls.search.value)
  }

  saveSpreadsheet(spreadsheet: Spreadsheet){
    this.spreadsheetFacade.updateCurrentSpreadsheet(spreadsheet)
  }
}
