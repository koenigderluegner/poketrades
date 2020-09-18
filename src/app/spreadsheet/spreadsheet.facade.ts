import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Spreadsheet } from './models/spreadsheet';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Worksheet } from './models/worksheet';
import { SpreadsheetService } from './services/spreadsheet.service';
import { Breedable } from '@shared/classes/koenig/breedable';
import { SearchHistoryEntry } from '../spreadsheet-changer/models/search-history-entry.interface';
import { Pokemon } from '@shared/interfaces/pokemon';
import { WorksheetResponse } from '@spreadsheet/models/worksheet-response.interface';
import { WorksheetResponseEntry } from '@spreadsheet/models/worksheet-response-entry.interface';
import { BreedablesOverviewList } from '@shared/interfaces/breedables-overview-list.interface';
import { ApiError } from '@shared/interfaces/api-error.interface';
import { WorksheetConfig } from '@spreadsheet/models/worksheet-config.interface';
import { AllowedConfig } from '@spreadsheet/models/allowed-config.interface';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetFacade {


  private readonly _isDefaultSheet$: BehaviorSubject<boolean>;
  private readonly _isLoading$: BehaviorSubject<boolean>;
  private readonly _currentSpreadsheet$: BehaviorSubject<Spreadsheet>;

  private readonly _searchHistory: BehaviorSubject<SearchHistoryEntry[]>;


  private readonly allowedConfigs: AllowedConfig = {
    type: ['Valuables', 'Breedables'],
    subType: ['RNGs', 'Legendaries', 'Shinies', 'Competitives', 'Events'],
    ball: ['Dream', 'Safari', 'Sport', 'Beast', 'Fast', 'Moon', 'Heavy', 'Love', 'Lure', 'Level',
      'Friend', 'Poké', 'Great', 'Ultra', 'Premier', 'Dive', 'Luxury', 'Nest', 'Net', 'Repeat', 'Timer', 'Quick',
      'Dusk', 'Heal'],
    includeShinies: ['true', 'false']
  };


  constructor(private spreadsheetService: SpreadsheetService) {
    if (!localStorage.getItem('spreadsheetHistory')) {
      localStorage.setItem('spreadsheetHistory', JSON.stringify([]));
      this._searchHistory = new BehaviorSubject<SearchHistoryEntry[]>([]);
    } else {
      this._searchHistory = new BehaviorSubject<SearchHistoryEntry[]>(
        JSON.parse(localStorage.getItem('spreadsheetHistory') ?? [].toString())
      );
    }
    this._currentSpreadsheet$ = new BehaviorSubject<Spreadsheet>({
      title: '',
      hasBreedables: false,
      hasValuables: false,
      worksheets: [],
      id: '',
      date: new Date()
    });

    this._isDefaultSheet$ = new BehaviorSubject<boolean>(true);
    this._isLoading$ = new BehaviorSubject<boolean>(false);
  }

  getCurrentSpreadsheet$(): BehaviorSubject<Spreadsheet> {
    return this._currentSpreadsheet$;
  }

  searchSpreadsheet(spreadsheetId: string): Observable<Spreadsheet> {
    return this.loadSpreadsheet(spreadsheetId).pipe(
      tap((spreadsheet: Spreadsheet) => this.saveToHistory(spreadsheet))
    );
  }

  loadSpreadsheet(spreadsheetId: string): Observable<Spreadsheet> {

    this.updateIsLoading(true);
    let loadedSpreadsheet: Spreadsheet;

    return this.spreadsheetService.getSpreadsheet(spreadsheetId).pipe(
      tap((spreadsheet: Spreadsheet) => {
        loadedSpreadsheet = spreadsheet;
      }),
      switchMap((spreadsheet: Spreadsheet) => this.spreadsheetService.getWorksheets(
        spreadsheet.id,
        spreadsheet.worksheets.map((worksheet: Worksheet) => worksheet.id))),
      map((worksheets: WorksheetResponse[]) => {
        let selectedWorksheet: Worksheet;
        for (const worksheet of worksheets) {
          selectedWorksheet = loadedSpreadsheet.worksheets.filter((ws: Worksheet) => ws.title === worksheet.feed.title.$t)?.[0];

          selectedWorksheet.config = this.getWorksheetConfig(worksheet);
          if (selectedWorksheet) {
            worksheet.feed.entry = worksheet.feed.entry.slice(3); // first 3 rows contain meta data
            worksheet.feed.entry = worksheet.feed.entry.filter((pokemon: WorksheetResponseEntry) => pokemon.gsx$name?.$t);
            selectedWorksheet.data = worksheet.feed.entry as Pokemon[];
            selectedWorksheet.ownedEntries = worksheet.feed.entry.filter(pokemon => pokemon.gsx$owned?.$t === 'x').length;

            for (const entry of selectedWorksheet.data) {
              // @ts-ignore
              entry.id = entry.id.$t.split('/').pop();
            }
            if (selectedWorksheet.config?.type === 'Valuables' && selectedWorksheet.config?.subType === 'Shinies') {
              for (const entry of selectedWorksheet.data) {
                entry.isShiny = true;
              }
            }
          }
        }

        loadedSpreadsheet.hasBreedables = loadedSpreadsheet.worksheets.some((ws: Worksheet) => ws.config?.type === 'Breedables');
        loadedSpreadsheet.hasValuables = loadedSpreadsheet.worksheets.some((ws: Worksheet) => ws.config?.type === 'Valuables');

        if (loadedSpreadsheet.hasBreedables) {
          loadedSpreadsheet.overviewEntries = this.buildOverviewEntries(
            loadedSpreadsheet.worksheets.filter((ws: Worksheet) => ws.config?.type === 'Breedables' && ws.config?.ball)
          );
        }

        this.updateIsLoading(false);
        return loadedSpreadsheet;
      }),
      catchError((error) => {
        console.log(error);
        return throwError(this.convertApiErrors(error));
      })
    );
  }

  private convertApiErrors(error: { status: string }): ApiError {
    const newError = {
      state: 'unknown',
      message: ''
    };
    switch (error.status) {
      default:
        newError.message = 'Unknown Error: please check the given ID and publish your sheet if not already.';
        break;
    }
    return newError;
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

  isDefaultSpreadhseet$(): BehaviorSubject<boolean> {
    return this._isDefaultSheet$;
  }

  private getWorksheetConfig(worksheet: WorksheetResponse): WorksheetConfig {
    const config: WorksheetConfig = {type: 'unknown'};
    let configIndex = 0;
    let tempConfig: string[];

    while (worksheet.feed.entry[configIndex]?.gsx$config?.$t && configIndex < 3) {
      const configData = worksheet.feed.entry[configIndex].gsx$config;
      if (configData) {
        tempConfig = configData.$t.split(':');
      } else {
        tempConfig = [];
      }
      if (tempConfig.length === 2) {
        const [key, value] = tempConfig;
        if (key in this.allowedConfigs) {
          const configArray = this.allowedConfigs[key];
          if (configArray && configArray.includes(value)) {
            config[key] = value;
          }
        }
      }
      configIndex++;
    }
    return config as WorksheetConfig;
  }

  getSpreadsheetHistory$(): BehaviorSubject<SearchHistoryEntry[]> {
    return this._searchHistory;
  }

  private saveToHistory(spreadsheet: Spreadsheet): void {
    const history: SearchHistoryEntry[] = JSON.parse(localStorage.getItem('spreadsheetHistory') ?? [].toString());
    const entryIndex = history.findIndex((searchHistoryEntry: SearchHistoryEntry) => searchHistoryEntry.id === spreadsheet.id);
    if (entryIndex !== -1) {
      history.splice(entryIndex, 1);
    }
    history.unshift({
      title: spreadsheet.title,
      id: spreadsheet.id,
      updated: spreadsheet.date.toTimeString(),
      saveDate: new Date().toTimeString()
    });
    localStorage.setItem('spreadsheetHistory', JSON.stringify(history));
    this._searchHistory.next(history);
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
          const breedable = new Breedable(pokemon);
          overviewEntries[ball][breedable.iconSlug] = breedable;
        });
      }
    });
    return overviewEntries;
  }
}
