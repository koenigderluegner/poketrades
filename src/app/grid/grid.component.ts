import { AfterContentInit, Component, ContentChildren, HostBinding, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { GridAppearanceType } from './grid-appearance.type';
import { GridItemComponent } from './grid-item/grid-item.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements AfterContentInit {

  @HostBinding('class.grid') isGrid = true;
  @Input() @HostBinding('class.hide-inactives') hideInactiveItems = false;

  @HostBinding('class') get class() {
    return this.appearance ?? 'normal';
  }

  @Input() appearance: GridAppearanceType | undefined;

  @ContentChildren(GridItemComponent) contentChildren !: QueryList<GridItemComponent>;

  items: GridItemComponent[] | undefined;

  constructor() {
  }


  ngAfterContentInit() {

    // initial load of list
    if (!this.items) {
      this.items = this.contentChildren.toArray();
    }
    this.contentChildren.changes.subscribe((items: QueryList<GridItemComponent>) => {
      this.items = items.toArray();
    });

  }

  trackByFn(item: GridItemComponent): string | undefined {
    return item.pokemon?.id;
  }

}
