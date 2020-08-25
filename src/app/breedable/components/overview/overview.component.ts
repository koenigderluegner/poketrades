import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { combineLatest, Observable, of } from 'rxjs';
import { DatabaseFacadeService } from '../../../database/database-facade.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OverviewComponent implements OnInit {

  data$: Observable<any>;

  constructor(private facade: SpreadsheetFacade,
              private db: DatabaseFacadeService) {
  }

  ngOnInit(): void {
    this.data$ = combineLatest([this.db.getBreedableLegality(),
      this.facade.getCurrentSpreadsheet$()]
    ).pipe(
      switchMap(val => {
        console.log(val[1]);
        return of({legality: val[0], entries: val[1].overviewEntries});
      })
    );
  }

}
