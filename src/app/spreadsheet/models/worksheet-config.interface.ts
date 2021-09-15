import { AllowedConfigSubType, AllowedConfigType } from '@spreadsheet/models/allowed-config.interface';

export interface WorksheetConfig {
  type: AllowedConfigType;
  subType?: AllowedConfigSubType;
  ball?: string;
  includeShinies?: boolean;
  colIndex: { min: number; max: number; };

  [key: string]: string | { min: number; max: number; } | boolean | undefined;
}
