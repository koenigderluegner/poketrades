import { Component, Input, ViewEncapsulation } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'spinner',
    '[style.height.px]': 'diameter',
    '[style.width.px]': 'diameter',
  }
})
export class SpinnerComponent {

  // TODO: Skipped for migration because:
  //  Your application code writes to the input. This prevents migration.
  @Input()
  protected _diameter = 150;

  /** The diameter of the spinner (will set width and height of container). */
  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
  @Input()
  get diameter(): number {
    return this._diameter;
  }

  set diameter(size: number) {
    this._diameter = coerceNumberProperty(size);
  }

}
