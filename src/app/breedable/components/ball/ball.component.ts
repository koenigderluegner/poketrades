import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Worksheet } from '@spreadsheet/models/worksheet';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { switchMap, tap } from 'rxjs/operators';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { GridService } from '../../../grid/services/grid.service';
import { GridAppearanceType } from '../../../grid/grid-appearance.type';
import { Spreadsheet } from '@spreadsheet/models/spreadsheet';
import { Pokemon } from '@shared/interfaces/pokemon';
import { GridItemComponent } from "../../../grid/grid-item/grid-item.component";
import { GridComponent } from "../../../grid/grid.component";
import { AsyncPipe } from "@angular/common";
import { CastBreedablePipe } from "@shared/pipes/cast-breedable.pipe";

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
export class BallComponent implements OnInit, OnDestroy {
  private spreadsheetFacade = inject(SpreadsheetFacade);
  private route = inject(ActivatedRoute);
  private slugifyPipe = inject(SlugifyPipe);
  private gridService = inject(GridService);


  worksheetTitle: string | undefined;
  worksheet: Worksheet | undefined;

  subscriptions: Subscription[] = [];
  gridAppearance$: Observable<GridAppearanceType>;

  constructor() {
    this.gridService.updateHideAppearanceControl(false);
    this.gridService.updateHideOwnedStatusControl(false);
    this.gridAppearance$ = this.gridService.getGridAppearance$();
  }

  ngOnInit(): void {


    this.route.paramMap.pipe(
      tap(params => this.worksheetTitle = params.get('worksheetTitle') ?? ''),
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

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
