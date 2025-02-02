import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PokemonComponent } from "../../icon/pokemon/pokemon.component";

@Component({
  selector: 'app-detailed-move',
  templateUrl: './detailed-move.component.html',
  styleUrls: ['./detailed-move.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    PokemonComponent
  ],
  host: {
    'class': 'detailed-move',
    '[class]': 'typeClass'
  }
})
export class DetailedMoveComponent {

  // TODO: Skipped for migration because:
  //  Your application code writes to the input. This prevents migration.
  @Input() move: string;
  // TODO: Skipped for migration because:
  //  Your application code writes to the input. This prevents migration.
  @Input() isEggMove: boolean;

  constructor() {
    this.move = 'unknown';
    this.isEggMove = false;
    this._type = 'unknown';
  }

  get typeClass(): string {
    return 'move-' + this._type;
  }

  private _type: string;

  get type(): string {
    return this._type;
  }

  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
  @Input() set type(type: string) {
    this._type = type;
  }

}
