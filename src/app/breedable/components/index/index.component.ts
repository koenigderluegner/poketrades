import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { Worksheet } from '@spreadsheet/models/worksheet';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { GridControllerComponent } from "../../../grid/grid-controller/grid-controller.component";
import { SubNaviItemComponent } from "@shared/components/sub-navi-item/sub-navi-item.component";
import { ItemComponent } from "../../../icon/item/item.component";
import { SlugifyPipe } from "@shared/pipes/slugify.pipe";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  imports: [
    GridControllerComponent,
    SubNaviItemComponent,
    ItemComponent,
    SlugifyPipe,
    RouterOutlet
  ]
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
