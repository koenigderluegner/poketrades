import { Component, EventEmitter, HostBinding, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { GridAppearanceType } from '../grid-appearance.type';

@Component({
  selector: 'app-changer',
  templateUrl: './changer.component.html',
  styleUrls: ['./changer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChangerComponent implements OnInit {

  @HostBinding('class') classes = 'grid-changer';

  @Output() selectionChanged: EventEmitter<GridAppearanceType> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  emitChange($event: Event) {
    this.selectionChanged.emit(($event.target as HTMLInputElement).defaultValue as GridAppearanceType);
  }
}
