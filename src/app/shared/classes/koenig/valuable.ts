import { Pokemon } from '@shared/interfaces/pokemon';

export class Valuable implements Pokemon{
  ability: string;
  dex: string;
  hasHiddenAbility: boolean;
  iconSlug: string;
  name: string;
}
