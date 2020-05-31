import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GridAppearanceType } from '../grid-appearance.type';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  gridAppearance: BehaviorSubject<GridAppearanceType>;
  hideInactiveItems: BehaviorSubject<boolean>;

  constructor() {
    this.gridAppearance = new BehaviorSubject<GridAppearanceType>('minimal');
    this.hideInactiveItems = new BehaviorSubject<boolean>(false);
  }

  getGridAppearance$(): Observable<GridAppearanceType> {
    return this.gridAppearance.asObservable();
  }

  updateGridAppearance(gridAppearanceType: GridAppearanceType): void {
    this.gridAppearance.next(gridAppearanceType);
  }

  getHideItems$(): Observable<boolean> {
    return this.hideInactiveItems.asObservable();
  }

  updateHideItems$(hideItems: boolean): void {
    return this.hideInactiveItems.next(hideItems);
  }

}
