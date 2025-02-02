import { Component, input, numberAttribute, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'spinner',
    '[style.height.px]': 'diameter()',
    '[style.width.px]': 'diameter()',
  }
})
export class SpinnerComponent {
  diameter = input(150, {transform: numberAttribute})
}
