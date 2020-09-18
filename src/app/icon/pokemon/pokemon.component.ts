import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  template: '',
  styleUrls: ['./pokemon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PokemonComponent {

  @HostBinding('class.pokesprite') pokesprite = true;
  @HostBinding('class.pokemon') pokemon = true;
  @Input() @HostBinding('class.shiny') shiny = false;
  @Input() @HostBinding('class') slug: string | undefined;

}
