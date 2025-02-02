import { Directive, Input } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';
import { categoriesOf } from '@shared/functions/pokemon-categories.function';
import { Breedable } from "@shared/interfaces/breedable.interface";

@Directive({
    host: {
      '[class]': 'categories'
    }
  }
)
export abstract class GridBaseAppearanceDirective {

  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
  @Input() pokemon: Pokemon | Breedable | undefined;

  protected get categories(): string[] {
    return categoriesOf(this.pokemon);
  }

}
