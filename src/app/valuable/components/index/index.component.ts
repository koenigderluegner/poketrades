import { Component, HostBinding, OnInit } from '@angular/core';
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


  spreadsheetData$: Observable<Spreadsheet>;
  spreadsheetId: string | undefined;
  worksheets: Worksheet[] | undefined;
  subTypeItemMap: Record<string, string> = {
    events: 'cherish',
    legendaries: 'master',
    shinies: 'shiny-charm',
    competitives: 'focus-sash',
    rngs: 'teachy-tv'
  };
  @HostBinding('class.view') private _isView = true;

  constructor(private readonly _spreadsheetFacade: SpreadsheetFacade) {
    this.spreadsheetData$ = this._spreadsheetFacade.getCurrentSpreadsheet$();
  }

  ngOnInit(): void {
    this.spreadsheetData$.subscribe({
      next: spreadsheet => {
        this.spreadsheetId = spreadsheet.id;
        this.worksheets = spreadsheet.worksheets.filter(worksheet => worksheet.config?.type === 'Valuables'
        );
      }
    });
  }

  getItemMapping(subType?: string): string {
    if (subType) {
      return this.subTypeItemMap[subType.toLocaleLowerCase()] ?? '';
    } else {
      return '';
    }
  }

}
