import { computed, effect, inject, Injectable, linkedSignal, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Spreadsheet } from './models/spreadsheet';
import { SpreadsheetService } from './services/spreadsheet.service';
import { SearchHistoryEntry } from '../spreadsheet-changer/models/search-history-entry.interface';
import { ApiError } from '@shared/interfaces/api-error.interface';
import { API_KEY } from '../../environments/api-key.injection-token';


interface CachedSpreadseeht {
  id: string,
  value: Spreadsheet
}

@Injectable({
  providedIn: 'root',
})
export class SpreadsheetFacade {
  private spreadsheetService = inject(SpreadsheetService);
  private readonly apiKey = inject(API_KEY);

  private readonly _currentSpreadsheet$: BehaviorSubject<Spreadsheet>;

  private readonly _searchHistory = signal<SearchHistoryEntry[]>([]);

  currentSpreadsheetId = signal<string>('');
  currentSpreadsheetRef = this.spreadsheetService.getSpreadsheet(this.currentSpreadsheetId, this.apiKey);

  // ref removes value while loading so we use linkedignal
  currentSpreadsheet = linkedSignal<Spreadsheet | undefined, Spreadsheet | undefined>({
    source: () => this.currentSpreadsheetRef.value(),
    computation: (source, previous) => {
      if (source) {
        return source;
      } else {
        return previous?.value;
      }
    }


  });

  currentSearchTerm = signal<string>('');
  searchResult = this.spreadsheetService.getSpreadsheet(this.currentSearchTerm, this.apiKey);

  sheetURLPath = computed(() => {
    const sheet = this.currentSpreadsheetRef.value();
    return sheet?.username ? `u/${sheet.username}` : sheet?.id ?? '';
  });

  private readonly _SPREADHSEET_CACHE_KEY = 'cachedSpreadsheet';

  loadCachedSpreadsheet(id: string) {
    const cachedData = localStorage.getItem(this._SPREADHSEET_CACHE_KEY);
    if (cachedData) {
      const data: CachedSpreadseeht = JSON.parse(cachedData);

      if (data.id === id) {
        this.currentSpreadsheetRef.set(data.value);
        return true;
      }
    }
    return false;
  }


  constructor() {

    effect(() => {
      const searchResult = this.searchResult.value();
      if (searchResult) {
        this.saveToHistory(searchResult);
      }
    });

    effect(() => {
      const currentSpreadsheet = this.currentSpreadsheetRef.value();
      if (currentSpreadsheet) {
        localStorage.setItem(this._SPREADHSEET_CACHE_KEY, JSON.stringify({
          id: currentSpreadsheet.id,
          value: currentSpreadsheet
        } satisfies CachedSpreadseeht));
      }
    });

    if (!localStorage.getItem('spreadsheetHistory')) {
      localStorage.setItem('spreadsheetHistory', JSON.stringify([]));
    } else {
      this._searchHistory.set(JSON.parse(localStorage.getItem('spreadsheetHistory') ?? [].toString()));
    }
    this._currentSpreadsheet$ = new BehaviorSubject<Spreadsheet>({
      title: '',
      hasBreedables: false,
      hasValuables: false,
      worksheets: [],
      livingDexChecklist: [],
      id: '',
    });
  }

  getCurrentSpreadsheet$(): BehaviorSubject<Spreadsheet> {
    return this._currentSpreadsheet$;
  }


  updateCurrentSpreadsheet(spreadsheet: Spreadsheet) {
    this.currentSpreadsheetRef.set(spreadsheet);
  }

  getSpreadsheetHistory$() {
    return this._searchHistory;
  }

  public convertApiErrors(errorStatus: number): ApiError {
    const newError = {
      state: 'unknown',
      message: ''
    };
    switch (errorStatus) {
      case 429:
        newError.message = 'Too many requests: Google request limit reached, try again later.';
        break;
      case 404:
        newError.message = 'Cannot find a spreadsheet with given ID.';
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

}
