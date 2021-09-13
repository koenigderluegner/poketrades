import { GridProperties } from './grid-properties.interface';

export interface GoogleSpreadsheetResponse {
  properties: {
    title: string;
  };
  sheets: { properties: { sheetId: string; title: string; gridProperties: GridProperties } }[];
  spreadsheetId: string;
}
