import { Pokemon } from '@shared/interfaces/pokemon';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';

export class Breedable implements Pokemon {

  private _slug: string;

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

  get isOwned(): boolean{
    return this['gsx$owned']['$t'] === 'x';
  }

  get iconSlug(): string {
    if (!this._slug) {
      this._slug = new SlugifyPipe().transform(this.name);
      this._slug = this._slug.replace('-antique', '');
    }
    return this._slug;
  }

  get name(): string {
    return this['gsx$name']['$t'];
  }

}
