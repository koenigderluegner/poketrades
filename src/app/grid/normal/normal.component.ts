import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NormalComponent {

  @HostBinding('class') classes = 'grid-item';

  _pokemon: Pokemon | undefined;

  @Input()
  public get pokemon(): Pokemon | undefined {
    return this._pokemon;
  }

  public set pokemon(pokemon: Pokemon | undefined) {
    this._pokemon = pokemon;
    // when the pokemon is set check it and set class
    this.isInactive = !this._pokemon?.isOwned;
  }


  @HostBinding('class.inactive') isInactive: boolean = !this.pokemon?.isOwned;

}
