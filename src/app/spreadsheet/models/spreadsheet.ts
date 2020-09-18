import { Worksheet } from './worksheet';
import { BreedablesOverviewList } from '@shared/interfaces/breedables-overview-list.interface';

export interface Spreadsheet {
  id: string;
  title: string;
  username?: string;
  date: Date;
  worksheets: Worksheet[];

  overviewEntries?: BreedablesOverviewList;
  hasValuables?: boolean;
  hasBreedables?: boolean;
}
