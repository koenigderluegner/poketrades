import {
  booleanAttribute,
  Component,
  contentChildren,
  effect,
  inject,
  input,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';
import { GridAppearanceType } from './grid-appearance.type';
import { GridItemComponent } from './grid-item/grid-item.component';
import { MatSort, MatSortable } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { GridService } from './services/grid.service';
import { OwnedStatus } from "./types/owned-status.type";
import { MatTableDataSource } from "@angular/material/table";
import { MinimalComponent } from "./minimal/minimal.component";
import { NormalComponent } from "./normal/normal.component";
import { DetailedComponent } from "./detailed/detailed.component";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    MinimalComponent,
    NormalComponent,
    DetailedComponent,
    AsyncPipe
  ],
  host: {
    'class': 'grid',
    '[class]': 'getClasses',
    '[class.hide-inactives]': 'hideInactiveItems()',
  }
})
export class GridComponent implements OnDestroy {
  hideInactiveItems = input(false, {transform: booleanAttribute})

  readonly appearance = input<GridAppearanceType | null>();
  //  There are references to this query that cannot be migrated automatically.
  contentChildren = contentChildren(GridItemComponent)
  // TODO: Skipped for migration because:
  items: readonly GridItemComponent[] | undefined;
  dataSource: MatTableDataSource<GridItemComponent>;
  private gridService = inject(GridService);
  private _categories: string[] = [];
  private _ownedStatus: OwnedStatus[] = [];
  private subscriptions: Subscription[] = [];

  constructor() {
    this.dataSource = new MatTableDataSource<GridItemComponent>([]);
    this.dataSource.sort = new MatSort();
    this.dataSource.sortingDataAccessor = (item: GridItemComponent, sortField: string) => {
      switch (sortField) {
        case 'name':
          return item.pokemon()?.name ?? '';
        case 'dex':
          return item.pokemon()?.dex ?? '';
        default:
          return '';
      }


    };

    this.dataSource.filterPredicate = (data: GridItemComponent, filter: string) => {
      return (data.pokemon()?.name ?? '').toLowerCase().includes(filter);
    };

    this.subscriptions.push(this.gridService.getFilter$().subscribe({
      next: filter => {
        this.dataSource.filter = filter;
      }
    }));


    this.subscriptions.push(this.gridService.getSorting$().subscribe({
      next: sorting => {
        // reset if none set
        if (sorting === undefined) {
          sorting = {id: '', start: 'asc', disableClear: false};
        }
        this.sort(sorting);
      }
    }));


    this.subscriptions.push(this.gridService.getCategories$().subscribe({
      next: categories => {
        this._categories = categories;
      }
    }));

    this.subscriptions.push(this.gridService.getOwnedStatus$().subscribe({
      next: ownedStatus => {
        this._ownedStatus = ownedStatus;
      }
    }));

    effect(() => {
      const contentChildren = this.contentChildren();
      this.items = contentChildren;
      this.dataSource.data = [...this.items];
    });


  }

  get getClasses(): string[] {
    const classes: string[] = [];

    classes.push(this.appearance() ?? 'normal');
    if (this._categories.length) {
      classes.push('filtered');
    }
    classes.push(...this._categories);
    classes.push(...this._ownedStatus);
    return classes;
  }


  trackByFn(index: number, item: GridItemComponent): string {
    return item.pokemon()?.id ?? '';
  }

  sort(sorting: MatSortable) { // mat sort + datasource?
    this.dataSource.sort?.sort(sorting);

    if (this.items) {
      this.dataSource.data = this.dataSource._orderData([...this.items]);
    }
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
