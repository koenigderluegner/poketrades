import { Component, ViewEncapsulation } from '@angular/core';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { combineLatest, Observable, of } from 'rxjs';
import { DatabaseFacadeService } from '../../../database/database-facade.service';
import { switchMap } from 'rxjs/operators';
import { LegalityEntry } from '../../../database/models/legality-entry.interface';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OverviewComponent {

  data$: Observable<{ legality: LegalityEntry[], entries?: object }>;

  constructor(private facade: SpreadsheetFacade,
              private db: DatabaseFacadeService) {
    this.data$ = combineLatest([
      this.db.getBreedableLegality(),
      this.facade.getCurrentSpreadsheet$()
    ])
      .pipe(
        switchMap(val => {
          return of({legality: val[0], entries: val[1].overviewEntries});
        })
      );
  }


}
