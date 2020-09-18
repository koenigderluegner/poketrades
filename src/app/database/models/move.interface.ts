export interface Move {
  slug: string;
  name: string;
  type: string;
  category: 'special' | 'physical' | 'status' | '';
  power: string | null;
  accuracy: string | null;
  pp: string | null;
  desc: string;
  probability: string | null;
}
