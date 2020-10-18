import { Pipe, PipeTransform } from '@angular/core';
import { ShinyDexEntry } from '../models/shiny-dex-entry.interface';
import { Pokemon } from '@shared/interfaces/pokemon';

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
