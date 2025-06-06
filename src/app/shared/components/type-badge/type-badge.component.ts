import { Component, input, ViewEncapsulation } from '@angular/core';
import { PokemonType } from '@shared/interfaces/pokemon-type.type';

@Component({
  selector: 'app-type-badge',
  template: '',
  styleUrls: ['./type-badge.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.type-badge]': 'true',
    '[class.small]': 'sizeClass',
    '[class]': 'typeClass'
  }
})

export class TypeBadgeComponent {

  readonly type = input<PokemonType>('unknown');
  readonly size = input<'small' | 'normal'>('normal');


  get typeClass() {
    return this.type()?.toLowerCase() || '';
  }

  get sizeClass() {
    return this.size() === 'small';
  }
}
