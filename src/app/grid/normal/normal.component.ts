import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NormalComponent implements OnInit {

  @HostBinding('class') classes = 'grid-item';

  _pokemon: Pokemon;

  @Input()
  public get pokemon(): Pokemon {
    return this._pokemon;
  }

  public set pokemon(pokemon: Pokemon) {
    this._pokemon = pokemon;
    // when the pokemon is set check it and set class
    this.isInactive = !this._pokemon.isOwned;
  }


  @HostBinding('class.inactive') isInactive: boolean = !this.pokemon?.isOwned;

  constructor() {
  }

  ngOnInit(): void {
  }
}
