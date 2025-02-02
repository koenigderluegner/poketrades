import { Component, EventEmitter, HostBinding, Output, ViewEncapsulation } from '@angular/core';
import { GridAppearanceType } from '../grid-appearance.type';
import { GridService } from '../services/grid.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-changer',
  templateUrl: './changer.component.html',
  styleUrls: ['./changer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class ChangerComponent {

  @HostBinding('class') classes = 'grid-changer';

  @Output() selectionChanged: EventEmitter<GridAppearanceType> = new EventEmitter();
  appearance$: Observable<GridAppearanceType>;

  constructor(private gridService: GridService) {
    this.appearance$ = this.gridService.getGridAppearance$();
  }


  emitChange($event: Event) {
    this.selectionChanged.emit(($event.target as HTMLInputElement).defaultValue as GridAppearanceType);
  }
}
