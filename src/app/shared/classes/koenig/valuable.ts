import { Pokemon } from '@shared/interfaces/pokemon';
import { AbstractValuable } from '@shared/classes/koenig/AbstractValuable';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { PokemonStats } from '@shared/interfaces/pokemon-stats';

export class Valuable extends AbstractValuable implements Pokemon {
  id: string;
  private _slug: string | undefined;
  private readonly _moves: string[];
  private _ivs?: PokemonStats;
  private _evs?: PokemonStats;


  constructor(pokemon?: Pokemon) {
    super();
    if (pokemon) {
      Object.assign(this, pokemon);
    }

    this.id = pokemon?.id ?? '';


    this._moves = [];
    for (let i = 1; i < 5; i++) {
      const move = (this[`gsx$move${i}`] as { $t: string })?.$t;
      if (move) {
        this._moves.push(move);
      }
    }

    this._ivs = {};
    this._evs = {};
    let hasIvs = false;
    let hasEvs = false;
    ['hp', 'atk', 'def', 'spa', 'spd', 'spe'].forEach(stat => {
      const iv = (this['gsx$' + stat] as { $t: string })?.$t.trim();
      const ev = (this['gsx$ev' + stat] as { $t: string })?.$t.trim();
      if (iv && iv !== '') {
        if (this._ivs) {
          this._ivs[stat] = iv;
        }
        hasIvs = true;
      }
      if (ev && ev !== '') {
        if (this._evs) {
          this._evs[stat] = ev;
        }
        hasEvs = true;
      }

      if (!hasIvs) {
        this._ivs = undefined;
      }
      if (!hasEvs) {
        this._evs = undefined;
      }
    });


  }

  get isShiny(): boolean {
    return !!this.gsx$isshiny?.$t;
  }

  set isShiny(isShiny: boolean) {
    if (!this.gsx$isshiny) {
      this.gsx$isshiny = {
        $t: '' + isShiny
      };
    } else {
      this.gsx$isshiny.$t = '' + isShiny;
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
    return this.gsx$name?.$t ?? 'unknown';
  }

  get moves(): string[] {
    return this._moves;
  }

  get ivs(): PokemonStats | undefined {
    return this._ivs;
  }

  get evs(): PokemonStats | undefined {
    return this._evs;
  }
}
