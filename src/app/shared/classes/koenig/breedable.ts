import { Pokemon } from '@shared/interfaces/pokemon';

export class Breedable implements Pokemon {

  constructor(pokemon?: Pokemon) {
    pokemon && Object.assign(this, pokemon);
  }

  get ability(): string {
    return this['gsx$ability']['$t'];
  }

  get dex(): string {
    return this['gsx$dex']['$t'];
  }

  get hasHiddenAbility(): boolean {
    return this['gsx$hasha']['$t'] === 'x';
  }

  iconSlug: string;

  get name(): string {
    return this['gsx$name']['$t'];
  }

}
