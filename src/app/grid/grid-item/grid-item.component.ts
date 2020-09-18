import { Component, Input, ViewEncapsulation } from '@angular/core';
import { GridAppearanceType } from '../grid-appearance.type';
import { Pokemon } from '@shared/interfaces/pokemon';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridItemComponent {

  @Input() pokemon: Pokemon | undefined;
  @Input() appearance: GridAppearanceType | undefined;

}
