import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { PokemonType } from '@shared/interfaces/pokemon-type.type';

@Component({
  selector: 'app-type-badge',
  template: '',
  styleUrls: ['./type-badge.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TypeBadgeComponent implements OnInit {

  @Input() type: PokemonType;
  @Input() size: 'small' | 'normal';

  @HostBinding('class.type-badge') true;

  @HostBinding('class') get typeClass() {
    return this.type.toLowerCase();
  }

  @HostBinding('class.small') get sizeClass() {
    return this.size === 'small';
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
