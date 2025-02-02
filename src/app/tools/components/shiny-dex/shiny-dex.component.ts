import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatabaseFacadeService } from '../../../database/database-facade.service';
import { combineLatest, Observable, of } from 'rxjs';
import { SpreadsheetFacade } from '@spreadsheet/spreadsheet.facade';
import { switchMap } from 'rxjs/operators';
import { GridService } from '../../../grid/services/grid.service';
import { BaseShinyDexComponent } from '@shared/components/base-shiny-dex/base-shiny-dex.component';
import { PokemonEntry } from '../../../database/models/pokemon-entry.interface';
import { ShinyDexEntry } from '@shared/interfaces/shiny-dex-entry.interface';

@Component({
  selector: 'app-shiny-dex',
  templateUrl: './shiny-dex.component.html',
  styleUrls: ['./shiny-dex.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class ShinyDexComponent extends BaseShinyDexComponent implements OnInit {

  shinies$?: Observable<[string, ShinyDexEntry][]>;

  readonly #excludedSlugs: string[] = [
    'floette-eternal',
    'eiscue-noice'
  ]


  constructor(private databases: DatabaseFacadeService,
              private spreadsheets: SpreadsheetFacade,
              private gridService: GridService) {
    super();
    this.gridService.updateHideOwnedStatusControl(false);
    this.gridService.updateHideAppearanceControl(true);
  }

  ngOnInit(): void {
    this.shinies$ = combineLatest([this.spreadsheets.getCurrentSpreadsheet$(), this.databases.getPokemon()]).pipe(
      switchMap(([spreadsheet, pokemonEntries]) => {
        return of(Object.entries(this.buildShinyList(spreadsheet, pokemonEntries)));
      })
    );
  }

  protected buildEmptyShinyList(pokemonEntries: PokemonEntry[]): { [p: string]: ShinyDexEntry } {
    const shinies: { [key: string]: ShinyDexEntry } = {};

    for (const pokemon of pokemonEntries) {
      if (pokemon.canBeShiny && pokemon.canBeBanked && !pokemon.name.includes('-Gigantamax') && !this.#excludedSlugs.includes(pokemon.iconSlug)) {
        Object.assign(shinies, {
          [pokemon.name]: {
            pokemon, amountShinies: 0
          }
        });
      }
    }

    return shinies;
  }

}
