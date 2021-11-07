import { Component, ViewEncapsulation } from '@angular/core';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { combineLatest, Observable, of } from 'rxjs';
import { DatabaseFacadeService } from '../../../database/database-facade.service';
import { switchMap } from 'rxjs/operators';
import { LegalityEntry } from '../../../database/models/legality-entry.interface';
import { BreedablesOverviewList } from '@shared/interfaces/breedables-overview-list.interface';
import { GridService } from '../../../grid/services/grid.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OverviewComponent {

  data$: Observable<{ legality: LegalityEntry[], entries: BreedablesOverviewList }>;

  constructor(private facade: SpreadsheetFacade,
              private db: DatabaseFacadeService,
              private gridService: GridService) {
    this.gridService.updateHideAppearanceControl(true);
    this.gridService.updateHideInactiveItemsControl(true);
    this.data$ = combineLatest([
      this.db.getBreedableLegality(),
      this.facade.getCurrentSpreadsheet$()
    ])
      .pipe(
        switchMap(val => {
          return of({legality: val[0], entries: val[1].overviewEntries ?? {}});
        })
      );
  }

}
