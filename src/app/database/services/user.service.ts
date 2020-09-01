import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private db;

  constructor(private httpClient: HttpClient) {
  }

  loadDatabase(): Observable<any[]> {
    if (this.db) {
      return of(this.db);
    } else {
      return this.httpClient.get<any[]>('assets/database/users.json').pipe(
        tap(database => {
          this.db = database;
        })
      );
    }


  }

  findUser(name: string) {
    return this.loadDatabase().pipe(
      switchMap(database => {
        return database[name] ? of(database[name]) : throwError('No user found with name: ' + name);
      })
    );
  }
}
