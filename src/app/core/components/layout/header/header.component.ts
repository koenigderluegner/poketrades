import { Component, OnInit } from '@angular/core';
import { SpreadsheetDataService } from '@shared/services/spreadsheet-data.service';
import { Spreadsheet } from '@shared/interfaces/spreadsheet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  spreadsheetData$: Observable<Spreadsheet>;

  constructor(private spreadsheetDataService: SpreadsheetDataService) {
  }

  ngOnInit(): void {
    this.spreadsheetData$ = this.spreadsheetDataService.getSpreadsheetInformation();
  }
}
