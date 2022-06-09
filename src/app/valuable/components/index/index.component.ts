import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { UntypedFormControl } from '@angular/forms';
import { Worksheet } from '@spreadsheet/models/worksheet';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


  @HostBinding('class.view') isView = true;

  spreadsheetData$: Observable<Spreadsheet>;

  toggleInactivesControl: UntypedFormControl;

  spreadsheetId: string | undefined;
  worksheets: Worksheet[] | undefined;

  subTypeItemMap: { [key: string]: string } = {
    events: 'cherish',
    legendaries: 'master',
    shinies: 'shiny-charm',
    competitives: 'focus-sash',
    rngs: 'teachy-tv'
  };

  constructor(private readonly _spreadsheetFacade: SpreadsheetFacade) {
    this.toggleInactivesControl = new UntypedFormControl(false);
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
