import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';
import { ShinyDexEntry } from '@shared/interfaces/shiny-dex-entry.interface';

@Pipe({
  name: 'shinyDexEntryToPokemon'
})
export class ShinyDexEntryToPokemonPipe implements PipeTransform {

  transform(value: ShinyDexEntry): Pokemon {
    const pokemon = value.pokemon as unknown as Pokemon;
    pokemon.isShiny = true;
    pokemon.isOwned = !!value.amountShinies;
    return pokemon;
  }

}
