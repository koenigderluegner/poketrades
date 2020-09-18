import { SpreadsheetResponseEntry } from '@spreadsheet/models/spreadsheet-response-entry.interface';

export interface SpreadsheetResponse {
  feed: {
    title: { $t: string; },
    updated: { $t: string; },
    entry: SpreadsheetResponseEntry[];
  };
}
