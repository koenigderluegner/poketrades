import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
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
  ]
})
export class MinimalComponent extends GridBaseAppearanceDirective {

  @HostBinding('class.grid-item') isGridItem = true;

  @HostBinding('class.inactive') get inactive(): boolean {
    return !this.pokemon?.isOwned;
  }


  isPokemon(p: Breedable | Pokemon | undefined): p is Pokemon {
    return !!p && 'item' in p
  }
}
