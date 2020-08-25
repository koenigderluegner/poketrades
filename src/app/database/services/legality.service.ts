import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LegalityService {

  private db;

  constructor(private httpClient: HttpClient) {
  }

  loadDatabase(): Observable<any[]> {
    if (this.db) {
      return of(this.db);
    } else {
      return this.httpClient.get<any[]>('assets/database/breedables-legality.json').pipe(
        tap(database => {
          this.db = database;
        })
      );
    }
  }

}
