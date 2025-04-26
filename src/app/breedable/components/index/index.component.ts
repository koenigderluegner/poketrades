import { Component, computed, inject } from '@angular/core';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { GridControllerComponent } from '../../../grid/grid-controller/grid-controller.component';
import { SubNaviItemComponent } from '@shared/components/sub-navi-item/sub-navi-item.component';
import { ItemComponent } from '../../../icon/item/item.component';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { RouterOutlet } from '@angular/router';

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
  ],
  host: {
    'class': 'view'
  }
})
export class IndexComponent {

  spreadsheetData$ = inject(SpreadsheetFacade).currentSpreadsheetRef;

  worksheets = computed(() => {
    const spreadsheet = this.spreadsheetData$.value()!;
    return spreadsheet.worksheets.filter(worksheet => worksheet.config?.type === 'Breedables');
  });
  spreadsheetId = inject(SpreadsheetFacade).sheetURLPath;

}
