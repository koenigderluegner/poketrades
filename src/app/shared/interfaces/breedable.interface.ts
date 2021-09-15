import { Pokemon } from '@shared/interfaces/pokemon';

export type Breedable = Pick<Pokemon, 'id' | 'isShiny' | 'dex' | 'ball' | 'ability' | 'hasHiddenAbility' | 'isOwned' | 'iconSlug' | 'name' | 'nature' | 'moves'>;

