import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseShinyDexComponent } from '@shared/components/base-shiny-dex/base-shiny-dex.component';
import { DatabaseFacadeService } from '../../../database/database-facade.service';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { GridService } from '../../../grid/services/grid.service';
import { PokemonEntry } from '../../../database/models/pokemon-entry.interface';
import { combineLatest, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ShinyDexEntry } from '@shared/interfaces/shiny-dex-entry.interface';
import { ObtainingMethods } from '@shared/enums/obtaining-method.enum';
import { GridComponent } from "../../../grid/grid.component";
import { GridItemComponent } from "../../../grid/grid-item/grid-item.component";
import { ShinyDexEntryToPokemonPipe } from "../../pipes/shiny-dex-entry-to-pokemon.pipe";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-friend-safari-shiny-dex',
  templateUrl: './friend-safari-shiny-dex.component.html',
  styleUrls: ['./friend-safari-shiny-dex.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    GridComponent,
    GridItemComponent,
    ShinyDexEntryToPokemonPipe,
    AsyncPipe
  ]
})
export class FriendSafariShinyDexComponent extends BaseShinyDexComponent implements OnInit {
  private _databases = inject(DatabaseFacadeService);
  private _spreadsheets = inject(SpreadsheetFacade);
  private _gridService = inject(GridService);


  shinies$?: Observable<[string, ShinyDexEntry][]>;

  constructor() {
    super();
    this._gridService.updateHideOwnedStatusControl(false);
    this._gridService.updateHideAppearanceControl(true);
  }

  ngOnInit(): void {
    this.shinies$ = combineLatest([this._spreadsheets.getCurrentSpreadsheet$(), this._databases.getPokemon()]).pipe(
      switchMap(([spreadsheet, pokemonEntries]) => {
        return of(Object.entries(this.buildShinyList(spreadsheet, pokemonEntries)));
      })
    );
  }

  protected buildEmptyShinyList(pokemonEntries: PokemonEntry[]): { [p: string]: ShinyDexEntry } {
    const shinies: { [key: string]: ShinyDexEntry } = {};

    for (const pokemon of pokemonEntries) {
      if (this._pokemonEligibleForShinyDex(pokemon)) {
        Object.assign(shinies, {
          [pokemon.name]: {
            pokemon, amountShinies: 0
          }
        });
      }
    }

    return shinies;
  }

  private _pokemonEligibleForShinyDex(pokemon: PokemonEntry): boolean {
    const obtainingMethod: ObtainingMethods = pokemon.fsObtainingMethod ?? ObtainingMethods.UNKNOWN;
    return pokemon.canBeShiny
      && pokemon.canBeBanked
      && [ObtainingMethods.CAPTURE, ObtainingMethods.EVOLVING].includes(obtainingMethod);
  }

}
