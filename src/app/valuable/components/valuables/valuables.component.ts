import { Component, computed, inject, input } from '@angular/core';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { GridService } from '../../../grid/services/grid.service';
import { Worksheet } from '@spreadsheet/models/worksheet';
import { Observable } from 'rxjs';
import { GridAppearanceType } from '../../../grid/grid-appearance.type';
import { GridItemComponent } from '../../../grid/grid-item/grid-item.component';
import { GridComponent } from '../../../grid/grid.component';
import { AsyncPipe } from '@angular/common';
import { CastValuablePipe } from '@shared/pipes/cast-valuable.pipe';

@Component({
  selector: 'app-valuables',
  templateUrl: './valuables.component.html',
  imports: [
    GridItemComponent,
    GridComponent,
    AsyncPipe,
    CastValuablePipe
  ]
})
export class ValuablesComponent {
  private currentSpreadsheet = inject(SpreadsheetFacade).currentSpreadsheetRef.value;
  private slugifyPipe = inject(SlugifyPipe);
  private gridService = inject(GridService);

  worksheetTitle = input<string>();


  worksheet = computed(() => {

    const spreadsheetData = this.currentSpreadsheet();

    return spreadsheetData?.worksheets.filter(
      (worksheet: Worksheet) => this.slugifyPipe.transform(worksheet.title) === this.worksheetTitle()
    )?.[0];

  })

  gridAppearance$: Observable<GridAppearanceType>;

  constructor() {
    this.gridService.updateHideOwnedStatusControl(true);
    this.gridService.updateHideAppearanceControl(false);
    this.gridAppearance$ = this.gridService.getGridAppearance$();
  }


}
