import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  private db;

  constructor(private httpClient: HttpClient) {
  }

  loadDatabase(): Observable<any[]> {
    if (this.db) {
      return of(this.db)
    } else {
      return this.httpClient.get<any[]>('assets/database/moves.json').pipe(
        tap(database => {
          this.db = database;
        })
      )
    }


  }

  findMove(name: string) {
    return this.loadDatabase().pipe(
      switchMap(database => {
        const hits = database.filter(move => {
          return move.name.toLowerCase() === name.toLowerCase()
        });
        if (hits.length === 0) {
          throwError('No move found with name: ' + name);
        }
        return of(hits[0]);
      })
    )
  }
}
