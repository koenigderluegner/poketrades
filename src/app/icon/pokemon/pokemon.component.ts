import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  template: '',
  styleUrls: ['./pokemon.component.scss', '../pokesprite/pokesprite.css'],
  encapsulation: ViewEncapsulation.None
})
export class PokemonComponent {

  @HostBinding('class.pkspr') true;
  @Input() @HostBinding('class') slug: string;

  constructor() {
  }

}
