import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLevelUpMoves'
})
export class FilterLevelUpMovesPipe implements PipeTransform {

  transform(value: any[], move: string): unknown {
    if (!value) {
      return [];
    }
    return value.filter(moveObj => {
      return moveObj.move === move;
    });
  }

}
