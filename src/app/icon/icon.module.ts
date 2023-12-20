import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [PokemonComponent, ItemComponent],
  exports: [
    PokemonComponent,
    ItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IconModule {
}
