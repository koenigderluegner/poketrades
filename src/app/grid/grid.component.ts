import {
  AfterContentInit,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  OnDestroy,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { GridAppearanceType } from './grid-appearance.type';
import { GridItemComponent } from './grid-item/grid-item.component';
import { MatSort, MatSortable } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { GridService } from './services/grid.service';
import { OwnedStatus } from "./types/owned-status.type";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements AfterContentInit, OnDestroy {

  @HostBinding('class.grid') isGrid = true;
  @Input() @HostBinding('class.hide-inactives') hideInactiveItems = false;

  private _categories: string[] = [];
  private _ownedStatus: OwnedStatus[] = [];

  @HostBinding('class') get getClasses(): string[] {
    const classes: string[] = [];

    classes.push(this.appearance ?? 'normal');
    if (this._categories.length) {
      classes.push('filtered');
    }
    classes.push(...this._categories);
    classes.push(...this._ownedStatus);
    return classes;
  }

  @Input() appearance: GridAppearanceType | undefined | null;

  @ContentChildren(GridItemComponent) contentChildren !: QueryList<GridItemComponent>;

  private subscriptions: Subscription[] = [];
  items: GridItemComponent[] | undefined;

  dataSource: MatTableDataSource<GridItemComponent>;


  constructor(private gridService: GridService) {
    this.dataSource = new MatTableDataSource<GridItemComponent>([]);
    this.dataSource.sort = new MatSort();
    this.dataSource.sortingDataAccessor = (item: GridItemComponent, sortField: string) => {
      switch (sortField) {
        case 'name':
          return item.pokemon?.name ?? '';
        case 'dex':
          return item.pokemon?.dex ?? '';
        default:
          return '';
      }
    };

    this.dataSource.filterPredicate = (data: GridItemComponent, filter: string) => {
      return (data.pokemon?.name ?? '').toLowerCase().includes(filter);
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


  }

  ngAfterContentInit() {

    // initial load of list
    if (!this.items) {
      this.items = this.contentChildren.toArray();
      this.dataSource.data = this.items;
    }
    this.contentChildren.changes.subscribe((items: QueryList<GridItemComponent>) => {
      this.items = items.toArray();
      this.dataSource.data = this.items;
    });

  }

  trackByFn(index: number, item: GridItemComponent): string {
    return item.pokemon?.id ?? '';
  }

  sort(sorting: MatSortable) { // mat sort + datasource?
    this.dataSource.sort?.sort(sorting);

    if (this.items) {
      this.dataSource.data = this.dataSource._orderData(this.items);
    }
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
