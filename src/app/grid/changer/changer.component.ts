import { Component, inject, output, ViewEncapsulation } from '@angular/core';
import { GridAppearanceType } from '../grid-appearance.type';
import { GridService } from '../services/grid.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-changer',
  templateUrl: './changer.component.html',
  styleUrls: ['./changer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    AsyncPipe
  ],
  host: {
    'class': 'grid-changer',
  }
})
export class ChangerComponent {
  private gridService = inject(GridService);

  readonly selectionChanged = output<GridAppearanceType>();
  appearance$: Observable<GridAppearanceType>;

  constructor() {
    this.appearance$ = this.gridService.getGridAppearance$();
  }


  emitChange($event: Event) {
    this.selectionChanged.emit(($event.target as HTMLInputElement).defaultValue as GridAppearanceType);
  }
}
