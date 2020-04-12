import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Spreadsheet } from '@shared/interfaces/spreadsheet';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetDataService {

  private spreadsheetInformation = new Subject<Spreadsheet>();

  constructor() {
  }

  getSpreadsheetInformation(): Observable<Spreadsheet> {
    return this.spreadsheetInformation.asObservable();
  }

  updateSpreadsheetInformation(spreadsheet: Spreadsheet) {
    this.spreadsheetInformation.next(spreadsheet);
  }
}
