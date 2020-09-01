import { Worksheet } from './worksheet';

export interface Spreadsheet {
  id: string;
  title: string;
  username?: string;
  date: Date;
  worksheets: Worksheet[];

  overviewEntries?: object;
  hasValuables?: boolean;
  hasBreedables?: boolean;
}
