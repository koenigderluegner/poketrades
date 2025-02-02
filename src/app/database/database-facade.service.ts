import { inject, Injectable } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { forkJoin, Observable } from 'rxjs';
import { MoveService } from './services/move.service';
import { LegalityService } from './services/legality.service';
import { Move } from './models/move.interface';
import { LegalityEntry } from './models/legality-entry.interface';
import { PokemonEntry } from './models/pokemon-entry.interface';
import { LevelUpMove } from './models/level-up-move.interface';
import { Database } from './models/database.interface';
import { NaturesService } from './services/natures.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseFacadeService {
  private pokemonService = inject(PokemonService);
  private moveService = inject(MoveService);
  private legalityService = inject(LegalityService);
  private naturesService = inject(NaturesService);


  loadDatabases(): Observable<Database> {
    return forkJoin({
      pokemon: this.pokemonService.loadDatabase(),
      moves: this.moveService.loadDatabase(),
      breedableLegality: this.legalityService.loadDatabase()
    });
  }

  getPokemon(): Observable<PokemonEntry[]> {
    return this.pokemonService.getPokemon();
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

  isNature(natureToCheck: string): boolean {
    return this.naturesService.isNature(natureToCheck);
  }

  getNatures(): string[] {
    return this.naturesService.getNatures();
  }

}
