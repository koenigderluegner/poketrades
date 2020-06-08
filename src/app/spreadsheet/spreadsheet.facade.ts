import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Spreadsheet } from './models/spreadsheet';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Worksheet } from './models/worksheet';
import { SpreadsheetService } from './services/spreadsheet.service';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetFacade {


  private _isDefaultSheet$: BehaviorSubject<boolean>;
  private readonly _isLoading$: BehaviorSubject<boolean>;
  private readonly _currentSpreadsheet$: BehaviorSubject<Spreadsheet>;

  private readonly _searchHistory: BehaviorSubject<any[]>;


  private readonly allowedConfigs = {
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
      this._searchHistory = new BehaviorSubject<any[]>([])
    } else {
      this._searchHistory = new BehaviorSubject<any[]>(JSON.parse(localStorage.getItem('spreadsheetHistory')))
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

  searchSpreadsheet(spreadsheetId): Observable<Spreadsheet> {
    return this.loadSpreadsheet(spreadsheetId).pipe(
      tap(spreadsheet => this.saveToHistory(spreadsheet))
    )
  }

  loadSpreadsheet(spreadsheetId): Observable<Spreadsheet> {

    this.updateIsLoading(true);
    let loadedSpreadsheet;

    return this.spreadsheetService.getSpreadsheet(spreadsheetId).pipe(
      tap(spreadsheet => {
        loadedSpreadsheet = spreadsheet;
      }),
      switchMap(spreadsheet => this.spreadsheetService.getWorksheets(
        spreadsheet.id,
        spreadsheet.worksheets.map(worksheet => worksheet.id))),
      map(worksheets => {
        let selectedWorksheet: Worksheet;
        for (const worksheet of worksheets) {
          selectedWorksheet = loadedSpreadsheet.worksheets.filter(ws => ws.title === worksheet.feed.title.$t)?.[0];

          selectedWorksheet.config = this.getWorksheetConfig(worksheet);
          if (selectedWorksheet) {
            worksheet.feed.entry = worksheet.feed.entry.slice(3); // first 3 rows contain meta data
            worksheet.feed.entry = worksheet.feed.entry.filter(pokemon => pokemon.gsx$name.$t);
            selectedWorksheet.data = worksheet.feed.entry;
            selectedWorksheet.ownedEntries = worksheet.feed.entry.filter(pokemon => pokemon.gsx$owned?.$t === 'x').length;

            for(const entry of selectedWorksheet.data){
               // @ts-ignore
              entry.id = entry.id.$t.split('/').pop();
            }
          }
        }

        loadedSpreadsheet.hasBreedables = loadedSpreadsheet.worksheets.some(ws => ws.config?.type === 'Breedables');
        loadedSpreadsheet.hasValuables = loadedSpreadsheet.worksheets.some(ws => ws.config?.type === 'Valuables');
        this.updateIsLoading(false);
        return loadedSpreadsheet
      }),
      catchError((error) => {
        console.log(error);
        return throwError(this.convertApiErrors(error))
      })
    )
  }

  private convertApiErrors(error) {
    const newError = {
      state: 'unknown',
      message: null
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

  isLoading$() {
    return this._isLoading$;
  }

  isDefaultSpreadhseet$() {
    return this._isDefaultSheet$;
  }

  private getWorksheetConfig(worksheet) {
    const config = {};
    let configIndex = 0;
    let tempConfig;

    while (worksheet.feed.entry[configIndex]?.gsx$config?.$t && configIndex < 3) {
      tempConfig = worksheet.feed.entry[configIndex].gsx$config.$t.split(':');
      if (tempConfig.length === 2) {
        const [key, value] = tempConfig;
        if (key in this.allowedConfigs) {
          if (this.allowedConfigs[key].includes(value)) {
            config[key] = value;
          }
        }
      }
      configIndex++;
    }
    return config;
  }

  getSpreadsheetHistory$() {
    return this._searchHistory;
  }

  private saveToHistory(spreadsheet: Spreadsheet) {
    const history = JSON.parse(localStorage.getItem('spreadsheetHistory'));
    const entryIndex = history.findIndex(sheet => sheet.id === spreadsheet.id);
    if (entryIndex !== -1) {
      history.splice(entryIndex, 1);
    }
    history.unshift({
      title: spreadsheet.title,
      id: spreadsheet.id,
      updated: spreadsheet.date,
      saveDate: new Date().toTimeString()
    });
    localStorage.setItem('spreadsheetHistory', JSON.stringify(history));
    this._searchHistory.next(history);
  }
}
