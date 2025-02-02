import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-how-to-use-guide',
  templateUrl: './how-to-use-guide.component.html',
  styleUrls: ['./how-to-use-guide.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HowToUseGuideComponent {

  @HostBinding('class.how-to-use-guide') private setClass = true;

}
