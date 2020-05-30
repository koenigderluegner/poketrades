import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GridAppearanceType } from '../grid-appearance.type';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  gridAppearance: BehaviorSubject<GridAppearanceType>;

  constructor() {
    this.gridAppearance = new BehaviorSubject<GridAppearanceType>('minimal');
  }

  getGridAppearance$(): Observable<GridAppearanceType> {
    return this.gridAppearance.asObservable();
  }

  updateGridAppearance(gridAppearanceType: GridAppearanceType): void {
    this.gridAppearance.next(gridAppearanceType);
  }

}
