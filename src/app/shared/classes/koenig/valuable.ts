import { Pokemon } from '@shared/interfaces/pokemon';
import { AbstractValuable } from '@shared/classes/koenig/AbstractValuable';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { PokemonStats } from '@shared/interfaces/pokemon-stats';

export class Valuable extends AbstractValuable implements Pokemon {
  id: string;
  private _slug: string;
  private _moves: any[];
  private _ivs: PokemonStats;
  private _evs: PokemonStats;

  constructor(pokemon?: Pokemon) {
    super();
    if (pokemon) {
      Object.assign(this, pokemon);
    }


    this._moves = [];
    for (let i = 1; i < 5; i++) {
      if (this[`gsx$move${i}`]?.$t) {
        this._moves.push(this[`gsx$move${i}`]?.$t);
      }
    }

    this._ivs = {};
    this._evs = {};
    let hasIvs = false;
    let hasEvs = false;
    ['hp', 'atk', 'def', 'spa', 'spd', 'spe'].forEach(stat => {
      const iv = this['gsx$' + stat]?.$t.trim();
      const ev = this['gsx$ev' + stat]?.$t.trim();
      if (iv && iv !== '') {
        this._ivs[stat] = iv;
        hasIvs = true;
      }
      if (ev && ev !== '') {
        this._evs[stat] = ev;
        hasEvs = true;
      }

      if (!hasIvs) {
        delete this._ivs;
      }
      if (!hasEvs) {
        delete this._evs;
      }
    });


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
    return true;
  }

  get iconSlug(): string {
    if (!this._slug) {
      this._slug = new SlugifyPipe().transform(this.name);
      this._slug = this._slug.replace('-antique', '');
      this._slug = this._slug.replace('-gigantamax', '-gmax');
      this._slug = this._slug.replace('-low-key-gmax', '-gmax');
    }
    return this._slug;
  }

  get name(): string {
    return this.gsx$name.$t;
  }

  get moves() {
    return this._moves;
  }

  get ivs() {
    return this._ivs;
  }

  get evs() {
    return this._evs;
  }
}
