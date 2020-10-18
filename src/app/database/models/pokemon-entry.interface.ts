import { PokemonType } from '@shared/interfaces/pokemon-type.type';

export interface PokemonEntry {
  name: string;
  dex: string;
  types: PokemonType[];
  eggGroups: string[];
  abilities: string[];
  hiddenAbility: string | null;
  iconSlug: string;
  canBeShiny: boolean;
}
