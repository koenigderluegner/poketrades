export interface WorksheetConfig {
  type: string;
  subType?: string;
  ball?: string;
  includeShinies?: string;
  iconSlug?: string;

  [key: string]: string | undefined;
}
