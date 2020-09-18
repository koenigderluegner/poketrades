import { LevelUpMove } from './level-up-move.interface';

export interface LevelUpMoveEntry {
  dex: string;
  pokemon: string;
  moves: LevelUpMove[];
}
