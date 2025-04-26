import { Component, computed, inject, input } from '@angular/core';
import { Observable } from 'rxjs';
import { Worksheet } from '@spreadsheet/models/worksheet';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { GridService } from '../../../grid/services/grid.service';
import { GridAppearanceType } from '../../../grid/grid-appearance.type';
import { GridItemComponent } from '../../../grid/grid-item/grid-item.component';
import { GridComponent } from '../../../grid/grid.component';
import { AsyncPipe } from '@angular/common';
import { CastBreedablePipe } from '@shared/pipes/cast-breedable.pipe';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss'],
  imports: [
    GridItemComponent,
    GridComponent,
    AsyncPipe,
    CastBreedablePipe
  ]
})
export class BallComponent {
  private slugifyPipe = inject(SlugifyPipe);
  private gridService = inject(GridService);

  private currentSpreadsheet = inject(SpreadsheetFacade).currentSpreadsheetRef.value;

  worksheetTitle = input<string>();

  gridAppearance$: Observable<GridAppearanceType>;

  constructor() {
    this.gridService.updateHideAppearanceControl(false);
    this.gridService.updateHideOwnedStatusControl(false);
    this.gridAppearance$ = this.gridService.getGridAppearance$();
  }

  worksheet = computed(() => {

    const spreadsheetData = this.currentSpreadsheet();

    return spreadsheetData?.worksheets.filter(
      (worksheet: Worksheet) => this.slugifyPipe.transform(worksheet.title) === this.worksheetTitle()
    )?.[0];

  });

}
