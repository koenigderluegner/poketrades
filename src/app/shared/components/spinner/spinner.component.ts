import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class SpinnerComponent {

  @HostBinding('class.spinner') setClass = true;

  @Input()
  @HostBinding('style.height.px')
  @HostBinding('style.width.px')
  private _diameter = 150;

  /** The diameter of the spinner (will set width and height of container). */
  @Input()
  get diameter(): number {
    return this._diameter;
  }

  set diameter(size: number) {
    this._diameter = coerceNumberProperty(size);
  }

}
