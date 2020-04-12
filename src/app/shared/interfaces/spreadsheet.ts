import { Worksheet } from '@shared/interfaces/worksheet';

export interface Spreadsheet {
  id: string;
  title: string;
  date: Date;
  worksheets: Worksheet[];

  hasValuables?: boolean;
  hasBreedables?: boolean;
}
