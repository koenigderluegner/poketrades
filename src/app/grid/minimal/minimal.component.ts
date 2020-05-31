import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';

@Component({
  selector: 'app-minimal[pokemon]',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MinimalComponent implements OnInit {

  @HostBinding('class') classes = 'grid-item';

  @Input() pokemon: Pokemon;

  constructor() {
  }

  ngOnInit(): void {
  }

}
