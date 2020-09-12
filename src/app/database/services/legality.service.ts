import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LegalityEntry } from '../models/legality-entry.interface';

@Injectable({
  providedIn: 'root'
})
export class LegalityService {

  private db: LegalityEntry[];

  constructor(private httpClient: HttpClient) {
  }

  loadDatabase(): Observable<LegalityEntry[]> {
    if (this.db) {
      return of(this.db);
    } else {
      return this.httpClient.get<LegalityEntry[]>('assets/database/breedables-legality.json').pipe(
        tap(database => {
          this.db = database;
        })
      );
    }
  }

  getList(): Observable<LegalityEntry[]> {
    return this.loadDatabase();
  }

}
