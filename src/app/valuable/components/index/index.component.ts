import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { Worksheet } from '@spreadsheet/models/worksheet';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { GridControllerComponent } from "../../../grid/grid-controller/grid-controller.component";
import { SubNaviItemComponent } from "@shared/components/sub-navi-item/sub-navi-item.component";
import { ItemComponent } from "../../../icon/item/item.component";
import { RouterOutlet } from "@angular/router";
import { SlugifyPipe } from "@shared/pipes/slugify.pipe";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  imports: [
    GridControllerComponent,
    SubNaviItemComponent,
    ItemComponent,
    RouterOutlet,
    SlugifyPipe
  ]
})
export class IndexComponent implements OnInit {
  private readonly _spreadsheetFacade = inject(SpreadsheetFacade);



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

  constructor() {
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
