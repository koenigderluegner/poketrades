import { Pokemon } from '@shared/interfaces/pokemon';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { AbstractBreedable } from '@shared/classes/koenig/abstract-breedable';

export class Breedable extends AbstractBreedable implements Pokemon {
  id = '';
  private _slug = '';
  private readonly _moves: string[] = [];

  [key: string]: string | { $t: string } | boolean | string[];


  constructor(pokemon?: Pokemon) {
    super();
    if (pokemon) {
      Object.assign(this, pokemon);
    }

    for (let i = 1; i < 5; i++) {
      const index = `gsx$move${i}`;
      if (this[index]?.$t) {
        this._moves.push(this[index]?.$t);
      }
    }
  }

  get ability(): string {
    return this.gsx$ability.$t;
  }

  get dex(): string {
    return this.gsx$dex.$t;
  }

  get hasHiddenAbility(): boolean {
    return this.gsx$hasha.$t === 'x';
  }

  get isOwned(): boolean {
    return this.gsx$owned.$t === 'x';
  }

  get iconSlug(): string {
    if (!this._slug) {
      this._slug = new SlugifyPipe().transform(this.name);
      this._slug = this._slug.replace('-antique', '');
    }
    return this._slug;
  }

  get name(): string {
    return this.gsx$name.$t;
  }

  get moves(): string[] {
    return this._moves;
  }

}
