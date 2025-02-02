import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  template: '',
  styleUrls: ['./pokemon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class PokemonComponent {

  @HostBinding('class.pokesprite') pokesprite = true;
  @HostBinding('class.pokemon') pokemon = true;
  @Input() @HostBinding('class.shiny') shiny = false;

  private _slug: string | undefined;

  get slug(): string | undefined {
    return this._slug
  }

  @Input() @HostBinding('class') set slug(slug: string | undefined) {
    this._slug = slug?.split('/').join(' ');
  }

}
