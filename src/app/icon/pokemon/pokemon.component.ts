import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  template: '',
  styleUrls: ['./pokemon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PokemonComponent {

  private _slug: string | undefined;

  @HostBinding('class.pokesprite') pokesprite = true;
  @HostBinding('class.pokemon') pokemon = true;
  @Input() @HostBinding('class.shiny') shiny = false;

  @Input() @HostBinding('class') set slug(slug: string | undefined) {
    this._slug = slug?.split('/').join(' ');
  }

  get slug(): string | undefined {
    return this._slug
  }

}
