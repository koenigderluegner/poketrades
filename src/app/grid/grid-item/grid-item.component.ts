import { Component, input, ViewEncapsulation } from '@angular/core';
import { GridAppearanceType } from '../grid-appearance.type';
import { Pokemon } from '@shared/interfaces/pokemon';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class GridItemComponent {

  readonly pokemon = input<Pokemon>();
  readonly appearance = input<GridAppearanceType>();

}
