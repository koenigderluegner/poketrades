import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleSpreadsheetResponse } from '../interfaces/google-spreadsheet-response.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GoogleWorksheetResponse } from '../interfaces/google-worksheet-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GoogleSpreadsheetService {

  private _spreadsheetFields: string[] = [
    'spreadsheetId',
    'properties.title',
    'sheets.properties',
    'sheets.properties.sheetId',
    'sheets.properties.title',
    'sheets.properties.gridProperties.rowCount',
    'sheets.properties.gridProperties.frozenRowCount',
    'sheets.properties.gridProperties.columnCount',
    'sheets.properties.gridProperties.frozenColumnCount',
  ];

  constructor(private _httpClient: HttpClient) {
  }

  public getSpreadsheet(spreadsheetId: string, apiKey: string): Observable<GoogleSpreadsheetResponse> {
    return this._httpClient.get<GoogleSpreadsheetResponse>(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?includeGridData=false&fields=${this._spreadsheetFields.join(',')}&key=${apiKey}`);
  }

  public getBatchValues(spreadsheetId: string, ranges: string[], apiKey: string): Observable<GoogleWorksheetResponse> {
    let params: HttpParams = new HttpParams();

    for (const range of ranges) {
      params = params.append('ranges', range);
    }
    return this._httpClient.get<GoogleWorksheetResponse>(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchGet?key=${apiKey}`, {params});
  }
}
