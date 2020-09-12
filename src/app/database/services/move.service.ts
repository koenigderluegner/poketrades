import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { LevelUpMove } from '../models/level-up-move.interface';
import { LevelUpMoveEntry } from '../models/level-up-move-entry.interface';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  private db;

  constructor(private httpClient: HttpClient) {
  }

  loadDatabase(): Observable<{ moves: any[], eggMoves: any[], levelUpMoves: { [key: string]: LevelUpMoveEntry } }> {
    if (this.db) {
      return of(this.db);
    } else {
      return forkJoin({
        moves: this.httpClient.get<any[]>('assets/database/moves.json'),
        eggMoves: this.httpClient.get<any[]>('assets/database/egg-moves.json'),
        levelUpMoves: this.httpClient.get<{ [key: string]: LevelUpMoveEntry }>('assets/database/level-up-moves.json'),
      }).pipe(
        tap(database => {
          this.db = database;
        })
      );
    }


  }

  findMove(name: string) {
    return this.loadDatabase().pipe(
      switchMap(database => {
        const hits = database.moves.filter(move => {
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
      switchMap(database => {
        return of(!!database?.eggMoves[pokemonName]?.includes(move));
      })
    );
  }

  getEggMovesForPokemon(pokemonName: string): Observable<any> {
    return this.loadDatabase().pipe(
      switchMap(database => {
        return of(database?.eggMoves[pokemonName] ? database?.eggMoves[pokemonName].sort() : []);
      })
    );
  }

  getLevelUpMovesForPokemon(pokemonName: string): Observable<LevelUpMove[]> {
    return this.loadDatabase().pipe(
      switchMap(database => {
        return of(database?.levelUpMoves[pokemonName] ? database?.levelUpMoves[pokemonName].moves : []);
      })
    );
  }
}
