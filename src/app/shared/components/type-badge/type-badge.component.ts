import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { PokemonType } from '@shared/interfaces/pokemon-type.type';

@Component({
  selector: 'app-type-badge',
  template: '',
  styleUrls: ['./type-badge.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})

export class TypeBadgeComponent {

  @Input() type: PokemonType = 'unknown';
  @Input() size: 'small' | 'normal' = 'normal';

  @HostBinding('class.type-badge') isTypeBade = true;

  @HostBinding('class') get typeClass() {
    return this.type?.toLowerCase() || '';
  }

  @HostBinding('class.small') get sizeClass() {
    return this.size === 'small';
  }
}
