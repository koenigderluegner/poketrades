import { Pokemon } from '@shared/interfaces/pokemon';

export interface Worksheet {
  id: string;
  title: string;
  updated: Date;
  config?: any;
  data?: Pokemon[];
}
