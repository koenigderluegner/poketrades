import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLevelUpMoves'
})
export class FilterLevelUpMovesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
