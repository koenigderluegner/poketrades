import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DatabaseFacadeService } from '../../database/database-facade.service';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
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
      }
    ));
  }
}
