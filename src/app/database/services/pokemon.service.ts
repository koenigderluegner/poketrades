import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private db;

  constructor(private httpClient: HttpClient) {
  }

  loadDatabase(): Observable<any[]> {
    if (this.db) {
      return of(this.db);
    } else {
      return this.httpClient.get<any[]>('assets/database/pokemon.json').pipe(
        tap(database => {
          this.db = database;
        })
      );
    }


  }

  findPokemon(name: string) {
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
}
