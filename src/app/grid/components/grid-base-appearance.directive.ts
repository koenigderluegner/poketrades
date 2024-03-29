import { Directive, HostBinding, Input } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';
import { categoriesOf } from '@shared/functions/pokemon-categories.function';

@Directive()
export abstract class GridBaseAppearanceDirective {

  @Input() pokemon: Pokemon | undefined;

  @HostBinding('class')
  protected get categories(): string[] {
    return categoriesOf(this.pokemon);
  }

}
