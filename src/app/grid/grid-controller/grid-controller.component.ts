import {Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {GridAppearanceType} from '../grid-appearance.type';
import {FormControl} from '@angular/forms';
import {GridService} from '../services/grid.service';
import {Observable, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';

@Component({
  selector: 'app-grid-controller',
  templateUrl: './grid-controller.component.html',
  styleUrls: ['./grid-controller.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridControllerComponent implements OnInit, OnDestroy {

  @HostBinding('class.grid-controller') setClass = true;

  private subscriptions: Subscription[] = [];

  toggleInactivesControl: FormControl;
  hideAppearance$: Observable<boolean>;
  hideInactives$: Observable<boolean>;
  filter: FormControl;
  sorting: FormControl;


  constructor(private gridService: GridService) {
    this.toggleInactivesControl = new FormControl(this.gridService.getHideItems());
    this.hideAppearance$ = this.gridService.getHideAppearanceControl$();
    this.hideInactives$ = this.gridService.getHideInactiveItemsControl$();

    this.filter = new FormControl('');
    this.sorting = new FormControl(null);
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
  }

  ngOnInit(): void {

  }

  changeGrid(appearance: GridAppearanceType): void {
    this.gridService.updateGridAppearance(appearance);
  }

  changeGridInactives(): void {
    this.gridService.updateHideItems(this.toggleInactivesControl.value);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
