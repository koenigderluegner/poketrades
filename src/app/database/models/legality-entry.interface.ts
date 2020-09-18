export interface LegalityEntry {
  'pokemon': string;
  'dex': string;
  'poké': boolean | null;
  'great': boolean | null;
  'ultra': boolean | null;
  'premier': boolean | null;
  'dive': boolean | null;
  'luxury': boolean | null;
  'nest': boolean | null;
  'net': boolean | null;
  'repeat': boolean | null;
  'timer': boolean | null;
  'dusk': boolean | null;
  'heal': boolean | null;
  'quick': boolean | null;
  'fast': boolean | null;
  'friend': boolean | null;
  'heavy': boolean | null;
  'level': boolean | null;
  'love': boolean | null;
  'lure': boolean | null;
  'moon': boolean | null;
  'safari': boolean | null;
  'sport': boolean | null;
  'dream': boolean | null;
  'beast': boolean | null;

  [key: string]: boolean | string | null;
}
