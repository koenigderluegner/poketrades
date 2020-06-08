export class  AbstractValuable {

  protected gsx$name;
  protected gsx$dex;
  protected gsx$hasha;
  protected gsx$owned;
  protected gsx$ability;

  constructor() {
    if (new.target === AbstractValuable) {
      throw new TypeError('Cannot construct AbstractValuable instances directly');
    }
  }

}
