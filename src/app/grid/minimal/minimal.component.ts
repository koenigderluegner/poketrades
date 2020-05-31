import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';

@Component({
  selector: 'app-minimal[pokemon]',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MinimalComponent implements OnInit {

  @HostBinding('class.grid-item') true;

  @HostBinding('class.inactive') get inactive() {
    return !this.pokemon?.isOwned;
  }

  @Input() pokemon: Pokemon;

  constructor() {
  }

  ngOnInit(): void {
  }

}
