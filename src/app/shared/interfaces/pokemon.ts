import { PokemonStats } from '@shared/interfaces/pokemon-stats';

export interface Pokemon {
  id: string;
  name: string;
  dex: string;
  ability: string;
  iconSlug: string;
  hasHiddenAbility: boolean;
  isOwned?: boolean;
  moves: string[];
  dynamaxLevel?: number;
  isShiny: boolean;
  ivs?: PokemonStats;
  evs?: PokemonStats;
  nature?: string;
  ball?: string;
  item?: string;
  ot?: string;
  level?: string;
  gender?: string;

  [key: string]: string | boolean | PokemonStats | undefined | number | string[];
}
