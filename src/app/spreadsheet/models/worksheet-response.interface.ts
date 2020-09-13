import { WorksheetResponseEntry } from '@spreadsheet/models/worksheet-response-entry.interface';

export interface WorksheetResponse {
  feed: {
    title: { $t: string; },
    updated: { $t: string; },
    entry: WorksheetResponseEntry[];
  };
}
