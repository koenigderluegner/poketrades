import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';
import { Breedable } from '@shared/interfaces/breedable.interface';

@Pipe({
  name: 'castBreedable'
})
export class CastBreedablePipe implements PipeTransform {

  transform(pokemon: Pokemon): Breedable {
    return pokemon as Breedable;
  }

}
