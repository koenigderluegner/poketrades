import { Pokemon } from '@shared/interfaces/pokemon';

export type Valuable = Pick<Pokemon, 'id' | 'isShiny' | 'dex' | 'ball' | 'ability' | 'hasHiddenAbility' | 'isOwned' | 'iconSlug' | 'name' | 'nature' | 'moves' | 'ivs' | 'evs' | 'item' | 'ot' | 'gender' | 'level'>;

