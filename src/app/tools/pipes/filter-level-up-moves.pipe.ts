import { Pipe, PipeTransform } from '@angular/core';
import { LevelUpMove } from '../../database/models/level-up-move.interface';

@Pipe({
  name: 'filterLevelUpMoves',
  standalone: false
})
export class FilterLevelUpMovesPipe implements PipeTransform {

  transform(value: LevelUpMove[], move: string): LevelUpMove[] {
    if (!value) {
      return [];
    }
    return value.filter(moveObj => {
      return moveObj.move === move;
    });
  }

}
