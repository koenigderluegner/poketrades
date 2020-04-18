import { Component, HostBinding, OnInit } from '@angular/core';
import { SpreadsheetDataService } from '../../../spreadsheet/services/spreadsheet-data.service';
import { Observable } from 'rxjs';
import { Spreadsheet } from '../../../spreadsheet/models/spreadsheet';
import { Worksheet } from '../../../spreadsheet/models/worksheet';

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

  constructor(private spreadsheetDataService: SpreadsheetDataService) {
  }

  ngOnInit(): void {
    this.spreadsheetData$ = this.spreadsheetDataService.getSpreadsheetInformation();

    this.spreadsheetData$.subscribe({
      next: spreadsheet => {
        this.spreadsheetId = spreadsheet.id;
        this.worksheets = spreadsheet.worksheets.filter(worksheet => worksheet.config?.type === 'Breedables');
      }
    })
  }

}
