import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GridAppearanceType } from '../grid-appearance.type';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  gridAppearance: BehaviorSubject<GridAppearanceType>;
  hideInactiveItems: BehaviorSubject<boolean>;
  hideAppearanceControl: BehaviorSubject<boolean>;
  hideInactiveItemsControl: BehaviorSubject<boolean>;

  constructor() {
    this.gridAppearance = new BehaviorSubject<GridAppearanceType>('minimal');
    this.hideInactiveItems = new BehaviorSubject<boolean>(false);
    this.hideAppearanceControl = new BehaviorSubject<boolean>(false);
    this.hideInactiveItemsControl = new BehaviorSubject<boolean>(false);
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

  getHideItems(): boolean {
    return this.hideInactiveItems.getValue();
  }

  updateHideItems(hideItems: boolean): void {
    return this.hideInactiveItems.next(hideItems);
  }

  getHideInactiveItemsControl$(): Observable<boolean> {
    return this.hideInactiveItemsControl.asObservable();
  }

  updateHideInactiveItemsControl(hideControl: boolean): void {
    return this.hideInactiveItemsControl.next(hideControl);
  }

  getHideAppearanceControl$(): Observable<boolean> {
    return this.hideAppearanceControl.asObservable();
  }

  updateHideAppearanceControl(hideControl: boolean): void {
    return this.hideAppearanceControl.next(hideControl);
  }

}
