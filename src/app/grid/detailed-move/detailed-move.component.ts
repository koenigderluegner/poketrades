import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-detailed-move',
  templateUrl: './detailed-move.component.html',
  styleUrls: ['./detailed-move.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class DetailedMoveComponent {

  @Input() move: string;
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

  @Input() set type(type: string) {
    this._type = type;
  }

}
