export interface AllowedConfig {
  type: string[];
  subType?: string[];
  ball?: string[];
  includeShinies?: string[];

  [key: string]: string[] | undefined;
}
