import { Pokemon } from '@shared/interfaces/pokemon';
import { WorksheetConfig } from '@spreadsheet/models/worksheet-config.interface';
import { GridProperties } from '../../google-spreadsheet/interfaces/grid-properties.interface';

export interface Worksheet {
  id: string;
  title: string;
  slug: string;
  gridProperties: GridProperties;
  valueRange: string;
  headerIndex: string[];
  config?: WorksheetConfig;
  data?: Pokemon[];
  ownedEntries?: number;
}
