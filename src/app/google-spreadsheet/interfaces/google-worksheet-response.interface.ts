export interface GoogleWorksheetResponse {
  valueRanges: {
    range: string;
    values: string[][]
  }[];
}
