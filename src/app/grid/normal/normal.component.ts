import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { GridBaseAppearanceDirective } from '../components/grid-base-appearance.directive';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class NormalComponent extends GridBaseAppearanceDirective {

  @HostBinding('class') classes = 'grid-item';

}
