import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';



@NgModule({
  declarations: [PokemonComponent],
  exports: [
    PokemonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IconModule { }
