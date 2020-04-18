import { Worksheet } from './worksheet';

export interface Spreadsheet {
  id: string;
  title: string;
  date: Date;
  worksheets: Worksheet[];

  hasValuables?: boolean;
  hasBreedables?: boolean;
}
