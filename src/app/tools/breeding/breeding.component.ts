import {Component, HostBinding, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {DatabaseFacadeService} from '../../database/database-facade.service';
import {forkJoin, Observable} from 'rxjs';
import {map, mergeMap, startWith, tap} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {LegalityEntry} from '../../database/models/legality-entry.interface';
import {PokemonEntry} from '../../database/models/pokemon-entry.interface';
import {LevelUpMove} from '../../database/models/level-up-move.interface';
import {Pokemon} from '@shared/interfaces/pokemon';
import {SpreadsheetFacade} from '@spreadsheet/spreadsheet.facade';
import {Worksheet} from '@spreadsheet/models/worksheet';
import {GridService} from '../../grid/services/grid.service';
import { Breedable } from '@shared/interfaces/breedable.interface';

@Component({
  selector: 'app-breeding',
  templateUrl: './breeding.component.html',
  styleUrls: ['./breeding.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreedingComponent {

  @HostBinding('class.breeding-view') setClass = true;

  control: FormControl;
  breedables$: Observable<LegalityEntry[]>;
  private breedables: LegalityEntry[] | undefined;
  filteredPokemon: Observable<LegalityEntry[]>;
  selectedPokemon$: Observable<PokemonEntry> | undefined;
  selectedPokemon: PokemonEntry | undefined;
  eggMoves: string[] | undefined;
  parentMoves: { [key: string]: { eggMoves: string[]; levelUpMoves: LevelUpMove[] } } | null;
  placeHolderPokemon: Pokemon;
  worksheets?: Worksheet[];
  sheetBreeadbles?: { [key: string]: Breedable };


  constructor(private database: DatabaseFacadeService,
              private spreadsheetFacade: SpreadsheetFacade,
              private gridService: GridService) {
    this.gridService.updateHideOwnedStatusControl(true);
    this.gridService.updateHideAppearanceControl(true);
    this.placeHolderPokemon = {
      id: '',
      name: '',
      dex: '',
      ability: '',
      isOwned: true,
      hasHiddenAbility: false,
      isShiny: false,
      iconSlug: '',
      moves: []
    };
    this.parentMoves = null;
    this.control = new FormControl('');
    this.breedables$ = this.database.getBreedableLegality().pipe(
      tap(pokemon => {
        this.breedables = pokemon;
      })
    );

    spreadsheetFacade.getCurrentSpreadsheet$().subscribe(spreadsheet => {
      if (spreadsheet.hasBreedables) {
        this.worksheets = spreadsheet.worksheets.filter(worksheet => {
          return worksheet.config?.type === 'Breedables';
        });
      }
    });


    this.filteredPokemon = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): LegalityEntry[] {
    const filterValue = this._normalizeValue(value);
    return this.breedables?.filter(
      (legalityEntry: LegalityEntry) => this._normalizeValue(legalityEntry.pokemon).includes(filterValue)
    ) || [];
  }

  private _normalizeValue(value: string | LegalityEntry): string {
    let pokemon;
    if (typeof value !== 'string') {
      pokemon = value?.pokemon || '';
    } else {
      pokemon = value;
    }
    return pokemon.toLowerCase().replace(/\s/g, '');
  }

  displayFn(pokemon: LegalityEntry): string {
    return pokemon.pokemon;
  }

  selectPokemon($event: MatAutocompleteSelectedEvent): void {
    this.selectedPokemon$ = this.database.findPokemon($event.option.value.pokemon).pipe(tap(
      pokemon => {
        this.selectedPokemon = pokemon;

        this.sheetBreeadbles = {};

        this.worksheets?.forEach(worksheet => {
          const breedable = worksheet.data?.filter(poke => {
            return poke.name === pokemon.name;
          });

          if (breedable?.length && worksheet.config?.ball && this.sheetBreeadbles) {
            this.sheetBreeadbles[worksheet.config?.ball] = breedable[0] as Breedable;
          }

        });

        this.database.getEggMovesForPokemon(pokemon.name).subscribe({
          next: value => {
            this.eggMoves = value;
          }
        });

        this.database.getEggGroupParents(pokemon.eggGroups).pipe(
          mergeMap(parents => {
              const forkObj: { [key: string]: Observable<{ eggMoves: string[]; levelUpMoves: LevelUpMove[] }> } = {};

              for (const parent of parents) {
                forkObj[parent.name] = this.database.getMovesForPokemon(parent.name);
              }

              return forkJoin(forkObj);
            }
          )
        ).subscribe((value: { [key: string]: { eggMoves: string[]; levelUpMoves: LevelUpMove[] } }) => {
          this.parentMoves = value;
        });

      }
    ));
  }

  isEggMove(move: string) {
    return this.eggMoves?.includes(move);
  }

  asPokemon(values: object): Pokemon {
    return ({...this.placeHolderPokemon, ...values});
  }

  hasMaxEggmoves(breedable: Breedable): boolean {
    let eggCount = 0;
    const eggMovesLengeth = Math.min(this.eggMoves?.length ?? -1, 4);
    for (let i = 0; i < 4; i++) {
      if (this.isEggMove(breedable.moves[i])) {
        eggCount++;
        if (eggCount === eggMovesLengeth) {
          break;
        }
      }
    }
    return eggCount === eggMovesLengeth;
  }


  selectInputText($event: FocusEvent) {
    ($event.target as HTMLInputElement).select();
  }
}
