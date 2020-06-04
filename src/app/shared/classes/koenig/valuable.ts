import { Pokemon } from '@shared/interfaces/pokemon';

export class Valuable implements Pokemon{
  ability: string;
  dex: string;
  hasHiddenAbility: boolean;
  iconSlug: string;
  name: string;
  moves: any[];

  constructor(pokemon?: Pokemon) {
    if(pokemon) Object.assign(this, pokemon);
  }
}
