import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { GridBaseAppearanceComponent } from '../components/grid-base-appearance/grid-base-appearance.component';

@Component({
  selector: 'app-minimal[pokemon]',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MinimalComponent extends GridBaseAppearanceComponent {

  @HostBinding('class.grid-item') isGridItem = true;

  @HostBinding('class.inactive') get inactive(): boolean {
    return !this.pokemon?.isOwned;
  }


}
