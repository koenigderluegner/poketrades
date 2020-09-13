import { PokemonStats } from '@shared/interfaces/pokemon-stats';

export class AbstractValuable {

  protected gsx$name: { $t: string };
  protected gsx$dex: { $t: string };
  protected gsx$hasha: { $t: string };
  protected gsx$owned: { $t: string };
  protected gsx$ability: { $t: string };
  protected gsx$isshiny: { $t: string };

  protected gsx$hp: { $t: string };
  protected gsx$atk: { $t: string };
  protected gsx$def: { $t: string };
  protected gsx$spa: { $t: string };
  protected gsx$spd: { $t: string };
  protected gsx$spe: { $t: string };

  protected gsx$evhp: { $t: string };
  protected gsx$evatk: { $t: string };
  protected gsx$evdef: { $t: string };
  protected gsx$evspa: { $t: string };
  protected gsx$evspd: { $t: string };
  protected gsx$evspe: { $t: string };

  [key: string]: ({ $t: string }) | PokemonStats | undefined | string[] | string |boolean;


  constructor() {
    if (new.target === AbstractValuable) {
      throw new TypeError('Cannot construct AbstractValuable instances directly');
    }
  }

}
