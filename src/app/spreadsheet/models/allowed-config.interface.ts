export interface AllowedConfig {
  type: AllowedConfigType[];
  subType?: AllowedConfigSubType[];
  ball?: string[];
  includeShinies?: string[];

  [key: string]: string[] | undefined;
}

export type AllowedConfigType = 'Valuables' | 'Breedables' | 'livingDex' | 'unknown';
export type AllowedConfigSubType = 'RNGs' | 'Legendaries' | 'Shinies' | 'Competitives' | 'Events';
