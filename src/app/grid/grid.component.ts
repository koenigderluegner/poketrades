import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { GridAppearanceType } from './grid-appearance.type';
import { GridItemComponent } from './grid-item/grid-item.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, AfterContentInit {

  @Input() appearance: GridAppearanceType;

  @ContentChildren(GridItemComponent) contentChildren !: QueryList<GridItemComponent>;

  items;

  constructor() {
  }


  ngAfterContentInit() {


    this.contentChildren.changes.subscribe(items => {
      this.items = items.toArray();
      console.log(this.items);
    });

  }

  ngOnInit(): void {
  }

}
