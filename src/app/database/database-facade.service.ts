import { Injectable } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { forkJoin, Observable } from 'rxjs';
import { MoveService } from './services/move.service';
import { LegalityService } from './services/legality.service';
import { Move } from './models/move.interface';
import { LegalityEntry } from './models/legality-entry.interface';
import { PokemonEntry } from './models/pokemon-entry.interface';
import { LevelUpMove } from './models/level-up-move.interface';
import { Database } from './models/database.interface';

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

  loadDatabases(): Observable<Database> {
    return forkJoin({
      pokemon: this.pokemonService.loadDatabase(),
      moves: this.moveService.loadDatabase(),
      breedableLegality: this.legalityService.loadDatabase()
    });
  }

  findPokemon(name: string): Observable<PokemonEntry> {
    return this.pokemonService.findPokemon(name);
  }

  findMove(name: string): Observable<Move> {
    return this.moveService.findMove(name);
  }

  isEggMove(pokemonName: string, move: string): Observable<boolean> {
    return this.moveService.isEggMove(pokemonName, move);
  }

  getBreedableLegality(): Observable<LegalityEntry[]> {
    return this.legalityService.getList();
  }

  getEggGroupParents(eggGroups: string[]): Observable<PokemonEntry[]> {
    return this.pokemonService.getEggGroupParents(eggGroups);
  }

  getEggMovesForPokemon(pokemonName: string): Observable<string[]> {
    return this.moveService.getEggMovesForPokemon(pokemonName);
  }

  getLevelUpMovesForPokemon(pokemonName: string): Observable<LevelUpMove[]> {
    return this.moveService.getLevelUpMovesForPokemon(pokemonName);
  }

  getMovesForPokemon(pokemonName: string): Observable<{ eggMoves: string[]; levelUpMoves: LevelUpMove[] }> {
    return forkJoin({
      eggMoves: this.getEggMovesForPokemon(pokemonName),
      levelUpMoves: this.getLevelUpMovesForPokemon(pokemonName),
    });
  }

}
