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
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortable } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { GridService } from './services/grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements AfterContentInit, OnDestroy {

  @HostBinding('class.grid') isGrid = true;
  @Input() @HostBinding('class.hide-inactives') hideInactiveItems = false;

  @HostBinding('class') get class() {
    return this.appearance ?? 'normal';
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

    this.subscriptions.push(this.gridService.getFilter$().subscribe(
      {
        next: filter => {
          this.dataSource.filter = filter;
        }
      })
    );

    this.subscriptions.push(this.gridService.getSorting$().subscribe(
      {
        next: sorting => {
          // reset if none set
          if (sorting === undefined) {
            sorting = {id: '', start: 'asc', disableClear: false};
          }
          this.sort(sorting);
        }
      }
    ));


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
