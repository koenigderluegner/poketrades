import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailedComponent implements OnInit {

  @HostBinding('class') classes = 'grid-item';

  @Input() pokemon: Pokemon;

  constructor() {
  }

  ngOnInit(): void {
  }

}
