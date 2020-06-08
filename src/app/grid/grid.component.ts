import {
    AfterContentInit,
    Component,
    ContentChildren,
    HostBinding,
    Input,
    OnInit,
    QueryList,
    ViewEncapsulation
} from '@angular/core';
import { GridAppearanceType } from './grid-appearance.type';
import { GridItemComponent } from './grid-item/grid-item.component';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit, AfterContentInit {

    @HostBinding('class.grid') true;
    @Input() @HostBinding('class.hide-inactives') hideInactiveItems: boolean;

    @HostBinding('class') get class() {
        return this.appearance ?? 'normal';
    }

    @Input() appearance: GridAppearanceType;

    @ContentChildren(GridItemComponent) contentChildren !: QueryList<GridItemComponent>;

    items;

    constructor() {
    }


    ngAfterContentInit() {

        // initial load of list
        if (!this.items) {
            this.items = this.contentChildren.toArray();
        }
        this.contentChildren.changes.subscribe(items => {
            this.items = items.toArray();
        });

    }

    trackByFn(item) {
        return item.pokemon?.id;
    }

    ngOnInit(): void {
    }

}
