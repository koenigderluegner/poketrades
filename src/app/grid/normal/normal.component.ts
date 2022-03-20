import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { GridBaseAppearanceComponent } from '../components/grid-base-appearance/grid-base-appearance.component';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NormalComponent extends GridBaseAppearanceComponent {

  @HostBinding('class') classes = 'grid-item';

}
