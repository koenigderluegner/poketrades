import { Injectable } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { forkJoin, Observable } from 'rxjs';
import { MoveService } from './services/move.service';
import { LegalityService } from './services/legality.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseFacadeService {

  constructor(
    private pokemonService: PokemonService,
    private moveService: MoveService,
    private legalityService: LegalityService
  ) {
  }

  loadDatabases() {
    return forkJoin({
      pokemon: this.pokemonService.loadDatabase(),
      moves: this.moveService.loadDatabase(),
      breedableLegality: this.legalityService.loadDatabase()
    });
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

  getBreedableLegality(): Observable<any> {
    return this.legalityService.getList();
  }

  getEggGroupParents(eggGroups: string[]) {
    return this.pokemonService.getEggGroupParents(eggGroups);
  }

  getEggMovesForPokemon(pokemonName: string): Observable<any> {
    return this.moveService.getEggMovesForPokemon(pokemonName);
  }

  getLevelUpMovesForPokemon(pokemonName: string): Observable<any> {
    return this.moveService.getLevelUpMovesForPokemon(pokemonName);
  }

  getMovesForPokemon(pokemonName: string): Observable<any> {
    return forkJoin({
      eggMoves: this.getEggMovesForPokemon(pokemonName),
      levelUpMoves: this.getLevelUpMovesForPokemon(pokemonName),
    });
  }

}
