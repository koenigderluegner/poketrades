import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';
import { Valuable } from '@shared/interfaces/valuable.interface';

@Pipe({
  name: 'castValuable',
  standalone: false
})
export class CastValuablePipe implements PipeTransform {

  transform(pokemon: Pokemon): Valuable {
    return (pokemon) as Valuable;
  }

}
