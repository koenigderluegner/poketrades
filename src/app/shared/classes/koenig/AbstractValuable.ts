import { PokemonStats } from '@shared/interfaces/pokemon-stats';

export class AbstractValuable {

  protected gsx$name: { $t: string } | undefined;
  protected gsx$dex: { $t: string } | undefined;
  protected gsx$hasha: { $t: string } | undefined;
  protected gsx$owned: { $t: string } | undefined;
  protected gsx$ability: { $t: string } | undefined;
  protected gsx$isshiny: { $t: string } | undefined;
  protected gsx$nature: { $t: string } | undefined;
  protected gsx$ball: { $t: string } | undefined;
  protected gsx$item: { $t: string } | undefined;

  protected gsx$hp: { $t: string } | undefined;
  protected gsx$atk: { $t: string } | undefined;
  protected gsx$def: { $t: string } | undefined;
  protected gsx$spa: { $t: string } | undefined;
  protected gsx$spd: { $t: string } | undefined;
  protected gsx$spe: { $t: string } | undefined;

  protected gsx$evhp: { $t: string } | undefined;
  protected gsx$evatk: { $t: string } | undefined;
  protected gsx$evdef: { $t: string } | undefined;
  protected gsx$evspa: { $t: string } | undefined;
  protected gsx$evspd: { $t: string } | undefined;
  protected gsx$evspe: { $t: string } | undefined;

  [key: string]: ({ $t: string }) | PokemonStats | undefined | string[] | string | boolean | number;


  constructor() {
    if (new.target === AbstractValuable) {
      throw new TypeError('Cannot construct AbstractValuable instances directly');
    }
  }

}
