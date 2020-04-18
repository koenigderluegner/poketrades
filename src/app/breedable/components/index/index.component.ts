import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { Worksheet } from '@spreadsheet/models/worksheet';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  @HostBinding('class.view') isView: boolean = true;

  spreadsheetData$: Observable<Spreadsheet>;

  spreadsheetId: string;
  worksheets: Worksheet[];

  constructor(private spreadsheetFacade: SpreadsheetFacade) {
  }

  ngOnInit(): void {
    this.spreadsheetData$ = this.spreadsheetFacade.getCurrentSpreadsheet$();

    this.spreadsheetData$.subscribe({
      next: spreadsheet => {
        this.spreadsheetId = spreadsheet.id;
        this.worksheets = spreadsheet.worksheets.filter(worksheet => worksheet.config?.type === 'Breedables');
      }
    })
  }

}
