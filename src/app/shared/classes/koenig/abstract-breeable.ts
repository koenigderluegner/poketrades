export class  AbstractBreeable {

  protected gsx$name;
  protected gsx$dex;
  protected gsx$hasha;
  protected gsx$owned;
  protected gsx$ability;

  constructor() {
    if (new.target === AbstractBreeable) {
      throw new TypeError('Cannot construct AbstractBreeable instances directly');
    }
  }

}
