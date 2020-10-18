import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { ActivatedRoute } from '@angular/router';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { GridService } from '../../../grid/services/grid.service';
import { Worksheet } from '@spreadsheet/models/worksheet';
import { Observable, Subscription } from 'rxjs';
import { GridAppearanceType } from '../../../grid/grid-appearance.type';
import { Pokemon } from '@shared/interfaces/pokemon';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';

@Component({
  selector: 'app-valuables',
  templateUrl: './valuables.component.html',
  styleUrls: ['./valuables.component.scss']
})
export class ValuablesComponent implements OnInit {

  worksheetTitle: string | null | undefined;
  worksheet: Worksheet | undefined;

  subscriptions: Subscription[] = [];
  gridAppearance$: Observable<GridAppearanceType>;
  hideItems$: Observable<boolean>;

  constructor(
    private spreadsheetFacade: SpreadsheetFacade,
    private route: ActivatedRoute,
    private slugifyPipe: SlugifyPipe,
    private gridService: GridService
  ) {
    this.gridService.updateHideInactiveItemsControl(true);
    this.gridService.updateHideAppearanceControl(false);
    this.gridAppearance$ = this.gridService.getGridAppearance$();
    this.hideItems$ = this.gridService.getHideItems$();
  }

  ngOnInit(): void {

    this.route.paramMap.pipe(
      tap(params => this.worksheetTitle = params.get('worksheetTitle')),
      switchMap(
        () => {
          return this.spreadsheetFacade.getCurrentSpreadsheet$();
        }
      )).subscribe(
      {
        next: (spreadsheetData: Spreadsheet) => {
          this.worksheet = spreadsheetData.worksheets.filter(
            (worksheet: Worksheet) => this.slugifyPipe.transform(worksheet.title) === this.worksheetTitle
          )?.[0];
        }
      }
    );
  }

  trackBy(index: number, pokemon: Pokemon): string {
    return pokemon.id;
  }

}
