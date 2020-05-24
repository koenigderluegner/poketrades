import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import {ObserversModule} from '@angular/cdk/observers';



@NgModule({
  declarations: [PokemonComponent],
  exports: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    ObserversModule
  ]
})
export class IconModule { }
