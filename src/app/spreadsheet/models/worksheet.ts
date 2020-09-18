import { Pokemon } from '@shared/interfaces/pokemon';
import { WorksheetConfig } from '@spreadsheet/models/worksheet-config.interface';

export interface Worksheet {
  id: string;
  title: string;
  updated: Date;
  config?: WorksheetConfig;
  data?: Pokemon[];
  ownedEntries?: number;
}
