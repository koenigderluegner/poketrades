import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Spreadsheet } from '../models/spreadsheet';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetDataService {

  private spreadsheetInformation: BehaviorSubject<Spreadsheet>;

  constructor() {
    this.spreadsheetInformation = new BehaviorSubject<Spreadsheet>({
      title: '',
      hasBreedables: false,
      hasValuables: false,
      worksheets: [],
      id: '',
      date: new Date()
  });
  }

  getSpreadsheetInformation(): BehaviorSubject<Spreadsheet> {
    return this.spreadsheetInformation;
  }

  updateSpreadsheetInformation(spreadsheet: Spreadsheet): void {
    console.log(spreadsheet);
    this.spreadsheetInformation.next(spreadsheet);
  }
}
