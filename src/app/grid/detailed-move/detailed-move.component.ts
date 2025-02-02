import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-detailed-move',
  templateUrl: './detailed-move.component.html',
  styleUrls: ['./detailed-move.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class DetailedMoveComponent {

  // TODO: Skipped for migration because:
  //  Your application code writes to the input. This prevents migration.
  @Input() move: string;
  // TODO: Skipped for migration because:
  //  Your application code writes to the input. This prevents migration.
  @Input() isEggMove: boolean;
  @HostBinding('class.detailed-move') private setClasses = true;

  constructor() {
    this.move = 'unknown';
    this.isEggMove = false;
    this._type = 'unknown';
  }

  @HostBinding('class') get typeClass(): string {
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
