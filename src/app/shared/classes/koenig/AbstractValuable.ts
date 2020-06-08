export class AbstractValuable {

  protected gsx$name;
  protected gsx$dex;
  protected gsx$hasha;
  protected gsx$owned;
  protected gsx$ability;

  protected gsx$hp;
  protected gsx$atk;
  protected gsx$def;
  protected gsx$spa;
  protected gsx$spd;
  protected gsx$spe;

  protected gsx$evhp;
  protected gsx$evatk;
  protected gsx$evdef;
  protected gsx$evspa;
  protected gsx$evspd;
  protected gsx$evspe;

  constructor() {
    if (new.target === AbstractValuable) {
      throw new TypeError('Cannot construct AbstractValuable instances directly');
    }
  }

}
