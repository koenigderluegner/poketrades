import { PokemonEntry } from '../../database/models/pokemon-entry.interface';

export interface ShinyDexEntry {
  pokemon: PokemonEntry;
  amountShinies: number;
}
