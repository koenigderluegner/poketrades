import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Spreadsheet } from '@shared/interfaces/spreadsheet';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetService {

  constructor(private httpClient: HttpClient) {
  }

  getSpreadsheet(spreadsheetId: string): Observable<Spreadsheet> {
    return this.httpClient.get(`https://spreadsheets.google.com/feeds/worksheets/${spreadsheetId}/public/basic?alt=json`).pipe(
      map((response: any) => {
        return {
          id: spreadsheetId,
          title: response.feed.title['$t'],
          date: new Date(Date.parse(response.feed.updated['$t'])),
          worksheets: response.feed.entry.map((entry: any) => {
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
}
