import { PokemonEntry } from './pokemon-entry.interface';
import { MoveDatabase } from './move-database.interface';
import { LegalityEntry } from './legality-entry.interface';

export interface Database {
  pokemon: PokemonEntry[];
  moves: MoveDatabase;
  breedableLegality: LegalityEntry[];
}
