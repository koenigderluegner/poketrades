import { Component, ViewEncapsulation } from '@angular/core';
import { GridBaseAppearanceDirective } from '../components/grid-base-appearance.directive';
import { PokemonComponent } from "../../icon/pokemon/pokemon.component";
import { ItemComponent } from "../../icon/item/item.component";
import { SlugifyPipe } from "@shared/pipes/slugify.pipe";
import { Breedable } from "@shared/interfaces/breedable.interface";
import { Pokemon } from "@shared/interfaces/pokemon";

@Component({
  selector: 'app-minimal[pokemon]',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    PokemonComponent,
    ItemComponent,
    SlugifyPipe
  ],
  host: {
    'class': 'grid-item',
    '[class.inactive]': 'inactive',
  }
})
export class MinimalComponent extends GridBaseAppearanceDirective {

  get inactive(): boolean {
    return !this.pokemon()?.isOwned;
  }


  isPokemon(p: Breedable | Pokemon | undefined): p is Pokemon {
    return !!p && 'item' in p
  }
}
