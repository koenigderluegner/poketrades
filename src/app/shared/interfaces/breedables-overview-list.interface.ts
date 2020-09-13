import { Breedable } from '@shared/classes/koenig/breedable';

export interface BreedablesOverviewList {
  [key: string]: {
    [key: string]: Breedable
  };
}
