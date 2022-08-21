import { Component, OnInit } from '@angular/core';
import { BaseShinyDexComponent } from '@shared/components/base-shiny-dex/base-shiny-dex.component';
import { combineLatest, Observable, of } from 'rxjs';
import { ShinyDexEntry } from '@shared/interfaces/shiny-dex-entry.interface';
import { DatabaseFacadeService } from '../../../database/database-facade.service';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { GridService } from '../../../grid/services/grid.service';
import { switchMap } from 'rxjs/operators';
import { PokemonEntry } from '../../../database/models/pokemon-entry.interface';
import { ObtainingMethods } from '@shared/enums/obtaining-method.enum';

@Component({
  selector: 'app-ultra-wormhole-shiny-dex',
  templateUrl: './ultra-wormhole-shiny-dex.component.html',
  styleUrls: ['./ultra-wormhole-shiny-dex.component.scss']
})
export class UltraWormholeShinyDexComponent extends BaseShinyDexComponent implements OnInit {

  shinies$?: Observable<[string, ShinyDexEntry][]>;

  constructor(
    private _databases: DatabaseFacadeService,
    private _spreadsheets: SpreadsheetFacade,
    private _gridService: GridService
  ) {
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
    const obtainingMethod: ObtainingMethods = pokemon.uwObtainingMethod ?? ObtainingMethods.UNKNOWN;
    return pokemon.canBeShiny
      && pokemon.canBeBanked
      && [ObtainingMethods.CAPTURE, ObtainingMethods.EVOLVING].includes(obtainingMethod);
  }

}
