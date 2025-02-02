import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { GridBaseAppearanceDirective } from '../components/grid-base-appearance.directive';

@Component({
  selector: 'app-minimal[pokemon]',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class MinimalComponent extends GridBaseAppearanceDirective {

  @HostBinding('class.grid-item') isGridItem = true;

  @HostBinding('class.inactive') get inactive(): boolean {
    return !this.pokemon?.isOwned;
  }


}
