import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { FormControl } from '@angular/forms';
import { Worksheet } from '@spreadsheet/models/worksheet';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { GridService } from '../../../grid/services/grid.service';
import { GridAppearanceType } from '../../../grid/grid-appearance.type';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


  @HostBinding('class.view') isView = true;

  spreadsheetData$: Observable<Spreadsheet>;

  toggleInactivesControl: FormControl;

  spreadsheetId: string | undefined;
  worksheets: Worksheet[] | undefined;

  subTypeItemMap: { [key: string]: string } = {
    events: 'cherish',
    legendaries: 'master',
    shinies: 'shiny-charm',
    competitives: 'focus-sash',
    rngs: 'teachy-tv'
  };

  constructor(
    private spreadsheetFacade: SpreadsheetFacade,
    private gridService: GridService
  ) {
    this.toggleInactivesControl = new FormControl(false);
    this.spreadsheetData$ = this.spreadsheetFacade.getCurrentSpreadsheet$();
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

  changeGrid(appearance: GridAppearanceType): void {
    this.gridService.updateGridAppearance(appearance);
  }

  getItemMapping(subType?: string): string {
    if (subType) {
      return this.subTypeItemMap[subType.toLocaleLowerCase()] ?? '';
    } else {
      return '';
    }
  }

  changeGridInactives(): void {
    this.gridService.updateHideItems(this.toggleInactivesControl.value);
  }

}
