import { Breedable } from '@shared/interfaces/breedable.interface';

export interface BreedablesOverviewList {
  [key: string]: {
    [key: string]: Breedable
  };
}
