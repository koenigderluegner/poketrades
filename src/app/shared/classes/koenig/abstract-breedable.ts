export class  AbstractBreedable {

  protected gsx$name: {$t: string};
  protected gsx$dex: {$t: string};
  protected gsx$hasha: {$t: string};
  protected gsx$owned: {$t: string};
  protected gsx$ability: {$t: string};

  constructor() {
    if (new.target === AbstractBreedable) {
      throw new TypeError('Cannot construct AbstractBreeable instances directly');
    }
  }

}
