import { Pokemon } from '@shared/interfaces/pokemon';

export class Breedable implements Pokemon{

  constructor(pokemon?: Pokemon) {
    pokemon && Object.assign(this, pokemon);
  }

  get ability(): string{
    return this['gsx$ability']['$t'];
  }
  dex: string;
  hasHiddenAbility: boolean;
  iconSlug: string;
  name: string;

}
