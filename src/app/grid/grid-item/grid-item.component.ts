import { Component, Input, OnInit } from '@angular/core';
import { GridAppearanceType } from '../grid-appearance.type';
import { Pokemon } from '@shared/interfaces/pokemon';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Input() appearance: GridAppearanceType;
  constructor() { }

  ngOnInit(): void {
  }

}
