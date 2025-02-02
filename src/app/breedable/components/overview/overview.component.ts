import { Component, inject, ViewEncapsulation } from '@angular/core';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { combineLatest, Observable, of } from 'rxjs';
import { DatabaseFacadeService } from '../../../database/database-facade.service';
import { switchMap } from 'rxjs/operators';
import { LegalityEntry } from '../../../database/models/legality-entry.interface';
import { BreedablesOverviewList } from '@shared/interfaces/breedables-overview-list.interface';
import { GridService } from '../../../grid/services/grid.service';
import { AsyncPipe, KeyValuePipe } from "@angular/common";
import { PokemonComponent } from "../../../icon/pokemon/pokemon.component";
import { NameToSlugPipe } from "@shared/pipes/name-to-slug.pipe";
import { ItemComponent } from "../../../icon/item/item.component";
import { SlugifyPipe } from "@shared/pipes/slugify.pipe";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    AsyncPipe,
    PokemonComponent,
    NameToSlugPipe,
    KeyValuePipe,
    ItemComponent,
    SlugifyPipe
  ]
})
export class OverviewComponent {
  private facade = inject(SpreadsheetFacade);
  private db = inject(DatabaseFacadeService);
  private gridService = inject(GridService);


  data$: Observable<{ legality: LegalityEntry[], entries: BreedablesOverviewList }>;

  constructor() {
    this.gridService.updateHideAppearanceControl(true);
    this.gridService.updateHideOwnedStatusControl(true);
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
