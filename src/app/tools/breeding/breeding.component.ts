import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DatabaseFacadeService } from '../../database/database-facade.service';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap, startWith, tap } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-breeding',
  templateUrl: './breeding.component.html',
  styleUrls: ['./breeding.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreedingComponent implements OnInit {

  control: FormControl;
  breedables$: Observable<any>;
  private breedables: any;
  filteredPokemon: Observable<any[]>;
  selectedPokemon$;
  selectedPokemon: any;
  eggMoves: string[] | undefined;
  parentMoves: never;


  constructor(private database: DatabaseFacadeService) {
  }

  ngOnInit(): void {
    this.control = new FormControl('');
    this.breedables$ = this.database.getBreedableLegality().pipe(
      tap(pokemon => {
        this.breedables = pokemon;
      })
    );

    this.filteredPokemon = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): any[] {
    const filterValue = this._normalizeValue(value);
    return this.breedables?.filter(breedable => this._normalizeValue(breedable.pokemon).includes(filterValue)) || [];
  }

  private _normalizeValue(value: any): string {
    let pokemon;
    if (typeof value !== 'string') {
      pokemon = value?.pokemon || '';
    } else {
      pokemon = value;
    }
    return pokemon.toLowerCase().replace(/\s/g, '');
  }

  displayFn(pokemon): string {
    return pokemon.pokemon;
  }

  selectPokemon($event: MatAutocompleteSelectedEvent) {
    this.selectedPokemon$ = this.database.findPokemon($event.option.value.pokemon).pipe(tap(
      pokemon => {
        this.selectedPokemon = pokemon;

        this.database.getEggMovesForPokemon(pokemon.name).subscribe({
          next: value => {
            this.eggMoves = value;
          }
        });

        this.database.getEggGroupParents(pokemon.eggGroups).pipe(
          mergeMap(parents => {
              const forkObj = {};

              for (const parent of parents) {
                forkObj[parent.name] = this.database.getMovesForPokemon(parent.name);
              }

              return forkJoin(forkObj);
            }
          )
        ).subscribe(value => {
          this.parentMoves = value;
        });

      }
    ));
  }
}
