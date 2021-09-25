import { PokemonType } from '@shared/interfaces/pokemon-type.type';
import { ObtainingMethods } from '@shared/enums/obtaining-method.enum';

export interface PokemonEntry {
  name: string;
  dex: string;
  types: PokemonType[];
  eggGroups: string[];
  abilities: string[];
  hiddenAbility: string | null;
  iconSlug: string;
  canBeShiny: boolean;
  canBeBanked: boolean;
  gen8Appearance: string;
  femaleRatio: null | number;
  fsObtainingMethod?: ObtainingMethods;
  uwObtainingMethod?: ObtainingMethods;
}
