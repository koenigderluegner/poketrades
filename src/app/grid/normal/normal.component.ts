import { Component, ViewEncapsulation } from '@angular/core';
import { GridBaseAppearanceDirective } from '../components/grid-base-appearance.directive';
import { PokemonComponent } from "../../icon/pokemon/pokemon.component";
import { ItemComponent } from "../../icon/item/item.component";
import { MatIcon } from "@angular/material/icon";
import { SlugifyPipe } from "@shared/pipes/slugify.pipe";
import { Breedable } from "@shared/interfaces/breedable.interface";
import { Pokemon } from "@shared/interfaces/pokemon";

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    PokemonComponent,
    ItemComponent,
    MatIcon,
    SlugifyPipe
  ],
  host: {
    'class': 'grid-item',
  }
})
export class NormalComponent extends GridBaseAppearanceDirective {

  isPokemon(p: Breedable | Pokemon | undefined): p is Pokemon {
    return !!p && 'item' in p
  }

}
