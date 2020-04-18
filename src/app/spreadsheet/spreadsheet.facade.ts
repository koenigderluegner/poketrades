import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Spreadsheet } from './models/spreadsheet';
import { map, switchMap, tap } from 'rxjs/operators';
import { Worksheet } from './models/worksheet';
import { SpreadsheetService } from './services/spreadsheet.service';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetFacade {


  private _isDefaultSheet$: BehaviorSubject<boolean>;
  private readonly _isLoading$: BehaviorSubject<boolean>;
  private readonly _currentSpreadsheet$: BehaviorSubject<Spreadsheet>;


  private readonly allowedConfigs = {
    type: ['Valuables', 'Breedables'],
    subType: ['RNGs', 'Legendaries', 'Shinies', 'Competitives', 'Events'],
    ball: ["Dream", "Safari", "Sport", "Beast", "Fast", "Moon", "Heavy", "Love", "Lure", "Level",
      "Friend", "Poké", "Great", "Ultra", "Premier", "Dive", "Luxury", "Nest", "Net", "Repeat", "Timer", "Quick",
      "Dusk", "Heal"],
    includeShinies: ['true', 'false']
  };


  constructor(private spreadsheetService: SpreadsheetService) {
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

  loadSpreadsheet(spreadsheetId): Observable<Spreadsheet> {

    this.updateIsLoading(true);
    let loadedSpreadsheet;

    return this.spreadsheetService.getSpreadsheet(spreadsheetId).pipe(
      tap(spreadsheet => {
        loadedSpreadsheet = spreadsheet;
      }),
      switchMap(spreadsheet => this.spreadsheetService.getWorksheets(spreadsheet.id, spreadsheet.worksheets.map(worksheet => worksheet.id))),
      map(worksheets => {
        //this.loadingMessage = 'Configuring spreadsheet details';
        let selectedWorksheet: Worksheet;
        for (const worksheet of worksheets) {
          selectedWorksheet = loadedSpreadsheet.worksheets.filter(ws => ws.title === worksheet.feed.title['$t'])?.[0];

          selectedWorksheet.config = this.getWorksheetConfig(worksheet);
          if (selectedWorksheet) {
            selectedWorksheet.data = worksheet.feed.entry.slice(3); // first 3 rows contain meta data
            selectedWorksheet.data.pop(); // last row is empty, its a helper row in sheets
          }
        }

        loadedSpreadsheet.hasBreedables = loadedSpreadsheet.worksheets.some(ws => ws.config?.type === 'Breedables');
        loadedSpreadsheet.hasValuables = loadedSpreadsheet.worksheets.some(ws => ws.config?.type === 'Valuables');
        this.updateIsLoading(false);
        return loadedSpreadsheet
      })
    )
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
    let config = {};
    let configIndex = 0;
    let tempConfig;

    while (worksheet.feed.entry[configIndex]?.['gsx$config']?.['$t'] && configIndex < 3) {
      tempConfig = worksheet.feed.entry[configIndex]['gsx$config']['$t'].split(':');
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
}
