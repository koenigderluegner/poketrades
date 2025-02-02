import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  template: '',
  styleUrls: ['./pokemon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'pokesprite pokemon',
    '[class]': 'slug',
    '[class.shiny]': 'shiny',
  }
})
export class PokemonComponent {

  // TODO: Skipped for migration because:
  //  This input is used in combination with `@HostBinding` and migrating would
  //  break.
  @Input() shiny = false;

  private _slug: string | undefined;

  get slug(): string | undefined {
    return this._slug
  }

  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
  @Input() set slug(slug: string | undefined) {
    this._slug = slug?.split('/').join(' ');
  }

}
