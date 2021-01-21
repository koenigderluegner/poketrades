import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-detailed-move',
  templateUrl: './detailed-move.component.html',
  styleUrls: ['./detailed-move.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailedMoveComponent implements OnInit {

  @HostBinding('class.detailed-move') private setClasses = true;

  @Input() move: string;
  @Input() isEggMove: boolean;

  @Input() set type(type: string) {
    this._type = type;
  }

  get type(): string {
    return this._type;
  }

  @HostBinding('class') get typeClass(): string {
    return 'move-' + this._type;
  }

  private _type: string;

  constructor() {
    this.move = 'unknown';
    this.isEggMove = false;
    this._type = 'unknown';
  }

  ngOnInit(): void {
  }

}
