import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';
import { Breedable } from '@shared/classes/koenig/breedable';

@Pipe({
  name: 'castBreedable'
})
export class CastBreedablePipe implements PipeTransform {

  transform(pokemon: Pokemon): Breedable {
    return new Breedable(pokemon);
  }

}
