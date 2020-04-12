import { Component, OnInit } from '@angular/core';
import { SpreadsheetDataService } from '@shared/services/spreadsheet-data.service';
import { Observable } from 'rxjs';
import { Spreadsheet } from '@shared/interfaces/spreadsheet';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  spreadsheetData$: Observable<Spreadsheet>;

  constructor(private spreadsheetDataService: SpreadsheetDataService) {
  }

  ngOnInit(): void {
    this.spreadsheetData$ = this.spreadsheetDataService.getSpreadsheetInformation();
  }

}
