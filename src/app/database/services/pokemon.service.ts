import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { PokemonEntry } from '../models/pokemon-entry-.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private db: PokemonEntry[];

  constructor(private httpClient: HttpClient) {
  }

  loadDatabase(): Observable<PokemonEntry[]> {
    if (this.db) {
      return of(this.db);
    } else {
      return this.httpClient.get<PokemonEntry[]>('assets/database/pokemon.json').pipe(
        tap(database => {
          this.db = database;
        })
      );
    }


  }

  findPokemon(name: string): Observable<PokemonEntry> {
    return this.loadDatabase().pipe(
      switchMap(database => {
        const hits = database.filter(pokemon => {
          return pokemon.name.toLowerCase() === name.toLowerCase();
        });
        if (hits.length === 0) {
          throwError('No pokemon found with name: ' + name);
        }
        return of(hits[0]);
      })
    );
  }

  getEggGroupParents(eggGroups: string[]): Observable<PokemonEntry[]> {
    if (eggGroups.includes('Undiscovered') || eggGroups.includes('Ditto')) {
      return of([]);
    }

    return this.loadDatabase().pipe(
      switchMap(database => {
        const hits = database.filter(pokemon => {
          return pokemon.eggGroups.some(x => eggGroups.includes(x));
        });
        hits.sort((a, b) => {
          return a.dex === b.dex ? 0 : a.dex < b.dex ? -1 : 1;
        });
        if (hits.length === 0) {
          throwError('No pokemon found with egg groups: ');
        }
        return of(hits);
      })
    );
  }
}
