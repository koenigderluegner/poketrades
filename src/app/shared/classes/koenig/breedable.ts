import { Pokemon } from '@shared/interfaces/pokemon';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { AbstractBreedable } from '@shared/classes/koenig/abstract-breedable';

export class Breedable extends AbstractBreedable implements Pokemon {
  id = '';
  private _slug = '';
  private readonly _moves: string[] = [];
  isShiny = false;

  [key: string]: string | { $t: string } | boolean | string[] | undefined;


  constructor(pokemon?: Pokemon) {
    super();
    if (pokemon) {
      Object.assign(this, pokemon);
    }

    for (let i = 1; i < 5; i++) {
      const move = (this[`gsx$move${i}`] as { $t: string })?.$t;
      if (move) {
        this._moves.push(move);
      }
    }
  }

  get ability(): string {
    return this.gsx$ability?.$t ?? '';
  }

  get dex(): string {
    return this.gsx$dex?.$t ?? '';
  }

  get hasHiddenAbility(): boolean {
    return this.gsx$hasha?.$t === 'x';
  }

  get isOwned(): boolean {
    return this.gsx$owned?.$t === 'x';
  }

  get iconSlug(): string {
    if (!this._slug) {
      this._slug = new SlugifyPipe().transform(this.name);
      this._slug = this._slug.replace('-antique', '');
    }
    return this._slug;
  }

  get name(): string {
    return this.gsx$name?.$t ?? 'unknown';
  }

  get nature(): string {
    return this.gsx$nature?.$t ?? '';
  }

  get moves(): string[] {
    return this._moves;
  }

}
