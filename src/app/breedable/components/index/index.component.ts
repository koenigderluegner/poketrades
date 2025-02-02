import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { Worksheet } from '@spreadsheet/models/worksheet';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  standalone: false
})
export class IndexComponent implements OnInit {
  private spreadsheetFacade = inject(SpreadsheetFacade);


  @HostBinding('class.view') isView = true;

  spreadsheetData$: Observable<Spreadsheet>;

  spreadsheetId?: string;
  worksheets?: Worksheet[];

  constructor() {
    this.spreadsheetData$ = this.spreadsheetFacade.getCurrentSpreadsheet$();
  }

  ngOnInit(): void {

    this.spreadsheetData$.subscribe({
      next: spreadsheet => {
        this.spreadsheetId = spreadsheet.username ? 'u/' + spreadsheet.username : spreadsheet.id;
        this.worksheets = spreadsheet.worksheets.filter(worksheet => worksheet.config?.type === 'Breedables');
      }
    });
  }
}
