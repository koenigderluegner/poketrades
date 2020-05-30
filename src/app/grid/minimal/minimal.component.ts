import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';

@Component({
  selector: 'app-minimal[pokemon]',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.scss'],
  host: {class: 'grid-item'},
  encapsulation: ViewEncapsulation.None
})
export class MinimalComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
