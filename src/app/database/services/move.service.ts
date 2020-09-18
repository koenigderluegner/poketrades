import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { LevelUpMove } from '../models/level-up-move.interface';
import { LevelUpMoveEntry } from '../models/level-up-move-entry.interface';
import { Move } from '../models/move.interface';
import { MoveDatabase } from '../models/move-database.interface';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  private db: MoveDatabase | undefined;

  constructor(private httpClient: HttpClient) {
  }

  loadDatabase(): Observable<MoveDatabase> {
    if (this.db) {
      return of(this.db);
    } else {
      return forkJoin({
        moves: this.httpClient.get<Move[]>('assets/database/moves.json'),
        eggMoves: this.httpClient.get<{ [key: string]: string[] }>('assets/database/egg-moves.json'),
        levelUpMoves: this.httpClient.get<{ [key: string]: LevelUpMoveEntry }>('assets/database/level-up-moves.json'),
      }).pipe(
        tap(database => {
          this.db = database;
        })
      );
    }


  }

  findMove(name: string): Observable<Move> {
    return this.loadDatabase().pipe(
      switchMap((database: MoveDatabase) => {
        const hits = database.moves.filter((move: Move) => {
          return move.name.toLowerCase() === name.toLowerCase();
        });
        if (hits.length === 0) {
          throwError('No move found with name: ' + name);
        }
        return of(hits[0]);
      })
    );
  }

  isEggMove(pokemonName: string, move: string): Observable<boolean> {
    return this.loadDatabase().pipe(
      switchMap((database: MoveDatabase) => {
        return of(!!database?.eggMoves[pokemonName]?.includes(move));
      })
    );
  }

  getEggMovesForPokemon(pokemonName: string): Observable<string[]> {
    return this.loadDatabase().pipe(
      switchMap((database: MoveDatabase) => {
        return of(database.eggMoves[pokemonName] ? database.eggMoves[pokemonName].sort() : []);
      })
    );
  }

  getLevelUpMovesForPokemon(pokemonName: string): Observable<LevelUpMove[]> {
    return this.loadDatabase().pipe(
      switchMap((database: MoveDatabase) => {
        return of(database.levelUpMoves[pokemonName] ? database.levelUpMoves[pokemonName].moves : []);
      })
    );
  }
}
