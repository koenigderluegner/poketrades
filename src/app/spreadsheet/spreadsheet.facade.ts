import { effect, inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Spreadsheet } from './models/spreadsheet';
import { catchError, map, tap } from 'rxjs/operators';
import { Worksheet } from './models/worksheet';
import { SpreadsheetService } from './services/spreadsheet.service';
import { SearchHistoryEntry } from '../spreadsheet-changer/models/search-history-entry.interface';
import { Pokemon } from '@shared/interfaces/pokemon';
import { BreedablesOverviewList } from '@shared/interfaces/breedables-overview-list.interface';
import { ApiError } from '@shared/interfaces/api-error.interface';
import { Breedable } from '@shared/interfaces/breedable.interface';
import { API_KEY } from "../../environments/api-key.injection-token";

@Injectable({
  providedIn: 'root',
})
export class SpreadsheetFacade {
  private spreadsheetService = inject(SpreadsheetService);
  private readonly apiKey = inject(API_KEY);

  private readonly _isDefaultSheet$: BehaviorSubject<boolean>;
  private readonly _isLoading$: BehaviorSubject<boolean>;
  private readonly _currentSpreadsheet$: BehaviorSubject<Spreadsheet>;

  private readonly _searchHistory = signal<SearchHistoryEntry[]>([]);

  currentSpreadsheetId = signal<string>('')


  constructor() {

    effect(() => {
      const currentSpreadsheetId = this.currentSpreadsheetId;
      if (currentSpreadsheetId()) {
        this.loadSpreadsheet(currentSpreadsheetId)
      }
    });


    if (!localStorage.getItem('spreadsheetHistory')) {
      localStorage.setItem('spreadsheetHistory', JSON.stringify([]));
    } else {
      this._searchHistory.set(JSON.parse(localStorage.getItem('spreadsheetHistory') ?? [].toString()))
    }
    this._currentSpreadsheet$ = new BehaviorSubject<Spreadsheet>({
      title: '',
      hasBreedables: false,
      hasValuables: false,
      worksheets: [],
      livingDexChecklist: [],
      id: '',
    });

    this._isDefaultSheet$ = new BehaviorSubject<boolean>(true);
    this._isLoading$ = new BehaviorSubject<boolean>(false);
  }

  getCurrentSpreadsheet$(): BehaviorSubject<Spreadsheet> {
    return this._currentSpreadsheet$;
  }

  searchSpreadsheet(spreadsheetId: () => string): Observable<Spreadsheet> {
    return this.loadSpreadsheet(spreadsheetId).pipe(
      tap((spreadsheet: Spreadsheet) => this.saveToHistory(spreadsheet))
    );
  }

  loadSpreadsheet(spreadsheetId: () => string): Observable<Spreadsheet> {

    this.updateIsLoading(true);

    return this.spreadsheetService.getSpreadsheet(spreadsheetId, this.apiKey).pipe(
      map((spreadsheet: Spreadsheet) => {
        for (const worksheet of spreadsheet.worksheets) {


          if (worksheet.data) {
            worksheet.ownedEntries = (worksheet.data ?? []).filter(pokemon => pokemon.isOwned).length;


            if (worksheet.config?.type === 'Valuables' && worksheet.config?.subType === 'Shinies') {
              for (const entry of worksheet.data) {
                entry.isShiny = true;
              }
            }

            if (worksheet.config?.type === 'Breedables' && worksheet.config?.ball) {
              for (const entry of worksheet.data) {
                entry.ball = worksheet.config?.ball;
              }
            }
          }

        }

        spreadsheet.hasBreedables = spreadsheet.worksheets.some((ws: Worksheet) => ws.config?.type === 'Breedables');
        spreadsheet.hasValuables = spreadsheet.worksheets.some((ws: Worksheet) => ws.config?.type === 'Valuables');

        if (spreadsheet.hasBreedables) {
          spreadsheet.overviewEntries = this.buildOverviewEntries(
            spreadsheet.worksheets.filter((ws: Worksheet) => ws.config?.type === 'Breedables' && ws.config?.ball)
          );
        }

        this.updateIsLoading(false);
        return spreadsheet;
      }),
      catchError((error) => {
        this.updateIsLoading(false);
        console.error(error);
        return throwError(this.convertApiErrors('' + error.status));
      })
    );
  }

  updateCurrentSpreadsheet(spreadsheet: Spreadsheet): BehaviorSubject<Spreadsheet> {
    this.updateIsDefaultSpreadhseet(false);
    this._currentSpreadsheet$.next(spreadsheet);
    return this.getCurrentSpreadsheet$();
  }

  updateIsDefaultSpreadhseet(state: boolean): BehaviorSubject<boolean> {
    this._isDefaultSheet$.next(state);
    return this._isDefaultSheet$;
  }

  updateIsLoading(state: boolean): BehaviorSubject<boolean> {
    this._isLoading$.next(state);
    return this.isLoading$();
  }

  isLoading$(): BehaviorSubject<boolean> {
    return this._isLoading$;
  }

  getSpreadsheetHistory$() {
    return this._searchHistory;
  }

  private convertApiErrors(errorStatus: string): ApiError {
    const newError = {
      state: 'unknown',
      message: ''
    };
    switch (errorStatus) {
      case '429':
        newError.message = 'Too many requests: Google request limit reached, try again later.';
        break;
      default:
        newError.message = 'Unknown Error: please check the given ID and publish your sheet if not already.';
        break;
    }
    return newError;
  }

  private saveToHistory(spreadsheet: Spreadsheet): void {
    this._searchHistory.update(history => {
      const entryIndex = history.findIndex((searchHistoryEntry: SearchHistoryEntry) => searchHistoryEntry.id === spreadsheet.id);
      if (entryIndex !== -1) {
        history.splice(entryIndex, 1);
      }
      history.unshift({
        title: spreadsheet.title,
        id: spreadsheet.id,
        saveDate: new Date().toTimeString()
      });
      localStorage.setItem('spreadsheetHistory', JSON.stringify(history));
      return [...history];
    });
  }

  private buildOverviewEntries(worksheets: Worksheet[]): BreedablesOverviewList {
    const overviewEntries: BreedablesOverviewList = {};
    worksheets.forEach((worksheet: Worksheet) => {
      const ball: string | undefined = worksheet.config?.ball?.toLowerCase();
      const data: Pokemon[] | undefined = worksheet.data;
      if (!ball) {
        return;
      }
      overviewEntries[ball] = {};
      if (data) {
        data.forEach((pokemon: Pokemon) => {
          const breedable = (pokemon) as Breedable;
          overviewEntries[ball][breedable.iconSlug] = breedable;
        });
      }
    });
    return overviewEntries;
  }
}
