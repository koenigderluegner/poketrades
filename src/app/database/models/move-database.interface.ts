import { Move } from './move.interface';
import { LevelUpMoveEntry } from './level-up-move-entry.interface';

export interface MoveDatabase {
  moves: Move[];
  eggMoves: { [key: string]: string[] };
  levelUpMoves: { [key: string]: LevelUpMoveEntry };
}
