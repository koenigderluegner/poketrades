export interface Pokemon {
  id: string;
  name: string;
  dex: string;
  ability: string;
  iconSlug: string;
  hasHiddenAbility: boolean;
  isOwned?: boolean;
  moves: any[];
  dynamaxLevel?: number;
}
