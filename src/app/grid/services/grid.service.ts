import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GridAppearanceType } from '../grid-appearance.type';
import { MatSortable } from '@angular/material/sort';
import { PokemonCategory } from '@shared/enums/pokemon-category.enum';
import { FormControl } from '@angular/forms';
import { startWith, tap } from 'rxjs/operators';
import { OwnedStatus } from "../types/owned-status.type";

@Injectable({
  providedIn: 'root'
})
export class GridService {

  gridAppearance: BehaviorSubject<GridAppearanceType>;
  filter: BehaviorSubject<string>;
  sorting: BehaviorSubject<MatSortable>;
  categories: BehaviorSubject<PokemonCategory[]>;
  hideSortingControl: BehaviorSubject<boolean>;
  hideAppearanceControl: BehaviorSubject<boolean>;
  hideFilterControl: BehaviorSubject<boolean>;
  hideOwnedStatusControl: BehaviorSubject<boolean>;

  private readonly _ownedStatusControl: FormControl<OwnedStatus[]>;

  constructor() {
    let gridAppearanceType = localStorage.getItem('gridAppearanceType');
    const ownedStatus: OwnedStatus[] = JSON.parse(localStorage.getItem('ownedStatus') ?? '[]');
    gridAppearanceType = gridAppearanceType !== 'detailed' && gridAppearanceType !== 'normal' ? 'minimal' : gridAppearanceType;

    this.gridAppearance = new BehaviorSubject<GridAppearanceType>(gridAppearanceType as GridAppearanceType);

    this._ownedStatusControl = new FormControl<OwnedStatus[]>(ownedStatus, {nonNullable: true});

    this.filter = new BehaviorSubject<string>('');
    this.sorting = new BehaviorSubject<MatSortable>({id: '', disableClear: false, start: 'asc'});
    this.categories = new BehaviorSubject<PokemonCategory[]>([]);
    this.hideAppearanceControl = new BehaviorSubject<boolean>(false);
    this.hideFilterControl = new BehaviorSubject<boolean>(false);
    this.hideSortingControl = new BehaviorSubject<boolean>(false);
    this.hideOwnedStatusControl = new BehaviorSubject<boolean>(false);
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

  getOwnedStatusControl(): FormControl<OwnedStatus[]> {
    return this._ownedStatusControl;
  }

  getOwnedStatus$(): Observable<OwnedStatus[]> {
    return this._ownedStatusControl.valueChanges.pipe(
      startWith(this._ownedStatusControl.value),
      tap(value => localStorage.setItem('ownedStatus', JSON.stringify(value)))
    );
  }

  updateOwnedStatus(ownedStatus: OwnedStatus[]): void {
    return this._ownedStatusControl.setValue(ownedStatus, {emitEvent: true});
  }

  getHideOwnedStatusControl$(): Observable<boolean> {
    return this.hideOwnedStatusControl.asObservable();
  }

  updateHideOwnedStatusControl(hideControl: boolean): void {
    return this.hideOwnedStatusControl.next(hideControl);
  }

  getHideAppearanceControl$(): Observable<boolean> {
    return this.hideAppearanceControl.asObservable();
  }

  updateHideAppearanceControl(hideControl: boolean): void {
    return this.hideAppearanceControl.next(hideControl);
  }

}
