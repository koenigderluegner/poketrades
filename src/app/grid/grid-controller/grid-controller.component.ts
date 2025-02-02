import { Component, HostBinding, OnDestroy, ViewEncapsulation } from '@angular/core';
import { GridAppearanceType } from '../grid-appearance.type';
import { FormControl } from '@angular/forms';
import { GridService } from '../services/grid.service';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { PokemonCategory } from '@shared/enums/pokemon-category.enum';
import { OwnedStatus } from "../types/owned-status.type";
import { MatSortable } from "@angular/material/sort";
import { MatOption } from "@angular/material/core";

@Component({
  selector: 'app-grid-controller',
  templateUrl: './grid-controller.component.html',
  styleUrls: ['./grid-controller.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridControllerComponent implements OnDestroy {

  @HostBinding('class.grid-controller') setClass = true;
  pokemonCategory = PokemonCategory;
  ownedStatusControl: FormControl<OwnedStatus[]>;
  hideAppearance$: Observable<boolean>;
  hideOwnedStatusControl$: Observable<boolean>;
  filter: FormControl<string>;
  sorting: FormControl<MatSortable>;
  categories: FormControl<PokemonCategory[]>;
  private subscriptions: Subscription[] = [];

  constructor(private gridService: GridService) {
    this.ownedStatusControl = this.gridService.getOwnedStatusControl();
    this.hideAppearance$ = this.gridService.getHideAppearanceControl$();
    this.hideOwnedStatusControl$ = this.gridService.getHideOwnedStatusControl$();

    this.filter = new FormControl('', {nonNullable: true});
    this.categories = new FormControl<PokemonCategory[]>([], {nonNullable: true});
    this.sorting = new FormControl({id: '', disableClear: false, start: 'asc'}, {nonNullable: true});
    this.subscriptions.push(
      this.filter.valueChanges.pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(searchTerm => {
          this.gridService.updateFilter(searchTerm);
        })
      ).subscribe()
    );

    this.subscriptions.push(this.sorting.valueChanges.pipe(
      tap(val => {
        this.gridService.updateSorting(val);
      })
    ).subscribe());

    this.subscriptions.push(this.categories.valueChanges.pipe(
      tap(val => {
        this.gridService.updateCategories(val);
      })
    ).subscribe());
  }

  changeGrid(appearance: GridAppearanceType): void {
    this.gridService.updateGridAppearance(appearance);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  transformSelectSelection(selection: MatOption | MatOption[]): MatOption[] {
    return Array.isArray(selection) ? selection : [selection];
  }

}
