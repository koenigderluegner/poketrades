import { Injectable } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { forkJoin, Observable } from 'rxjs';
import { MoveService } from './services/move.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseFacadeService {

  constructor(
    private pokemonService: PokemonService,
    private moveService: MoveService
  ) {
  }

  loadDatabases() {
    return forkJoin({
      pokemon: this.pokemonService.loadDatabase(),
      moves: this.moveService.loadDatabase()
    })
  }

  findPokemon(name: string): Observable<any> {
    return this.pokemonService.findPokemon(name);
  }

  findMove(name: string): Observable<any> {
    return this.moveService.findMove(name);
  }

  isEggMove(pokemonName: string, move: string): Observable<boolean> {
    return this.moveService.isEggMove(pokemonName, move);
  }

}
