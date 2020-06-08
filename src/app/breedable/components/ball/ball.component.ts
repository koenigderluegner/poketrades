import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Worksheet } from '@spreadsheet/models/worksheet';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { switchMap, tap } from 'rxjs/operators';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { GridService } from '../../../grid/services/grid.service';
import { GridAppearanceType } from '../../../grid/grid-appearance.type';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss'],
})
export class BallComponent implements OnInit, OnDestroy {

  worksheetTitle: string;
  worksheet: Worksheet;

  subscriptions: Subscription[] = [];
  gridAppearance$: Observable<GridAppearanceType>;
  hideItems$: Observable<boolean>;

  constructor(
    private spreadsheetFacade: SpreadsheetFacade,
    private route: ActivatedRoute,
    private slugifyPipe: SlugifyPipe,
    private gridService: GridService
  ) {
  }

  ngOnInit(): void {

    this.gridAppearance$ = this.gridService.getGridAppearance$();
    this.hideItems$ = this.gridService.getHideItems$();

    this.route.paramMap.pipe(
      tap(params => this.worksheetTitle = params.get('worksheetTitle')),
      switchMap(
        () => {
          return this.spreadsheetFacade.getCurrentSpreadsheet$()
        }
      )).subscribe(
      {
        next: (spreadsheetData) => {
          this.worksheet = spreadsheetData.worksheets.filter(
            worksheet => this.slugifyPipe.transform(worksheet.title) === this.worksheetTitle
          )?.[0];
        }
      }
    );
  }

  trackBy(index, pokemon) {
    return pokemon.id;
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
