import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { Spreadsheet } from '../models/spreadsheet';
import { SpreadsheetResponse } from '@spreadsheet/models/spreadsheet-response.interface';
import { SpreadsheetResponseEntry } from '@spreadsheet/models/spreadsheet-response-entry.interface';
import { WorksheetResponse } from '@spreadsheet/models/worksheet-response.interface';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetService {

  filteredTabs = ['Welcome', 'Shiny Living Dex', 'Living Dex', 'Friend Safari (X & Y)', 'Resource',
    'Breedables Overview', 'Ban List', 'Ban Checker', 'Breedables Ball Legality', 'Resource Gen7 (Backup)',
    'DB:Natures', 'DB:Types', 'DB:Moves', 'DB:Misc', 'DB:Pokemon', 'DB:Items', 'DB:Abilities', 'DB:LevelMoves',
    'DB:Balls', 'Tool:Breeding', 'Tool: Move Lookup', 'Alcremie'];

  constructor(private httpClient: HttpClient) {
  }

  getSpreadsheet(spreadsheetId: string): Observable<Spreadsheet> {
    return this.httpClient.get<SpreadsheetResponse>(`https://spreadsheets.google.com/feeds/worksheets/${spreadsheetId}/public/basic?alt=json`).pipe(
      map((response: SpreadsheetResponse) => {

        const filteredEntries = response.feed.entry.filter(worksheet => !this.filteredTabs.includes(worksheet.title.$t));
        return {
          id: spreadsheetId,
          updated: response.feed.updated.$t,
          title: response.feed.title.$t,
          date: new Date(Date.parse(response.feed.updated.$t)),
          worksheets: filteredEntries.map((entry: SpreadsheetResponseEntry) => {
            return {
              id: entry.link[4].href.split('/').pop(), // id is last part of URI
              title: entry.title.$t,
              updated: new Date(entry.updated.$t),
              date: new Date((entry.updated.$t)),
            };
          })
        };

      })
    );
  }

  getWorksheet(spreadsheetId: string, worksheetId: string): Observable<WorksheetResponse> {
    return this.httpClient.get<WorksheetResponse>(`https://spreadsheets.google.com/feeds/list/${spreadsheetId}/${worksheetId}/public/values?alt=json`);
  }

  getWorksheets(spreadsheetId: string, worksheetIds: string[]): Observable<WorksheetResponse[]> {
    return forkJoin(worksheetIds.map(worksheetId => this.getWorksheet(spreadsheetId, worksheetId)));
  }
}
