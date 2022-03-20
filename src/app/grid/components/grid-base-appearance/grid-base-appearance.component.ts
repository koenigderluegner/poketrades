import { Component, HostBinding, Input } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';
import { categoriesOf } from '@shared/functions/pokemon-categories.function';

@Component({
  selector: '',
  template: ''
})
export abstract class GridBaseAppearanceComponent {

  @Input() pokemon: Pokemon | undefined;

  @HostBinding('class')
  protected get categories(): string[] {
    return categoriesOf(this.pokemon);
  }

}
