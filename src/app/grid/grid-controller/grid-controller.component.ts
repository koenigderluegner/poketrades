import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { GridAppearanceType } from '../grid-appearance.type';
import { FormControl } from '@angular/forms';
import { GridService } from '../services/grid.service';

@Component({
  selector: 'app-grid-controller',
  templateUrl: './grid-controller.component.html',
  styleUrls: ['./grid-controller.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridControllerComponent implements OnInit {

  @HostBinding('class.grid-controller') setClass = true;

  toggleInactivesControl: FormControl;


  constructor(private gridService: GridService) {
    this.toggleInactivesControl = new FormControl(this.gridService.getHideItems());
  }

  ngOnInit(): void {

  }

  changeGrid(appearance: GridAppearanceType): void {
    this.gridService.updateGridAppearance(appearance);
  }

  changeGridInactives(): void {
    this.gridService.updateHideItems(this.toggleInactivesControl.value);
  }

}
