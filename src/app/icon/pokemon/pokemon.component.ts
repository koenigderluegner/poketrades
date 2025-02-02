import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  template: '',
  styleUrls: ['./pokemon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PokemonComponent {

  @HostBinding('class.pokesprite') pokesprite = true;
  @HostBinding('class.pokemon') pokemon = true;
  // TODO: Skipped for migration because:
  //  This input is used in combination with `@HostBinding` and migrating would
  //  break.
  @Input() @HostBinding('class.shiny') shiny = false;

  private _slug: string | undefined;

  get slug(): string | undefined {
    return this._slug
  }

  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
  @Input() @HostBinding('class') set slug(slug: string | undefined) {
    this._slug = slug?.split('/').join(' ');
  }

}
