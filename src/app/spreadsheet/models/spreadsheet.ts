import { Worksheet } from './worksheet';
import { BreedablesOverviewList } from '@shared/interfaces/breedables-overview-list.interface';
import { LivingDexChecklist } from "@spreadsheet/models/living-dex-checklist.type";

export interface Spreadsheet {
  id: string;
  title: string;
  username?: string;
  worksheets: Worksheet[];
  livingDexChecklist: LivingDexChecklist[];

  overviewEntries?: BreedablesOverviewList;
  hasValuables?: boolean;
  hasBreedables?: boolean;
}
