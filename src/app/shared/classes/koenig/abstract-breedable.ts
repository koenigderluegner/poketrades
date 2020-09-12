export class AbstractBreedable {

  protected gsx$name?: { $t: string };
  protected gsx$dex?: { $t: string };
  protected gsx$hasha?: { $t: string };
  protected gsx$owned?: { $t: string };
  protected gsx$ability?: { $t: string };

  protected gsx$move$1?: { $t: string };
  protected gsx$move$2?: { $t: string };
  protected gsx$move$3?: { $t: string };
  protected gsx$move$4?: { $t: string };

  constructor() {
    if (new.target === AbstractBreedable) {
      throw new TypeError('Cannot construct AbstractBreeable instances directly');
    }
  }

}
