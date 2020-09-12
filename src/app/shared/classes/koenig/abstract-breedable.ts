export class  AbstractBreedable {

  protected gsx$name: string;
  protected gsx$dex: string;
  protected gsx$hasha: string;
  protected gsx$owned: string;
  protected gsx$ability: string;

  constructor() {
    if (new.target === AbstractBreedable) {
      throw new TypeError('Cannot construct AbstractBreeable instances directly');
    }
  }

}
