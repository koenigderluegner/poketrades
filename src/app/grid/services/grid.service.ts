import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GridAppearanceType } from '../grid-appearance.type';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatSortable } from '@angular/material/sort';
import { PokemonCategory } from '@shared/enums/pokemon-category.enum';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  gridAppearance: BehaviorSubject<GridAppearanceType>;
  filter: BehaviorSubject<string>;
  sorting: BehaviorSubject<MatSortable>;
  categories: BehaviorSubject<PokemonCategory[]>;
  hideInactiveItems: BehaviorSubject<boolean>;
  hideSortingControl: BehaviorSubject<boolean>;
  hideAppearanceControl: BehaviorSubject<boolean>;
  hideFilterControl: BehaviorSubject<boolean>;
  hideInactiveItemsControl: BehaviorSubject<boolean>;

  constructor() {
    let gridAppearanceType = localStorage.getItem('gridAppearanceType');
    const hideItems = coerceBooleanProperty(localStorage.getItem('hideItems'));
    gridAppearanceType = gridAppearanceType !== 'detailed' && gridAppearanceType !== 'normal' ? 'minimal' : gridAppearanceType;

    this.gridAppearance = new BehaviorSubject<GridAppearanceType>(gridAppearanceType as GridAppearanceType);

    if (hideItems !== null) {
      this.hideInactiveItems = new BehaviorSubject<boolean>(hideItems);
    } else {
      this.hideInactiveItems = new BehaviorSubject<boolean>(false);
    }
    this.filter = new BehaviorSubject<string>('');
    this.sorting = new BehaviorSubject<MatSortable>({id: '', disableClear: false, start: 'asc'});
    this.categories = new BehaviorSubject<PokemonCategory[]>([]);
    this.hideAppearanceControl = new BehaviorSubject<boolean>(false);
    this.hideFilterControl = new BehaviorSubject<boolean>(false);
    this.hideSortingControl = new BehaviorSubject<boolean>(false);
    this.hideInactiveItemsControl = new BehaviorSubject<boolean>(false);
  }

  getGridAppearance$(): Observable<GridAppearanceType> {
    return this.gridAppearance.asObservable();
  }

  updateGridAppearance(gridAppearanceType: GridAppearanceType): void {
    this.gridAppearance.next(gridAppearanceType);
    localStorage.setItem('gridAppearanceType', gridAppearanceType);
  }

  getFilter$(): Observable<string> {
    return this.filter.asObservable();
  }

  updateFilter(filter: string): void {
    this.filter.next(filter);
  }

  getSorting$(): Observable<MatSortable> {
    return this.sorting.asObservable();
  }

  updateSorting(sorting: MatSortable): void {
    this.sorting.next(sorting);
  }

  getCategories$(): Observable<PokemonCategory[]> {
    return this.categories.asObservable();
  }

  updateCategories(categories: PokemonCategory[]): void {
    this.categories.next(categories);
  }

  getHideItems$(): Observable<boolean> {
    return this.hideInactiveItems.asObservable();
  }

  getHideItems(): boolean {
    return this.hideInactiveItems.getValue();
  }

  updateHideItems(hideItems: boolean): void {
    localStorage.setItem('hideItems', String(hideItems));
    return this.hideInactiveItems.next(hideItems);
  }

  getHideInactiveItemsControl$(): Observable<boolean> {
    return this.hideInactiveItemsControl.asObservable();
  }

  updateHideInactiveItemsControl(hideControl: boolean): void {
    return this.hideInactiveItemsControl.next(hideControl);
  }

  getHideFilterControl$(): Observable<boolean> {
    return this.hideFilterControl.asObservable();
  }

  updateHideFilterControl(hideControl: boolean): void {
    return this.hideFilterControl.next(hideControl);
  }

  getHideAppearanceControl$(): Observable<boolean> {
    return this.hideAppearanceControl.asObservable();
  }

  updateHideAppearanceControl(hideControl: boolean): void {
    return this.hideAppearanceControl.next(hideControl);
  }

  getHideSortingControl$(): Observable<boolean> {
    return this.hideSortingControl.asObservable();
  }

  updateHideSortingControl(hideControl: boolean): void {
    return this.hideSortingControl.next(hideControl);
  }

}
