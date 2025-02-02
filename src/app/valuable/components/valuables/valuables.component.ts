import { Component, inject, OnInit } from '@angular/core';
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
import { GridItemComponent } from "../../../grid/grid-item/grid-item.component";
import { GridComponent } from "../../../grid/grid.component";
import { AsyncPipe } from "@angular/common";
import { CastValuablePipe } from "@shared/pipes/cast-valuable.pipe";

@Component({
  selector: 'app-valuables',
  templateUrl: './valuables.component.html',
  styleUrls: ['./valuables.component.scss'],
  imports: [
    GridItemComponent,
    GridComponent,
    AsyncPipe,
    CastValuablePipe
  ]
})
export class ValuablesComponent implements OnInit {
  private spreadsheetFacade = inject(SpreadsheetFacade);
  private route = inject(ActivatedRoute);
  private slugifyPipe = inject(SlugifyPipe);
  private gridService = inject(GridService);


  worksheetTitle: string | null | undefined;
  worksheet: Worksheet | undefined;

  subscriptions: Subscription[] = [];
  gridAppearance$: Observable<GridAppearanceType>;

  constructor() {
    this.gridService.updateHideOwnedStatusControl(true);
    this.gridService.updateHideAppearanceControl(false);
    this.gridAppearance$ = this.gridService.getGridAppearance$();
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
