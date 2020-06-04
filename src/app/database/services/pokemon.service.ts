import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, switchMap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {
  }

  loadDatabase(): Observable<any[]> {
    return this.httpClient.get('assets/database/pokemon.json').pipe(
      shareReplay(1)
    ) as Observable<any[]>


  }

  findPokemon(name: string) {
    return this.loadDatabase().pipe(
      switchMap(database => {
        const hits = database.filter(pokemon => {
          return pokemon.name.toLowerCase() === name.toLowerCase()
        });
        if (hits.length === 0) {
          throwError('No Pokemon found with name: ' + name);
        }
        return of(hits[0]);
      })
    )
  }
}
