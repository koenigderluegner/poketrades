export interface SpreadsheetResponseEntry {
  updated: { $t: string; };
  title: { $t: string; };
  id: { $t: string; };
  link: { rel: string; type: string; href: string; }[];
}
