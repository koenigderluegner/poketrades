import { Injectable } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseFacadeService {

  constructor(
    private pokemonService: PokemonService
  ) {
  }

  loadDatabases() {
    return forkJoin({
      pokemon: this.pokemonService.loadDatabase()
    })
  }

  findPokemon(name: string): Observable<any> {
    return this.pokemonService.findPokemon(name);
  }
}
