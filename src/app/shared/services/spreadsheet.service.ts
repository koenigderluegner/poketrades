import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { Spreadsheet } from '@shared/interfaces/spreadsheet';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetService {

  filteredTabs = ["Landing Page", "Shiny Living Dex", "Living Dex", "Friend Safari (X & Y)", "Resource",
    "Breedables Overview", "Ban List", "Ban Checker", "Breedables Ball Legality", "Resource Gen7 (Backup)"];

  constructor(private httpClient: HttpClient) {
  }

  getSpreadsheet(spreadsheetId: string): Observable<Spreadsheet> {
    return this.httpClient.get(`https://spreadsheets.google.com/feeds/worksheets/${spreadsheetId}/public/basic?alt=json`).pipe(
      map((response: any) => {

        const filteredEntries = response.feed.entry.filter(worksheet => !this.filteredTabs.includes(worksheet.title['$t']));
        return {
          id: spreadsheetId,
          title: response.feed.title['$t'],
          date: new Date(Date.parse(response.feed.updated['$t'])),
          worksheets: filteredEntries.map((entry: any) => {
            return {
              id: entry.link[4].href.split('/').pop(), // id is last part of URI
              title: entry.title['$t'],
              date: new Date(Date.parse(entry.updated['$t'])),
            }
          })
        }

      })
    )
  }

  getWorksheet(spreadsheetId: string, worksheetId: string): Observable<any> {
    return this.httpClient.get(`https://spreadsheets.google.com/feeds/list/${spreadsheetId}/${worksheetId}/public/values?alt=json`)
  }

  getWorksheets(spreadsheetId: string, worksheetIds: string[]): Observable<any> {
    return forkJoin(...worksheetIds.map(worksheetId => this.getWorksheet(spreadsheetId, worksheetId)))
  }
}
