import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
  host: {class: 'grid-item'},
  encapsulation: ViewEncapsulation.None
})
export class DetailedComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
