import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';

@Component({
  selector: 'app-minimal[pokemon]',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MinimalComponent {

  @HostBinding('class.grid-item') isGridItem = true;

  @HostBinding('class.inactive') get inactive(): boolean {
    return !this.pokemon?.isOwned;
  }

  @Input() pokemon: Pokemon | undefined;

}
