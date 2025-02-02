import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { UserDatabase } from '../models/user-database.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpClient = inject(HttpClient);


  private db: UserDatabase | undefined;

  loadDatabase(): Observable<UserDatabase> {
    if (this.db) {
      return of(this.db);
    } else {
      return this.httpClient.get<UserDatabase>('assets/database/users.json').pipe(
        tap(database => {
          this.db = database;
        })
      );
    }


  }

  findUser(name: string): Observable<string> {
    return this.loadDatabase().pipe(
      switchMap((database: UserDatabase) => {
        return database[name] ? of(database[name]) : throwError('No user found with name: ' + name);
      })
    );
  }
}
